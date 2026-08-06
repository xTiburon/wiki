/* ═══════════════════════════════════════════
   wiki-data.js  —  Fuente central de datos
   PlanetMC Wiki
   Para agregar contenido, solo edita este archivo.
   Todas las páginas viven en pages/<id>.html (estructura plana),
   así que dentro del contenido podés enlazar a otra página de la
   wiki simplemente con su nombre de archivo, ej: href="economia.html"

   Convención de comandos: <argumento> = obligatorio, [argumento] = opcional.
   Cada categoría sigue el orden real en que un jugador nuevo aprende el
   servidor: Empezar → Recursos y Territorio → Economía y Comercio →
   Comunidad y PvP → Rangos Donador → Ayuda. El primer link de "Seguí con"
   en cada página es siempre el siguiente paso de esa ruta.
   ═══════════════════════════════════════════ */

const WIKI_DATA = {

  /* ── Información global del sitio ─────── */
  site: {
    name:        'PlanetMC',
    wikiTitle:   'Wiki Oficial',
    tagline:     'Tu guía completa del servidor',
    javaIP:      'planetmc.net',
    bedrockIP:   'planetmc.net',
    bedrockPort: '19132',
    discordURL:  'https://discord.gg/HvcPfgXVHf',
    shopURL:     'https://planetmc.tebex.io/',
    staffFormURL:'https://forms.gle/po1fM57gG9oQtKCc7',
    voteURL:     'https://www.40servidoresmc.es/planetmc/votar',
    mainURL:     'https://planetmc.net',
    version:     '1.21.x',
  },

  /* ── Navbar superior ──────────────────── */
  navLinks: [
    { name: 'Inicio',  url: 'https://planetmc.net',            external: true  },
    { name: 'Wiki',    url: 'index.html',                      external: false },
    { name: 'Tienda',  url: 'https://planetmc.tebex.io/',      external: true  },
    { name: 'Discord', url: 'https://discord.gg/HvcPfgXVHf',   external: true, icon: 'discord' },
  ],

  /* ══════════════════════════════════════════
     PÁGINA SUELTA (sin categoría) — solo la Bienvenida.
     Normas, FAQ y Soporte viven ahora dentro de una categoría
     para que la ruta de aprendizaje quede completa en el sidebar.
     ══════════════════════════════════════════ */
  standalonePages: [

    {
      id:          'bienvenida',
      name:        'Bienvenida',
      icon:        'home',
      path:        'index.html',
      description: 'Tu punto de inicio para descubrir todo lo que ofrece el servidor PlanetMC.',
      keywords:    ['bienvenida','inicio','introduccion','empezar','nuevo','jugador','survival','planetmc','wiki'],
      content: `
        <div class="wiki-index-hero">
          <img src="${window.ROOT_PATH || '../'}assets/img/logo.png" alt="PlanetMC" class="wiki-planet-img">
          <span class="eyebrow" style="justify-content:center;display:flex;">Wiki Oficial</span>
          <h1>Bienvenido a la Wiki de PlanetMC</h1>
          <p>Todo lo que necesitás saber sobre el servidor, en el orden en que lo vas a usar: cómo entrar, cómo jugar y cómo aprovechar cada sistema.</p>
          <div class="ip-hero-row">
            <div class="ip-hero-chip java ip-copy" data-ip="planetmc.net">${Icon('coffee')} Java: <strong>planetmc.net</strong></div>
            <div class="ip-hero-chip bedrock ip-copy" data-ip="planetmc.net">${Icon('smartphone')} Bedrock: <strong>planetmc.net:19132</strong></div>
          </div>
        </div>

        <p>PlanetMC es un servidor de Minecraft en español, Survival con economía, protecciones de terreno, trabajos, misiones, clanes, PvP y eventos como KOTH. Es compatible con Java y Bedrock, Premium y No Premium, en PC, consola y móvil.</p>

        <h2 id="ruta">${Icon('compass')} La ruta de aprendizaje</h2>
        <p>Seguí las categorías del menú lateral en orden: cada página termina con un botón al siguiente paso, así nunca te quedás sin saber qué hacer después.</p>
        <div class="wiki-categories-grid" id="wikiCategoriesGrid"></div>

        <h2 id="por-que">${Icon('star')} ¿Por qué jugar en PlanetMC?</h2>
        <div class="feature-grid">
          <div class="feature-card"><div class="feature-icon">${Icon('globe')}</div><div class="feature-title">Comunidad activa</div><div class="feature-desc">Jugadores todos los días y un staff presente en Discord.</div></div>
          <div class="feature-card"><div class="feature-icon">${Icon('settings')}</div><div class="feature-title">Sistemas propios</div><div class="feature-desc">Economía, clanes, misiones y protecciones hechos a medida para el servidor.</div></div>
          <div class="feature-card"><div class="feature-icon">${Icon('gamepad')}</div><div class="feature-title">Java + Bedrock</div><div class="feature-desc">Crossplay total entre PC, consola y móvil en el mismo mundo.</div></div>
          <div class="feature-card"><div class="feature-icon">${Icon('trophy')}</div><div class="feature-title">Eventos frecuentes</div><div class="feature-desc">KOTH, votaciones con premios y misiones que rotan todos los días.</div></div>
        </div>

        <h2 id="como-empezar">${Icon('rocket')} ¿Cómo empezar?</h2>
        <ol class="wiki-steps">
          <li>Leé las <a href="pages/normas.html">Normas del servidor</a> para evitar sanciones.</li>
          <li>Conectate con la guía de <a href="pages/ingresar-java.html">Java</a> o <a href="pages/ingresar-bedrock.html">Bedrock</a>.</li>
          <li>Seguí la guía de <a href="pages/primeros-pasos.html">Primeros Pasos</a> apenas entres al spawn.</li>
          <li>Protegé tu terreno con <a href="pages/protecciones.html">Protecciones</a> antes de construir algo valioso.</li>
          <li>Si tenés dudas, preguntá en <a href="pages/soporte.html">Soporte y Discord</a>.</li>
        </ol>

        <div class="alert alert-info">
          <span class="alert-icon">${Icon('lightbulb')}</span>
          <div><strong>Consejo:</strong> usá el buscador de la barra lateral — es la forma más rápida de encontrar cualquier comando o sistema de esta wiki.</div>
        </div>
      `
    },

  ],

  /* ══════════════════════════════════════════
     CATEGORÍAS Y PÁGINAS — ordenadas como ruta de aprendizaje
     ══════════════════════════════════════════ */
  categories: [

    /* ═══════════ 1. EMPEZAR AQUÍ ═══════════ */
    {
      id: 'empezar', name: 'Empezar Aquí', icon: 'rocket', color: '#5ce1ff', open: true,
      pages: [

        {
          id: 'normas', name: 'Normas del Servidor', icon: 'scroll', path: 'pages/normas.html',
          description: 'Reglas que todos los jugadores deben leer y respetar.',
          keywords: ['reglas','normas','ban','sanciones','comportamiento','hack','chat','spam','castigo','griefing','robo','vulcan','anticheat'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('scroll')}</div>
              <h1>Normas del Servidor</h1>
              <p class="page-hero-desc">Reglas que todos los jugadores deben respetar al unirse a PlanetMC. Desconocerlas no evita una sanción.</p>
            </div>

            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>El servidor usa <strong>anticheat automático</strong> (Vulcan) además de moderación humana. Usar hacks o clientes con ventajas injustas termina en <strong>ban permanente</strong>, sin excepciones.</div>
            </div>

            <h2 id="chat">${Icon('message-circle')} Normas de chat</h2>
            <ul class="wiki-list">
              <li>Prohibido el spam (mensajes repetidos) y el flood (mensajes muy seguidos).</li>
              <li>Nada de publicidad de otros servidores, redes o links no autorizados.</li>
              <li>Prohibido el lenguaje ofensivo, discriminatorio o el acoso a otros jugadores.</li>
              <li>Evitá el uso excesivo de MAYÚSCULAS.</li>
              <li>Hacerse pasar por Staff (real o en broma) está prohibido.</li>
            </ul>

            <h2 id="juego">${Icon('gamepad')} Normas de juego</h2>
            <ul class="wiki-list">
              <li>Prohibido usar <strong>hacks, cheats o clientes modificados</strong> (kill aura, fly, speed, x-ray, reach, etc). El servidor corre <strong>anticheat automático</strong>.</li>
              <li>Prohibido el griefing y el robo en cofres fuera de tu propia protección.</li>
              <li>Los bugs o exploits deben reportarse en Discord — explotarlos a propósito está prohibido.</li>
              <li>Prohibido usar más de una cuenta para abusar de recompensas de primer ingreso, votos o misiones (alt-abuse).</li>
            </ul>

            <h2 id="pvp">${Icon('swords')} Normas de PvP</h2>
            <ul class="wiki-list">
              <li>El daño PvP solo aplica si ambos jugadores tienen el PvP activado con <code>/pvp</code> y la zona lo permite. Ver <a href="pvp.html">Sistema de PvP</a>.</li>
              <li>Nadie puede atacar a un jugador con la <a href="primeros-pasos.html">Protección de Novato</a> activa (primeras 24 horas).</li>
              <li>Prohibido el combat-log: desconectarte mientras estás en combate para escapar de una muerte segura.</li>
            </ul>

            <h2 id="construccion">${Icon('hammer')} Normas de construcción</h2>
            <ul class="wiki-list">
              <li>Todo terreno que quieras conservar debe estar protegido con <code>/ps</code> — el servidor no repone lo perdido en zonas sin proteger.</li>
              <li>Evitá construir pegado a la protección de otro jugador sin su permiso.</li>
            </ul>

            <h2 id="sanciones">${Icon('hammer')} Sanciones orientativas</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Infracción</th><th>Sanción orientativa</th></tr></thead>
                <tbody>
                  <tr><td>Spam / flood en chat</td><td>Mute temporal</td></tr>
                  <tr><td>Lenguaje ofensivo</td><td>Advertencia → mute temporal</td></tr>
                  <tr><td>Uso de hacks / clientes modificados</td><td>Ban permanente</td></tr>
                  <tr><td>Griefing / robo fuera de zona protegida</td><td>Ban temporal + reparación</td></tr>
                  <tr><td>Publicidad no autorizada</td><td>Ban permanente</td></tr>
                  <tr><td>Alt-abuse (multicuentas para recompensas)</td><td>Pérdida de recompensas + posible ban</td></tr>
                </tbody>
              </table>
            </div>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('mail')}</span>
              <div>La duración exacta de cada sanción queda a criterio del staff según la gravedad y reincidencia. Podés apelar una sanción desde <a href="soporte.html">Soporte y Discord</a>.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="ingresar-java.html">${Icon('arrow-right')} Siguiente: Ingresar al servidor</a>
            <ul class="wiki-list" style="margin-top:12px;">
              <li><a href="ingresar-bedrock.html">Ingresar — Bedrock Edition</a> — si jugás desde celular, tablet o consola.</li>
            </ul>
          `
        },

        {
          id: 'ingresar-java', name: 'Ingresar — Java Edition', icon: 'coffee', path: 'pages/ingresar-java.html',
          description: 'Cómo conectarte a PlanetMC desde Minecraft Java Edition.',
          keywords: ['java','pc','windows','mac','linux','launcher','conectar','ip','multijugador'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('coffee')}</div>
              <h1>Ingresar — Java Edition</h1>
              <p class="page-hero-desc">¿Jugás desde PC con Windows, Mac o Linux? Conectate en menos de un minuto.</p>
            </div>

            <div class="info-card">
              <div class="info-card-row"><span class="info-label">IP del servidor</span><span class="info-val ip-copy" data-ip="planetmc.net">planetmc.net <span class="copy-hint">${Icon('clipboard-list')}</span></span></div>
              <div class="info-card-row"><span class="info-label">Versión recomendada</span><span class="info-val">1.21.x</span></div>
              <div class="info-card-row"><span class="info-label">Cuentas aceptadas</span><span class="info-val">Premium y No Premium</span></div>
            </div>

            <h2 id="pasos">${Icon('rocket')} Pasos para conectarte</h2>
            <ol class="wiki-steps">
              <li>Abrí el <strong>Minecraft Launcher</strong> y elegí la versión <strong>1.21.x</strong>.</li>
              <li>Hacé clic en <strong>Jugar</strong>.</li>
              <li>Andá a <strong>Multijugador</strong> → <strong>Añadir servidor</strong>.</li>
              <li>En "Dirección del servidor" escribí <code>planetmc.net</code>.</li>
              <li>Guardá y hacé doble clic en el servidor para entrar.</li>
            </ol>

            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>Usá siempre una versión <strong>1.21.x</strong>. Versiones muy distintas pueden mostrar "Outdated client" o directamente no conectar.</div>
            </div>

            <h2 id="faq">${Icon('help-circle')} Problemas comunes</h2>
            <div class="faq-list">
              <details class="faq-item"><summary>Me sale "Failed to connect to the server"</summary><p>Confirmá que la IP sea exactamente <code>planetmc.net</code> (sin espacios) y revisá tu conexión. Si sigue fallando, preguntá en <a href="soporte.html">Soporte</a>.</p></details>
              <details class="faq-item"><summary>Me sale "Outdated client" o "Outdated server"</summary><p>Tu versión no coincide con la del servidor. Cambiá a <strong>1.21.x</strong> en el launcher.</p></details>
              <details class="faq-item"><summary>No tengo cuenta Premium, ¿puedo entrar igual?</summary><p>Sí, el servidor acepta cuentas No Premium (crackeadas) en Java Edition.</p></details>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="primeros-pasos.html">${Icon('arrow-right')} Siguiente: Primeros Pasos</a>
          `
        },

        {
          id: 'ingresar-bedrock', name: 'Ingresar — Bedrock Edition', icon: 'smartphone', path: 'pages/ingresar-bedrock.html',
          description: 'Cómo conectarte a PlanetMC desde celular, tablet, consola o Windows.',
          keywords: ['bedrock','movil','celular','android','ios','tablet','consola','xbox','playstation','switch','puerto','19132'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('smartphone')}</div>
              <h1>Ingresar — Bedrock Edition</h1>
              <p class="page-hero-desc">¿Jugás desde celular, tablet, consola o Windows 10/11? Esta guía es para vos.</p>
            </div>

            <div class="info-card">
              <div class="info-card-row"><span class="info-label">IP del servidor</span><span class="info-val ip-copy" data-ip="planetmc.net">planetmc.net <span class="copy-hint">${Icon('clipboard-list')}</span></span></div>
              <div class="info-card-row"><span class="info-label">Puerto</span><span class="info-val">19132</span></div>
              <div class="info-card-row"><span class="info-label">Compatibilidad</span><span class="info-val">Crossplay con Java (Geyser)</span></div>
            </div>

            <h2 id="pasos">${Icon('rocket')} Pasos para conectarte</h2>
            <ol class="wiki-steps">
              <li>Abrí Minecraft y tocá <strong>Jugar</strong> → pestaña <strong>Servidores</strong>.</li>
              <li>Desplazate hasta abajo y tocá <strong>Agregar servidor</strong>.</li>
              <li>Nombre: escribí lo que quieras, por ejemplo <code>PlanetMC</code>.</li>
              <li>Dirección: <code>planetmc.net</code> — Puerto: <code>19132</code>.</li>
              <li>Guardá y tocá el servidor para conectarte.</li>
            </ol>

            <h2 id="consolas">${Icon('gamepad')} Xbox, PlayStation y Nintendo Switch</h2>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('gamepad')}</span>
              <div>Las consolas tienen acceso limitado para agregar servidores externos por su cuenta. La forma habitual es usar <strong>BedrockConnect</strong>: buscá un tutorial actualizado para tu consola específica en YouTube.</div>
            </div>

            <h2 id="faq">${Icon('help-circle')} Problemas comunes</h2>
            <div class="faq-list">
              <details class="faq-item"><summary>No veo la pestaña "Servidores"</summary><p>Verificá que tu cuenta tenga el multijugador habilitado. En algunas regiones ayuda usar una VPN gratuita como Cloudflare WARP.</p></details>
              <details class="faq-item"><summary>¿Puedo jugar con amigos que usan Java?</summary><p>Sí. PlanetMC tiene crossplay total Java ${Icon('swap')} Bedrock gracias a Geyser: juegan todos en el mismo mundo.</p></details>
              <details class="faq-item"><summary>No me conecta desde consola</summary><p>Probá con BedrockConnect siguiendo un tutorial para tu consola. Si el problema sigue, pasá por <a href="soporte.html">Soporte</a>.</p></details>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="primeros-pasos.html">${Icon('arrow-right')} Siguiente: Primeros Pasos</a>
          `
        },

        {
          id: 'primeros-pasos', name: 'Primeros Pasos', icon: 'compass', path: 'pages/primeros-pasos.html',
          description: 'Guía de inicio para nuevos jugadores: kit, protección de novato y primeros comandos.',
          keywords: ['inicio','comenzar','nuevo','primeros pasos','tutorial','novato','spawn','kit','sethome','proteccion de novato','hogar'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('sprout')}</div>
              <h1>Primeros Pasos</h1>
              <p class="page-hero-desc">Todo lo que necesitás saber para arrancar bien tu aventura en PlanetMC Survival.</p>
            </div>

            <h2 id="proteccion-novato">${Icon('shield')} Protección de Novato (24 horas)</h2>
            <p>Al entrar por primera vez, tu cuenta activa automáticamente la <strong>Protección de Novato</strong> durante las primeras <strong>24 horas</strong> de juego real (el tiempo corre incluso desconectado).</p>
            <div class="feature-grid">
              <div class="feature-card"><div class="feature-icon">${Icon('backpack')}</div><div class="feature-title">Conservás tu inventario</div><div class="feature-desc">Si morís, no perdés los ítems ni la experiencia.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('shield')}</div><div class="feature-title">Nadie te puede atacar</div><div class="feature-desc">Otros jugadores no pueden hacerte daño en PvP mientras esté activa.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('hourglass')}</div><div class="feature-title">Dura 24 horas</div><div class="feature-desc">Se desactiva sola al cumplirse el tiempo, o antes si entrás al mundo PvP.</div></div>
            </div>
            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>Si entrás al <strong>mundo PvP</strong>, tu protección de novato se desactiva para siempre, sin vuelta atrás. También podés desactivarla vos mismo antes de tiempo con <code>/proteccion off</code> y confirmando con <code>/proteccion off confirmar</code> dentro de los 30 segundos siguientes.</div>
            </div>

            <h2 id="llegada">${Icon('map-pin')} Llegada al spawn</h2>
            <p>Al conectarte aparecés en el <strong>spawn principal</strong>. Desde ahí podés abrir la tienda del servidor, reclamar tu kit de bienvenida y viajar al mundo Survival para empezar a jugar.</p>

            <h2 id="hogares">${Icon('home')} Hogares: guardá tu ubicación</h2>
            <p>Un <strong>hogar</strong> es un punto que vos marcás para volver a él al instante con un comando, sin caminar. Guardá uno apenas elijas dónde construir tu base:</p>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/sethome [nombre]</code><span>Guarda tu ubicación actual como hogar. Sin nombre, usa "home" por defecto.</span></div>
              <div class="cmd-item"><code>/home [nombre]</code><span>Te teletransporta al hogar guardado con ese nombre.</span></div>
            </div>

            <h2 id="primeros-30">${Icon('timer')} Qué hacer en los primeros 30 minutos</h2>
            <ol class="wiki-steps">
              <li>Reclamá tu kit con <code>/kit inicio</code>.</li>
              <li>Buscá un buen lugar para tu base.</li>
              <li>Guardá tu base como hogar con <code>/sethome</code>.</li>
              <li>Protegé tu terreno cuanto antes — ver <a href="recursos.html">Recursos y Granjas</a> y <a href="protecciones.html">Protecciones de Terreno</a>.</li>
            </ol>

            <h2 id="comandos">${Icon('keyboard')} Comandos esenciales para empezar</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Volver al spawn</span></div>
              <div class="cmd-item"><code>/kit inicio</code><span>Reclamar el kit de bienvenida (una sola vez)</span></div>
              <div class="cmd-item"><code>/tpa &lt;jugador&gt;</code><span>Solicitar teletransporte a otro jugador</span></div>
              <div class="cmd-item"><code>/proteccion off</code><span>Desactivar tu protección de novato antes de tiempo</span></div>
            </div>
            <p>Para la lista completa de comandos por sistema, mirá <a href="comandos.html">Comandos Principales</a>.</p>

            <h2 id="consejos">${Icon('lightbulb')} Consejos para nuevos jugadores</h2>
            <ul class="wiki-list">
              <li>Protegé tu terreno <strong>antes</strong> de construir algo valioso, no después.</li>
              <li>Aprovechá tu Protección de Novato para explorar sin miedo a perder tu inventario.</li>
              <li>Uníte al <a href="soporte.html">Discord</a> para enterarte de eventos y novedades.</li>
            </ul>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="recursos.html">${Icon('arrow-right')} Siguiente: Recursos y Granjas</a>
          `
        },

      ]
    },

    /* ═══════════ 2. RECURSOS Y TERRITORIO ═══════════ */
    {
      id: 'recursos-territorio', name: 'Recursos y Territorio', icon: 'pickaxe', color: '#3ddc84', open: false,
      pages: [

        {
          id: 'recursos', name: 'Recursos y Granjas', icon: 'pickaxe', path: 'pages/recursos.html',
          description: 'Cómo conseguir recursos de forma eficiente y armar granjas con spawners.',
          keywords: ['recursos','minar','granja','farm','spawners','generadores','mobs','silk touch'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('pickaxe')}</div>
              <h1>Recursos y Granjas</h1>
              <p class="page-hero-desc">Todo lo que minés, cultivés o farmées se convierte en dinero o materiales para tu base. Este sistema te ayuda a conseguirlo más rápido.</p>
            </div>

            <p>Los recursos que juntás jugando normalmente (minerales, cultivos, mobs) alimentan el resto del servidor: los vendés en <a href="tiendas.html">Tiendas</a>, suman progreso en <a href="trabajos.html">Trabajos</a> y cumplen objetivos de <a href="misiones.html">Misiones</a>. La forma más eficiente de conseguirlos de forma constante es armando una granja con spawners.</p>

            <h2 id="spawners">${Icon('crosshair')} Spawners</h2>
            <p>PlanetMC incluye un sistema propio de spawners que permite <strong>minar los generadores de mobs</strong> que encontrás en el mundo (por ejemplo en mazmorras) y llevártelos a tu base para armar granjas de recursos o experiencia.</p>

            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div><strong>Contenido en revisión:</strong> el comportamiento exacto (costo por minarlos, si se apilan, si se pueden cambiar de tipo de mob, límites por protección) puede variar. Confirmá los detalles actuales con el staff en Discord o probando <code>/spawners</code> en el juego mientras completamos esta página.</div>
            </div>

            <h2 id="basico">${Icon('package')} Lo que sí es seguro asumir</h2>
            <ul class="wiki-list">
              <li>Los spawners se minan y se llevan como ítem, no como bloque vanilla normal.</li>
              <li>Se colocan de nuevo dentro de tu propia protección para que el mob generado no te lo robe otro jugador.</li>
              <li>Funcionan mejor combinados con una zona bien iluminada o una trampa de granja para aprovechar los mobs que generan.</li>
            </ul>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="protecciones.html">${Icon('arrow-right')} Siguiente: Protecciones de Terreno</a>
          `
        },

        {
          id: 'protecciones', name: 'Protecciones de Terreno', icon: 'shield', path: 'pages/protecciones.html',
          description: 'Cómo proteger y administrar tu terreno del griefing con ProtectionStones (/ps).',
          keywords: ['proteger','proteccion','ps','terreno','base','griefing','robo','miembros','flags','claim','protectionstones','administrar'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('shield')}</div>
              <h1>Protecciones de Terreno</h1>
              <p class="page-hero-desc">Protegé tu base y tus construcciones del griefing con el sistema de protecciones (<code>/ps</code>).</p>
            </div>

            <div class="alert alert-warn">
              <span class="alert-icon">${Dot('red')}</span>
              <div>El servidor <strong>no repone</strong> lo que te roben o te griefeen en zonas sin proteger. Protegé tu terreno antes de construir algo valioso.</div>
            </div>

            <h2 id="crear">${Icon('lock')} Crear tu protección</h2>
            <ol class="wiki-steps">
              <li>Ejecutá <code>/ps</code> para abrir el menú de protecciones.</li>
              <li>Elegí el tamaño de protección que quieras usar.</li>
              <li>Colocá el bloque de protección en el lugar donde querés proteger.</li>
              <li>¡Listo! La zona queda protegida a los lados, y de forma infinita hacia arriba y abajo.</li>
            </ol>

            <h2 id="administrar">${Icon('settings')} Administrar tu protección</h2>
            <p>Una vez creada, gestioná quién entra, qué puede hacer y qué tan visible es desde estos comandos:</p>

            <h3 id="info-general">${Icon('clipboard-list')} Información</h3>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/ps info</code><span>Ver información general de la protección donde estás parado</span></div>
              <div class="cmd-item"><code>/ps info members</code><span>Ver la lista de miembros con acceso</span></div>
              <div class="cmd-item"><code>/ps info owners</code><span>Ver los propietarios de la protección</span></div>
              <div class="cmd-item"><code>/ps info flags</code><span>Ver los flags (permisos) configurados</span></div>
            </div>

            <h3 id="miembros">${Icon('users')} Gestión de miembros</h3>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/ps add &lt;jugador&gt;</code><span>Añade a un jugador como miembro: puede construir y romper dentro de la zona.<br><em>Ejemplo: /ps add Xavier27</em></span></div>
              <div class="cmd-item"><code>/ps remove &lt;jugador&gt;</code><span>Quita a un jugador de la protección: pierde el acceso que tenía como miembro.<br><em>Ejemplo: /ps remove Xavier27</em></span></div>
              <div class="cmd-item"><code>/ps addowner &lt;jugador&gt;</code><span>Da rol de propietario: puede administrar miembros y flags igual que vos</span></div>
              <div class="cmd-item"><code>/ps removeowner &lt;jugador&gt;</code><span>Quita el rol de propietario a un jugador</span></div>
            </div>

            <h3 id="gestion">${Icon('map')} Visibilidad y recuperación</h3>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/ps view</code><span>Mostrar visualmente los bordes de la protección</span></div>
              <div class="cmd-item"><code>/ps center</code><span>Teletransportarte al centro de la protección</span></div>
              <div class="cmd-item"><code>/ps hide</code><span>Ocultar la protección de otros jugadores</span></div>
              <div class="cmd-item"><code>/ps unhide</code><span>Volver a hacerla visible</span></div>
              <div class="cmd-item"><code>/ps reclaim</code><span>Recuperar una protección caducada o abandonada</span></div>
            </div>

            <h3 id="flags">${Icon('flag')} Flags (permisos avanzados)</h3>
            <p>Los flags controlan comportamientos específicos dentro de tu zona (por ejemplo si las explosiones hacen daño, o si los no-miembros pueden abrir puertas).</p>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/ps flag &lt;nombre&gt; &lt;valor&gt;</code><span>Configura un flag específico.<br><em>Ejemplo: /ps flag pvp deny</em></span></div>
              <div class="cmd-item"><code>/ps flag &lt;nombre&gt;</code><span>Ver el valor actual de un flag</span></div>
              <div class="cmd-item"><code>/ps flag defaults</code><span>Restaurar todos los flags a sus valores por defecto</span></div>
            </div>
            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>¿Tu protección bloquea el daño PvP por defecto? Depende de cómo esté configurado el flag <code>pvp</code> en tu zona — no está garantizado fuera del <a href="pvp.html">mundo PvP</a>. Revisalo con <code>/ps info flags</code> si necesitás estar seguro.</div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>Cuanto más jugás, más bloques de protección vas acumulando. Los rangos donador de la <a href="tienda-web.html">tienda web</a> suelen incluir bonificaciones extra.</div>
            </div>
            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div><strong>Cuidado:</strong> eliminar tu protección la borra <strong>permanentemente</strong>. Asegurate antes de confirmar.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="bovedas.html">${Icon('arrow-right')} Siguiente: Bóvedas y Warps</a>
          `
        },

        {
          id: 'bovedas', name: 'Bóvedas y Warps', icon: 'toolbox', path: 'pages/bovedas.html',
          description: 'Almacenamiento extra con bóvedas y cómo crear tu propio warp público.',
          keywords: ['bovedas','vault','vaults','almacenamiento','warps','axvault','axplayerwarps'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('toolbox')}</div>
              <h1>Bóvedas y Warps</h1>
              <p class="page-hero-desc">Espacio de almacenamiento extra y cómo crear un warp público para que otros jugadores te visiten.</p>
            </div>

            <h2 id="bovedas">${Icon('package')} Bóvedas (/axvault)</h2>
            <p>Las bóvedas son espacios de almacenamiento extra, independientes de tu inventario y de tus cofres, a los que accedés desde cualquier parte del mapa.</p>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/axvault</code><span>Abrir el selector de tus bóvedas</span></div>
            </div>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>La cantidad de bóvedas disponibles y su tamaño suelen aumentar con los rangos donador de la <a href="tienda-web.html">tienda web</a>.</div>
            </div>

            <h2 id="warps">${Icon('flag')} Warps de jugador</h2>
            <p>Podés crear tu propio warp público para que cualquier jugador se teletransporte directo a tu base, tienda de jugador o proyecto de construcción.</p>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Costo de creación</span><span class="info-val">$50.000</span></div>
            </div>
            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>El comando exacto para crear y administrar warps de jugador puede variar. Probá <code>/warps</code> o <code>/pwarp</code> en el juego, o preguntá en <a href="soporte.html">Soporte</a> si no lo encontrás.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="economia.html">${Icon('arrow-right')} Siguiente: Economía</a>
          `
        },

      ]
    },

    /* ═══════════ 3. ECONOMÍA Y COMERCIO ═══════════ */
    {
      id: 'economia-comercio', name: 'Economía y Comercio', icon: 'coins', color: '#ffd166', open: false,
      pages: [

        {
          id: 'economia', name: 'Economía', icon: 'coins', path: 'pages/economia.html',
          description: 'Cómo funciona el dinero del servidor y todas las formas de ganarlo.',
          keywords: ['economia','dinero','balance','vender','comprar','pay','ganar dinero'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('coins')}</div>
              <h1>Economía</h1>
              <p class="page-hero-desc">Cómo ganar, gastar y mover dinero dentro de PlanetMC.</p>
            </div>

            <p>El dinero del servidor se gana vendiendo recursos, trabajando, completando misiones y votando. Se gasta en las tiendas, en el mercado de jugadores y en la tienda web.</p>

            <h2 id="ganar">${Icon('trending-up')} Formas de ganar dinero</h2>
            <ul class="wiki-list">
              <li>Vender lo que juntes en las <a href="tiendas.html">Tiendas</a> del servidor o al mercado de jugadores.</li>
              <li>Trabajar con <a href="trabajos.html">Trabajos</a> — te paga por minar, construir, cazar, etc.</li>
              <li>Completar <a href="misiones.html">Misiones</a> diarias, semanales y mensuales.</li>
              <li>Votar por el servidor todos los días (ver <a href="eventos.html">Eventos y Votaciones</a>).</li>
            </ul>

            <h2 id="comandos">${Icon('keyboard')} Comandos de economía</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo actual</span></div>
              <div class="cmd-item"><code>/pay &lt;jugador&gt; &lt;monto&gt;</code><span>Enviarle dinero a otro jugador.<br><em>Ejemplo: /pay Xavier27 500</em></span></div>
              <div class="cmd-item"><code>/baltop</code><span>Ranking de los jugadores más ricos</span></div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="tiendas.html">${Icon('arrow-right')} Siguiente: Tiendas</a>
          `
        },

        {
          id: 'tiendas', name: 'Tiendas', icon: 'cart', path: 'pages/tiendas.html',
          description: 'La tienda de precio fijo del servidor y el mercado entre jugadores.',
          keywords: ['tienda','shop','sell','mercado','subasta','ah','auction','zauctionhouse','vender a jugadores','comprar a jugadores'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('cart')}</div>
              <h1>Tiendas</h1>
              <p class="page-hero-desc">Dos formas de comprar y vender: a precio fijo con el servidor, o directo con otros jugadores.</p>
            </div>

            <h2 id="shop">${Icon('store')} Tienda del servidor (/shop)</h2>
            <p><code>/shop</code> abre un menú con categorías (bloques, comida, cultivos, minerales, etc.) para comprar y vender ítems a precio fijo, sin negociar con otros jugadores.</p>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/shop</code><span>Abrir el menú de la tienda</span></div>
              <div class="cmd-item"><code>/sell all</code><span>Vender todo lo vendible de tu inventario de una sola vez</span></div>
              <div class="cmd-item"><code>/sell hand</code><span>Vender solo el ítem que tenés en la mano</span></div>
            </div>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div><strong>Tip:</strong> usá <code>/sell all</code> apenas volvés de minar o farmear para vender todo de una y ahorrar tiempo.</div>
            </div>

            <h2 id="mercado">${Icon('tag')} Mercado entre jugadores (/ah)</h2>
            <p>A diferencia de <code>/shop</code> (precio fijo del servidor), la <strong>casa de subastas</strong> te deja poner tus propios ítems a la venta al precio que decidas, para que cualquier otro jugador los compre. Es ideal para ítems raros, encantados o stacks grandes que no tienen precio en la tienda del servidor.</p>

            <div class="cmd-grid">
              <div class="cmd-item"><code>/ah</code><span>Abrir el mercado (también funciona <code>/auction</code>)</span></div>
              <div class="cmd-item"><code>/ah sell &lt;precio&gt;</code><span>Publicar el ítem que tenés en la mano.<br><em>Ejemplo: /ah sell 1.5M</em></span></div>
              <div class="cmd-item"><code>/ah search &lt;texto&gt;</code><span>Buscar un ítem publicado por nombre</span></div>
              <div class="cmd-item"><code>/ah selling</code><span>Ver tus propias publicaciones activas</span></div>
              <div class="cmd-item"><code>/ah purchased</code><span>Ítems que compraste, listos para retirar</span></div>
              <div class="cmd-item"><code>/ah expired</code><span>Recuperar publicaciones que se vencieron sin vender</span></div>
              <div class="cmd-item"><code>/ah history</code><span>Ver tu historial de ventas y compras</span></div>
              <div class="cmd-item"><code>/ah claim</code><span>Cobrar dinero pendiente de ventas hechas estando desconectado</span></div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>Al escribir el precio podés usar atajos: <code>1K</code> = 1.000, <code>2.5M</code> = 2.500.000.</div>
            </div>

            <h3 id="datos">${Icon('bar-chart')} Datos del sistema</h3>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Duración de una publicación</span><span class="info-val">48 horas</span></div>
              <div class="info-card-row"><span class="info-label">Cobro de ventas offline</span><span class="info-val">Automático al reconectarte</span></div>
            </div>

            <h3 id="limites">${Icon('package')} Publicaciones simultáneas por rango</h3>
            <p>La cantidad de ítems que podés tener publicados <strong>al mismo tiempo</strong> aumenta con tu rango donador:</p>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Rango</th><th>Publicaciones activas</th></tr></thead>
                <tbody>
                  <tr><td>Sin rango</td><td>3</td></tr>
                  <tr><td>Void</td><td>5</td></tr>
                  <tr><td>Nova</td><td>7</td></tr>
                  <tr><td>Lunar</td><td>10</td></tr>
                  <tr><td>Meteor</td><td>15</td></tr>
                  <tr><td>Eclipse</td><td>20</td></tr>
                </tbody>
              </table>
            </div>
            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>Los nombres de rango de esta tabla corresponden a los niveles configurados en el mercado. Confirmá los rangos vigentes y sus precios en la <a href="tienda-web.html">tienda web</a>.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="trabajos.html">${Icon('arrow-right')} Siguiente: Trabajos</a>
          `
        },

        {
          id: 'trabajos', name: 'Trabajos', icon: 'briefcase', path: 'pages/trabajos.html',
          description: 'Ganá dinero jugando naturalmente: minando, construyendo, cazando y más con el sistema de Trabajos.',
          keywords: ['trabajos','jobs','job','minero','cazador','constructor','leñador','pescador','experiencia'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('briefcase')}</div>
              <h1>Trabajos</h1>
              <p class="page-hero-desc">Elegí uno o varios oficios y ganá dinero automáticamente mientras jugás de forma normal.</p>
            </div>

            <p>El sistema de <strong>Trabajos</strong> te paga en dinero (y en algunos casos experiencia del trabajo) por acciones que ya hacés en el día a día: picar bloques, construir, talar, cazar mobs, pescar, etc. Cada trabajo tiene sus propios niveles: cuanto más subís, mejor pago recibís por la misma acción.</p>

            <h2 id="empezar">${Icon('rocket')} Cómo empezar</h2>
            <ol class="wiki-steps">
              <li>Ejecutá <code>/jobs browse</code> para ver la lista de trabajos disponibles.</li>
              <li>Uníte a uno con <code>/jobs join &lt;trabajo&gt;</code>.</li>
              <li>Jugá con normalidad: el pago se acredita solo cuando hacés la acción correspondiente.</li>
              <li>Revisá tu progreso con <code>/jobs stats</code>.</li>
            </ol>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>Podés unirte a <strong>varios trabajos a la vez</strong> (dentro del límite del servidor) y combinarlos con tu estilo de juego habitual.</div>
            </div>

            <h2 id="comandos">${Icon('keyboard')} Comandos de Trabajos</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/jobs browse</code><span>Ver todos los trabajos disponibles</span></div>
              <div class="cmd-item"><code>/jobs join &lt;trabajo&gt;</code><span>Unirte a un trabajo.<br><em>Ejemplo: /jobs join Minero</em></span></div>
              <div class="cmd-item"><code>/jobs leave &lt;trabajo&gt;</code><span>Dejar un trabajo</span></div>
              <div class="cmd-item"><code>/jobs info &lt;trabajo&gt;</code><span>Ver los pagos por acción de un trabajo</span></div>
              <div class="cmd-item"><code>/jobs stats</code><span>Ver tu nivel y progreso en tus trabajos actuales</span></div>
              <div class="cmd-item"><code>/jobs top &lt;trabajo&gt;</code><span>Ranking de jugadores en ese trabajo</span></div>
            </div>

            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>Los pagos exactos por acción y los trabajos habilitados pueden variar. Usá <code>/jobs browse</code> en el juego para ver la lista y las tarifas actualizadas.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="misiones.html">${Icon('arrow-right')} Siguiente: Misiones</a>
          `
        },

        {
          id: 'misiones', name: 'Misiones', icon: 'clipboard-list', path: 'pages/misiones.html',
          description: 'Misiones diarias, semanales y mensuales con recompensas en dinero.',
          keywords: ['misiones','quests','diarias','semanales','mensuales','recompensas','objetivos'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('clipboard-list')}</div>
              <h1>Misiones</h1>
              <p class="page-hero-desc">Cumplí objetivos jugando normalmente y ganá dinero extra con <code>/misiones</code>.</p>
            </div>

            <p>El sistema de misiones rota un set de objetivos <strong>igual para todos los jugadores del servidor</strong>, con tres categorías según su duración:</p>

            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Categoría</th><th>Misiones activas a la vez</th><th>Rotan</th></tr></thead>
                <tbody>
                  <tr><td>Diarias</td><td>5</td><td>Todos los días</td></tr>
                  <tr><td>Semanales</td><td>10</td><td>Todos los lunes</td></tr>
                  <tr><td>Mensuales</td><td>15</td><td>El día 1 de cada mes</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="objetivos">${Icon('target')} Tipos de objetivo</h2>
            <p>Las misiones pueden pedirte picar bloques, talar árboles, pescar, matar mobs específicos, caminar, nadar, cosechar cultivos, criar animales, cocinar, fabricar ítems, encantar, ganar dinero, gastar dinero o vender ítems. Algunos ejemplos reales del servidor:</p>
            <div class="item-grid">
              <div class="item-chip">${Icon('pickaxe')} Rompé 3 menas de diamante — $500</div>
              <div class="item-chip">${Icon('wheat')} Cosechá 60 trigos maduros — $350</div>
              <div class="item-chip">${Icon('footprints')} Caminá 2.000 bloques — $200</div>
              <div class="item-chip">${Icon('egg')} Criá 8 gallinas — $300</div>
              <div class="item-chip">${Icon('fish')} Pescá 15 veces — $200</div>
            </div>

            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>El sistema tiene protección <strong>anti-exploit</strong>: si colocás un bloque vos mismo y lo volvés a romper, no cuenta para misiones de picar, talar o cosechar. Tiene que ser un bloque generado naturalmente por el mundo.</div>
            </div>

            <h2 id="comandos">${Icon('keyboard')} Comandos de Misiones</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/misiones</code><span>Abrir el menú de misiones activas</span></div>
              <div class="cmd-item"><code>/misiones ayuda</code><span>Ver la ayuda del comando</span></div>
              <div class="cmd-item"><code>/misiones reclamar &lt;id&gt;</code><span>Reclamar la recompensa de una misión completada.<br><em>Ejemplo: /misiones reclamar 12</em></span></div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="kits.html">${Icon('arrow-right')} Siguiente: Kits</a>
          `
        },

        {
          id: 'kits', name: 'Kits', icon: 'backpack', path: 'pages/kits.html',
          description: 'Kits de equipamiento reclamables, desde el kit de bienvenida hasta kits exclusivos de rango.',
          keywords: ['kits','kit','inicio','equipamiento','herramientas'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('backpack')}</div>
              <h1>Kits</h1>
              <p class="page-hero-desc">Paquetes de ítems listos para reclamar con un solo comando.</p>
            </div>

            <p>Los kits son conjuntos de ítems predefinidos que podés reclamar directamente en tu inventario. Algunos están disponibles para todos, otros son exclusivos de ciertos rangos, y la mayoría tiene un <strong>tiempo de reutilización (cooldown)</strong> antes de poder volver a pedirlos.</p>

            <h2 id="comandos">${Icon('keyboard')} Comandos de Kits</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/kit inicio</code><span>Reclamar el kit de bienvenida (una sola vez)</span></div>
              <div class="cmd-item"><code>/kits</code><span>Ver todos los kits disponibles en un menú</span></div>
              <div class="cmd-item"><code>/kit &lt;nombre&gt;</code><span>Reclamar un kit específico por su nombre.<br><em>Ejemplo: /kit minero</em></span></div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>Si un kit aparece bloqueado en el menú, significa que necesitás un rango específico para desbloquearlo — revisá la <a href="tienda-web.html">tienda web</a>.</div>
            </div>
            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>Si tu inventario está lleno al reclamar un kit, puede que no se entreguen todos los ítems. Hacete espacio antes de usar <code>/kit</code>.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="crates.html">${Icon('arrow-right')} Siguiente: Crates y Llaves</a>
          `
        },

        {
          id: 'crates', name: 'Crates y Llaves', icon: 'gift', path: 'pages/crates.html',
          description: 'Cajas de recompensas y cómo conseguir sus llaves votando, en la tienda o ganando el KOTH.',
          keywords: ['crates','cajas','llaves','keys','mythic','legendary','epic','rare','vote','koth'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('gift')}</div>
              <h1>Crates y Llaves</h1>
              <p class="page-hero-desc">Cajas de recompensas ubicadas en el spawn. Cada una necesita su propia llave para abrirse.</p>
            </div>

            <p>Las crates son bloques especiales, normalmente ubicados en el spawn, que entregan una recompensa aleatoria al abrirlos. Para abrir una necesitás tener al menos una <strong>llave del mismo tipo</strong> — el contador de llaves que te quedan se ve directamente sobre la caja.</p>

            <h2 id="tipos">${Icon('tag')} Tipos de caja</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Caja</th><th>Cómo se consigue la llave</th></tr></thead>
                <tbody>
                  <tr><td>${Dot('red')} Mythic</td><td>Ganando el evento <a href="koth.html">KOTH</a></td></tr>
                  <tr><td>${Dot('orange')} Legendary</td><td>Comprando en la <a href="tienda-web.html">tienda web</a></td></tr>
                  <tr><td>${Dot('purple')} Epic</td><td>Comprando en la <a href="tienda-web.html">tienda web</a></td></tr>
                  <tr><td>${Dot('blue')} Rare</td><td>Comprando en la <a href="tienda-web.html">tienda web</a></td></tr>
                  <tr><td>${Dot('white')} Vote</td><td>Votando por el servidor (<code>/vote</code>)</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="como-abrir">${Icon('unlock')} Cómo abrir una caja</h2>
            <ol class="wiki-steps">
              <li>Conseguí al menos una llave del tipo que querés abrir (votando, en la tienda o ganando el KOTH).</li>
              <li>Andá hasta el bloque de la caja correspondiente, normalmente en el spawn.</li>
              <li>Click derecho sobre la caja para abrirla — si tenés llaves, se abre sola y te muestra el premio.</li>
              <li>Click izquierdo sobre la caja para ver la lista de premios posibles antes de abrir.</li>
            </ol>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>No hace falta tener la llave en la mano: el sistema descuenta automáticamente una llave de tu cuenta al abrir la caja.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="clanes.html">${Icon('arrow-right')} Siguiente: Clanes</a>
            <ul class="wiki-list" style="margin-top:12px;">
              <li><a href="koth.html">KOTH</a> — cómo ganar la llave Mythic.</li>
              <li><a href="eventos.html">Eventos y Votaciones</a> — votá todos los días por llaves Vote gratis.</li>
            </ul>
          `
        },

      ]
    },

    /* ═══════════ 4. COMUNIDAD Y PVP ═══════════ */
    {
      id: 'comunidad-pvp', name: 'Comunidad y PvP', icon: 'handshake', color: '#8b6bf2', open: false,
      pages: [

        {
          id: 'clanes', name: 'Clanes', icon: 'flag', path: 'pages/clanes.html',
          description: 'Creá tu clan, invitá amigos, aliate con otros clanes y subí en el ranking.',
          keywords: ['clanes','clan','tag','alianza','aliados','friendly fire','ranking de clanes'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('flag')}</div>
              <h1>Clanes</h1>
              <p class="page-hero-desc">Formá equipo con tus amigos, defendé tu tag y escalá el ranking del servidor.</p>
            </div>

            <p>Un clan es un grupo de jugadores con un nombre y un tag propios que aparece junto a tu nombre en el juego. Crear un clan es <strong>gratis</strong>.</p>

            <h2 id="datos">${Icon('bar-chart')} Datos del sistema</h2>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Costo de creación</span><span class="info-val">Gratis</span></div>
              <div class="info-card-row"><span class="info-label">Nombre del clan</span><span class="info-val">3 a 8 caracteres</span></div>
              <div class="info-card-row"><span class="info-label">Tag del clan</span><span class="info-val">2 a 6 caracteres, único por servidor</span></div>
              <div class="info-card-row"><span class="info-label">Invitaciones pendientes</span><span class="info-val">Hasta 10 a la vez, expiran en 60s</span></div>
              <div class="info-card-row"><span class="info-label">Fuego amigo</span><span class="info-val">Desactivado por defecto</span></div>
              <div class="info-card-row"><span class="info-label">Alianzas</span><span class="info-val">1 alianza activa por clan</span></div>
              <div class="info-card-row"><span class="info-label">Disolver el clan</span><span class="info-val">Requiere confirmar el comando dos veces en 15s</span></div>
            </div>

            <h2 id="alianzas">${Icon('handshake')} Alianzas</h2>
            <p>Dos clanes pueden aliarse entre sí. Al estar aliados, sus miembros no se dañan entre ellos en PvP salvo que ambos clanes activen el fuego amigo de alianza por su cuenta.</p>

            <h2 id="ranking">${Icon('trophy')} Ranking de clanes</h2>
            <p>Todos los días se actualiza un ranking de clanes basado en la suma del dinero de todos sus miembros.</p>

            <h2 id="comandos">${Icon('keyboard')} Comandos de Clanes</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/clan create &lt;nombre&gt; &lt;tag&gt;</code><span>Crear un clan nuevo.<br><em>Ejemplo: /clan create Titanes TTN</em></span></div>
              <div class="cmd-item"><code>/clan invite &lt;jugador&gt;</code><span>Invitar a un jugador a tu clan.<br><em>Ejemplo: /clan invite Xavier27</em></span></div>
              <div class="cmd-item"><code>/clan accept</code><span>Aceptar una invitación pendiente</span></div>
              <div class="cmd-item"><code>/clan kick &lt;jugador&gt;</code><span>Expulsar a un miembro del clan</span></div>
              <div class="cmd-item"><code>/clan ally &lt;clan&gt;</code><span>Proponer una alianza a otro clan</span></div>
              <div class="cmd-item"><code>/clan info</code><span>Ver información de tu clan</span></div>
              <div class="cmd-item"><code>/clan top</code><span>Ver el ranking de clanes</span></div>
              <div class="cmd-item"><code>/clan disband</code><span>Disolver tu clan (pide confirmación)</span></div>
            </div>
            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>Los subcomandos exactos pueden variar levemente. Escribí <code>/clan help</code> en el juego para ver el listado actualizado.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="rangos.html">${Icon('arrow-right')} Siguiente: Rangos Sociales</a>
          `
        },

        {
          id: 'rangos', name: 'Rangos Sociales', icon: 'tag', path: 'pages/rangos.html',
          description: 'Rangos sociales otorgados por el staff, distintos a los rangos donador de la tienda.',
          keywords: ['rangos','rango','media','booster','helper','mod','staff','luckperms'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('tag')}</div>
              <h1>Rangos Sociales</h1>
              <p class="page-hero-desc">Distinciones que otorga el staff por contenido, apoyo a la comunidad o labor de moderación.</p>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('info')}</span>
              <div>Estos rangos <strong>no se compran</strong>. Si buscás rangos con beneficios dentro del juego (protecciones extra, kits, cosméticos), esos están en la <a href="tienda-web.html">Tienda Web</a>.</div>
            </div>

            <h2 id="lista">${Icon('clipboard-list')} Rangos disponibles</h2>
            <div class="rank-grid">
              <div class="rank-item rank-elite"><span class="rank-badge">Media</span><span class="rank-desc">Creadores de contenido oficiales</span></div>
              <div class="rank-item rank-elite"><span class="rank-badge">JrMedia</span><span class="rank-desc">Creadores de contenido en crecimiento</span></div>
              <div class="rank-item rank-vip"><span class="rank-badge">Famoso</span><span class="rank-desc">Personalidades invitadas o reconocidas</span></div>
              <div class="rank-item rank-member"><span class="rank-badge">Booster</span><span class="rank-desc">Por boostear el Discord del servidor</span></div>
              <div class="rank-item rank-mvp"><span class="rank-badge">Soporte</span><span class="rank-desc">Equipo de soporte en Discord</span></div>
              <div class="rank-item rank-mvp"><span class="rank-badge">Helper</span><span class="rank-desc">Ayudantes del staff dentro del juego</span></div>
              <div class="rank-item rank-mvp"><span class="rank-badge">Mod</span><span class="rank-desc">Moderadores con permisos de sanción</span></div>
            </div>

            <h2 id="como-conseguir">${Icon('star')} Cómo conseguir un rango social</h2>
            <ul class="wiki-list">
              <li><strong>Media / JrMedia:</strong> contactá al staff si creás contenido sobre PlanetMC (YouTube, TikTok, streams).</li>
              <li><strong>Booster:</strong> se otorga automáticamente al boostear el servidor de Discord.</li>
              <li><strong>Soporte / Helper / Mod:</strong> se obtienen postulándote al staff. Ver <a href="soporte.html">Soporte y Discord</a>.</li>
            </ul>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="chat.html">${Icon('arrow-right')} Siguiente: Chat: Tags y Canales</a>
          `
        },

        {
          id: 'chat', name: 'Chat: Tags y Canales', icon: 'message-circle', path: 'pages/chat.html',
          description: 'Personalizá tu tag de chat y usá los distintos canales de comunicación del servidor.',
          keywords: ['chat','tags','canales','colores','alonsotags','chatchannel'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('message-circle')}</div>
              <h1>Chat: Tags y Canales</h1>
              <p class="page-hero-desc">Personalizá cómo se ve tu nombre en el chat y elegí en qué canal hablar.</p>
            </div>

            <h2 id="tags">${Icon('tag')} Tags de chat</h2>
            <p>Podés desbloquear y equipar <strong>tags</strong> (etiquetas decorativas) que aparecen junto a tu nombre en el chat. Algunos se consiguen jugando, otros vienen incluidos en los rangos donador de la <a href="tienda-web.html">tienda web</a>.</p>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/tags</code><span>Ver y equipar tus tags disponibles</span></div>
            </div>

            <h2 id="canales">${Icon('radio')} Canales de chat</h2>
            <p>El servidor separa la conversación en distintos canales para que el chat general no se sature. Por ejemplo, podés tener un canal para tu clan o zona, además del canal global.</p>
            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>La lista exacta de canales y su comando de cambio puede variar. Escribí <code>/help chat</code> en el juego o preguntá en <a href="soporte.html">Soporte</a> si no encontrás el canal que buscás.</div>
            </div>

            <h2 id="normas">${Icon('scroll')} Reglas del chat</h2>
            <p>Todo el chat del servidor está sujeto a las <a href="normas.html">Normas del Servidor</a>: nada de spam, publicidad no autorizada ni lenguaje ofensivo.</p>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="pvp.html">${Icon('arrow-right')} Siguiente: Sistema de PvP</a>
          `
        },

        {
          id: 'pvp-sistema', name: 'Sistema de PvP', icon: 'swords', path: 'pages/pvp.html',
          description: 'Cómo activar tu PvP, el mundo PvP y las reglas de combate del servidor.',
          keywords: ['pvp','combate','toggle','mundo pvp','combat tag','perla de ender','elitros'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('swords')}</div>
              <h1>Sistema de PvP</h1>
              <p class="page-hero-desc">PlanetMC usa un sistema de PvP opcional por jugador, más un mundo dedicado 100% PvP.</p>
            </div>

            <h2 id="toggle">${Icon('shuffle')} Activar o desactivar tu PvP</h2>
            <p>Por defecto, tu PvP está <strong>activado</strong>. Podés desactivarlo en cualquier momento fuera del mundo PvP para que nadie pueda golpearte, ni vos a otros.</p>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/pvp</code><span>Activar o desactivar tu PvP</span></div>
            </div>
            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>Para que haya daño PvP entre dos jugadores, <strong>ambos</strong> deben tener el PvP activado, y la zona debe permitirlo.</div>
            </div>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('shield')}</span>
              <div>Dentro de una <a href="protecciones.html">protección de terreno</a>, el daño PvP normalmente queda bloqueado salvo que el dueño lo habilite con el flag <code>pvp</code> — no confíes en eso dentro del mundo PvP, donde el combate está siempre activo.</div>
            </div>

            <h2 id="mundo-pvp">${Icon('globe')} Mundo PvP</h2>
            <p>Existe un mundo dedicado exclusivamente al combate. Mientras estés dentro, tu PvP queda <strong>siempre activado</strong> y no podés desactivarlo — al salir, vuelve a tu preferencia normal.</p>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('shield')}</span>
              <div>Si todavía tenés la <a href="primeros-pasos.html">Protección de Novato</a> activa y entrás al mundo PvP, se desactiva automáticamente y para siempre.</div>
            </div>

            <h2 id="combate">${Icon('droplet')} Combat tag</h2>
            <p>Al recibir o dar un golpe entrás en <strong>combate</strong> durante 20 segundos. Mientras estás en combate:</p>
            <ul class="wiki-list">
              <li>No podés usar la mayoría de los comandos.</li>
              <li>No podés volar ni planear con élitros.</li>
              <li>Las perlas de ender tienen un cooldown extra de 10 segundos.</li>
              <li>Si te desconectás estando en combate, tu personaje muere (anti combat-log).</li>
            </ul>

            <h2 id="restricciones">${Icon('ban')} Restricciones dentro del mundo PvP</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Objeto / acción</th><th>Restricción</th></tr></thead>
                <tbody>
                  <tr><td>Élitros</td><td>Deshabilitados dentro del mundo PvP</td></tr>
                  <tr><td>Maza (Mace)</td><td>Deshabilitada dentro del mundo PvP</td></tr>
                  <tr><td>Manzana dorada</td><td>Cooldown de 1 segundo entre usos</td></tr>
                  <tr><td>Manzana dorada encantada</td><td>Cooldown de 30 segundos entre usos</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="koth.html">${Icon('arrow-right')} Siguiente: KOTH</a>
          `
        },

        {
          id: 'koth', name: 'KOTH — Rey de la Colina', icon: 'crown', path: 'pages/koth.html',
          description: 'Evento de captura de punto: defendé la zona el tiempo suficiente para ganar.',
          keywords: ['koth','rey de la colina','evento','captura','pot','mythic'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('crown')}</div>
              <h1>KOTH — Rey de la Colina</h1>
              <p class="page-hero-desc">Peleá por controlar el punto y quedate ahí el tiempo suficiente para ganar la recompensa.</p>
            </div>

            <p><strong>KOTH</strong> (King of the Hill) es un evento de captura de punto dentro del <a href="pvp.html">mundo PvP</a>: quien logre mantenerse parado en la zona marcada, sin ser interrumpido por otro jugador, durante el tiempo de captura completo, gana el evento.</p>

            <h2 id="como-jugar">${Icon('gamepad')} Cómo participar</h2>
            <ol class="wiki-steps">
              <li>Enterate del horario del próximo KOTH por los anuncios del servidor o en Discord.</li>
              <li>Andá hasta el punto marcado dentro del mundo PvP.</li>
              <li>Parate dentro de la zona: la barra de captura empieza a llenarse.</li>
              <li>Si otro jugador entra a la zona mientras vos la capturás, la barra se detiene o pasa a su favor.</li>
              <li>Quien complete la barra de captura primero, gana.</li>
            </ol>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('trophy')}</span>
              <div><strong>Premio:</strong> ganar el KOTH te entrega una llave de la caja <strong>Mythic</strong>, la de mejores recompensas del servidor. Ver <a href="crates.html">Crates y Llaves</a>.</div>
            </div>

            <h2 id="comandos">${Icon('keyboard')} Comando</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/koth</code><span>Ver información del KOTH activo o el próximo horario</span></div>
            </div>

            <div class="alert alert-todo">
              <span class="alert-icon">${Icon('wrench')}</span>
              <div>El horario de los eventos de KOTH puede cambiar. Confirmalo siempre en los anuncios del servidor o en Discord antes de organizarte para participar.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="eventos.html">${Icon('arrow-right')} Siguiente: Eventos y Votaciones</a>
          `
        },

        {
          id: 'eventos', name: 'Eventos y Votaciones', icon: 'trophy', path: 'pages/eventos.html',
          description: 'Cómo enterarte de los eventos del servidor y qué te da votar todos los días.',
          keywords: ['eventos','votar','vote','voto','recompensas','40servidoresmc'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('trophy')}</div>
              <h1>Eventos y Votaciones</h1>
              <p class="page-hero-desc">Actividades recurrentes para toda la comunidad, y la forma más fácil de conseguir recompensas gratis todos los días.</p>
            </div>

            <h2 id="votar">${Icon('vote')} Votá por el servidor</h2>
            <p>Votar es gratis, toma menos de un minuto y te da una llave de la caja <strong>Vote</strong> como recompensa.</p>
            <ol class="wiki-steps">
              <li>Ejecutá <code>/vote</code> en el juego para ver los links de votación.</li>
              <li>Votá en la página que se abre.</li>
              <li>Volvé al servidor: la recompensa se acredita sola.</li>
            </ol>
            <a class="wiki-btn wiki-btn-primary" href="https://www.40servidoresmc.es/planetmc/votar" target="_blank" rel="noopener">${Icon('vote')} Votar ahora</a>

            <h2 id="recurrentes">${Icon('repeat')} Eventos recurrentes</h2>
            <div class="feature-grid">
              <div class="feature-card"><div class="feature-icon">${Icon('crown')}</div><div class="feature-title">KOTH</div><div class="feature-desc">Capturá el punto y ganá una llave Mythic. Ver <a href="koth.html">KOTH</a>.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('clipboard-list')}</div><div class="feature-title">Misiones</div><div class="feature-desc">Objetivos diarios, semanales y mensuales con dinero de recompensa.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('vote')}</div><div class="feature-title">Votaciones</div><div class="feature-desc">Llaves gratis todos los días solo por votar.</div></div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('megaphone')}</span>
              <div>Los anuncios de eventos especiales (más allá de los recurrentes) se publican en el <a href="soporte.html">Discord oficial</a>. Uníte para no perderte ninguno.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="tienda-web.html">${Icon('arrow-right')} Siguiente: Tienda Web y Rangos</a>
          `
        },

      ]
    },

    /* ═══════════ 5. RANGOS DONADOR ═══════════ */
    {
      id: 'rangos-donador', name: 'Rangos Donador', icon: 'shopping-bag', color: '#e8823a', open: false,
      pages: [

        {
          id: 'tienda-web', name: 'Tienda Web y Rangos', icon: 'gem', path: 'pages/tienda-web.html',
          description: 'Rangos donador, llaves y beneficios exclusivos disponibles en la tienda oficial.',
          keywords: ['tienda','tienda web','tebex','comprar','rangos','donador','vip','mvp'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('gem')}</div>
              <h1>Tienda Web y Rangos</h1>
              <p class="page-hero-desc">Rangos donador, llaves de crates y beneficios exclusivos que ayudan a mantener el servidor en línea. Es opcional: nada de esto es necesario para jugar y progresar.</p>
            </div>

            <p>La tienda oficial de PlanetMC funciona a través de <strong>Tebex</strong>, la plataforma de pagos verificada del servidor. Ahí vas a encontrar los rangos donador, kits exclusivos y llaves de las cajas Legendary, Epic y Rare.</p>

            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>Comprá <strong>únicamente</strong> desde el link oficial de abajo. El servidor no vende rangos por fuera de Tebex, ni por Discord, ni por transferencias directas a una persona.</div>
            </div>

            <a class="wiki-btn wiki-btn-primary" href="https://planetmc.tebex.io/" target="_blank" rel="noopener">${Icon('shopping-bag')} Ir a la tienda oficial</a>

            <h2 id="que-incluye">${Icon('gift')} Qué vas a encontrar</h2>
            <div class="feature-grid">
              <div class="feature-card"><div class="feature-icon">${Icon('crown')}</div><div class="feature-title">Rangos donador</div><div class="feature-desc">Beneficios permanentes: más protecciones, más bóvedas y kits exclusivos.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('key')}</div><div class="feature-title">Llaves de crates</div><div class="feature-desc">Legendary, Epic y Rare — ver <a href="crates.html">Crates y Llaves</a>.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('tag')}</div><div class="feature-title">Tags y cosméticos</div><div class="feature-desc">Personalización de tu nombre en el chat.</div></div>
              <div class="feature-card"><div class="feature-icon">${Icon('headphones')}</div><div class="feature-title">Soporte prioritario</div><div class="feature-desc">Atención preferente para compradores en Discord.</div></div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>Los precios y el contenido exacto de cada paquete cambian con el tiempo — la información siempre actualizada está en la tienda oficial, no la copiamos acá para evitar mostrarte datos viejos.</div>
            </div>

            <h2 id="soporte">${Icon('ticket')} ¿Problemas con una compra?</h2>
            <p>Si tuviste un problema con un pago o no recibiste tu compra, abrí un ticket en <a href="soporte.html">Soporte y Discord</a> con tu usuario y el comprobante de la compra.</p>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="comandos.html">${Icon('arrow-right')} Siguiente: Comandos Principales</a>
            <ul class="wiki-list" style="margin-top:12px;">
              <li><a href="rangos.html">Rangos Sociales</a> — no confundir con los rangos donador de acá.</li>
            </ul>
          `
        },

      ]
    },

    /* ═══════════ 6. AYUDA ═══════════ */
    {
      id: 'ayuda', name: 'Ayuda', icon: 'life-buoy', color: '#ff5c6a', open: false,
      pages: [

        {
          id: 'comandos', name: 'Comandos Principales', icon: 'keyboard', path: 'pages/comandos.html',
          description: 'Referencia rápida con los comandos más usados de cada sistema del servidor.',
          keywords: ['comandos','lista','cheatsheet','ayuda','help','comandos principales'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('keyboard')}</div>
              <h1>Comandos Principales</h1>
              <p class="page-hero-desc">Chuleta rápida con los comandos más usados. Cada sistema tiene su propia página con el detalle completo.</p>
            </div>

            <h2 id="basicos">${Icon('compass')} Básicos</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Volver al spawn</span></div>
              <div class="cmd-item"><code>/sethome [nombre]</code><span>Guardar un hogar</span></div>
              <div class="cmd-item"><code>/home [nombre]</code><span>Ir a un hogar guardado</span></div>
              <div class="cmd-item"><code>/tpa &lt;jugador&gt;</code><span>Pedir teletransporte a un jugador</span></div>
              <div class="cmd-item"><code>/tpaccept</code><span>Aceptar una solicitud de teletransporte</span></div>
              <div class="cmd-item"><code>/msg &lt;jugador&gt; &lt;mensaje&gt;</code><span>Mensaje privado</span></div>
            </div>

            <h2 id="economia">${Icon('coins')} Economía y Tiendas</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/shop</code><span>Abrir la tienda del servidor</span></div>
              <div class="cmd-item"><code>/sell all</code><span>Vender todo lo vendible del inventario</span></div>
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo</span></div>
              <div class="cmd-item"><code>/pay &lt;jugador&gt; &lt;monto&gt;</code><span>Enviar dinero a otro jugador</span></div>
              <div class="cmd-item"><code>/baltop</code><span>Ranking de jugadores más ricos</span></div>
              <div class="cmd-item"><code>/ah</code><span>Abrir el mercado entre jugadores</span></div>
              <div class="cmd-item"><code>/axvault</code><span>Abrir tus bóvedas de almacenamiento</span></div>
            </div>

            <h2 id="progreso">${Icon('trending-up')} Progreso</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/jobs join &lt;trabajo&gt;</code><span>Unirte a un trabajo</span></div>
              <div class="cmd-item"><code>/jobs stats</code><span>Ver tu progreso en tus trabajos</span></div>
              <div class="cmd-item"><code>/misiones</code><span>Abrir el menú de misiones</span></div>
              <div class="cmd-item"><code>/misiones reclamar &lt;id&gt;</code><span>Reclamar una misión completada</span></div>
              <div class="cmd-item"><code>/kit &lt;nombre&gt;</code><span>Reclamar un kit</span></div>
              <div class="cmd-item"><code>/crates</code><span>Ver tus cajas y llaves</span></div>
            </div>

            <h2 id="terreno">${Icon('shield')} Terreno y protección</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/ps</code><span>Abrir el menú de protecciones</span></div>
              <div class="cmd-item"><code>/ps info</code><span>Ver información de la protección donde estás parado</span></div>
              <div class="cmd-item"><code>/ps add &lt;jugador&gt;</code><span>Agregar un jugador a tu protección</span></div>
            </div>

            <h2 id="comunidad">${Icon('handshake')} Comunidad y PvP</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/clan</code><span>Menú principal de clanes</span></div>
              <div class="cmd-item"><code>/pvp</code><span>Activar o desactivar tu PvP</span></div>
              <div class="cmd-item"><code>/koth</code><span>Ver información del KOTH activo</span></div>
              <div class="cmd-item"><code>/vote</code><span>Ver los links de votación</span></div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('lightbulb')}</span>
              <div>¿Necesitás el detalle completo de alguno de estos sistemas? Cada categoría de la barra lateral tiene su propia guía a fondo.</div>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="faq.html">${Icon('arrow-right')} Siguiente: Preguntas Frecuentes</a>
          `
        },

        {
          id: 'faq', name: 'Preguntas Frecuentes', icon: 'help-circle', path: 'pages/faq.html',
          description: 'Respuestas rápidas a las dudas más comunes sobre PlanetMC.',
          keywords: ['faq','preguntas','frecuentes','dudas','ayuda','premium','no premium','crossplay','gratis'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('help-circle')}</div>
              <h1>Preguntas Frecuentes</h1>
              <p class="page-hero-desc">Las dudas más comunes de jugadores nuevos, respondidas rápido. Si la tuya no está acá, preguntá en <a href="soporte.html">Soporte</a>.</p>
            </div>

            <h2 id="general">${Icon('globe')} General</h2>
            <div class="faq-list">
              <details class="faq-item"><summary>¿PlanetMC es gratis?</summary><p>Sí, unirte es 100% gratis. Solo necesitás Minecraft Java o Bedrock Edition y conectarte a <strong>planetmc.net</strong>.</p></details>
              <details class="faq-item"><summary>¿Es compatible con cuentas No Premium?</summary><p>Sí, PlanetMC acepta cuentas Premium y No Premium en Java Edition.</p></details>
              <details class="faq-item"><summary>¿Puedo jugar desde consola o celular?</summary><p>Sí. Usando Bedrock Edition podés entrar desde Xbox, PlayStation, Nintendo Switch, Android e iOS. Mirá la guía de <a href="ingresar-bedrock.html">Bedrock</a>.</p></details>
              <details class="faq-item"><summary>¿Los jugadores de Java y Bedrock juegan juntos?</summary><p>Sí, el servidor tiene crossplay total entre ambas ediciones gracias a Geyser.</p></details>
              <details class="faq-item"><summary>¿Qué versión de Minecraft necesito?</summary><p>La versión recomendada es <strong>1.21.x</strong>. Versiones más viejas o muy nuevas pueden dar problemas de conexión.</p></details>
            </div>

            <h2 id="cuenta">${Icon('user')} Cuenta y progreso</h2>
            <div class="faq-list">
              <details class="faq-item"><summary>¿Pierdo mi inventario si muero al empezar?</summary><p>No durante tus primeras 24 horas: tenés <strong>Protección de Novato</strong> activa, que conserva tu inventario y experiencia si morís. Ver <a href="primeros-pasos.html">Primeros Pasos</a>.</p></details>
              <details class="faq-item"><summary>¿Cómo protejo mi base?</summary><p>Con el sistema de protecciones (<code>/ps</code>). Sin protección, el servidor no puede recuperar lo que te roben o griefeen. Ver <a href="protecciones.html">Protecciones de Terreno</a>.</p></details>
              <details class="faq-item"><summary>¿Cómo gano dinero?</summary><p>Vendiendo recursos en las <a href="tiendas.html">Tiendas</a>, trabajando con <code>/jobs</code>, completando <code>/misiones</code> y votando por el servidor. Ver <a href="economia.html">Economía</a>.</p></details>
              <details class="faq-item"><summary>¿Cómo consigo un rango?</summary><p>Hay rangos sociales que otorga el staff (ver <a href="rangos.html">Rangos</a>) y rangos donador que se compran en la <a href="tienda-web.html">tienda web</a>.</p></details>
            </div>

            <h2 id="problemas">${Icon('wrench')} Problemas comunes</h2>
            <div class="faq-list">
              <details class="faq-item"><summary>No me puedo conectar al servidor</summary><p>Verificá que la IP sea exactamente <strong>planetmc.net</strong> y que estés en la versión correcta. Revisá la guía de <a href="ingresar-java.html">Java</a> o <a href="ingresar-bedrock.html">Bedrock</a> según tu plataforma.</p></details>
              <details class="faq-item"><summary>Me banearon y creo que fue un error</summary><p>Podés apelar abriendo un ticket en Discord. Ver <a href="soporte.html">Soporte y Discord</a>.</p></details>
              <details class="faq-item"><summary>¿Dónde reporto un bug o a un jugador?</summary><p>En el Discord oficial, en los canales de soporte. Ver <a href="soporte.html">Soporte y Discord</a>.</p></details>
            </div>

            <h2 id="siguiente">${Icon('link')} Seguí con</h2>
            <a class="wiki-btn wiki-btn-primary" href="soporte.html">${Icon('arrow-right')} Siguiente: Soporte y Discord</a>
          `
        },

        {
          id: 'soporte', name: 'Soporte y Discord', icon: 'ticket', path: 'pages/soporte.html',
          description: 'Cómo pedir ayuda, apelar una sanción o postularte al staff.',
          keywords: ['soporte','discord','ticket','ayuda','staff','aplicar','postular','apelar','ban','reportar','bug'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">${Icon('ticket')}</div>
              <h1>Soporte y Discord</h1>
              <p class="page-hero-desc">Canales oficiales para pedir ayuda, reportar problemas o sumarte al equipo.</p>
            </div>

            <h2 id="discord">${Icon('message-circle')} Discord oficial</h2>
            <p>El Discord de PlanetMC es el canal principal de comunicación: anuncios, soporte, eventos y contacto directo con el staff.</p>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Servidor de Discord</span><span class="info-val"><a href="https://discord.gg/HvcPfgXVHf" target="_blank" rel="noopener">discord.gg/HvcPfgXVHf</a></span></div>
            </div>
            <a class="wiki-btn discord-btn" href="https://discord.gg/HvcPfgXVHf" target="_blank" rel="noopener">${Icon('message-circle')} Unirme al Discord</a>

            <h2 id="tickets">${Icon('ticket')} Tickets de soporte</h2>
            <p>Para dudas puntuales, problemas técnicos o reportar a otro jugador, abrí un ticket dentro del Discord.</p>
            <ol class="wiki-steps">
              <li>Entrá al Discord de PlanetMC.</li>
              <li>Buscá el canal o botón de <strong>abrir ticket</strong>.</li>
              <li>Explicá tu problema con la mayor cantidad de detalles posible (capturas, nombre de jugador, hora aproximada).</li>
              <li>Esperá a que un miembro del staff te responda.</li>
            </ol>

            <h2 id="apelar">${Icon('scale')} Apelar una sanción</h2>
            <div class="alert alert-info">
              <span class="alert-icon">${Icon('mail')}</span>
              <div>Si creés que un mute o ban fue injusto, abrí un ticket de <strong>apelación</strong> en Discord explicando tu caso. El staff revisa cada apelación de forma individual.</div>
            </div>

            <h2 id="staff">${Icon('star')} Postularte al staff</h2>
            <p>Si querés sumarte al equipo de moderación, completá el formulario de postulación oficial.</p>
            <a class="wiki-btn wiki-btn-primary" href="https://forms.gle/po1fM57gG9oQtKCc7" target="_blank" rel="noopener">${Icon('star')} Aplicar al staff</a>
            <div class="alert alert-warn">
              <span class="alert-icon">${Icon('alert-triangle')}</span>
              <div>Desconfiá de cualquiera que te ofrezca el rango de staff a cambio de dinero o fuera de este formulario oficial: es una estafa.</div>
            </div>

            <h2 id="relacionado">${Icon('help-circle')} Relacionado</h2>
            <ul class="wiki-list">
              <li>¿Tenés una duda general? Revisá primero las <a href="faq.html">Preguntas Frecuentes</a>.</li>
              <li>¿No sabés qué normas rigen el servidor? Leé las <a href="normas.html">Normas del Servidor</a>.</li>
            </ul>

            <div class="alert alert-info">
              <span class="alert-icon">${Icon('party-popper')}</span>
              <div>¡Listo! Con esto ya recorriste toda la wiki. Volvé cuando quieras desde el buscador de la barra lateral.</div>
            </div>
          `
        },

      ]
    },

  ] // fin categories

}; // fin WIKI_DATA
