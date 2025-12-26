import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/images/hero-home.jpg" alt="Vidriera de bienvenida" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">dale vida a tu local</h1>
        <p className="hero-subtitle">
          Diseñamos vidrieras artísticas que atraen clientes y hacen visible la identidad de tu negocio.
        </p>
        <a href="#servicios" className="hero-button">
          conocé nuestros servicios
        </a>
      </div>
    </section>
  )
}

export default Hero

