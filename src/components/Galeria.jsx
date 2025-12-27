import { useState, useEffect, useRef } from 'react'
import './Galeria.css'

function Galeria() {
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)
  const [indiceActual, setIndiceActual] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Placeholder para trabajos - reemplazar después con las fotos reales
  const trabajos = [
    { id: 1, imagenes: [`${import.meta.env.BASE_URL}images/juvenil-1.jpg`, `${import.meta.env.BASE_URL}images/juvenil-2.jpg`], nombre: 'La juvenil- casa de pastas' }
  ]

  const abrirModal = (trabajo) => {
    const indice = trabajos.findIndex(t => t.id === trabajo.id)
    setIndiceActual(0) // Empezar desde la primera imagen del trabajo
    setImagenSeleccionada(trabajo)
    setModalAbierto(true)
  }

  const cerrarModal = () => {
    setModalAbierto(false)
    setImagenSeleccionada(null)
    setIndiceActual(0)
  }

  const cambiarImagen = (direccion) => {
    if (!imagenSeleccionada) return
    
    const imagenesDelTrabajo = imagenSeleccionada.imagenes || []
    if (imagenesDelTrabajo.length === 0) return
    
    let nuevoIndice
    
    if (direccion === 'siguiente') {
      nuevoIndice = (indiceActual + 1) % imagenesDelTrabajo.length
    } else {
      nuevoIndice = (indiceActual - 1 + imagenesDelTrabajo.length) % imagenesDelTrabajo.length
    }
    
    setIndiceActual(nuevoIndice)
  }

  // Distancia mínima de swipe (píxeles)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      cambiarImagen('siguiente')
    } else if (isRightSwipe) {
      cambiarImagen('anterior')
    }
    
    // Reset
    touchStartX.current = null
    touchEndX.current = null
  }

  // Soporte para teclado
  useEffect(() => {
    if (!modalAbierto || !imagenSeleccionada) return

    const imagenesDelTrabajo = imagenSeleccionada.imagenes || []
    if (imagenesDelTrabajo.length === 0) return

    const manejarTeclado = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const nuevoIndice = (indiceActual - 1 + imagenesDelTrabajo.length) % imagenesDelTrabajo.length
        setIndiceActual(nuevoIndice)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        const nuevoIndice = (indiceActual + 1) % imagenesDelTrabajo.length
        setIndiceActual(nuevoIndice)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setModalAbierto(false)
        setImagenSeleccionada(null)
        setIndiceActual(0)
      }
    }

    window.addEventListener('keydown', manejarTeclado)
    return () => window.removeEventListener('keydown', manejarTeclado)
  }, [modalAbierto, indiceActual, imagenSeleccionada])

  return (
    <section className="galeria">
      <div className="galeria-container">
        <h2 className="galeria-title">Nuestros trabajos</h2>
        <p className="galeria-subtitle">
          Algunos de los locales que confiaron en nosotros
        </p>
        <div className="galeria-grid">
          {trabajos.map((trabajo) => (
            <div
              key={trabajo.id}
              className="galeria-item"
              onClick={() => abrirModal(trabajo)}
            >
              {trabajo.imagenes && trabajo.imagenes.length > 0 ? (
                <img src={trabajo.imagenes[0]} alt={trabajo.nombre} />
              ) : (
                <div className="galeria-placeholder">
                  <span>{trabajo.nombre}</span>
                </div>
              )}
              <div className="galeria-overlay">
                <span className="galeria-nombre">{trabajo.nombre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalAbierto && imagenSeleccionada && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarModal}>×</button>
            {(() => {
              const imagenesDelTrabajo = imagenSeleccionada.imagenes || []
              const tieneMultiplesImagenes = imagenesDelTrabajo.length > 1
              
              return (
                <>
                  {tieneMultiplesImagenes && (
                    <>
                      <button 
                        className="modal-nav modal-nav-prev" 
                        onClick={() => cambiarImagen('anterior')}
                        aria-label="Imagen anterior"
                      >
                        ‹
                      </button>
                      <button 
                        className="modal-nav modal-nav-next" 
                        onClick={() => cambiarImagen('siguiente')}
                        aria-label="Imagen siguiente"
                      >
                        ›
                      </button>
                    </>
                  )}
                  <div 
                    className="modal-image-container"
                    onTouchStart={tieneMultiplesImagenes ? onTouchStart : undefined}
                    onTouchMove={tieneMultiplesImagenes ? onTouchMove : undefined}
                    onTouchEnd={tieneMultiplesImagenes ? onTouchEnd : undefined}
                  >
                    {imagenesDelTrabajo.length > 0 && indiceActual < imagenesDelTrabajo.length ? (
                      <img 
                        src={imagenesDelTrabajo[indiceActual]} 
                        alt={`${imagenSeleccionada.nombre} - Imagen ${indiceActual + 1}`} 
                        className="modal-image"
                        draggable={false}
                      />
                    ) : (
                      <div className="modal-placeholder">
                        <span>{imagenSeleccionada.nombre}</span>
                      </div>
                    )}
                  </div>
                  <p className="modal-nombre">{imagenSeleccionada.nombre}</p>
                  {tieneMultiplesImagenes && (
                    <div className="modal-indicators">
                      {imagenesDelTrabajo.map((_, index) => (
                        <button
                          key={index}
                          className={`modal-indicator ${index === indiceActual ? 'active' : ''}`}
                          onClick={() => {
                            setIndiceActual(index)
                          }}
                          aria-label={`Ir a imagen ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

export default Galeria

