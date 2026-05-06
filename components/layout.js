/* ═══════════════════════════════════════════════════════════════
   wiki-data.js  —  Fuente CENTRAL de datos y contenido
   PlanetMC Wiki
   ⚠️  TODO el contenido de las páginas vive aquí.
       Las páginas HTML son plantillas vacías.
       Para agregar o editar contenido, solo edita este archivo.
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
    { name: 'Inicio',  url: 'https://planetmc.net',        external: true  },
    { name: 'Wiki',    url: 'index.html',                  external: false },
    { name: 'Tienda',  url: 'https://tienda.planetmc.net', external: true  },
    { name: 'Discord', url: 'https://discord.gg/planetmc', external: true, icon: 'discord' },
  ],

  /* ══════════════════════════════════════════════════════════════
     CATEGORÍAS Y PÁGINAS
     path → ruta relativa desde la raíz del proyecto.
            DEBE coincidir exactamente con el archivo HTML real.
     ══════════════════════════════════════════════════════════════ */
  categories: [

    /* ════════════════════════════════════════
       GENERAL
       ════════════════════════════════════════ */
    {
      id:    'general',
      name:  'General',
      icon:  '🌐',
      color: '#00e5ff',
      open:  true,
      pages: [

        {
          id:          'bienvenida',
          name:        'Bienvenida',
          icon:        '🏠',
          path:        'pages/bienvenida.html',
          description: 'Punto de inicio para descubrir todo lo que ofrece el servidor PlanetMC.',
          keywords:    ['bienvenida','inicio','introduccion','empezar','nuevo','jugador','planetmc','survival'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">🌐 General</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🏠 Bienvenida</span>
            </div>

            <div class="page-hero" style="text-align:center;">
              <img src="logo.png" alt="PlanetMC Logo" style="width:120px;margin-bottom:15px;display:block;margin-left:auto;margin-right:auto;">
              <div style="font-size:2.2rem;">🌌</div>
              <h1>Bienvenido a la Wiki de PlanetMC</h1>
              <p class="page-hero-desc">
                Tu punto de inicio para descubrir todo lo que ofrece el servidor.
                Aprende, explora y conviértete en un verdadero experto dentro de PlanetMC.
              </p>
            </div>

            <p>Nos alegra tenerte aquí. En esta wiki encontrarás toda la información necesaria
            para comenzar tu aventura: desde <strong>guías básicas</strong>, hasta sistemas más avanzados,
            comandos y mecánicas únicas del servidor.</p>

            <p>PlanetMC es una comunidad enfocada en ofrecer una experiencia <strong>survival divertida,
            estable y en constante evolución</strong>, donde cada jugador puede crecer, construir
            y formar parte de algo más grande.</p>

            <h2 id="que-encontraras">🚀 ¿Qué encontrarás aquí?</h2>
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

            <h2 id="como-empezar">🧭 ¿Cómo empezar?</h2>
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

            <h2 id="info-servidor">📊 Información del servidor</h2>
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

            <h2 id="por-que-jugar">⭐ ¿Por qué jugar en PlanetMC?</h2>
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

            <h2 id="aventura">🌟 Tu aventura comienza aquí</h2>
            <p>Cada jugador escribe su propia historia en PlanetMC.
            Este es solo el comienzo… lo que hagas a partir de ahora depende de ti.</p>
            <div class="tip-box">
              <span class="tip-icon">🌟</span>
              <div><strong>Prepárate:</strong> explora, construye, haz amigos y diviértete.</div>
            </div>
          `
        },

        {
          id:          'normas',
          name:        'Normas del Servidor',
          icon:        '📜',
          path:        'pages/normas.html',
          description: 'Reglas y normas que todos los jugadores de PlanetMC deben leer y respetar.',
          keywords:    ['reglas','normas','ban','sanciones','hack','trampas','chat','spam','castigo','griefing','robo','apelacion','mute','inactividad'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">🌐 General</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">📜 Normas del Servidor</span>
            </div>

            <div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
              <div style="font-size:2.2rem;margin-bottom:10px;">📜</div>
              <h1 style="margin-bottom:8px;">Normas del Servidor</h1>
              <p class="page-hero-desc" style="text-align:left;max-width:100%;">
                Lee y respeta estas normas. Son el escudo que protege la diversión de todos.
              </p>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚖️</span>
              <div>El equipo de moderación tiene plena autoridad para sancionar cualquier conducta que considere
              inapropiada, <strong>aunque no aparezca expresamente en este reglamento</strong>.</div>
            </div>

            <p>En PlanetMC, las <strong>Normas</strong> son el código de honor que cuida la convivencia.
            Léelas antes de empezar y síguelas siempre.</p>

            <h2 id="chat">💬 Normas de Chat</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Reglas del Chat</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Está <strong>prohibido el spam</strong> (repetir mensajes) y el flood.</li>
                  <li>Queda prohibido el <strong>lenguaje ofensivo</strong>, discriminatorio o racista.</li>
                  <li>No se permite <strong>publicidad</strong> de otros servidores o redes no oficiales.</li>
                  <li>Está prohibido el uso excesivo de <strong>MAYÚSCULAS</strong> de forma repetida.</li>
                  <li>No se pueden compartir <strong>links externos</strong> sin permiso del staff.</li>
                  <li>El acoso o amenazas hacia otros jugadores conlleva sanción inmediata.</li>
                </ul>
              </div>
            </div>

            <h2 id="hacks">🚫 Modificaciones ilegales (Hacks)</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Modificaciones prohibidas</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Queda prohibido el uso de <strong>hacks, cheats o clients</strong> que den ventaja injusta.</li>
                  <li>Prohibidos: <strong>kill-aura, fly, speed, x-ray, scaffold, auto-clicker</strong> y similares.</li>
                  <li>No se permiten exploits que den <strong>ventaja económica o de combate</strong>.</li>
                  <li>Los bugs deben <strong>reportarse en Discord</strong>, no explotarse.</li>
                </ul>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">✅</span>
              <div><strong>Mods permitidos:</strong> OptiFine, shaders, minimapas sin radar.
              Ante la duda, consulta en Discord <strong>antes</strong> de instalar cualquier mod.</div>
            </div>

            <h2 id="conducta">🤝 Normas generales de conducta</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Conducta dentro del servidor</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Está prohibido el <strong>griefing</strong> (destruir construcciones ajenas) en zonas no-PvP.</li>
                  <li>No se permite el <strong>robo</strong> en cofres o terrenos ajenos.</li>
                  <li>Está prohibido el <strong>kill-farming</strong> (matar repetidamente al mismo jugador).</li>
                  <li>Se debe <strong>respetar al staff</strong>. Sus decisiones son definitivas.</li>
                  <li>No se permite suplantar la identidad de otros jugadores o del staff.</li>
                  <li>Queda prohibido el <strong>trampeo en eventos</strong> oficiales del servidor.</li>
                </ul>
              </div>
            </div>

            <h2 id="inactividad">⏱️ Política de inactividad</h2>
            <p>Los terrenos de jugadores inactivos podrán ser liberados según estos plazos:</p>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Rango</th><th>Tiempo sin conexión</th><th>Consecuencia</th></tr></thead>
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
                <thead><tr><th>Infracción</th><th>Primera vez</th><th>Reincidencia</th></tr></thead>
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
              No se atenderán por chat del servidor ni por mensajes privados al staff.</div>
            </div>
          `
        },

      ]
    },

    /* ════════════════════════════════════════
       CÓMO INGRESAR
       ════════════════════════════════════════ */
    {
      id:    'como-ingresar',
      name:  'Cómo Ingresar',
      icon:  '🚀',
      color: '#a78bfa',
      open:  false,
      pages: [

        {
          id:          'java-edition',
          name:        'Java Edition',
          icon:        '☕',
          path:        'pages/java.html',
          description: 'Guía paso a paso para conectarte a PlanetMC desde Minecraft Java Edition (PC/Mac/Linux).',
          keywords:    ['java','pc','windows','mac','linux','launcher','conectar','ingresar','ip','1.21','multijugador','optifine','sodium','tlauncher'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">🚀 Cómo Ingresar</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">☕ Java Edition</span>
            </div>

            <div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
              <div style="font-size:2.2rem;margin-bottom:10px;">☕</div>
              <h1 style="margin-bottom:8px;">Cómo Ingresar — Java Edition</h1>
              <p class="page-hero-desc" style="text-align:left;max-width:100%;">
                ¿Juegas Minecraft Java desde PC con Mac, Linux o Windows? Aquí te explicamos
                paso a paso cómo conectarte a PlanetMC de forma rápida y sencilla.
              </p>
            </div>

            <h2 id="que-es">☕ ¿Qué es Minecraft Java Edition?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Información general</div>
              <div class="desc-box-body">
                <p><strong>Minecraft Java Edition</strong> es la versión original del juego, disponible para PC
                (Windows, Mac y Linux). Es la versión más usada en servidores de comunidad y tiene soporte
                para mods y características exclusivas.</p>
                <ul class="wiki-list">
                  <li>🖥️ Compatible con <strong>Windows</strong>, <strong>macOS</strong> y <strong>Linux</strong></li>
                  <li>☕ Requiere el launcher oficial de Minecraft</li>
                  <li>🔑 Se compra en <strong>minecraft.net</strong></li>
                </ul>
              </div>
            </div>

            <h2 id="datos">📡 Datos del servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">🌐 IP del servidor</span>
                <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🎮 Versión</span>
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

            <h2 id="pasos">🚀 Cómo conectarte paso a paso</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Guía de conexión — Java Edition</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Abre el <strong>Minecraft Launcher</strong> y selecciona la versión <strong>1.21.x</strong>.</li>
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
                  <li>Selecciona PlanetMC y haz clic en <strong>"Unirse al servidor"</strong>.</li>
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
              <div><strong>Importante:</strong> Si usas una versión diferente a la del servidor, puede que no
              puedas conectarte o que veas errores. Usa siempre la versión recomendada.</div>
            </div>

            <h2 id="faq">❓ Problemas comunes</h2>
            <div class="desc-box">
              <div class="desc-box-header">❓ FAQ — Java Edition</div>
              <div class="desc-box-body">
                <div class="faq-list">
                  <details class="faq-item">
                    <summary>Me sale "Failed to connect to the server"</summary>
                    <p>Verifica que la IP sea exactamente <code>play.planetmc.net</code> sin espacios.
                    Revisa tu conexión a internet. Si persiste, el servidor puede estar en mantenimiento
                    — consulta el canal <strong>#estado-servidor</strong> en Discord.</p>
                  </details>
                  <details class="faq-item">
                    <summary>Me sale "Outdated server" o "Outdated client"</summary>
                    <p>Tu versión no coincide con la del servidor. Asegúrate de jugar en <strong>1.21.x</strong>.</p>
                  </details>
                  <details class="faq-item">
                    <summary>No veo la opción "Multijugador"</summary>
                    <p>Necesitas una cuenta oficial de Minecraft Java Edition. Cómprala en <strong>minecraft.net</strong>.</p>
                  </details>
                  <details class="faq-item">
                    <summary>El juego va lento o tiene lag</summary>
                    <p>Reduce la distancia de renderizado en las opciones de vídeo. Puedes instalar
                    <strong>OptiFine</strong> o <strong>Sodium</strong> para mejorar el rendimiento.</p>
                  </details>
                  <details class="faq-item">
                    <summary>¿Necesito instalar mods para jugar?</summary>
                    <p>No. PlanetMC funciona con Minecraft vanilla. Solo necesitas la versión correcta
                    y conexión a internet.</p>
                  </details>
                </div>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">🚀</span>
              <div><strong>¿Ya entraste?</strong> ¡Genial! Ahora consulta la guía de
              <strong>Primeros Pasos</strong> para aprender todo lo que necesitas dentro de PlanetMC.</div>
            </div>
          `
        },

        {
          id:          'bedrock-edition',
          name:        'Bedrock Edition',
          icon:        '📱',
          path:        'pages/bedrock.html',
          description: 'Guía para conectarte a PlanetMC desde Minecraft Bedrock (móvil, consola, Windows 10/11).',
          keywords:    ['bedrock','movil','celular','android','ios','tablet','consola','xbox','playstation','switch','windows10','windows11','puerto','19132'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">🚀 Cómo Ingresar</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">📱 Bedrock Edition</span>
            </div>

            <div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
              <div style="font-size:2.2rem;margin-bottom:10px;">📱</div>
              <h1 style="margin-bottom:8px;">Cómo Ingresar — Bedrock Edition</h1>
              <p class="page-hero-desc" style="text-align:left;max-width:100%;">
                ¿Juegas desde celular, tablet, consola o Windows 10/11? Esta guía es para ti.
                Conéctate a PlanetMC desde cualquier dispositivo con Bedrock Edition.
              </p>
            </div>

            <h2 id="que-es">📱 ¿Qué es Minecraft Bedrock Edition?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Información general</div>
              <div class="desc-box-body">
                <p><strong>Minecraft Bedrock Edition</strong> es la versión multiplataforma de Minecraft.
                Disponible en casi todos los dispositivos y permite jugar en multijugador cruzado.</p>
                <ul class="wiki-list">
                  <li>📱 Compatible con <strong>Android</strong> e <strong>iOS</strong></li>
                  <li>🖥️ Compatible con <strong>Windows 10 / Windows 11</strong></li>
                  <li>🎮 Compatible con <strong>Xbox</strong>, <strong>PlayStation</strong> y <strong>Nintendo Switch</strong></li>
                  <li>🔗 Multijugador cruzado entre todas las plataformas</li>
                </ul>
              </div>
            </div>

            <h2 id="datos">📡 Datos del servidor</h2>
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
                <span class="info-label">🎮 Versión</span>
                <span class="info-val">1.21.x (Bedrock)</span>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Haz clic sobre la IP para copiarla automáticamente al portapapeles.</div>
            </div>

            <h2 id="pasos">🚀 Cómo conectarte paso a paso</h2>
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
                  <li>Toca <strong>"Guardar"</strong>.</li>
                  <li>Selecciona PlanetMC en la lista y toca <strong>"Conectar"</strong>.</li>
                  <li>¡Listo! Estarás en el <strong>Spawn</strong> del servidor.</li>
                </ol>
              </div>
            </div>

            <h2 id="consolas">🎮 Conectarse desde consola (Xbox / PlayStation / Switch)</h2>
            <div class="desc-box">
              <div class="desc-box-header">🎮 Consolas</div>
              <div class="desc-box-body">
                <p>En consolas, la pestaña "Servidores" puede estar limitada. Usa uno de estos métodos:</p>
                <ul class="wiki-list">
                  <li><strong>BedrockConnect:</strong> Herramienta gratuita que permite acceder a servidores externos desde consola.</li>
                  <li><strong>DNS personalizado:</strong> Cambia el DNS de tu consola al de BedrockConnect para desbloquear servidores.</li>
                  <li>Busca <em>"BedrockConnect tutorial [tu consola]"</em> en YouTube para una guía visual.</li>
                </ul>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Nota:</strong> En PlayStation y Switch el acceso directo a servidores externos
              está limitado. Necesitarás usar BedrockConnect u otra herramienta similar.</div>
            </div>

            <h2 id="comparacion">⚖️ ¿Java o Bedrock?</h2>
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
                    <li>Móvil, tablet, consola, Windows 10/11</li>
                    <li>Multijugador cruzado entre dispositivos</li>
                    <li>Más accesible</li>
                    <li>IP: <code>play.planetmc.net</code></li>
                    <li>Puerto: <code>19132</code></li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 id="faq">❓ Problemas comunes</h2>
            <div class="desc-box">
              <div class="desc-box-header">❓ FAQ — Bedrock Edition</div>
              <div class="desc-box-body">
                <div class="faq-list">
                  <details class="faq-item">
                    <summary>No aparece la pestaña "Servidores"</summary>
                    <p>En algunas regiones la pestaña está oculta. Usa una VPN gratuita como
                    <strong>Cloudflare WARP</strong> o actualiza tu versión de Minecraft.</p>
                  </details>
                  <details class="faq-item">
                    <summary>No puedo conectarme desde mi consola</summary>
                    <p>Usa <strong>BedrockConnect</strong>. Busca un tutorial en YouTube con el nombre de tu consola.</p>
                  </details>
                  <details class="faq-item">
                    <summary>El servidor aparece como "No disponible"</summary>
                    <p>Verifica IP <code>play.planetmc.net</code> y puerto <code>19132</code>. Si persiste,
                    revisa <strong>#estado-servidor</strong> en Discord.</p>
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
              <div><strong>¿Ya entraste?</strong> ¡Perfecto! Consulta la guía de
              <strong>Primeros Pasos</strong> para comenzar tu aventura en PlanetMC.</div>
            </div>
          `
        },

      ]
    },

    /* ════════════════════════════════════════
       SURVIVAL
       ════════════════════════════════════════ */
    {
      id:    'survival',
      name:  'Survival',
      icon:  '⚔️',
      color: '#22d3a5',
      open:  false,
      pages: [

        {
          id:          'primeros-pasos',
          name:        'Primeros Pasos',
          icon:        '🧭',
          path:        'pages/primeros-pasos.html',
          description: 'Todo lo que necesitas saber al entrar por primera vez: spawn, crates, economía y protecciones.',
          keywords:    ['primeros pasos','comenzar','nuevo','novato','spawn','kit','inicio','comandos','sethome','claim','warp','survival','rtp','crates','jobs','trabajos'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">⚔️ Survival</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🧭 Primeros Pasos</span>
            </div>

            <div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
              <div style="font-size:2.2rem;margin-bottom:10px;">🌱</div>
              <h1 style="margin-bottom:8px;">Primeros Pasos en PlanetMC</h1>
              <p class="page-hero-desc" style="text-align:left;max-width:100%;">
                ¡Bienvenido a PlanetMC! Esta guía te enseñará todo lo que necesitas saber para
                empezar tu aventura con el pie derecho.
              </p>
            </div>

            <h2 id="que-es">🌍 ¿Qué es PlanetMC?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Sobre el servidor</div>
              <div class="desc-box-body">
                <p><strong>PlanetMC</strong> es un servidor de Minecraft tipo <strong>Survival SMP</strong>.
                Aquí puedes construir, explorar, conseguir recursos, hacer amigos y participar en
                una economía activa junto a otros jugadores.</p>
                <ul class="wiki-list">
                  <li>🎮 <strong>Modo principal:</strong> Survival SMP con otros jugadores reales</li>
                  <li>🌱 <strong>Mundo abierto:</strong> Biomas infinitos, minería y construcción libre</li>
                  <li>💰 <strong>Economía activa:</strong> Gana dinero con trabajos, misiones y subastas</li>
                  <li>🛡️ <strong>Protecciones:</strong> Protege tu base para que nadie te robe</li>
                  <li>🎁 <strong>Crates:</strong> Cofres especiales con recompensas sorpresa</li>
                  <li>👥 <strong>Comunidad:</strong> Jugadores amistosos de todas las edades</li>
                </ul>
              </div>
            </div>

            <h2 id="spawn">🏛️ El Spawn — Tu punto de partida</h2>
            <p>Cuando entras por primera vez (o usas <code>/spawn</code>), apareces en el <strong>Spawn</strong> del servidor.</p>
            <div class="desc-box">
              <div class="desc-box-header">📍 ¿Qué es el Spawn?</div>
              <div class="desc-box-body">
                <p>El <strong>Spawn</strong> es la zona central y segura del servidor. Aquí no se puede
                hacer daño a otros jugadores ni destruir bloques.</p>
                <ul class="wiki-list">
                  <li>🛡️ <strong>Zona protegida:</strong> Nadie puede atacarte ni robar dentro del Spawn</li>
                  <li>🎁 <strong>Crates:</strong> Encontrarás cofres especiales con recompensas</li>
                  <li>🌍 <strong>Portales:</strong> Accede al mundo Survival y otras zonas</li>
                  <li>🏪 <strong>Shop:</strong> Tienda donde comprar y vender artículos</li>
                </ul>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Tip:</strong> Si alguna vez te pierdes, escribe <code>/spawn</code> en el chat
              para volver a la zona central. ¡Es gratis y funciona desde cualquier lugar!</div>
            </div>

            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Vuelve al Spawn desde cualquier lugar</span></div>
              <div class="cmd-item"><code>/warp</code><span>Muestra los portales disponibles</span></div>
              <div class="cmd-item"><code>/help</code><span>Muestra los comandos disponibles</span></div>
              <div class="cmd-item"><code>/tpa [jugador]</code><span>Solicitar teletransporte a un jugador</span></div>
            </div>

            <h2 id="crates">🎁 Los Crates — Cofres especiales</h2>
            <p>Los <strong>Crates</strong> son cofres mágicos que contienen premios sorpresa: items raros,
            dinero, protecciones, llaves y mucho más.</p>
            <div class="desc-box">
              <div class="desc-box-header">🎁 ¿Cómo funcionan los Crates?</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>🗝️ <strong>Necesitas una llave:</strong> Cada crate requiere una llave específica</li>
                  <li>🎰 <strong>Premio aleatorio:</strong> Al abrirlo recibes un premio de la lista de recompensas</li>
                  <li>✨ <strong>Premios posibles:</strong> Dinero, items encantados, protecciones, más llaves</li>
                </ul>
                <p style="margin-top:12px;"><strong>¿Cómo conseguir llaves?</strong></p>
                <ul class="wiki-list">
                  <li>🗳️ Votando por el servidor con <code>/vote</code></li>
                  <li>🎯 Completando misiones o desafíos</li>
                  <li>🏆 Participando en eventos del servidor</li>
                  <li>🛒 Comprándolas en la tienda del servidor</li>
                </ul>
              </div>
            </div>
            <div class="desc-box" style="margin-top:16px;">
              <div class="desc-box-header">📋 Cómo abrir un Crate</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Escribe <code>/warcrates</code> para teleportarte a la zona de Crates.</li>
                  <li>Asegúrate de tener una <strong>llave</strong> en tu inventario.</li>
                  <li>Haz <strong>clic derecho</strong> sobre el cofre del tipo de llave que tienes.</li>
                  <li>¡Observa la animación y descubre tu premio!</li>
                </ol>
              </div>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/warcrates</code><span>Teleportarte a la zona de Crates</span></div>
            </div>

            <h2 id="mundo-survival">🌍 Ir al Mundo Survival</h2>
            <p>Cuando estés listo, necesitas salir del Spawn hacia el <strong>mundo Survival</strong>.</p>
            <div class="desc-box">
              <div class="desc-box-header">🌍 ¿Cómo llegar?</div>
              <div class="desc-box-body">
                <p><strong>Opción 1 — RTP (Teletransporte Aleatorio):</strong></p>
                <ol class="wiki-steps">
                  <li>Escribe <code>/rtp</code> en el chat.</li>
                  <li>El servidor te teletransportará a un lugar aleatorio del Survival.</li>
                  <li>¡Explora los alrededores y busca un buen lugar para tu base!</li>
                </ol>
                <p style="margin-top:16px;"><strong>Opción 2 — Portales del Spawn:</strong></p>
                <ol class="wiki-steps">
                  <li>Busca los portales o zonas de acceso en el Spawn.</li>
                  <li>Camina hacia el portal del Mundo Survival.</li>
                </ol>
              </div>
            </div>
            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>¡Recuerda!</strong> El comando <code>/rtp</code> puede tener tiempo de espera entre usos.</div>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/rtp</code><span>Teletransporte aleatorio al Survival</span></div>
              <div class="cmd-item"><code>/sethome</code><span>Establece tu casa en tu posición</span></div>
              <div class="cmd-item"><code>/home</code><span>Vuelve a tu casa</span></div>
            </div>

            <h2 id="primeras-horas">🏠 Qué hacer en el Mundo Survival</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="feature-icon">⛏️</div>
                <div class="feature-title">Mina y recolecta</div>
                <div class="feature-desc">Consigue recursos para mejorar tu equipo. Los diamantes y el netherite son los más valiosos.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏗️</div>
                <div class="feature-title">Construye tu base</div>
                <div class="feature-desc">Crea tu hogar donde más te guste. El mundo es enorme y hay sitio para todos.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🤝</div>
                <div class="feature-title">Haz amigos</div>
                <div class="feature-desc">Únete a grupos de jugadores y trabaja en equipo para progresar más rápido.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏆</div>
                <div class="feature-title">Progresa y mejora</div>
                <div class="feature-desc">Sube de nivel en los trabajos, completa misiones y conviértete en un jugador poderoso.</div>
              </div>
            </div>

            <h2 id="economia-rapida">💰 Economía — Gana dinero en el servidor</h2>
            <p>PlanetMC tiene un sistema de economía activo. La moneda se llama <strong>PlanetCoins</strong>.</p>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="feature-icon">👷</div>
                <div class="feature-title">Jobs (Trabajos)</div>
                <div class="feature-desc">Elige un trabajo como minero, leñador, pescador o granjero y gana dinero automáticamente.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <div class="feature-title">Misiones</div>
                <div class="feature-desc">Completa misiones diarias y semanales para ganar dinero extra y recompensas especiales.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🔨</div>
                <div class="feature-title">Subastas (/ah)</div>
                <div class="feature-desc">Vende tus items al mejor precio. Otros jugadores pueden comprar lo que pongas en venta.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏪</div>
                <div class="feature-title">Shop (/shop)</div>
                <div class="feature-desc">Compra y vende materiales directamente en la tienda oficial a precios fijos.</div>
              </div>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/jobs</code><span>Ver y unirte a trabajos</span></div>
              <div class="cmd-item"><code>/missions</code><span>Ver misiones disponibles</span></div>
              <div class="cmd-item"><code>/ah</code><span>Abrir las subastas</span></div>
              <div class="cmd-item"><code>/shop</code><span>Abrir la tienda del servidor</span></div>
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo actual</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero</span></div>
            </div>

            <h2 id="consejos">🌟 Consejos para nuevos jugadores</h2>
            <div class="desc-box">
              <div class="desc-box-header">💡 Consejos de oro</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>🛡️ <strong>Protege tu base lo antes posible</strong> — Es lo más importante al empezar</li>
                  <li>👷 <strong>Únete a un trabajo desde el primer día</strong> — Ganarás dinero sin esfuerzo extra</li>
                  <li>🗳️ <strong>Vota todos los días</strong> con <code>/vote</code> para conseguir llaves gratis</li>
                  <li>📖 <strong>Lee la Wiki</strong> — Tiene toda la información que necesitas</li>
                  <li>💬 <strong>No dudes en preguntar en el chat</strong> — La comunidad siempre ayuda</li>
                  <li>🏠 <strong>Usa /sethome</strong> al lado de tu base para poder volver fácilmente</li>
                  <li>🤝 <strong>Solo añade miembros de confianza</strong> a tus protecciones</li>
                </ul>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>¡Importante!</strong> Si tienes algún problema con otro jugador o encuentras algo
              sospechoso, repórtalo a los administradores. No hagas justicia por tu cuenta.</div>
            </div>
          `
        },

        {
          id:          'economia',
          name:        'Economía',
          icon:        '💰',
          path:        'pages/economia.html',
          description: 'Sistema económico de PlanetMC: cómo ganar y gastar PlanetCoins, tienda, subasta y misiones.',
          keywords:    ['economia','dinero','planetcoins','plc','moneda','ganar','tienda','shop','subasta','ah','misiones','quests','votar','vote','balance','pay','baltop','jobs','trabajos'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">⚔️ Survival</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">💰 Economía</span>
            </div>

            <div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
              <div style="font-size:2.2rem;margin-bottom:10px;">💰</div>
              <h1 style="margin-bottom:8px;">Sistema de Economía</h1>
              <p class="page-hero-desc" style="text-align:left;max-width:100%;">
                Descubre cómo funciona la economía de PlanetMC: gana dinero, comercia con jugadores
                y convierte tus recursos en riqueza.
              </p>
            </div>

            <p>La moneda oficial de PlanetMC es el <strong>PlanetCoin (PLC)</strong>.
            Puedes ganarla y gastarla de múltiples formas dentro del servidor.</p>

            <h2 id="ganar">📈 ¿Cómo ganar PlanetCoins?</h2>
            <div class="desc-box">
              <div class="desc-box-header">💵 Formas de ganar dinero</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li><strong>Vendiendo items</strong> en la tienda del servidor (<code>/shop</code>)</li>
                  <li><strong>Publicando items</strong> en la subasta entre jugadores (<code>/ah sell [precio]</code>)</li>
                  <li><strong>Trabajos (Jobs):</strong> gana dinero automáticamente al minar, cortar madera, pescar, etc. (<code>/jobs</code>)</li>
                  <li><strong>Completando misiones</strong> diarias y semanales (<code>/missions</code>)</li>
                  <li><strong>Votando</strong> por el servidor (<code>/vote</code>)</li>
                  <li><strong>Ganando eventos</strong> especiales del servidor</li>
                  <li><strong>Comerciando</strong> directamente con otros jugadores</li>
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

            <h2 id="jobs">👷 Trabajos (/jobs)</h2>
            <p>Únete a un trabajo para ganar dinero automáticamente mientras juegas:</p>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Trabajo</th><th>Actividad remunerada</th></tr></thead>
                <tbody>
                  <tr><td>⛏️ Minero</td><td>Minar bloques de minerales y piedra</td></tr>
                  <tr><td>🌲 Leñador</td><td>Cortar árboles y recolectar madera</td></tr>
                  <tr><td>🌾 Granjero</td><td>Cosechar cultivos y criar animales</td></tr>
                  <tr><td>🎣 Pescador</td><td>Pescar peces y tesoros</td></tr>
                  <tr><td>⚔️ Cazador</td><td>Matar mobs y conseguir drops</td></tr>
                  <tr><td>🏗️ Constructor</td><td>Colocar bloques y construir</td></tr>
                </tbody>
              </table>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/jobs</code><span>Ver trabajos disponibles</span></div>
              <div class="cmd-item"><code>/jobs join [nombre]</code><span>Unirte a un trabajo</span></div>
              <div class="cmd-item"><code>/jobs stats</code><span>Ver tus estadísticas de trabajo</span></div>
            </div>

            <h2 id="subasta">🏷️ Casa de Subastas (/ah)</h2>
            <p>El Auction House es el mercado entre jugadores. Generalmente ofrece mejores precios que la tienda oficial:</p>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Comando</span><span class="info-val"><code>/ah</code></span></div>
              <div class="info-card-row"><span class="info-label">Duración del listado</span><span class="info-val">48 horas</span></div>
              <div class="info-card-row"><span class="info-label">Comisión del servidor</span><span class="info-val">5% del precio de venta</span></div>
              <div class="info-card-row"><span class="info-label">Máx. items listados</span><span class="info-val">5 (VIP: 15 / MVP: 30)</span></div>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/ah</code><span>Abrir el Auction House</span></div>
              <div class="cmd-item"><code>/ah sell [precio]</code><span>Vender item en mano</span></div>
              <div class="cmd-item"><code>/ah search [nombre]</code><span>Buscar item</span></div>
              <div class="cmd-item"><code>/ah expired</code><span>Recoger items no vendidos</span></div>
              <div class="cmd-item"><code>/ah selling</code><span>Ver tus items en venta</span></div>
            </div>

            <h2 id="misiones">🎯 Misiones (/missions)</h2>
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

            <h2 id="comandos">⌨️ Todos los comandos de Economía</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo actual</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero a otro jugador</span></div>
              <div class="cmd-item"><code>/baltop</code><span>Ranking de jugadores más ricos</span></div>
              <div class="cmd-item"><code>/shop</code><span>Abrir la tienda del servidor</span></div>
              <div class="cmd-item"><code>/ah</code><span>Abrir la subasta</span></div>
              <div class="cmd-item"><code>/jobs</code><span>Ver y gestionar tus trabajos</span></div>
              <div class="cmd-item"><code>/missions</code><span>Ver misiones disponibles</span></div>
              <div class="cmd-item"><code>/vote</code><span>Votar y ganar recompensas</span></div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Vota diariamente con <code>/vote</code> para obtener PlanetCoins
              gratis. ¡Es la forma más fácil de ganar dinero sin farmear!</div>
            </div>
          `
        },

        {
          id:          'protecciones',
          name:        'Protecciones',
          icon:        '🛡️',
          path:        'pages/protecciones.html',
          description: 'Cómo proteger tu terreno y construcciones del griefing usando GriefPrevention.',
          keywords:    ['proteger','proteccion','claim','griefprevention','terreno','base','griefing','robo','pala dorada','trust','subclaim','abandonclaim','claimlist','flags'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">⚔️ Survival</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🛡️ Protecciones</span>
            </div>

            <div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
              <div style="font-size:2.2rem;margin-bottom:10px;">🛡️</div>
              <h1 style="margin-bottom:8px;">Protecciones de Terreno</h1>
              <p class="page-hero-desc" style="text-align:left;max-width:100%;">
                Protege tu base y tus construcciones con el sistema GriefPrevention.
                Sin protección, tu terreno es vulnerable.
              </p>
            </div>

            <div class="warn-box">
              <span class="warn-icon">🔴</span>
              <div>El servidor <strong>NO</strong> se responsabiliza por griefing o robos en zonas
              sin proteger. ¡Siempre protege tu terreno antes de construir cosas valiosas!</div>
            </div>

            <h2 id="como-proteger">🔒 Cómo Proteger tu Terreno</h2>
            <p>Usamos el plugin <strong>GriefPrevention</strong>. Para reclamar terreno sigue estos pasos:</p>
            <div class="desc-box">
              <div class="desc-box-header">📋 Pasos para crear un claim</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Obtén una <strong>pala dorada</strong> (se otorga al unirte, o cómprala en <code>/shop</code>).</li>
                  <li>Con la pala en mano, haz <strong>clic derecho</strong> en una esquina de tu terreno.</li>
                  <li>Luego haz clic derecho en la <strong>esquina opuesta</strong> (en diagonal).</li>
                  <li>¡Tu terreno estará protegido! Verás partículas de oro en los bordes.</li>
                </ol>
              </div>
            </div>

            <h2 id="bloques">📏 Bloques de Claim</h2>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Bloques iniciales</span><span class="info-val">100 bloques de claim</span></div>
              <div class="info-card-row"><span class="info-label">Ganancia</span><span class="info-val">+100 bloques por hora jugada</span></div>
              <div class="info-card-row"><span class="info-label">Máximo (sin donación)</span><span class="info-val">10,000 bloques</span></div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div>¡Cuanto más tiempo juegues, más bloques de claim acumulas! Los rangos VIP y MVP
              otorgan bloques adicionales desde el inicio.</div>
            </div>

            <h2 id="comandos">⌨️ Comandos de Protección</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/claim</code><span>Activar modo reclamación</span></div>
              <div class="cmd-item"><code>/abandonclaim</code><span>Eliminar el claim actual</span></div>
              <div class="cmd-item"><code>/claimlist</code><span>Ver tus claims activos</span></div>
              <div class="cmd-item"><code>/trust [jugador]</code><span>Dar acceso completo a un jugador</span></div>
              <div class="cmd-item"><code>/containertrust [jugador]</code><span>Permitir abrir cofres</span></div>
              <div class="cmd-item"><code>/accesstrust [jugador]</code><span>Permitir usar puertas/botones</span></div>
              <div class="cmd-item"><code>/untrust [jugador]</code><span>Quitar permisos a un jugador</span></div>
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
              <div><strong>Importante:</strong> Si abandonas un claim con <code>/abandonclaim</code>,
              todos los permisos y la protección se eliminan de forma <strong>permanente</strong>.</div>
            </div>
          `
        },

      ]
    },

  ] // fin categories

}; // fin WIKI_DATA
