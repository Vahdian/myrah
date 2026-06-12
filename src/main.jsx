import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const destinations = [
  {
    name: 'Uganda',
    eyebrow: 'Destino matriz',
    tone: 'Selva · Lago · Montaña',
    text:
      'El primer territorio Myrah. Naturaleza cruda, comunidades vivas y una red local construida desde la experiencia real.',
  },
  {
    name: 'Jordania',
    eyebrow: 'Segunda línea',
    tone: 'Piedra · Desierto · Silencio',
    text:
      'Una ruta cultural y desértica para quienes quieren una puerta intensa, bella y contenida hacia Oriente Medio.',
  },
  {
    name: 'Irak',
    eyebrow: 'Bajo consulta',
    tone: 'Memoria · Riesgo · Respeto',
    text:
      'Solo expediciones privadas evaluadas caso por caso. Sin romanticismo del peligro: contexto, prudencia y responsabilidad.',
  },
];

const principles = [
  'Grupos pequeños, ritmo humano y cero turismo de escaparate.',
  'Proveedores locales contrastados y decisiones tomadas con información real.',
  'Briefings honestos: belleza, límites, riesgos y responsabilidad compartida.',
  'Viajes con contexto: historia, comunidad, territorio y presencia.',
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Myrah inicio">
      <svg className="logo-mark" viewBox="0 0 64 64" role="img" aria-label="Logo de Myrah">
        <path d="M8 52L18 12l14 27L46 12l10 40h-9l-4-17-11 18-11-18-4 17H8Z" />
        <path d="M24 52h16l-8-12-8 12Z" />
      </svg>
      <span>Myrah</span>
    </a>
  );
}

function App() {
  return (
    <main id="top" className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="header">
        <Logo />
        <nav aria-label="Navegación principal">
          <a href="#manifiesto">Manifiesto</a>
          <a href="#destinos">Destinos</a>
          <a href="#metodo">Método</a>
          <a className="nav-cta" href="#contacto">Lista de espera</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Viajes de autor · territorios poco convencionales</p>
          <h1 id="hero-title">Viajes para quienes no buscan escapar, sino atravesar.</h1>
          <p className="hero-text">
            Expediciones sobrias, intensas y humanas a lugares que exigen respeto, presencia y una red local real.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contacto">Entrar en la lista</a>
            <a className="button ghost" href="#destinos">Ver destinos</a>
          </div>
        </div>

        <div className="hero-card" aria-label="Tarjeta de marca Myrah">
          <div className="orbital" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="passport-stamp">
            <Logo />
            <strong>Uganda primero.</strong>
            <p>Luego Jordania. Irak, solo si el viaje puede hacerse con responsabilidad.</p>
          </div>
          <div className="coordinates">
            <span>00°20′N</span>
            <span>MYR-001</span>
          </div>
        </div>
      </section>

      <section id="manifiesto" className="manifesto section-block">
        <p className="section-label">Manifiesto</p>
        <h2>No coleccionamos países. Entramos con permiso.</h2>
        <p>
          Myrah nace para diseñar viajes donde la estética no tapa la realidad. Menos postal, más pulso. Menos consumo,
          más escucha. Cada ruta se construye desde contactos locales, preparación rigurosa y una forma de mirar que no
          convierte el territorio en decorado.
        </p>
      </section>

      <section id="destinos" className="destinations section-block">
        <div className="section-heading">
          <p className="section-label">Destinos</p>
          <h2>Tres puertas. Una forma de viajar.</h2>
        </div>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.name}>
              <div>
                <p className="eyebrow">{destination.eyebrow}</p>
                <h3>{destination.name}</h3>
                <span>{destination.tone}</span>
              </div>
              <p>{destination.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="metodo" className="method section-block">
        <div>
          <p className="section-label">Método Myrah</p>
          <h2>La aventura empieza antes del aeropuerto.</h2>
        </div>
        <div className="principles">
          {principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ritual section-block" aria-labelledby="ritual-title">
        <div className="ritual-map" aria-hidden="true">
          <span className="node node-one" />
          <span className="node node-two" />
          <span className="node node-three" />
          <span className="node node-four" />
        </div>
        <div className="ritual-copy">
          <p className="section-label">Ritual de viaje</p>
          <h2 id="ritual-title">Briefing. Cruce. Silencio. Regreso.</h2>
          <p>
            Cada salida se prepara con una llamada previa, dossier de contexto, revisión de seguridad y una promesa:
            si el viaje no puede hacerse bien, no se fuerza.
          </p>
        </div>
      </section>

      <section id="contacto" className="contact section-block">
        <div>
          <p className="section-label">Lista de espera</p>
          <h2>El primer viaje se abre con Uganda.</h2>
          <p>
            Déjanos una señal. Cuando la ruta piloto esté cerrada, recibirás fechas, precio, briefing y plazas disponibles.
          </p>
        </div>
        <form className="waitlist" aria-label="Formulario de lista de espera">
          <label>
            Nombre
            <input type="text" name="name" placeholder="Tu nombre" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="tu@email.com" />
          </label>
          <label>
            Destino que te llama
            <select name="destination" defaultValue="Uganda">
              <option>Uganda</option>
              <option>Jordania</option>
              <option>Irak bajo consulta</option>
            </select>
          </label>
          <button type="submit">Pedir acceso</button>
        </form>
      </section>

      <footer className="footer">
        <Logo />
        <p>© Myrah. Viajes intensos, decisiones sobrias.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
