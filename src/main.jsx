import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const UGANDA_PHOTO =
  'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80';

const destinations = [
  {
    name: 'Uganda',
    theme: 'verde',
    eyebrow: 'Expedición matriz · abierta',
    tone: 'Selva · Lago · Tribus · Montañas de la Luna',
    text:
      'La primera ruta Myrah. Diez días para caminar con guías locales, dormir cerca de las aldeas y entrar en lo profundo del continente con humildad y curiosidad.',
  },
  {
    name: 'Jordania',
    theme: 'dorado',
    eyebrow: 'Segunda línea',
    tone: 'Piedra · Desierto · Templos antiguos',
    text:
      'Una ruta de caravanas, ciudades talladas en roca y silencio dorado. La puerta a Oriente: historia viva, hospitalidad y desierto.',
  },
  {
    name: 'Irak',
    theme: 'rojo',
    eyebrow: 'Bajo consulta',
    tone: 'Memoria · Mesopotamia · Respeto',
    text:
      'La cuna de la escritura y de las primeras ciudades. Solo expediciones privadas evaluadas caso por caso: sin romanticismo del peligro, con contexto y responsabilidad.',
  },
];

const principles = [
  'Grupos pequeños, ritmo humano y cero turismo de escaparate.',
  'Guías y proveedores locales contrastados: el dinero se queda en el territorio.',
  'Briefings honestos: belleza, límites, historia, riesgos y responsabilidad compartida.',
  'Viajar para entender de dónde venimos: arqueología, comunidad y memoria viva.',
];

const ugandaItinerary = [
  {
    day: 'Día 1',
    title: 'Entebbe · Aterrizaje y primer contacto',
    text:
      'Llegada a orillas del lago Victoria. Cena de bienvenida, briefing ético y presentación del equipo local que nos acompañará todo el viaje.',
  },
  {
    day: 'Día 2',
    title: 'Kampala viva',
    text:
      'Mercados, talleres de artesanos y barrios reales lejos de la postal. Comemos donde come la gente y escuchamos historias de primera mano.',
  },
  {
    day: 'Días 3-4',
    title: 'Nilo en Jinja',
    text:
      'Fuente del Nilo, comunidades pesqueras y una tarde de adrenalina en el río. Aventura y conexión a partes iguales.',
  },
  {
    day: 'Días 5-6',
    title: 'Tribu Batwa · Bosque de Bwindi',
    text:
      'Convivencia con los Batwa, antiguos habitantes del bosque. Aprendemos rastreo, plantas medicinales y su historia de resistencia.',
  },
  {
    day: 'Día 7',
    title: 'Gorilas de montaña',
    text:
      'Trekking guiado hasta una familia de gorilas en Bwindi. Un encuentro lento, silencioso y profundamente humano con nuestros parientes salvajes.',
  },
  {
    day: 'Días 8-9',
    title: 'Lago Bunyonyi · Aldeas recónditas',
    text:
      'Travesía en canoa entre islas, noches en casas comunitarias y conversaciones largas alrededor del fuego. El corazón del viaje.',
  },
  {
    day: 'Día 10',
    title: 'Regreso y cierre',
    text:
      'Última mañana de calma, ritual de despedida con la comunidad y vuelta a Entebbe para el vuelo de salida.',
  },
];

const ugandaIncludes = [
  'Guía Myrah de habla hispana + guías locales en cada etapa',
  '9 noches: lodges sobrios, casas comunitarias y campamentos',
  'Permiso de trekking de gorilas de montaña',
  'Todos los transportes internos y traslados',
  'Briefing previo, dossier de contexto y seguro de expedición',
  'Aportación directa a proyectos comunitarios visitados',
];

const ugandaExcludes = [
  'Vuelos internacionales hasta Entebbe',
  'Visado de Uganda y vacunas',
  'Comidas señaladas como libres y propinas',
];

const ugandaFacts = [
  { label: 'Duración', value: '10 días / 9 noches' },
  { label: 'Grupo', value: 'Máximo 8 viajeros' },
  { label: 'Precio aprox.', value: '3.900 € por persona' },
  { label: 'Nivel', value: 'Aventura moderada' },
  { label: 'Temporada', value: 'Jun · Jul · Ago · Sep' },
  { label: 'Ritmo', value: 'Humano, sin prisas' },
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
    <main id="top" className="site-shell" data-theme="verde">
      <div className="grain" aria-hidden="true" />
      <header className="header">
        <Logo />
        <nav aria-label="Navegación principal">
          <a href="#manifiesto">Manifiesto</a>
          <a href="#uganda">Uganda</a>
          <a href="#destinos">Destinos</a>
          <a href="#metodo">Método</a>
          <a className="nav-cta" href="#contacto">Reservar plaza</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">Expediciones de autor · misión ética e histórica</p>
          <h1 id="hero-title">Viaja para entender de dónde venimos.</h1>
          <p className="hero-text">
            Rutas que cruzan templos antiguos, selvas vivas y tribus que aún guardan memoria. Aventura real, en grupos
            pequeños, con la gente del lugar y el respeto por delante.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#uganda">Ver expedición a Uganda</a>
            <a className="button ghost" href="#destinos">Todos los destinos</a>
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
            <p>Selva, lagos, tribus y montañas. Una expedición de 10 días para conectar de verdad.</p>
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
          Myrah diseña expediciones donde la estética no tapa la realidad. Cada ruta nace de la curiosidad por la
          historia humana: las primeras ciudades, los templos olvidados, las tribus que siguen aquí. Viajamos despacio,
          escuchamos, dejamos el territorio mejor de lo que lo encontramos y volvemos entendiendo un poco más de dónde
          venimos todos.
        </p>
      </section>

      <section id="uganda" className="uganda section-block" data-theme="verde">
        <div className="uganda-head">
          <p className="section-label">Expedición destacada</p>
          <h2>Uganda: 10 días para conectar, explorar y vivir.</h2>
          <p>
            Nuestra ruta piloto cruza la selva del Nilo, el bosque de Bwindi y el lago Bunyonyi. Menos itinerario de
            agencia y más vida compartida: caminar con guías locales, dormir cerca de las aldeas, encontrar gorilas en
            silencio y reír alrededor del fuego en lugares a los que casi nadie llega.
          </p>
        </div>

        <figure className="uganda-photo">
          <img
            src={UGANDA_PHOTO}
            alt="Selva y montañas verdes de Uganda al amanecer"
            loading="lazy"
            width="1200"
            height="800"
          />
          <figcaption>Bosque de Bwindi, Uganda · territorio de los gorilas de montaña</figcaption>
        </figure>

        <div className="uganda-facts">
          {ugandaFacts.map((fact) => (
            <div className="fact" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>

        <div className="uganda-body">
          <div className="itinerary">
            <h3>Itinerario cerrado</h3>
            <ol className="itinerary-list">
              {ugandaItinerary.map((stop) => (
                <li className="itinerary-item" key={stop.day}>
                  <span className="itinerary-day">{stop.day}</span>
                  <div>
                    <h4>{stop.title}</h4>
                    <p>{stop.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="details">
            <div className="details-card">
              <h3>Incluye</h3>
              <ul>
                {ugandaIncludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="details-card muted-card">
              <h3>No incluye</h3>
              <ul>
                {ugandaExcludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="price-card">
              <span>Desde</span>
              <strong>3.900 €</strong>
              <p>por persona · grupo máx. 8 · permiso de gorilas incluido</p>
              <a className="button primary" href="#contacto">Reservar plaza</a>
            </div>
          </aside>
        </div>
      </section>

      <section id="destinos" className="destinations section-block">
        <div className="section-heading">
          <p className="section-label">Destinos</p>
          <h2>Tres puertas. Una forma de viajar.</h2>
        </div>
        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" data-theme={destination.theme} key={destination.name}>
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
          <p className="section-label">Reserva tu plaza</p>
          <h2>El primer viaje se abre con Uganda.</h2>
          <p>
            Quedan pocas plazas en la expedición piloto. Déjanos una señal y te enviamos fechas, briefing completo y
            condiciones de reserva.
          </p>
        </div>
        <form className="waitlist" aria-label="Formulario de reserva">
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
        <p>© Myrah. Aventura con memoria, viajes con respeto.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
