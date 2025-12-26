import './Contacto.css'

function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h2 className="contacto-title">Contactanos</h2>
        <p className="contacto-subtitle">
          ¿Querés transformar la vidriera de tu local?<br />
          Contactanos y te ayudamos a hacerlo realidad.
        </p>
        <div className="contacto-content">
          <div className="contacto-info">
            <h3 className="contacto-info-title">Información de contacto</h3>
            <p className="contacto-cotizacion">Para una cotización contactarse a este correo</p>
            <div className="contacto-datos">
              <div className="contacto-dato">
                <span className="contacto-icon">✉️</span>
                <div>
                  <a href="mailto:alma.monti.nunez@gmail.com" className="contacto-dato-valor">alma.monti.nunez@gmail.com</a>
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

