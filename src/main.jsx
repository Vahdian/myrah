import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// Correo al que se envía el formulario de reserva (mailto).
const CONTACT_EMAIL = 'hola@myrah.travel';
const INSTAGRAM_URL = 'https://instagram.com/myrah';

// Fotografía cinematográfica de la expedición (Unsplash).
const IMG = {
  hero: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1920&q=80',
  gorillas: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80',
  bwindi: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  bunyonyi: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=1200&q=80',
  batwa: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80',
  nile: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
  villages: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80',
  cta: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?auto=format&fit=crop&w=1920&q=80',
};

// Países de las expediciones Myrah. Alimentan el carrusel de países del hero
// (se mantiene exactamente como estaba).
const COUNTRIES = {
  es: [
    'Uganda', 'Irak', 'Jordania', 'Irán', 'Marruecos', 'Indonesia', 'Siria',
    'China', 'Palestina', 'Escocia', 'Etiopía', 'Nepal', 'Senegal',
  ],
  en: [
    'Uganda', 'Iraq', 'Jordan', 'Iran', 'Morocco', 'Indonesia', 'Syria',
    'China', 'Palestine', 'Scotland', 'Ethiopia', 'Nepal', 'Senegal',
  ],
};

const translations = {
  es: {
    htmlLang: 'es',
    langName: 'Español',
    switchTo: 'English',
    nav: {
      expedition: 'Expedición',
      experiences: 'Experiencias',
      itinerary: 'Itinerario',
      cta: 'Reservar plaza',
      instagram: 'Instagram',
    },
    hero: {
      kicker: 'Expedición de autor · Grupo máx. 8',
      title: 'Uganda. Diez días para volver a mirar el mundo de otra forma.',
      subtitle:
        'Gorilas de montaña, selva profunda, comunidades locales y un grupo máximo de 8 viajeros.',
      ctaPrimary: 'Reservar plaza',
      ctaSecondary: 'Ver expedición',
      scroll: 'Desliza',
    },
    product: {
      label: 'La expedición',
      title: 'Uganda, en grupo reducido.',
      lead: 'Una sola salida. Ocho plazas. Todo resuelto de puerta a puerta.',
      specs: [
        { label: 'Duración', value: '10 días / 9 noches' },
        { label: 'Grupo', value: 'Máximo 8 viajeros' },
        { label: 'Nivel', value: 'Aventura moderada' },
        { label: 'Fechas', value: 'Jun · Jul · Ago · Sep 2026' },
      ],
      highlight: 'Incluye vuelos · visado · permisos de gorilas',
      from: 'Desde',
      reserve: 'Reservar plaza',
      modeLabel: 'Modalidad',
      modes: [
        {
          id: 'completo',
          tab: 'Con vuelos y visado',
          price: '4.900 €',
          note: 'todo incluido · puerta a puerta · grupo máx. 8',
        },
        {
          id: 'acompanamiento',
          tab: 'Solo guía sobre el terreno',
          price: '3.900 €',
          note: 'sin vuelos ni visado · grupo máx. 8',
        },
      ],
    },
    experiences: {
      label: 'Experiencias',
      title: 'Seis momentos que no se olvidan.',
      items: [
        { img: IMG.gorillas, name: 'Gorilas de montaña', text: 'Un encuentro lento y silencioso con nuestros parientes salvajes.' },
        { img: IMG.bwindi, name: 'Bosque de Bwindi', text: 'Selva impenetrable, antigua y viva. El corazón verde del viaje.' },
        { img: IMG.bunyonyi, name: 'Lago Bunyonyi', text: 'Canoa entre islas y noches de fuego en casas comunitarias.' },
        { img: IMG.batwa, name: 'Tribu Batwa', text: 'Los antiguos habitantes del bosque y su memoria viva.' },
        { img: IMG.nile, name: 'Fuente del Nilo', text: 'Donde nace el río más largo del mundo, en Jinja.' },
        { img: IMG.villages, name: 'Aldeas remotas', text: 'Lugares a los que casi nadie llega. Vida compartida de verdad.' },
      ],
    },
    why: {
      label: 'Por qué Myrah',
      title: 'No vendemos turismo. Diseñamos viajes con sentido.',
      lines: [
        'Entramos con permiso, no coleccionamos países.',
        'Caminamos despacio, con la gente del lugar.',
        'Dejamos el territorio mejor de lo que lo encontramos.',
      ],
      pillars: ['Respeto', 'Exploración', 'Sentido', 'Comunidad'],
    },
    itinerary: {
      label: 'Itinerario',
      title: 'Diez días, paso a paso.',
      days: [
        'Llegada a Entebbe y cena de bienvenida junto al lago Victoria.',
        'Kampala viva: mercados, talleres y barrios reales.',
        'Jinja y la fuerza de la Fuente del Nilo.',
        'Comunidades pesqueras y travesía hacia el oeste.',
        'Encuentro con la tribu Batwa al borde del bosque.',
        'Bosque de Bwindi: rastreo, plantas y silencio.',
        'Trekking hasta una familia de gorilas de montaña.',
        'Lago Bunyonyi: canoa entre islas y casas comunitarias.',
        'Aldeas recónditas y conversaciones alrededor del fuego.',
        'Ritual de despedida y regreso a Entebbe.',
      ],
    },
    includes: {
      label: 'Qué incluye',
      title: 'Claro desde el primer día.',
      includesTitle: 'Incluye',
      excludesTitle: 'No incluye',
      includes: ['Vuelos', 'Visado', 'Permisos de gorilas', 'Guías locales', 'Alojamiento', 'Transporte'],
      excludes: ['Gastos personales', 'Vacunas', 'Propinas'],
    },
    trust: {
      label: 'Confianza',
      title: 'Quién te lleva hasta allí.',
      items: [
        { name: 'Equipo Myrah', text: 'Guía de habla hispana en cada salida, contigo todo el viaje.' },
        { name: 'Fundadores', text: 'Años explorando África oriental sobre el terreno, no desde un catálogo.' },
        { name: 'Socios locales', text: 'Rastreadores, conductores y casas comunitarias de confianza en Uganda.' },
        { name: 'Seguridad y logística', text: 'Briefing previo, seguro de expedición y permisos gestionados.' },
      ],
    },
    method: {
      label: 'Método Myrah',
      title: 'Cuatro principios. Sin excepciones.',
      principles: [
        'Grupos pequeños',
        'Guías locales',
        'Viajes con contexto',
        'Respeto por el territorio',
      ],
    },
    finalCta: {
      title: 'Las plazas son limitadas. Cada salida es única.',
      text: 'Déjanos una señal y te enviamos fechas, briefing completo y condiciones de reserva.',
      cta: 'Reservar plaza',
    },
    reserve: {
      label: 'Reserva tu plaza',
      title: 'Empieza por aquí.',
      sendNote: `Al enviar se abre tu correo con el mensaje listo para nosotros (${CONTACT_EMAIL}).`,
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      language: 'Idioma del viaje',
      languageOptions: ['Español', 'Inglés', 'Indiferente'],
      submit: 'Pedir plaza',
    },
    footer: {
      tagline: '© Myrah. Aventura con memoria, viajes con respeto.',
      languages: 'Viajes en español e inglés.',
    },
  },
  en: {
    htmlLang: 'en',
    langName: 'English',
    switchTo: 'Español',
    nav: {
      expedition: 'Expedition',
      experiences: 'Experiences',
      itinerary: 'Itinerary',
      cta: 'Book a spot',
      instagram: 'Instagram',
    },
    hero: {
      kicker: 'Author-led expedition · Max group of 8',
      title: 'Uganda. Ten days to see the world differently.',
      subtitle:
        'Mountain gorillas, deep jungle, local communities and a maximum of 8 travelers.',
      ctaPrimary: 'Book a spot',
      ctaSecondary: 'See the expedition',
      scroll: 'Scroll',
    },
    product: {
      label: 'The expedition',
      title: 'Uganda, in a small group.',
      lead: 'One departure. Eight spots. Everything handled, door to door.',
      specs: [
        { label: 'Duration', value: '10 days / 9 nights' },
        { label: 'Group', value: 'Maximum 8 travelers' },
        { label: 'Level', value: 'Moderate adventure' },
        { label: 'Dates', value: 'Jun · Jul · Aug · Sep 2026' },
      ],
      highlight: 'Includes flights · visa · gorilla permits',
      from: 'From',
      reserve: 'Book a spot',
      modeLabel: 'Option',
      modes: [
        {
          id: 'completo',
          tab: 'With flights and visa',
          price: '€4,900',
          note: 'all-inclusive · door to door · max group of 8',
        },
        {
          id: 'acompanamiento',
          tab: 'Guiding on the ground only',
          price: '€3,900',
          note: 'flights and visa not included · max group of 8',
        },
      ],
    },
    experiences: {
      label: 'Experiences',
      title: 'Six unforgettable moments.',
      items: [
        { img: IMG.gorillas, name: 'Mountain gorillas', text: 'A slow, silent encounter with our wild relatives.' },
        { img: IMG.bwindi, name: 'Bwindi Forest', text: 'Impenetrable, ancient and alive. The green heart of the trip.' },
        { img: IMG.bunyonyi, name: 'Lake Bunyonyi', text: 'Canoe between islands and fireside nights in community houses.' },
        { img: IMG.batwa, name: 'Batwa tribe', text: 'The ancient inhabitants of the forest and their living memory.' },
        { img: IMG.nile, name: 'Source of the Nile', text: 'Where the longest river in the world begins, in Jinja.' },
        { img: IMG.villages, name: 'Remote villages', text: 'Places almost no one reaches. Shared life, for real.' },
      ],
    },
    why: {
      label: 'Why Myrah',
      title: 'We don\u2019t sell tourism. We design journeys with meaning.',
      lines: [
        'We enter with permission; we don\u2019t collect countries.',
        'We walk slowly, with the people of the land.',
        'We leave the territory better than we found it.',
      ],
      pillars: ['Respect', 'Exploration', 'Meaning', 'Community'],
    },
    itinerary: {
      label: 'Itinerary',
      title: 'Ten days, step by step.',
      days: [
        'Arrival in Entebbe and welcome dinner by Lake Victoria.',
        'Kampala alive: markets, workshops and real neighborhoods.',
        'Jinja and the power of the Source of the Nile.',
        'Fishing communities and the journey west.',
        'Meeting the Batwa tribe at the forest\u2019s edge.',
        'Bwindi Forest: tracking, plants and silence.',
        'Trek to a family of mountain gorillas.',
        'Lake Bunyonyi: canoe between islands and community houses.',
        'Hidden villages and conversations around the fire.',
        'Farewell ritual and return to Entebbe.',
      ],
    },
    includes: {
      label: 'What\u2019s included',
      title: 'Clear from day one.',
      includesTitle: 'Included',
      excludesTitle: 'Not included',
      includes: ['Flights', 'Visa', 'Gorilla permits', 'Local guides', 'Accommodation', 'Transport'],
      excludes: ['Personal expenses', 'Vaccines', 'Tips'],
    },
    trust: {
      label: 'Trust',
      title: 'Who takes you there.',
      items: [
        { name: 'Myrah team', text: 'A Spanish/English-speaking guide on every departure, with you all the way.' },
        { name: 'Founders', text: 'Years exploring East Africa on the ground, not from a catalog.' },
        { name: 'Local partners', text: 'Trusted trackers, drivers and community houses across Uganda.' },
        { name: 'Safety & logistics', text: 'Pre-trip briefing, expedition insurance and permits handled.' },
      ],
    },
    method: {
      label: 'Myrah method',
      title: 'Four principles. No exceptions.',
      principles: [
        'Small groups',
        'Local guides',
        'Travel with context',
        'Respect for the land',
      ],
    },
    finalCta: {
      title: 'Spots are limited. Every departure is unique.',
      text: 'Leave us a signal and we\u2019ll send dates, a full briefing and booking conditions.',
      cta: 'Book a spot',
    },
    reserve: {
      label: 'Book your spot',
      title: 'Start here.',
      sendNote: `On submit, your email opens with the message ready for us (${CONTACT_EMAIL}).`,
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      language: 'Trip language',
      languageOptions: ['Spanish', 'English', 'Either'],
      submit: 'Request a spot',
    },
    footer: {
      tagline: '© Myrah. Adventure with memory, travel with respect.',
      languages: 'Trips in Spanish and English.',
    },
  },
};

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

function InstagramIcon() {
  return (
    <svg className="ig-mark" viewBox="0 0 24 24" role="img" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" />
    </svg>
  );
}

function LanguageToggle({ lang, onToggle, t }) {
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={onToggle}
      aria-label={`${t.langName} · ${t.switchTo}`}
      title={`${t.langName} → ${t.switchTo}`}
    >
      <span className={`flag ${lang === 'es' ? 'is-active' : ''}`} aria-hidden="true">
        {/* Bandera de España */}
        <svg viewBox="0 0 3 2" className="flag-svg">
          <rect width="3" height="2" fill="#c60b1e" />
          <rect width="3" height="1" y="0.5" fill="#ffc400" />
        </svg>
      </span>
      <span className={`flag ${lang === 'en' ? 'is-active' : ''}`} aria-hidden="true">
        {/* Bandera de Reino Unido */}
        <svg viewBox="0 0 60 30" className="flag-svg">
          <clipPath id="uk-clip"><rect width="60" height="30" /></clipPath>
          <g clipPath="url(#uk-clip)">
            <rect width="60" height="30" fill="#012169" />
            <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 60,30 M60,0 0,30" stroke="#c8102e" strokeWidth="4" />
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 V30 M0,15 H60" stroke="#c8102e" strokeWidth="6" />
          </g>
        </svg>
      </span>
      <span className="lang-code">{lang === 'es' ? 'ES' : 'EN'}</span>
    </button>
  );
}

function CountryBanner({ countries }) {
  // El banner se duplica para crear un desplazamiento continuo.
  // Carrusel de países del hero: se mantiene exactamente como estaba.
  const run = countries.concat(countries);
  return (
    <div className="country-banner" aria-hidden="true">
      <div className="country-banner-track">
        {run.map((country, index) => (
          <span className="country-banner-item" key={`${country}-${index}`}>
            <span className="country-banner-name">{country}</span>
            <span className="country-banner-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('es');
  const [mode, setMode] = useState(0);

  const t = translations[lang];
  const countries = COUNTRIES[lang];

  React.useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const modes = t.product.modes;
  const activeMode = modes[mode];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const tripLang = data.get('language') || '';
    const subject = encodeURIComponent(`Myrah · Uganda · ${name || email}`);
    const body = encodeURIComponent(
      `${t.reserve.name}: ${name}\n${t.reserve.email}: ${email}\n${t.reserve.language}: ${tripLang}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main id="top" className="site-shell" data-theme="verde">
      <div className="grain" aria-hidden="true" />

      <CountryBanner countries={countries} />

      <header className="header">
        <Logo />
        <nav aria-label="Navegación principal">
          <a href="#uganda">{t.nav.expedition}</a>
          <a href="#experiencias">{t.nav.experiences}</a>
          <a href="#itinerario">{t.nav.itinerary}</a>
          <a
            className="header-ig"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Myrah en Instagram"
          >
            <InstagramIcon />
            <span>{t.nav.instagram}</span>
          </a>
          <a className="nav-cta" href="#reserva">{t.nav.cta}</a>
          <LanguageToggle lang={lang} onToggle={toggleLang} t={t} />
        </nav>
      </header>

      {/* 1 · HERO cinematográfico (carrusel de países arriba, intacto) */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img src={IMG.hero} alt="" loading="eager" />
          <div className="hero-veil" />
        </div>
        <div className="hero-copy">
          <p className="kicker">{t.hero.kicker}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero-text">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button primary" href="#reserva">{t.hero.ctaPrimary}</a>
            <a className="button ghost" href="#uganda">{t.hero.ctaSecondary}</a>
          </div>
        </div>
        <span className="hero-scroll" aria-hidden="true">{t.hero.scroll}</span>
      </section>

      {/* 2 · Expedición Uganda como producto premium */}
      <section id="uganda" className="product section-block" data-theme="verde">
        <div className="product-head">
          <p className="section-label">{t.product.label}</p>
          <h2>{t.product.title}</h2>
          <p className="product-lead">{t.product.lead}</p>
        </div>
        <div className="product-card">
          <div className="product-specs">
            {t.product.specs.map((spec) => (
              <div className="spec" key={spec.label}>
                <span>{spec.label}</span>
                <strong>{spec.value}</strong>
              </div>
            ))}
          </div>
          <div className="product-buy">
            <p className="product-highlight">{t.product.highlight}</p>
            <div className="mode-tabs" role="group" aria-label={t.product.modeLabel}>
              {modes.map((m, index) => (
                <button
                  type="button"
                  key={m.id}
                  className={`mode-tab ${index === mode ? 'is-active' : ''}`}
                  onClick={() => setMode(index)}
                  aria-pressed={index === mode}
                >
                  {m.tab}
                </button>
              ))}
            </div>
            <div className="product-price">
              <span>{t.product.from}</span>
              <strong>{activeMode.price}</strong>
              <p>{activeMode.note}</p>
            </div>
            <a className="button primary" href="#reserva">{t.product.reserve}</a>
          </div>
        </div>
      </section>

      {/* 3 · Experiencias clave */}
      <section id="experiencias" className="experiences section-block">
        <div className="section-heading">
          <p className="section-label">{t.experiences.label}</p>
          <h2>{t.experiences.title}</h2>
        </div>
        <div className="exp-grid">
          {t.experiences.items.map((item) => (
            <figure
              className="exp-card"
              key={item.name}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <figcaption>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 4 · Por qué Myrah (manifiesto reducido) */}
      <section className="why section-block" aria-labelledby="why-title">
        <p className="section-label">{t.why.label}</p>
        <h2 id="why-title">{t.why.title}</h2>
        <ul className="why-lines">
          {t.why.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <div className="why-pillars">
          {t.why.pillars.map((pillar) => (
            <span key={pillar}>{pillar}</span>
          ))}
        </div>
      </section>

      {/* 5 · Itinerario visual */}
      <section id="itinerario" className="timeline section-block">
        <div className="section-heading">
          <p className="section-label">{t.itinerary.label}</p>
          <h2>{t.itinerary.title}</h2>
        </div>
        <ol className="timeline-list">
          {t.itinerary.days.map((text, index) => (
            <li className="timeline-item" key={text}>
              <span className="timeline-node">{String(index + 1).padStart(2, '0')}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 6 · Qué incluye */}
      <section id="incluye" className="includes section-block">
        <div className="section-heading">
          <p className="section-label">{t.includes.label}</p>
          <h2>{t.includes.title}</h2>
        </div>
        <div className="includes-cols">
          <div className="includes-card">
            <h3>{t.includes.includesTitle}</h3>
            <ul className="check-list">
              {t.includes.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="includes-card muted-card">
            <h3>{t.includes.excludesTitle}</h3>
            <ul className="cross-list">
              {t.includes.excludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7 · Prueba de confianza */}
      <section className="trust section-block">
        <div className="section-heading">
          <p className="section-label">{t.trust.label}</p>
          <h2>{t.trust.title}</h2>
        </div>
        <div className="trust-grid">
          {t.trust.items.map((item) => (
            <div className="trust-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8 · Método Myrah */}
      <section className="method section-block">
        <div className="section-heading">
          <p className="section-label">{t.method.label}</p>
          <h2>{t.method.title}</h2>
        </div>
        <div className="principles">
          {t.method.principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{principle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 · CTA final emocional */}
      <section
        className="final-cta section-block"
        style={{ backgroundImage: `url(${IMG.cta})` }}
      >
        <div className="final-cta-veil" aria-hidden="true" />
        <div className="final-cta-copy">
          <h2>{t.finalCta.title}</h2>
          <p>{t.finalCta.text}</p>
          <a className="button primary" href="#reserva">{t.finalCta.cta}</a>
        </div>
      </section>

      {/* Reserva (formulario de conversión) */}
      <section id="reserva" className="reserve section-block">
        <div>
          <p className="section-label">{t.reserve.label}</p>
          <h2>{t.reserve.title}</h2>
          <p className="send-note">{t.reserve.sendNote}</p>
        </div>
        <form className="waitlist" aria-label="Formulario de reserva" onSubmit={handleSubmit}>
          <label>
            {t.reserve.name}
            <input type="text" name="name" placeholder={t.reserve.namePlaceholder} />
          </label>
          <label>
            {t.reserve.email}
            <input type="email" name="email" placeholder={t.reserve.emailPlaceholder} />
          </label>
          <label>
            {t.reserve.language}
            <select name="language" defaultValue={t.reserve.languageOptions[0]}>
              {t.reserve.languageOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button type="submit">{t.reserve.submit}</button>
        </form>
      </section>

      <footer className="footer">
        <Logo />
        <div className="footer-meta">
          <p>{t.footer.tagline}</p>
          <p className="footer-lang">{t.footer.languages}</p>
        </div>
        <a
          className="footer-ig"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Myrah en Instagram"
        >
          <InstagramIcon />
          <span>@myrah</span>
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
