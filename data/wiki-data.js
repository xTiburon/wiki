/* ═══════════════════════════════════════════════════════════════
   wiki-data.js  —  Fuente CENTRAL de datos y contenido
   PlanetMC Wiki
   ⚠️ TODO el contenido de las páginas vive aquí.
   Las páginas HTML son solo plantillas vacías.
   ═══════════════════════════════════════════════════════════════ */

const WIKI_DATA = {

  /* ── Información global del sitio ──────────────────────────── */
  site: {
    name:        'PlanetMC',
    wikiTitle:   'Wiki Oficial',
    tagline:     'Tu guía completa del servidor',
    javaIP:      'play.planetmc.net',
    bedrockIP:   'play.planetmc.net',
    bedrockPort: '19132',
    discordURL:  'https://discord.gg/planetmc',
    shopURL:     'https://tienda.planetmc.net',
    mainURL:     'https://planetmc.net',
    version:     '1.21.x',
  },

  /* ── Navbar superior ────────────────────────────────────────── */
  navLinks: [
    { name: 'Inicio',  url: 'https://planetmc.net',          external: true  },
    { name: 'Wiki',    url: 'index.html',                    external: false },
    { name: 'Tienda',  url: 'https://tienda.planetmc.net',   external: true  },
    { name: 'Discord', url: 'https://discord.gg/planetmc',   external: true, icon: 'discord' },
  ],

  /* ══════════════════════════════════════════════════════════════
     CATEGORÍAS Y PÁGINAS
     Cada página tiene:
       id          → identificador único
       name        → nombre en el sidebar
       path        → ruta del archivo HTML (relativa a la raíz)
       icon        → emoji que aparece en el sidebar
       description → descripción corta (usada en búsqueda y home)
       keywords    → palabras clave adicionales para la búsqueda
       content     → TODO el HTML de la página (inyectado dinámicamente)
     ══════════════════════════════════════════════════════════════ */
  categories: [

    /* ════════════════════════════════════════
       CATEGORÍA: GENERAL
       ════════════════════════════════════════ */
    {
      id:    'general',
      name:  'General',
      icon:  '🌐',
      color: '#00e5ff',
      open:  true,
      pages: [

        /* ── Bienvenida ───────────────────── */
        {
          id:          'bienvenida',
          name:        'Bienvenida',
          icon:        '🏠',
          path:        'pages/general/bienvenida.html',
          description: 'Punto de inicio para descubrir todo lo que ofrece el servidor PlanetMC.',
          keywords:    ['bienvenida','inicio','introduccion','empezar','nuevo','jugador','planetmc','survival'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">🌐 General</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🏠 Bienvenida</span>
            </div>

            <!-- HERO -->
            <div class="page-hero" style="text-align:center;">
              <img src="logo.png" alt="PlanetMC Logo" style="width:120px; margin-bottom:15px; display:block; margin-left:auto; margin-right:auto;">
              <div style="font-size:2.2rem;">🌌</div>
              <h1>Bienvenido a la Wiki de PlanetMC</h1>
              <p class="page-hero-desc">
                Tu punto de inicio para descubrir todo lo que ofrece el servidor.
                Aprende, explora y conviértete en un verdadero experto dentro de PlanetMC.
              </p>
            </div>

            <p>
              Nos alegra tenerte aquí. En esta wiki encontrarás toda la información necesaria
              para comenzar tu aventura: desde <strong>guías básicas</strong>, hasta sistemas más avanzados,
              comandos y mecánicas únicas del servidor.
            </p>
            <p>
              PlanetMC es una comunidad enfocada en ofrecer una experiencia <strong>survival divertida,
              estable y en constante evolución</strong>, donde cada jugador puede crecer, construir
              y formar parte de algo más grande.
            </p>

            <h2 id="inicio">🚀 ¿Qué encontrarás aquí?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📚 Contenido de la Wiki</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Guías paso a paso para comenzar desde cero.</li>
                  <li>Explicación de sistemas como economía y protecciones.</li>
                  <li>Listado de comandos importantes.</li>
                  <li>Consejos y trucos para mejorar tu experiencia.</li>
                </ul>
              </div>
            </div>

            <h2 id="empezar">🧭 ¿Cómo empezar?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Primeros pasos recomendados</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Lee las <strong>normas del servidor</strong> para evitar sanciones.</li>
                  <li>Ingresa al servidor usando la IP.</li>
                  <li>Explora el spawn y familiarízate con el entorno.</li>
                  <li>Consulta la sección de <strong>Primeros Pasos</strong>.</li>
                  <li>¡Empieza tu aventura y construye tu historia!</li>
                </ol>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Revisa siempre la wiki antes de preguntar. Muchas respuestas ya están aquí.</div>
            </div>
            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Importante:</strong> El desconocimiento de las normas no evita sanciones.</div>
            </div>

            <h2 id="datos">📊 Información del servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">IP Java</span>
                <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">IP Bedrock</span>
                <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Puerto Bedrock</span>
                <span class="info-val">19132</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Versión</span>
                <span class="info-val">1.21.x</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Modo</span>
                <span class="info-val">Survival</span>
              </div>
            </div>

            <h2 id="features">⭐ ¿Por qué jugar en PlanetMC?</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="feature-icon">🌍</div>
                <div class="feature-title">Comunidad activa</div>
                <div class="feature-desc">Jugadores constantes y ambiente amigable.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">⚙️</div>
                <div class="feature-title">Sistemas únicos</div>
                <div class="feature-desc">Economía, protecciones y más.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🚀</div>
                <div class="feature-title">Actualizaciones</div>
                <div class="feature-desc">Contenido nuevo constantemente.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎉</div>
                <div class="feature-title">Eventos</div>
                <div class="feature-desc">Participa en eventos y gana recompensas.</div>
              </div>
            </div>

            <h2 id="final">🌟 Tu aventura comienza aquí</h2>
            <p>
              Cada jugador escribe su propia historia en PlanetMC.
              Este es solo el comienzo… lo que hagas a partir de ahora depende de ti.
            </p>
            <div class="tip-box">
              <span class="tip-icon">🌟</span>
              <div><strong>Prepárate:</strong> explora, construye, haz amigos y diviértete.</div>
            </div>
          `
        },

        /* ── Normas del Servidor ──────────── */
        {
          id:          'normas',
          name:        'Normas del Servidor',
          icon:        '📜',
          path:        'pages/general/normas.html',
          description: 'Reglas y normas que todos los jugadores de PlanetMC deben leer y respetar.',
          keywords:    ['reglas','normas','ban','sanciones','comportamiento','hack','trampas','chat','spam','respeto','castigo','griefing','robo','apelacion','mute'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">🌐 General</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">📜 Normas del Servidor</span>
            </div>

            <div class="page-hero" style="text-align:left; padding:28px 28px 24px;">
              <div style="font-size:2.2rem; margin-bottom:10px;">📜</div>
              <h1 style="margin-bottom:8px;">Normas del Servidor</h1>
              <p class="page-hero-desc" style="text-align:left; max-width:100%;">
                Lee y respeta estas normas. Son el escudo que protege la diversión de todos los jugadores.
              </p>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚖️</span>
              <div>El equipo de moderación tiene plena autoridad para sancionar cualquier conducta que considere inapropiada,
              <strong>aunque no aparezca expresamente en este reglamento</strong>. Esto garantiza juego justo para todos.</div>
            </div>

            <p>En PlanetMC, las <strong>Normas</strong> son el código de honor que cuida la convivencia. Léelas antes de empezar y síguelas siempre.</p>

            <h2 id="normas-chat">💬 Normas sobre el uso del Chat</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Reglas del Chat</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Está <strong>prohibido el spam</strong> (repetir mensajes iguales) y el flood.</li>
                  <li>Queda prohibido el <strong>lenguaje ofensivo</strong>, discriminatorio o racista.</li>
                  <li>No se permite <strong>publicidad</strong> de otros servidores o redes no oficiales.</li>
                  <li>Está prohibido el uso excesivo de <strong>MAYÚSCULAS</strong> de forma repetida.</li>
                  <li>No se pueden compartir <strong>links externos</strong> sin permiso del staff.</li>
                  <li>El acoso o amenazas hacia otros jugadores conlleva sanción inmediata.</li>
                </ul>
              </div>
            </div>

            <h2 id="normas-modificaciones">🚫 Modificaciones ilegales (Hacks)</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Modificaciones prohibidas</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Queda prohibido el uso de <strong>hacks, cheats o clients</strong> que den ventaja injusta.</li>
                  <li>Están prohibidos: <strong>kill-aura, fly, speed, x-ray, scaffold, auto-clicker</strong> y similares.</li>
                  <li>No se permiten exploits que den <strong>ventaja económica o de combate</strong>.</li>
                  <li>Los errores del servidor deben <strong>reportarse en Discord</strong>, no explotarse.</li>
                </ul>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">✅</span>
              <div><strong>Mods permitidos:</strong> OptiFine, shaders, minimapas sin radar. Ante la duda, consulta en Discord <strong>antes</strong> de instalar cualquier mod.</div>
            </div>

            <h2 id="normas-conducta">🤝 Normas generales de conducta</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Conducta dentro del servidor</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Está prohibido el <strong>griefing</strong> (destruir construcciones ajenas) en zonas no-PvP.</li>
                  <li>No se permite el <strong>robo</strong> en cofres o terrenos ajenos.</li>
                  <li>Está prohibido el <strong>kill-farming</strong> (matar repetidamente al mismo jugador).</li>
                  <li>Se debe <strong>respetar al staff</strong>. Sus decisiones son definitivas en el momento.</li>
                  <li>No se permite suplantar la identidad de otros jugadores o del staff.</li>
                  <li>Queda prohibido el <strong>trampeo en eventos</strong> oficiales del servidor.</li>
                </ul>
              </div>
            </div>

            <h2 id="inactividad">⏱️ Política de inactividad</h2>
            <p>Los terrenos de jugadores inactivos podrán ser liberados según los siguientes plazos:</p>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead>
                  <tr><th>Rango</th><th>Tiempo sin conexión</th><th>Consecuencia</th></tr>
                </thead>
                <tbody>
                  <tr><td>Novato / Miembro</td><td>30 días</td><td>Terrenos liberados</td></tr>
                  <tr><td>VIP / MVP</td><td>60 días</td><td>Aviso por Discord</td></tr>
                  <tr><td>Elite / Donador</td><td>90 días</td><td>Aviso por Discord</td></tr>
                  <tr><td>Staff</td><td>15 días sin avisar</td><td>Remoción del cargo</td></tr>
                </tbody>
              </table>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div>Si vas a ausentarte, avisa en Discord para que el staff no libere tu terreno por error.</div>
            </div>

            <h2 id="sanciones">🔨 Tabla de sanciones</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead>
                  <tr><th>Infracción</th><th>Primera vez</th><th>Reincidencia</th></tr>
                </thead>
                <tbody>
                  <tr><td>Spam / Flood</td><td>Mute 30 min</td><td>Mute 24h</td></tr>
                  <tr><td>Lenguaje ofensivo leve</td><td>Advertencia + Mute 1h</td><td>Mute 24h</td></tr>
                  <tr><td>Lenguaje ofensivo grave</td><td>Mute 24h</td><td>Mute 7 días</td></tr>
                  <tr><td>Publicidad no autorizada</td><td>Ban permanente</td><td>—</td></tr>
                  <tr><td>Uso de hacks / cheats</td><td>Ban permanente</td><td>—</td></tr>
                  <tr><td>Griefing</td><td>Ban 7 días</td><td>Ban permanente</td></tr>
                  <tr><td>Robo</td><td>Ban 3 días</td><td>Ban 30 días</td></tr>
                  <tr><td>Explotar bugs</td><td>Ban 7 días</td><td>Ban permanente</td></tr>
                  <tr><td>Kill-farming</td><td>Ban 1 día</td><td>Ban 7 días</td></tr>
                  <tr><td>Suplantación de identidad</td><td>Ban permanente</td><td>—</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="apelaciones">📩 Proceso de apelación</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Cómo apelar una sanción</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Entra al <strong>servidor de Discord</strong> de PlanetMC.</li>
                  <li>Ve al canal <strong>#tickets</strong> y abre un ticket de tipo <em>Apelación</em>.</li>
                  <li>Incluye: tu <strong>nombre de usuario</strong>, la sanción recibida y tu versión de los hechos.</li>
                  <li>Adjunta <strong>pruebas</strong> si las tienes (capturas, vídeos).</li>
                  <li>Espera respuesta del staff en máximo <strong>72 horas hábiles</strong>.</li>
                </ol>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Importante:</strong> Las apelaciones se gestionan <strong>exclusivamente por Discord</strong>.
              No se atenderán apelaciones por chat del servidor ni por mensajes privados al staff.</div>
            </div>
          `
        },

      ] // fin pages general
    },

    /* ════════════════════════════════════════
       CATEGORÍA: CÓMO INGRESAR
       ════════════════════════════════════════ */
    {
      id:    'como-ingresar',
      name:  'Cómo Ingresar',
      icon:  '🚀',
      color: '#a78bfa',
      open:  false,
      pages: [

        /* ── Java Edition ─────────────────── */
        {
          id:          'java-edition',
          name:        'Java Edition',
          icon:        '☕',
          path:        'pages/como-ingresar/java.html',
          description: 'Guía paso a paso para conectarte a PlanetMC desde Minecraft Java Edition (PC/Mac/Linux).',
          keywords:    ['java','pc','windows','mac','linux','launcher','conectar','ingresar','ip','version','1.21','multijugador','optifine','sodium'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">🚀 Cómo Ingresar</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">☕ Java Edition</span>
            </div>

            <div class="page-hero" style="text-align:left; padding:28px 28px 24px;">
              <div style="font-size:2.2rem; margin-bottom:10px;">☕</div>
              <h1 style="margin-bottom:8px;">Cómo Ingresar — Java Edition</h1>
              <p class="page-hero-desc" style="text-align:left; max-width:100%;">
                ¿Juegas Minecraft Java desde tu PC con Mac, Linux o Windows? Aquí te explicamos
                paso a paso cómo conectarte a PlanetMC de forma rápida y sencilla.
              </p>
            </div>

            <h2 id="que-es-java">☕ ¿Qué es Minecraft Java Edition?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Información general</div>
              <div class="desc-box-body">
                <p>
                  <strong>Minecraft Java Edition</strong> es la versión original del juego, disponible para PC
                  (Windows, Mac y Linux). Es la versión más usada para servidores de la comunidad y tiene soporte
                  para mods y características exclusivas.
                </p>
                <ul class="wiki-list">
                  <li>🖥️ Compatible con <strong>Windows</strong>, <strong>macOS</strong> y <strong>Linux</strong></li>
                  <li>☕ Requiere el launcher oficial de Minecraft</li>
                  <li>🔑 Se compra en <strong>minecraft.net</strong></li>
                </ul>
              </div>
            </div>

            <h2 id="datos-servidor">📡 Datos del servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">🌐 IP del servidor</span>
                <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🎮 Versión recomendada</span>
                <span class="info-val">1.21.x (última versión Java)</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🕹️ Modo</span>
                <span class="info-val">Survival SMP</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🔌 Puerto</span>
                <span class="info-val">25565 (por defecto — no necesitas escribirlo)</span>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Haz clic sobre la IP para copiarla automáticamente al portapapeles.</div>
            </div>

            <h2 id="como-entrar">🚀 Cómo conectarte paso a paso</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Guía de conexión — Java Edition</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Abre el <strong>Minecraft Launcher</strong> en tu PC y asegúrate de tener seleccionada la versión <strong>1.21.x</strong>.</li>
                  <li>Haz clic en <strong>"Jugar"</strong> para abrir el juego.</li>
                  <li>En el menú principal, haz clic en <strong>"Multijugador"</strong>.</li>
                  <li>Haz clic en <strong>"Añadir servidor"</strong>.</li>
                  <li>Rellena los datos:
                    <ul class="wiki-list" style="margin-top:8px;">
                      <li><strong>Nombre:</strong> PlanetMC (o el que quieras)</li>
                      <li><strong>Dirección:</strong> <code>play.planetmc.net</code></li>
                    </ul>
                  </li>
                  <li>Haz clic en <strong>"Listo"</strong> para guardar.</li>
                  <li>Selecciona <strong>PlanetMC</strong> y haz clic en <strong>"Unirse al servidor"</strong>.</li>
                  <li>¡Ya estás dentro! Serás teletransportado al <strong>Spawn</strong>.</li>
                </ol>
              </div>
            </div>

            <h2 id="version">🔧 ¿Cómo seleccionar la versión correcta?</h2>
            <div class="desc-box">
              <div class="desc-box-header">🔧 Cambiar versión en el Launcher</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Abre el <strong>Minecraft Launcher</strong>.</li>
                  <li>En la barra lateral, haz clic en <strong>"Minecraft: Java Edition"</strong>.</li>
                  <li>Junto al botón "Jugar", haz clic en <strong>"Instalaciones"</strong>.</li>
                  <li>Crea una nueva instalación o edita la existente.</li>
                  <li>En <strong>"Versión"</strong>, selecciona <strong>release 1.21.x</strong>.</li>
                  <li>Guarda y lanza el juego.</li>
                </ol>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Importante:</strong> Si usas una versión diferente a la del servidor, puede que no puedas conectarte o que veas errores.</div>
            </div>

            <h2 id="problemas">❓ Problemas comunes</h2>
            <div class="desc-box">
              <div class="desc-box-header">❓ FAQ — Java Edition</div>
              <div class="desc-box-body">
                <div class="faq-list">
                  <details class="faq-item">
                    <summary>Me sale "Failed to connect to the server"</summary>
                    <p>Verifica que la IP sea exactamente <code>play.planetmc.net</code> sin espacios ni caracteres extra. También revisa tu conexión a internet.</p>
                  </details>
                  <details class="faq-item">
                    <summary>Me sale "Outdated server" o "Outdated client"</summary>
                    <p>Tu versión no coincide con la del servidor. Asegúrate de jugar en la <strong>versión 1.21.x</strong>.</p>
                  </details>
                  <details class="faq-item">
                    <summary>No veo la opción "Multijugador"</summary>
                    <p>Necesitas una cuenta oficial de Minecraft Java Edition. Cómprala en <strong>minecraft.net</strong>.</p>
                  </details>
                  <details class="faq-item">
                    <summary>El juego va lento o tiene lag</summary>
                    <p>Reduce la distancia de renderizado en las opciones de vídeo. Puedes instalar <strong>OptiFine</strong> o <strong>Sodium</strong> para mejorar el rendimiento.</p>
                  </details>
                  <details class="faq-item">
                    <summary>¿Necesito instalar mods para jugar?</summary>
                    <p>No. PlanetMC funciona con Minecraft vanilla. Solo necesitas la versión correcta y conexión a internet.</p>
                  </details>
                </div>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">🚀</span>
              <div><strong>¿Ya entraste?</strong> ¡Genial! Ahora consulta la guía de <strong>Primeros Pasos</strong> para aprender todo lo que necesitas dentro de PlanetMC.</div>
            </div>
          `
        },

        /* ── Bedrock Edition ──────────────── */
        {
          id:          'bedrock-edition',
          name:        'Bedrock Edition',
          icon:        '📱',
          path:        'pages/como-ingresar/bedrock.html',
          description: 'Guía para conectarte a PlanetMC desde Minecraft Bedrock Edition (móvil, consola, Windows 10/11).',
          keywords:    ['bedrock','movil','celular','android','ios','tablet','consola','xbox','playstation','switch','windows10','windows11','puerto','19132'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">🚀 Cómo Ingresar</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">📱 Bedrock Edition</span>
            </div>

            <div class="page-hero" style="text-align:left; padding:28px 28px 24px;">
              <div style="font-size:2.2rem; margin-bottom:10px;">📱</div>
              <h1 style="margin-bottom:8px;">Cómo Ingresar — Bedrock Edition</h1>
              <p class="page-hero-desc" style="text-align:left; max-width:100%;">
                ¿Juegas desde celular, tablet, consola o Windows 10/11? Esta guía es para ti.
                Conéctate a PlanetMC desde cualquier dispositivo con Bedrock Edition.
              </p>
            </div>

            <h2 id="que-es-bedrock">📱 ¿Qué es Minecraft Bedrock Edition?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Información general</div>
              <div class="desc-box-body">
                <p>
                  <strong>Minecraft Bedrock Edition</strong> es la versión multiplataforma de Minecraft.
                  Está disponible en casi todos los dispositivos y permite jugar en multijugador cruzado entre plataformas.
                </p>
                <ul class="wiki-list">
                  <li>📱 Compatible con <strong>Android</strong> e <strong>iOS</strong></li>
                  <li>🖥️ Compatible con <strong>Windows 10 / Windows 11</strong></li>
                  <li>🎮 Compatible con <strong>Xbox</strong>, <strong>PlayStation</strong> y <strong>Nintendo Switch</strong></li>
                  <li>🔗 Multijugador cruzado entre todas las plataformas</li>
                </ul>
              </div>
            </div>

            <h2 id="datos-servidor">📡 Datos del servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">🌐 IP del servidor</span>
                <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🔌 Puerto</span>
                <span class="info-val">19132</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🎮 Versión recomendada</span>
                <span class="info-val">1.21.x (Bedrock)</span>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Haz clic sobre la IP para copiarla automáticamente al portapapeles.</div>
            </div>

            <h2 id="como-entrar">🚀 Cómo conectarte paso a paso</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Guía de conexión — Bedrock Edition</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Abre <strong>Minecraft</strong> en tu dispositivo.</li>
                  <li>En el menú principal, toca <strong>"Jugar"</strong>.</li>
                  <li>Selecciona la pestaña <strong>"Servidores"</strong>.</li>
                  <li>Desplázate hacia abajo y toca <strong>"Añadir servidor"</strong>.</li>
                  <li>Rellena los campos:
                    <ul class="wiki-list" style="margin-top:8px;">
                      <li><strong>Nombre:</strong> PlanetMC (o el que quieras)</li>
                      <li><strong>Dirección:</strong> <code>play.planetmc.net</code></li>
                      <li><strong>Puerto:</strong> <code>19132</code></li>
                    </ul>
                  </li>
                  <li>Toca <strong>"Guardar"</strong> o <strong>"Confirmar"</strong>.</li>
                  <li>Selecciona PlanetMC en la lista y toca <strong>"Conectar"</strong>.</li>
                  <li>¡Listo! Estarás en el <strong>Spawn</strong> del servidor.</li>
                </ol>
              </div>
            </div>

            <h2 id="consola">🎮 Conectarse desde consola (Xbox / PlayStation / Switch)</h2>
            <div class="desc-box">
              <div class="desc-box-header">🎮 Consolas</div>
              <div class="desc-box-body">
                <p>En consolas, la pestaña "Servidores" puede estar limitada. Usa uno de estos métodos alternativos:</p>
                <ul class="wiki-list">
                  <li><strong>BedrockConnect:</strong> Herramienta gratuita que permite acceder a servidores externos desde consola.</li>
                  <li><strong>DNS personalizado:</strong> Cambia el DNS de tu consola al de BedrockConnect para desbloquear servidores.</li>
                  <li>Busca <em>"BedrockConnect tutorial [tu consola]"</em> en YouTube para una guía visual paso a paso.</li>
                </ul>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Nota:</strong> En PlayStation y Switch el acceso directo a servidores externos está limitado por la plataforma. Necesitarás usar BedrockConnect u otra herramienta similar.</div>
            </div>

            <h2 id="diferencias">⚖️ ¿Java o Bedrock?</h2>
            <div class="two-col">
              <div class="desc-box">
                <div class="desc-box-header">☕ Java Edition</div>
                <div class="desc-box-body">
                  <ul class="wiki-list">
                    <li>Solo PC (Windows, Mac, Linux)</li>
                    <li>Mejor rendimiento en servidores</li>
                    <li>Más opciones de mods</li>
                    <li>IP: <code>play.planetmc.net</code></li>
                    <li>Puerto: 25565 (default)</li>
                  </ul>
                </div>
              </div>
              <div class="desc-box">
                <div class="desc-box-header">📱 Bedrock Edition</div>
                <div class="desc-box-body">
                  <ul class="wiki-list">
                    <li>Móvil, tablet, consola y Windows 10/11</li>
                    <li>Multijugador cruzado</li>
                    <li>Más accesible</li>
                    <li>IP: <code>play.planetmc.net</code></li>
                    <li>Puerto: <code>19132</code></li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="problemas">❓ Problemas comunes</h2>
            <div class="desc-box">
              <div class="desc-box-header">❓ FAQ — Bedrock Edition</div>
              <div class="desc-box-body">
                <div class="faq-list">
                  <details class="faq-item">
                    <summary>No aparece la pestaña "Servidores"</summary>
                    <p>En algunas regiones o versiones la pestaña está oculta. Usa una VPN gratuita como <strong>Cloudflare WARP</strong> o actualiza tu versión de Minecraft.</p>
                  </details>
                  <details class="faq-item">
                    <summary>No puedo conectarme desde mi consola</summary>
                    <p>Usa <strong>BedrockConnect</strong>. Busca un tutorial en YouTube con el nombre de tu consola para configurarlo.</p>
                  </details>
                  <details class="faq-item">
                    <summary>El servidor me aparece como "No disponible"</summary>
                    <p>Verifica que la IP y el puerto sean correctos: <code>play.planetmc.net</code> y puerto <code>19132</code>. Si persiste, revisa el canal <strong>#estado-servidor</strong> en Discord.</p>
                  </details>
                  <details class="faq-item">
                    <summary>¿Puedo jugar con amigos de Java si yo uso Bedrock?</summary>
                    <p>¡Sí! PlanetMC soporta conexión cruzada entre Java y Bedrock a través de Geyser.</p>
                  </details>
                </div>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">🚀</span>
              <div><strong>¿Ya entraste?</strong> ¡Perfecto! Consulta la guía de <strong>Primeros Pasos</strong> para comenzar tu aventura en PlanetMC.</div>
            </div>
          `
        },

      ] // fin pages como-ingresar
    },

    /* ════════════════════════════════════════
       CATEGORÍA: SURVIVAL
       ════════════════════════════════════════ */
    {
      id:    'survival',
      name:  'Survival',
      icon:  '⚔️',
      color: '#22d3a5',
      open:  false,
      pages: [

        /* ── Primeros Pasos ───────────────── */
        {
          id:          'primeros-pasos',
          name:        'Primeros Pasos',
          icon:        '🧭',
          path:        'pages/survival/primeros-pasos.html',
          description: 'Todo lo que necesitas saber al entrar por primera vez al servidor: spawn, kit de inicio y comandos básicos.',
          keywords:    ['primeros pasos','comenzar','nuevo','novato','spawn','kit','inicio','comandos','basicos','sethome','claim','warp','survival'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">⚔️ Survival</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🧭 Primeros Pasos</span>
            </div>

            <div class="page-hero" style="text-align:left; padding:28px 28px 24px;">
              <div style="font-size:2.2rem; margin-bottom:10px;">🧭</div>
              <h1 style="margin-bottom:8px;">Primeros Pasos en PlanetMC</h1>
              <p class="page-hero-desc" style="text-align:left; max-width:100%;">
                ¡Bienvenido al servidor! Esta guía te llevará de la mano en tus primeros momentos
                dentro de PlanetMC para que no te pierdas nada importante.
              </p>
            </div>

            <div class="tip-box">
              <span class="tip-icon">🌟</span>
              <div><strong>¿Es tu primera vez?</strong> ¡No te preocupes! Esta guía cubre todo lo básico. Si tienes dudas, pregunta en el chat del servidor o en Discord.</div>
            </div>

            <h2 id="spawn">🏙️ El Spawn</h2>
            <p>Al conectarte por primera vez llegarás al <strong>Spawn</strong>, el punto central del servidor. Desde aquí puedes:</p>
            <ul class="wiki-list">
              <li>Acceder a todos los mundos y warps del servidor</li>
              <li>Ver el ranking de jugadores en los leaderboards</li>
              <li>Obtener tu <strong>kit de inicio</strong> con <code>/kit novato</code></li>
              <li>Ir al mundo Survival con <code>/warp survival</code></li>
            </ul>

            <h2 id="kit-inicio">🎁 Kit de Inicio</h2>
            <p>Todos los jugadores nuevos reciben un kit gratuito de inicio. Úsalo con <code>/kit novato</code>:</p>
            <div class="item-grid">
              <div class="item-chip">🗡️ Espada de hierro</div>
              <div class="item-chip">⛏️ Pico de hierro</div>
              <div class="item-chip">🪓 Hacha de hierro</div>
              <div class="item-chip">🍖 64x Carne cocida</div>
              <div class="item-chip">💎 $500 PlanetCoins</div>
              <div class="item-chip">📦 Cofre de madera</div>
            </div>

            <h2 id="comandos-basicos">⌨️ Comandos Básicos</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Volver al spawn principal</span></div>
              <div class="cmd-item"><code>/home</code><span>Ir a tu hogar</span></div>
              <div class="cmd-item"><code>/sethome</code><span>Establecer tu hogar</span></div>
              <div class="cmd-item"><code>/kit novato</code><span>Recibir tu kit de inicio</span></div>
              <div class="cmd-item"><code>/warp survival</code><span>Ir al mundo Survival</span></div>
              <div class="cmd-item"><code>/tpa [jugador]</code><span>Solicitar teletransporte</span></div>
              <div class="cmd-item"><code>/tpaccept</code><span>Aceptar solicitud de TP</span></div>
              <div class="cmd-item"><code>/msg [jugador] [msg]</code><span>Mensaje privado</span></div>
              <div class="cmd-item"><code>/balance</code><span>Ver tu dinero</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero</span></div>
              <div class="cmd-item"><code>/warp</code><span>Ver todos los warps</span></div>
              <div class="cmd-item"><code>/rules</code><span>Ver las normas</span></div>
            </div>

            <h2 id="primeros-30">⏱️ Qué hacer en los primeros 30 minutos</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Plan de inicio recomendado</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Usa <code>/kit novato</code> para recibir tu kit de inicio.</li>
                  <li>Viaja al Survival con <code>/warp survival</code>.</li>
                  <li>Aléjate del spawn (mínimo 500 bloques) para encontrar terreno libre.</li>
                  <li>Construye una base temporal para tu primera noche.</li>
                  <li>Protege tu terreno con <code>/claim</code> (consulta la guía de Protecciones).</li>
                  <li>Establece tu hogar con <code>/sethome</code>.</li>
                  <li>Empieza a farmear materiales básicos y vende el exceso en <code>/shop</code>.</li>
                </ol>
              </div>
            </div>

            <h2 id="consejos">💡 Consejos para Nuevos Jugadores</h2>
            <ul class="wiki-list">
              <li><strong>Protege tu terreno</strong> antes de construir cosas valiosas (usa <code>/claim</code>).</li>
              <li>Participa en el chat y pide ayuda: ¡la comunidad es amigable!</li>
              <li>Vende recursos en exceso en <code>/shop</code> para acumular dinero.</li>
              <li>Únete al Discord para enterarte de eventos y actualizaciones.</li>
              <li>Vota diariamente con <code>/vote</code> para obtener recompensas gratuitas.</li>
              <li>Guarda tus ítems más valiosos en cofres dentro de tu claim.</li>
            </ul>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Recuerda:</strong> El servidor NO se hace responsable por pérdidas en zonas sin proteger. ¡Siempre usa <code>/claim</code> para proteger tu base!</div>
            </div>
          `
        },

        /* ── Economía ─────────────────────── */
        {
          id:          'economia',
          name:        'Economía',
          icon:        '💰',
          path:        'pages/survival/economia.html',
          description: 'Sistema económico de PlanetMC: cómo ganar y gastar PlanetCoins, tienda, subasta y misiones.',
          keywords:    ['economia','dinero','planetcoins','plc','moneda','ganar','tienda','shop','subasta','ah','misiones','quests','votar','vote','balance','pay'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">⚔️ Survival</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">💰 Economía</span>
            </div>

            <div class="page-hero" style="text-align:left; padding:28px 28px 24px;">
              <div style="font-size:2.2rem; margin-bottom:10px;">💰</div>
              <h1 style="margin-bottom:8px;">Sistema de Economía</h1>
              <p class="page-hero-desc" style="text-align:left; max-width:100%;">
                Descubre cómo funciona la economía de PlanetMC: gana dinero, comercia con jugadores
                y convierte tus recursos en riqueza.
              </p>
            </div>

            <p>
              La moneda oficial de PlanetMC es el <strong>PlanetCoin (PLC)</strong>.
              Puedes ganarla y gastarla de múltiples formas dentro del servidor.
            </p>

            <h2 id="ganar-dinero">📈 ¿Cómo ganar PlanetCoins?</h2>
            <div class="desc-box">
              <div class="desc-box-header">💵 Formas de ganar dinero</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li><strong>Vendiendo items</strong> en la tienda del servidor (<code>/shop</code>)</li>
                  <li><strong>Publicando items</strong> en la subasta entre jugadores (<code>/ah sell [precio]</code>)</li>
                  <li><strong>Completando misiones</strong> diarias y semanales (<code>/quests</code>)</li>
                  <li><strong>Votando</strong> por el servidor en páginas de listing (<code>/vote</code>)</li>
                  <li><strong>Ganando eventos</strong> especiales del servidor</li>
                  <li><strong>Comerciando</strong> con otros jugadores directamente</li>
                </ul>
              </div>
            </div>

            <h2 id="tienda">🛒 Tienda del Servidor (/shop)</h2>
            <p>La tienda oficial permite intercambiar items con el servidor a precios fijos:</p>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Comando</span><span class="info-val"><code>/shop</code></span></div>
              <div class="info-card-row"><span class="info-label">Comisión de venta</span><span class="info-val">0% (precio directo)</span></div>
            </div>

            <h2 id="precios">💵 Precios de Referencia</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Item</th><th>Venta al servidor</th><th>Compra al servidor</th></tr></thead>
                <tbody>
                  <tr><td>Diamante</td><td>$25 c/u</td><td>$80 c/u</td></tr>
                  <tr><td>Esmeralda</td><td>$15 c/u</td><td>$50 c/u</td></tr>
                  <tr><td>Hierro (lingote)</td><td>$3 c/u</td><td>$10 c/u</td></tr>
                  <tr><td>Oro (lingote)</td><td>$8 c/u</td><td>$25 c/u</td></tr>
                  <tr><td>Trigo (64)</td><td>$40 por stack</td><td>$120 por stack</td></tr>
                  <tr><td>Madera (64)</td><td>$20 por stack</td><td>$60 por stack</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="subasta">🏷️ Casa de Subastas (/ah)</h2>
            <p>El Auction House es el mercado entre jugadores. Generalmente ofrece mejores precios que la tienda oficial:</p>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Comando</span><span class="info-val"><code>/ah</code></span></div>
              <div class="info-card-row"><span class="info-label">Duración del listado</span><span class="info-val">48 horas</span></div>
              <div class="info-card-row"><span class="info-label">Comisión del servidor</span><span class="info-val">5% del precio de venta</span></div>
              <div class="info-card-row"><span class="info-label">Máx. items listados</span><span class="info-val">5 (VIP: 15 / MVP: 30)</span></div>
            </div>

            <div class="cmd-grid">
              <div class="cmd-item"><code>/ah</code><span>Abrir el Auction House</span></div>
              <div class="cmd-item"><code>/ah sell [precio]</code><span>Vender item en mano</span></div>
              <div class="cmd-item"><code>/ah search [nombre]</code><span>Buscar item</span></div>
              <div class="cmd-item"><code>/ah expired</code><span>Recoger items no vendidos</span></div>
              <div class="cmd-item"><code>/ah selling</code><span>Ver tus items en venta</span></div>
            </div>

            <h2 id="misiones">🎯 Misiones (/quests)</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Tipo</th><th>Ejemplo</th><th>Recompensa</th></tr></thead>
                <tbody>
                  <tr><td>Diaria</td><td>Minar 64 diamantes</td><td>$250 PLC + XP</td></tr>
                  <tr><td>Diaria</td><td>Matar 20 zombies</td><td>$150 PLC</td></tr>
                  <tr><td>Semanal</td><td>Craftear 100 items</td><td>$1,500 PLC + Kit especial</td></tr>
                  <tr><td>Semanal</td><td>Pescar 50 peces</td><td>$800 PLC</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="comandos-economia">⌨️ Comandos de Economía</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo actual</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero a otro jugador</span></div>
              <div class="cmd-item"><code>/baltop</code><span>Ver ranking de jugadores más ricos</span></div>
              <div class="cmd-item"><code>/shop</code><span>Abrir la tienda del servidor</span></div>
              <div class="cmd-item"><code>/ah</code><span>Abrir la subasta</span></div>
              <div class="cmd-item"><code>/quests</code><span>Ver misiones disponibles</span></div>
              <div class="cmd-item"><code>/vote</code><span>Votar y ganar recompensas</span></div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Vota diariamente con <code>/vote</code> para obtener PlanetCoins gratis. ¡Es la forma más fácil de ganar dinero sin farmear!</div>
            </div>
          `
        },

        /* ── Protecciones ─────────────────── */
        {
          id:          'protecciones',
          name:        'Protecciones',
          icon:        '🛡️',
          path:        'pages/survival/protecciones.html',
          description: 'Cómo proteger tu terreno y construcciones del griefing usando GriefPrevention.',
          keywords:    ['proteger','proteccion','claim','griefprevention','terreno','base','griefing','robo','pala dorada','trust','subclaim','abandonclaim','claimlist'],
          content: `
            <!-- Breadcrumb -->
            <div class="breadcrumb-bar">
              <span class="bc-cat">⚔️ Survival</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🛡️ Protecciones</span>
            </div>

            <div class="page-hero" style="text-align:left; padding:28px 28px 24px;">
              <div style="font-size:2.2rem; margin-bottom:10px;">🛡️</div>
              <h1 style="margin-bottom:8px;">Protecciones de Terreno</h1>
              <p class="page-hero-desc" style="text-align:left; max-width:100%;">
                Protege tu base y tus construcciones con el sistema GriefPrevention.
                Sin protección, tu terreno es vulnerable.
              </p>
            </div>

            <div class="warn-box">
              <span class="warn-icon">🔴</span>
              <div>El servidor <strong>NO</strong> se responsabiliza por griefing o robos en zonas sin proteger. ¡Siempre protege tu terreno antes de construir!</div>
            </div>

            <h2 id="como-proteger">🔒 Cómo Proteger tu Terreno</h2>
            <p>Usamos el plugin <strong>GriefPrevention</strong>. Para reclamar terreno sigue estos pasos:</p>
            <div class="desc-box">
              <div class="desc-box-header">📋 Pasos para crear un claim</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Obtén una <strong>pala dorada</strong> (se otorga al unirte o cómprala en <code>/shop</code>).</li>
                  <li>Con la pala en mano, haz <strong>clic derecho</strong> en una esquina de tu terreno.</li>
                  <li>Luego haz clic derecho en la <strong>esquina opuesta</strong> (en diagonal).</li>
                  <li>¡Tu terreno estará protegido automáticamente! Verás partículas de oro.</li>
                </ol>
              </div>
            </div>

            <h2 id="bloques-claim">📏 Bloques de Claim</h2>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Bloques iniciales</span><span class="info-val">100 bloques de claim</span></div>
              <div class="info-card-row"><span class="info-label">Ganancia</span><span class="info-val">+100 bloques por hora jugada</span></div>
              <div class="info-card-row"><span class="info-label">Máximo (sin donación)</span><span class="info-val">10,000 bloques</span></div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div>¡Cuanto más tiempo juegues, más bloques de claim acumulas! Los rangos VIP y MVP otorgan bloques adicionales.</div>
            </div>

            <h2 id="comandos">⌨️ Comandos de Protección</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/claim</code><span>Activar modo reclamación</span></div>
              <div class="cmd-item"><code>/abandonclaim</code><span>Eliminar el claim actual</span></div>
              <div class="cmd-item"><code>/claimlist</code><span>Ver tus claims activos</span></div>
              <div class="cmd-item"><code>/trust [jugador]</code><span>Dar acceso completo</span></div>
              <div class="cmd-item"><code>/containertrust [jugador]</code><span>Permitir abrir cofres</span></div>
              <div class="cmd-item"><code>/accesstrust [jugador]</code><span>Permitir usar puertas/botones</span></div>
              <div class="cmd-item"><code>/untrust [jugador]</code><span>Quitar permisos</span></div>
              <div class="cmd-item"><code>/trustlist</code><span>Ver jugadores con acceso</span></div>
              <div class="cmd-item"><code>/claimexplosions</code><span>Activar/desactivar explosiones</span></div>
            </div>

            <h2 id="trust">🤝 Sistema de Permisos (Trust)</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Comando</th><th>Permiso otorgado</th></tr></thead>
                <tbody>
                  <tr><td><code>/trust</code></td><td>Acceso completo: construir, romper, cofres, puertas</td></tr>
                  <tr><td><code>/containertrust</code></td><td>Solo abrir cofres, hornos y dispensadores</td></tr>
                  <tr><td><code>/accesstrust</code></td><td>Solo usar puertas, botones y palancas</td></tr>
                  <tr><td><code>/permissiontrust</code></td><td>Puede dar permisos a otros jugadores</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="subclaims">📦 Subclaims</h2>
            <p>Puedes dividir tu claim en áreas más pequeñas con diferentes permisos:</p>
            <ol class="wiki-steps">
              <li>Usa <code>/claimsubdivisions</code> para activar el modo de subdivisión.</li>
              <li>Con la pala dorada, crea un área dentro de tu claim principal.</li>
              <li>Asigna permisos distintos al subclaim usando los comandos de trust.</li>
            </ol>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Importante:</strong> Si abandonas un claim (<code>/abandonclaim</code>), todos los permisos y la protección se eliminan permanentemente.</div>
            </div>
          `
        },

      ] // fin pages survival
    },

  ] // fin categories

}; // fin WIKI_DATA
