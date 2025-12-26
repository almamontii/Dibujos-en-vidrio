import './Servicios.css'

function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: 'Diseños personalizados',
      descripcion: 'Creamos diseños únicos adaptados a la identidad de tu marca y las necesidades de tu negocio. Trabajamos junto a vos para plasmar tu visión en la vidriera.',
      imagen: `${import.meta.env.BASE_URL}images/servicio-disenos-personalizados.jpg`
    },
    {
      id: 2,
      titulo: 'Decoración estacional',
      descripcion: 'Actualizamos tu vidriera según las temporadas y festividades. Mantenemos tu local siempre actualizado y atractivo para tus clientes.',
      imagen: `${import.meta.env.BASE_URL}images/servicio-decoracion-estacional.jpg`
    },
    {
      id: 3,
      titulo: 'Promociones y ofertas',
      descripcion: 'Destacamos tus promociones y ofertas especiales de manera creativa. Aumentamos la visibilidad de tus campañas comerciales. También trabajamos pizarras.',
      imagen: `${import.meta.env.BASE_URL}images/servicio-promociones-ofertas.jpg`
    },
    {
      id: 4,
      titulo: 'Eventos especiales',
      descripcion: 'Para inauguraciones, aniversarios, lanzamientos de productos o agregarle una chispa al día a día.',
      imagen: `${import.meta.env.BASE_URL}images/servicio-eventos-especiales.jpg`
    }
  ]

  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container">
        <h2 className="servicios-title">Nuestros servicios</h2>
        <p className="servicios-subtitle">
          Pensamos y diseñamos vidrieras que llaman la atención y hacen que tu local no pase desapercibido.
        </p>
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="servicio-card">
              <div className="servicio-image">
                {servicio.imagen ? (
                  <img src={servicio.imagen} alt={servicio.titulo} />
                ) : (
                  <div className="servicio-placeholder">
                    <span>{servicio.titulo}</span>
                  </div>
                )}
              </div>
              <div className="servicio-content">
                <h3 className="servicio-titulo">{servicio.titulo}</h3>
                <p className="servicio-descripcion">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios

