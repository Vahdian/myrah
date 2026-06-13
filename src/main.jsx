import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const UGANDA_PHOTO =
  'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=1200&q=80';

// Correo al que se envía el formulario de contacto (mailto).
const CONTACT_EMAIL = 'hola@myrah.travel';
const INSTAGRAM_URL = 'https://instagram.com/myrah';

// Países de las expediciones Myrah. Se muestran en el banner superior,
// como inscripciones alrededor del hero y alimentan el carrusel.
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
      manifesto: 'Manifiesto',
      destinations: 'Destinos',
      method: 'Método',
      cta: 'Reservar plaza',
      instagram: 'Instagram',
    },
    langNote: 'Todas las expediciones se ofrecen en español e inglés. Cambia el idioma de la página con las banderas de arriba.',
    hero: {
      kicker: 'Expediciones de autor · misión ética e histórica',
      title: 'Viaja para entender de dónde venimos.',
      text:
        'Rutas que cruzan templos antiguos, selvas vivas y tribus que aún guardan memoria. Aventura real, en grupos pequeños, con la gente del lugar y el respeto por delante.',
      ctaPrimary: 'Ver expedición a Uganda',
      ctaGhost: 'Todos los destinos',
      cardStrong: 'Uganda primero.',
      cardText: 'Selva, lagos, tribus y montañas. Una expedición de 10 días para conectar de verdad.',
    },
    manifesto: {
      label: 'Manifiesto',
      title: 'No coleccionamos países. Entramos con permiso.',
      text:
        'Myrah diseña expediciones donde la estética no tapa la realidad. Cada ruta nace de la curiosidad por la historia humana: las primeras ciudades, los templos olvidados, las tribus que siguen aquí. Viajamos despacio, escuchamos, dejamos el territorio mejor de lo que lo encontramos y volvemos entendiendo un poco más de dónde venimos todos.',
    },
    uganda: {
      label: 'Expedición destacada',
      title: 'Uganda: 10 días para conectar, explorar y vivir.',
      intro:
        'Nuestra ruta piloto cruza la selva del Nilo, el bosque de Bwindi y el lago Bunyonyi. Menos itinerario de agencia y más vida compartida: caminar con guías locales, dormir cerca de las aldeas, encontrar gorilas en silencio y reír alrededor del fuego en lugares a los que casi nadie llega.',
      photoCaption: 'Bosque de Bwindi, Uganda · territorio de los gorilas de montaña',
      modeLabel: 'Modo de viaje',
      prevMode: 'Modo anterior',
      nextMode: 'Modo siguiente',
      itineraryTitle: 'Itinerario cerrado',
      includesTitle: 'Incluye',
      excludesTitle: 'No incluye',
      from: 'Desde',
      reserve: 'Reservar plaza',
      modes: [
        {
          id: 'completo',
          tab: 'Con visado y vuelos',
          tagline: 'Todo resuelto · puerta a puerta',
          summary:
            'Nos encargamos de todo: vuelos internacionales, gestión del visado de Uganda y la expedición completa. Tú solo apareces con la mochila.',
          includes: [
            'Vuelos internacionales ida y vuelta hasta Entebbe',
            'Gestión y tasas del visado de Uganda',
            'Guía Myrah de habla hispana + guías locales en cada etapa',
            '9 noches: lodges sobrios, casas comunitarias y campamentos',
            'Permiso de trekking de gorilas de montaña',
            'Todos los transportes internos, traslados y seguro de expedición',
          ],
          excludes: [
            'Vacunas y medicación personal',
            'Comidas señaladas como libres y propinas',
            'Gastos personales y souvenirs',
          ],
          price: '4.900 €',
          priceNote: 'por persona · todo incluido con vuelos y visado · grupo máx. 8',
        },
        {
          id: 'acompanamiento',
          tab: 'Solo te acompaño allí',
          tagline: 'Tú llegas · yo te guío sobre el terreno',
          summary:
            'Tú organizas tus vuelos y tu visado; yo te acompaño y guío toda la expedición sobre el terreno, con el equipo local, una vez aterrizas en Entebbe.',
          includes: [
            'Guía Myrah de habla hispana + guías locales en cada etapa',
            '9 noches: lodges sobrios, casas comunitarias y campamentos',
            'Permiso de trekking de gorilas de montaña',
            'Todos los transportes internos y traslados dentro de Uganda',
            'Briefing previo, dossier de contexto y seguro de expedición',
            'Aportación directa a proyectos comunitarios visitados',
          ],
          excludes: [
            'Vuelos internacionales hasta Entebbe',
            'Visado de Uganda y vacunas',
            'Comidas señaladas como libres y propinas',
          ],
          price: '3.900 €',
          priceNote: 'por persona · sin vuelos ni visado · grupo máx. 8',
        },
      ],
      facts: [
        { label: 'Duración', value: '10 días / 9 noches' },
        { label: 'Grupo', value: 'Máximo 8 viajeros' },
        { label: 'Nivel', value: 'Aventura moderada' },
        { label: 'Temporada', value: 'Jun · Jul · Ago · Sep' },
        { label: 'Ritmo', value: 'Humano, sin prisas' },
        { label: 'Idioma', value: 'Español o inglés' },
      ],
      itinerary: [
        { day: 'Día 1', title: 'Entebbe · Aterrizaje y primer contacto', text: 'Llegada a orillas del lago Victoria. Cena de bienvenida, briefing ético y presentación del equipo local que nos acompañará todo el viaje.' },
        { day: 'Día 2', title: 'Kampala viva', text: 'Mercados, talleres de artesanos y barrios reales lejos de la postal. Comemos donde come la gente y escuchamos historias de primera mano.' },
        { day: 'Días 3-4', title: 'Nilo en Jinja', text: 'Fuente del Nilo, comunidades pesqueras y una tarde de adrenalina en el río. Aventura y conexión a partes iguales.' },
        { day: 'Días 5-6', title: 'Tribu Batwa · Bosque de Bwindi', text: 'Convivencia con los Batwa, antiguos habitantes del bosque. Aprendemos rastreo, plantas medicinales y su historia de resistencia.' },
        { day: 'Día 7', title: 'Gorilas de montaña', text: 'Trekking guiado hasta una familia de gorilas en Bwindi. Un encuentro lento, silencioso y profundamente humano con nuestros parientes salvajes.' },
        { day: 'Días 8-9', title: 'Lago Bunyonyi · Aldeas recónditas', text: 'Travesía en canoa entre islas, noches en casas comunitarias y conversaciones largas alrededor del fuego. El corazón del viaje.' },
        { day: 'Día 10', title: 'Regreso y cierre', text: 'Última mañana de calma, ritual de despedida con la comunidad y vuelta a Entebbe para el vuelo de salida.' },
      ],
    },
    destinations: {
      label: 'Destinos',
      title: 'Un carrusel de mundos por cruzar.',
      prev: 'Destino anterior',
      next: 'Destino siguiente',
      items: [
        { name: 'Uganda', theme: 'verde', eyebrow: 'Expedición matriz · abierta', tone: 'Selva · Lago · Tribus · Montañas de la Luna', text: 'La primera ruta Myrah. Diez días para caminar con guías locales, dormir cerca de las aldeas y entrar en lo profundo del continente con humildad y curiosidad.' },
        { name: 'Jordania', theme: 'dorado', eyebrow: 'Segunda línea', tone: 'Piedra · Desierto · Templos antiguos', text: 'Una ruta de caravanas, ciudades talladas en roca y silencio dorado. La puerta a Oriente: historia viva, hospitalidad y desierto.' },
        { name: 'Irak', theme: 'rojo', eyebrow: 'Bajo consulta', tone: 'Memoria · Mesopotamia · Respeto', text: 'La cuna de la escritura y de las primeras ciudades. Solo expediciones privadas evaluadas caso por caso: sin romanticismo del peligro, con contexto y responsabilidad.' },
        { name: 'Irán', theme: 'dorado', eyebrow: 'En diseño', tone: 'Mezquitas · Bazares · Poesía', text: 'Azulejos infinitos, jardines persas y la hospitalidad más desbordante de Oriente. Una ruta de cultura viva y belleza serena.' },
        { name: 'Marruecos', theme: 'dorado', eyebrow: 'Disponible', tone: 'Atlas · Medinas · Desierto', text: 'Del bullicio de las medinas al silencio del Sáhara. Bereberes, montañas del Atlas y noches de estrellas sobre la arena.' },
        { name: 'Indonesia', theme: 'verde', eyebrow: 'En diseño', tone: 'Volcanes · Selva · Ritual', text: 'Archipiélago de volcanes, templos y aldeas. De Java a las islas remotas, donde el ritual sigue marcando el día a día.' },
        { name: 'Siria', theme: 'rojo', eyebrow: 'Bajo consulta', tone: 'Memoria · Ciudades milenarias', text: 'Solo expediciones privadas evaluadas con extremo cuidado. Historia profunda y contexto honesto, sin romantizar nada.' },
        { name: 'China', theme: 'rojo', eyebrow: 'En diseño', tone: 'Rutas · Montañas · Imperios', text: 'De la Ruta de la Seda a las montañas del suroeste. Minorías, templos y paisajes que cambian de mundo cada día.' },
        { name: 'Palestina', theme: 'rojo', eyebrow: 'Bajo consulta', tone: 'Memoria · Comunidad · Olivos', text: 'Un viaje de escucha y comunidad, con anfitriones locales. Contexto, respeto y presencia por encima del relato fácil.' },
        { name: 'Escocia', theme: 'verde', eyebrow: 'Disponible', tone: 'Highlands · Niebla · Clanes', text: 'Tierras altas, islas barridas por el viento y leyendas de clanes. La aventura más cercana, intensa y verde.' },
        { name: 'Etiopía', theme: 'dorado', eyebrow: 'En diseño', tone: 'Iglesias · Tribus · Altiplano', text: 'Cuna de la humanidad. Iglesias excavadas en roca, tribus del valle del Omo y un altiplano que corta la respiración.' },
        { name: 'Nepal', theme: 'verde', eyebrow: 'En diseño', tone: 'Himalaya · Monasterios · Senderos', text: 'Senderos de montaña, monasterios y la hospitalidad sherpa. Caminar despacio bajo los gigantes del Himalaya.' },
        { name: 'Senegal', theme: 'dorado', eyebrow: 'En diseño', tone: 'Atlántico · Música · Teranga', text: 'Costa atlántica, ritmo y teranga: la hospitalidad senegalesa. Comunidad, música y memoria a orillas del océano.' },
      ],
    },
    method: {
      label: 'Método Myrah',
      title: 'La aventura empieza antes del aeropuerto.',
      principles: [
        'Grupos pequeños, ritmo humano y cero turismo de escaparate.',
        'Guías y proveedores locales contrastados: el dinero se queda en el territorio.',
        'Briefings honestos: belleza, límites, historia, riesgos y responsabilidad compartida.',
        'Viajar para entender de dónde venimos: arqueología, comunidad y memoria viva.',
      ],
    },
    ritual: {
      label: 'Ritual de viaje',
      title: 'Briefing. Cruce. Silencio. Regreso.',
      text:
        'Cada salida se prepara con una llamada previa, dossier de contexto, revisión de seguridad y una promesa: si el viaje no puede hacerse bien, no se fuerza.',
    },
    contact: {
      label: 'Reserva tu plaza',
      title: 'El primer viaje se abre con Uganda.',
      text:
        'Quedan pocas plazas en la expedición piloto. Déjanos una señal y te enviamos fechas, briefing completo y condiciones de reserva.',
      sendNote: `Al enviar, se abre tu correo con el mensaje listo para nosotros (${CONTACT_EMAIL}).`,
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      destination: 'Destino que te llama',
      language: 'Idioma del viaje',
      languageOptions: ['Español', 'Inglés', 'Indiferente'],
      submit: 'Pedir acceso',
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
      manifesto: 'Manifesto',
      destinations: 'Destinations',
      method: 'Method',
      cta: 'Book a spot',
      instagram: 'Instagram',
    },
    langNote: 'Every expedition is offered in Spanish and English. Switch the page language with the flags above.',
    hero: {
      kicker: 'Author-led expeditions · ethical and historical mission',
      title: 'Travel to understand where we come from.',
      text:
        'Routes crossing ancient temples, living jungles and tribes that still hold memory. Real adventure, in small groups, with local people and respect first.',
      ctaPrimary: 'See the Uganda expedition',
      ctaGhost: 'All destinations',
      cardStrong: 'Uganda first.',
      cardText: 'Jungle, lakes, tribes and mountains. A 10-day expedition to truly connect.',
    },
    manifesto: {
      label: 'Manifesto',
      title: 'We do not collect countries. We enter with permission.',
      text:
        'Myrah designs expeditions where aesthetics never hide reality. Each route is born from curiosity about human history: the first cities, the forgotten temples, the tribes that are still here. We travel slowly, we listen, we leave the land better than we found it and we return understanding a little more about where we all come from.',
    },
    uganda: {
      label: 'Featured expedition',
      title: 'Uganda: 10 days to connect, explore and live.',
      intro:
        'Our pilot route crosses the Nile jungle, the Bwindi forest and Lake Bunyonyi. Less agency itinerary and more shared life: walking with local guides, sleeping near the villages, meeting gorillas in silence and laughing around the fire in places almost no one reaches.',
      photoCaption: 'Bwindi Forest, Uganda · home of the mountain gorillas',
      modeLabel: 'Travel mode',
      prevMode: 'Previous mode',
      nextMode: 'Next mode',
      itineraryTitle: 'Set itinerary',
      includesTitle: 'Included',
      excludesTitle: 'Not included',
      from: 'From',
      reserve: 'Book a spot',
      modes: [
        {
          id: 'completo',
          tab: 'With visa and flights',
          tagline: 'Everything handled · door to door',
          summary:
            'We take care of everything: international flights, the Uganda visa and the full expedition. You just show up with your backpack.',
          includes: [
            'Round-trip international flights to Entebbe',
            'Uganda visa processing and fees',
            'Spanish/English-speaking Myrah guide + local guides at every stage',
            '9 nights: simple lodges, community houses and camps',
            'Mountain gorilla trekking permit',
            'All internal transport, transfers and expedition insurance',
          ],
          excludes: [
            'Vaccines and personal medication',
            'Meals marked as free and tips',
            'Personal expenses and souvenirs',
          ],
          price: '€4,900',
          priceNote: 'per person · all-inclusive with flights and visa · max group of 8',
        },
        {
          id: 'acompanamiento',
          tab: 'I only guide you there',
          tagline: 'You arrive · I guide you on the ground',
          summary:
            'You arrange your own flights and visa; I accompany and guide the whole expedition on the ground, with the local team, once you land in Entebbe.',
          includes: [
            'Spanish/English-speaking Myrah guide + local guides at every stage',
            '9 nights: simple lodges, community houses and camps',
            'Mountain gorilla trekking permit',
            'All internal transport and transfers within Uganda',
            'Pre-trip briefing, context dossier and expedition insurance',
            'Direct contribution to the community projects we visit',
          ],
          excludes: [
            'International flights to Entebbe',
            'Uganda visa and vaccines',
            'Meals marked as free and tips',
          ],
          price: '€3,900',
          priceNote: 'per person · flights and visa not included · max group of 8',
        },
      ],
      facts: [
        { label: 'Duration', value: '10 days / 9 nights' },
        { label: 'Group', value: 'Maximum 8 travelers' },
        { label: 'Level', value: 'Moderate adventure' },
        { label: 'Season', value: 'Jun · Jul · Aug · Sep' },
        { label: 'Pace', value: 'Human, unhurried' },
        { label: 'Language', value: 'Spanish or English' },
      ],
      itinerary: [
        { day: 'Day 1', title: 'Entebbe · Landing and first contact', text: 'Arrival on the shores of Lake Victoria. Welcome dinner, ethical briefing and introduction to the local team that will travel with us the whole way.' },
        { day: 'Day 2', title: 'Kampala alive', text: 'Markets, artisan workshops and real neighborhoods far from the postcard. We eat where people eat and listen to first-hand stories.' },
        { day: 'Days 3-4', title: 'Nile in Jinja', text: 'Source of the Nile, fishing communities and an afternoon of adrenaline on the river. Adventure and connection in equal measure.' },
        { day: 'Days 5-6', title: 'Batwa tribe · Bwindi Forest', text: 'Living alongside the Batwa, ancient inhabitants of the forest. We learn tracking, medicinal plants and their story of resistance.' },
        { day: 'Day 7', title: 'Mountain gorillas', text: 'Guided trek to a gorilla family in Bwindi. A slow, silent and deeply human encounter with our wild relatives.' },
        { day: 'Days 8-9', title: 'Lake Bunyonyi · Hidden villages', text: 'Canoe crossing between islands, nights in community houses and long conversations around the fire. The heart of the trip.' },
        { day: 'Day 10', title: 'Return and closing', text: 'A last calm morning, a farewell ritual with the community and back to Entebbe for the departure flight.' },
      ],
    },
    destinations: {
      label: 'Destinations',
      title: 'A carousel of worlds to cross.',
      prev: 'Previous destination',
      next: 'Next destination',
      items: [
        { name: 'Uganda', theme: 'verde', eyebrow: 'Flagship expedition · open', tone: 'Jungle · Lake · Tribes · Mountains of the Moon', text: 'The first Myrah route. Ten days to walk with local guides, sleep near the villages and enter deep into the continent with humility and curiosity.' },
        { name: 'Jordan', theme: 'dorado', eyebrow: 'Second line', tone: 'Stone · Desert · Ancient temples', text: 'A route of caravans, cities carved in rock and golden silence. The gateway to the East: living history, hospitality and desert.' },
        { name: 'Iraq', theme: 'rojo', eyebrow: 'On request', tone: 'Memory · Mesopotamia · Respect', text: 'The cradle of writing and of the first cities. Only private expeditions assessed case by case: no romanticizing of danger, with context and responsibility.' },
        { name: 'Iran', theme: 'dorado', eyebrow: 'In design', tone: 'Mosques · Bazaars · Poetry', text: 'Endless tiles, Persian gardens and the most overflowing hospitality of the East. A route of living culture and serene beauty.' },
        { name: 'Morocco', theme: 'dorado', eyebrow: 'Available', tone: 'Atlas · Medinas · Desert', text: 'From the bustle of the medinas to the silence of the Sahara. Berbers, the Atlas mountains and starry nights over the sand.' },
        { name: 'Indonesia', theme: 'verde', eyebrow: 'In design', tone: 'Volcanoes · Jungle · Ritual', text: 'An archipelago of volcanoes, temples and villages. From Java to the remote islands, where ritual still shapes everyday life.' },
        { name: 'Syria', theme: 'rojo', eyebrow: 'On request', tone: 'Memory · Ancient cities', text: 'Only private expeditions assessed with extreme care. Deep history and honest context, romanticizing nothing.' },
        { name: 'China', theme: 'rojo', eyebrow: 'In design', tone: 'Routes · Mountains · Empires', text: 'From the Silk Road to the southwestern mountains. Minorities, temples and landscapes that change worlds every day.' },
        { name: 'Palestine', theme: 'rojo', eyebrow: 'On request', tone: 'Memory · Community · Olive trees', text: 'A journey of listening and community, with local hosts. Context, respect and presence over the easy narrative.' },
        { name: 'Scotland', theme: 'verde', eyebrow: 'Available', tone: 'Highlands · Mist · Clans', text: 'Highlands, wind-swept islands and clan legends. The closest, most intense and greenest adventure.' },
        { name: 'Ethiopia', theme: 'dorado', eyebrow: 'In design', tone: 'Churches · Tribes · Highlands', text: 'Cradle of humanity. Rock-hewn churches, tribes of the Omo valley and a highland that takes your breath away.' },
        { name: 'Nepal', theme: 'verde', eyebrow: 'In design', tone: 'Himalaya · Monasteries · Trails', text: 'Mountain trails, monasteries and Sherpa hospitality. Walking slowly beneath the giants of the Himalaya.' },
        { name: 'Senegal', theme: 'dorado', eyebrow: 'In design', tone: 'Atlantic · Music · Teranga', text: 'Atlantic coast, rhythm and teranga: Senegalese hospitality. Community, music and memory by the ocean.' },
      ],
    },
    method: {
      label: 'Myrah method',
      title: 'The adventure begins before the airport.',
      principles: [
        'Small groups, a human pace and zero showcase tourism.',
        'Vetted local guides and providers: the money stays in the territory.',
        'Honest briefings: beauty, limits, history, risks and shared responsibility.',
        'Travel to understand where we come from: archaeology, community and living memory.',
      ],
    },
    ritual: {
      label: 'Travel ritual',
      title: 'Briefing. Crossing. Silence. Return.',
      text:
        'Every departure is prepared with a prior call, a context dossier, a safety review and a promise: if the trip cannot be done well, it is not forced.',
    },
    contact: {
      label: 'Book your spot',
      title: 'The first journey opens with Uganda.',
      text:
        'Few spots remain on the pilot expedition. Leave us a signal and we will send dates, full briefing and booking conditions.',
      sendNote: `On submit, your email opens with the message ready for us (${CONTACT_EMAIL}).`,
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      destination: 'Destination that calls you',
      language: 'Trip language',
      languageOptions: ['Spanish', 'English', 'Either'],
      submit: 'Request access',
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

function HeroInscriptions({ countries }) {
  // Inscripciones tipo grabado antiguo rodeando el rectángulo del hero.
  const line = countries.join('  ◆  ');
  const sides = ['top', 'right', 'bottom', 'left'];
  return (
    <div className="inscriptions" aria-hidden="true">
      {sides.map((side) => (
        <span className={`inscription inscription-${side}`} key={side}>
          {`${line}  ◆  ${line}`}
        </span>
      ))}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('es');
  const [ugandaMode, setUgandaMode] = useState(0);
  const [destIndex, setDestIndex] = useState(0);

  const t = translations[lang];
  const countries = COUNTRIES[lang];

  React.useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const modes = t.uganda.modes;
  const mode = modes[ugandaMode];
  const cycleMode = (dir) =>
    setUgandaMode((prev) => (prev + dir + modes.length) % modes.length);

  const destItems = t.destinations.items;
  const destination = destItems[destIndex];
  const cycleDest = (dir) =>
    setDestIndex((prev) => (prev + dir + destItems.length) % destItems.length);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const dest = data.get('destination') || '';
    const tripLang = data.get('language') || '';
    const subject = encodeURIComponent(`Myrah · ${name || email}`);
    const body = encodeURIComponent(
      `${t.contact.name}: ${name}\n${t.contact.email}: ${email}\n${t.contact.destination}: ${dest}\n${t.contact.language}: ${tripLang}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main id="top" className="site-shell" data-theme="verde">
      <div className="grain" aria-hidden="true" />

      <CountryBanner countries={countries} />

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

      <header className="header">
        <Logo />
        <nav aria-label="Navegación principal">
          <a href="#manifiesto">{t.nav.manifesto}</a>
          <a href="#destinos">{t.nav.destinations}</a>
          <a href="#metodo">{t.nav.method}</a>
          <a className="nav-cta" href="#contacto">{t.nav.cta}</a>
          <LanguageToggle lang={lang} onToggle={toggleLang} t={t} />
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <HeroInscriptions countries={countries} />
          <p className="kicker">{t.hero.kicker}</p>
          <h1 id="hero-title">{t.hero.title}</h1>
          <p className="hero-text">{t.hero.text}</p>
          <p className="lang-note">{t.langNote}</p>
          <div className="hero-actions">
            <a className="button primary" href="#uganda">{t.hero.ctaPrimary}</a>
            <a className="button ghost" href="#destinos">{t.hero.ctaGhost}</a>
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
            <strong>{t.hero.cardStrong}</strong>
            <p>{t.hero.cardText}</p>
          </div>
          <div className="coordinates">
            <span>00°20′N</span>
            <span>MYR-001</span>
          </div>
        </div>
      </section>

      <section id="manifiesto" className="manifesto section-block">
        <p className="section-label">{t.manifesto.label}</p>
        <h2>{t.manifesto.title}</h2>
        <p>{t.manifesto.text}</p>
      </section>

      <section id="uganda" className="uganda section-block" data-theme="verde">
        <div className="uganda-head">
          <p className="section-label">{t.uganda.label}</p>
          <h2>{t.uganda.title}</h2>
          <p>{t.uganda.intro}</p>
        </div>

        <figure className="uganda-photo">
          <img
            src={UGANDA_PHOTO}
            alt="Selva y montañas verdes de Uganda al amanecer"
            loading="lazy"
            width="1200"
            height="800"
          />
          <figcaption>{t.uganda.photoCaption}</figcaption>
        </figure>

        <div className="uganda-facts">
          {t.uganda.facts.map((fact) => (
            <div className="fact" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>

        <div className="mode-switch" role="group" aria-label={t.uganda.modeLabel}>
          <button type="button" className="mode-arrow" onClick={() => cycleMode(-1)} aria-label={t.uganda.prevMode}>‹</button>
          <div className="mode-switch-info">
            <span className="mode-switch-label">{t.uganda.modeLabel}</span>
            <strong className="mode-switch-name">{mode.tab}</strong>
            <span className="mode-switch-tag">{mode.tagline}</span>
            <span className="mode-dots">
              {modes.map((m, index) => (
                <span key={m.id} className={`mode-dot ${index === ugandaMode ? 'is-active' : ''}`} />
              ))}
            </span>
          </div>
          <button type="button" className="mode-arrow" onClick={() => cycleMode(1)} aria-label={t.uganda.nextMode}>›</button>
        </div>

        <p className="mode-summary">{mode.summary}</p>

        <div className="uganda-body">
          <div className="itinerary">
            <h3>{t.uganda.itineraryTitle}</h3>
            <ol className="itinerary-list">
              {t.uganda.itinerary.map((stop) => (
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
              <h3>{t.uganda.includesTitle}</h3>
              <ul>
                {mode.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="details-card muted-card">
              <h3>{t.uganda.excludesTitle}</h3>
              <ul>
                {mode.excludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="price-card">
              <span>{t.uganda.from}</span>
              <strong>{mode.price}</strong>
              <p>{mode.priceNote}</p>
              <a className="button primary" href="#contacto">{t.uganda.reserve}</a>
            </div>
          </aside>
        </div>
      </section>

      <section id="destinos" className="destinations section-block">
        <div className="section-heading">
          <p className="section-label">{t.destinations.label}</p>
          <h2>{t.destinations.title}</h2>
        </div>
        <div className="carousel">
          <button type="button" className="carousel-arrow" onClick={() => cycleDest(-1)} aria-label={t.destinations.prev}>‹</button>
          <article className="destination-card carousel-card" data-theme={destination.theme} key={destination.name}>
            <div>
              <p className="eyebrow">{destination.eyebrow}</p>
              <h3>{destination.name}</h3>
              <span>{destination.tone}</span>
            </div>
            <p>{destination.text}</p>
          </article>
          <button type="button" className="carousel-arrow" onClick={() => cycleDest(1)} aria-label={t.destinations.next}>›</button>
        </div>
        <div className="carousel-dots" role="tablist" aria-label={t.destinations.label}>
          {destItems.map((item, index) => (
            <button
              type="button"
              key={item.name}
              className={`carousel-dot ${index === destIndex ? 'is-active' : ''}`}
              onClick={() => setDestIndex(index)}
              aria-label={item.name}
              aria-selected={index === destIndex}
              role="tab"
            />
          ))}
        </div>
      </section>

      <section id="metodo" className="method section-block">
        <div>
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

      <section className="ritual section-block" aria-labelledby="ritual-title">
        <div className="ritual-map" aria-hidden="true">
          <span className="node node-one" />
          <span className="node node-two" />
          <span className="node node-three" />
          <span className="node node-four" />
        </div>
        <div className="ritual-copy">
          <p className="section-label">{t.ritual.label}</p>
          <h2 id="ritual-title">{t.ritual.title}</h2>
          <p>{t.ritual.text}</p>
        </div>
      </section>

      <section id="contacto" className="contact section-block">
        <div>
          <p className="section-label">{t.contact.label}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <p className="send-note">{t.contact.sendNote}</p>
        </div>
        <form className="waitlist" aria-label="Formulario de reserva" onSubmit={handleSubmit}>
          <label>
            {t.contact.name}
            <input type="text" name="name" placeholder={t.contact.namePlaceholder} />
          </label>
          <label>
            {t.contact.email}
            <input type="email" name="email" placeholder={t.contact.emailPlaceholder} />
          </label>
          <label>
            {t.contact.destination}
            <select name="destination" defaultValue={destItems[0].name}>
              {destItems.map((item) => (
                <option key={item.name}>{item.name}</option>
              ))}
            </select>
          </label>
          <label>
            {t.contact.language}
            <select name="language" defaultValue={t.contact.languageOptions[0]}>
              {t.contact.languageOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button type="submit">{t.contact.submit}</button>
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
