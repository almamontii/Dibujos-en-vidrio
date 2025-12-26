import './Contacto.css'

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h2 className="contacto-title">contactanos</h2>
        <p className="contacto-subtitle">
          ¿Querés transformar la vidriera de tu local? Contactanos y te ayudamos a hacerlo realidad.
        </p>
        <div className="contacto-content">
          <div className="contacto-info">
            <h3 className="contacto-info-title">Información de contacto</h3>
            <p className="contacto-cotizacion">Para una cotización contactarse a este correo</p>
            <div className="contacto-datos">
              <div className="contacto-dato">
                <span className="contacto-icon">✉️</span>
                <div>
                  <p className="contacto-dato-valor">alma.monti.nunez@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto

