/* ═══════════════════════════════════════════════════════════════
   wiki-data.js  —  Fuente CENTRAL de datos y contenido
   PlanetMC Wiki
   ⚠️  Usar: var (no const/let) para evitar el error
       "Identifier already declared" si el script se carga más de una vez.
   ═══════════════════════════════════════════════════════════════ */

// Guard: si ya está cargado, no redeclarar
if (typeof WIKI_DATA === 'undefined') {

var WIKI_DATA = {

  /* ── Información global ─────────────────────────────────────── */
  site: {
    name:        'PlanetMC',
    wikiTitle:   'Wiki Oficial',
    tagline:     'Tu guía completa del servidor',
    javaIP:      'planetmc.net',
    bedrockIP:   'planetmc.net',
    bedrockPort: '19132',
    discordURL:  'https://discord.gg/planetmc',
    shopURL:     'https://planet.tebex.io',
    mainURL:     'https://planetmc.net',
    version:     '1.21.x',
  },

  /* ── Navbar ─────────────────────────────────────────────────── */
  navLinks: [
    { name: 'Inicio',  url: 'https://planetmc.net',        external: true  },
    { name: 'Wiki',    url: 'index.html',                  external: false },
    { name: 'Tienda',  url: 'https://planet.tebex.io', external: true  },
    { name: 'Discord', url: 'https://discord.gg/planetmc', external: true, icon: 'discord' },
  ],

  /* ══════════════════════════════════════════════════════════════
     CATEGORÍAS Y PÁGINAS
     path → ruta RELATIVA DESDE LA RAÍZ del proyecto.
             Debe coincidir exactamente con el archivo HTML real.
     ══════════════════════════════════════════════════════════════

     Estructura real de carpetas:
       pages/bienvenida.html
       pages/normas.html
       pages/ingresar/java.html
       pages/ingresar/bedrock.html
       pages/survival/primeros-pasos.html
       pages/survival/economia.html
       pages/survival/protecciones.html
  */
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
          keywords:    ['bienvenida','inicio','introduccion','empezar','nuevo','jugador','survival'],
          content: `
            <div class="breadcrumb-bar">
              <span class="bc-cat">🌐 General</span>
              <span class="bc-sep">›</span>
              <span class="bc-page">🏠 Bienvenida</span>
            </div>
            <div class="page-hero" style="text-align:center;">
              <img src="../logo.png" alt="PlanetMC Logo" style="width:400px;max-width:90%;margin-bottom:20px;display:block;margin-left:auto;margin-right:auto;filter:drop-shadow(0 0 24px rgba(0,229,255,.3));">
              <div style="font-size:2.2rem;">🌌</div>
              <h1>Bienvenido a la Wiki de PlanetMC</h1>
              <p class="page-hero-desc">Tu punto de inicio para descubrir todo lo que ofrece el servidor.</p>
            </div>
            <p>Nos alegra tenerte aquí. En esta wiki encontrarás toda la información necesaria
            para comenzar tu aventura: desde <strong>guías básicas</strong> hasta sistemas más avanzados.</p>
            <p>PlanetMC es una comunidad enfocada en ofrecer una experiencia <strong>survival divertida,
            estable y en constante evolución</strong>.</p>

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
                <span class="info-val ip-copy" data-ip="planetmc.net">planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">IP Bedrock</span>
                <span class="info-val ip-copy" data-ip="planetmc.net">planetmc.net 📋</span>
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
            <p>Cada jugador escribe su propia historia en PlanetMC. Este es solo el comienzo.</p>
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
          keywords:    ['reglas','normas','ban','sanciones','hack','chat','spam','griefing','robo','apelacion','mute','inactividad'],
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
              <div>El equipo de moderación tiene plena autoridad para sancionar cualquier conducta inapropiada,
              <strong>aunque no aparezca en este reglamento</strong>.</div>
            </div>
            <p>En PlanetMC, las <strong>Normas</strong> son el código de honor que cuida la convivencia. Léelas antes de empezar.</p>

            <h2 id="chat">💬 Normas de Chat</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Reglas del Chat</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Está <strong>prohibido el spam</strong> (repetir mensajes) y el flood.</li>
                  <li>Queda prohibido el <strong>lenguaje ofensivo</strong>, discriminatorio o racista.</li>
                  <li>No se permite <strong>publicidad</strong> de otros servidores.</li>
                  <li>Está prohibido el uso excesivo de <strong>MAYÚSCULAS</strong>.</li>
                  <li>No se pueden compartir <strong>links externos</strong> sin permiso del staff.</li>
                  <li>El acoso o amenazas conlleva sanción inmediata.</li>
                </ul>
              </div>
            </div>

            <h2 id="hacks">🚫 Modificaciones ilegales (Hacks)</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Modificaciones prohibidas</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Prohibido el uso de <strong>hacks, cheats o clients</strong> con ventaja injusta.</li>
                  <li>Prohibidos: <strong>kill-aura, fly, speed, x-ray, scaffold, auto-clicker</strong>.</li>
                  <li>No se permiten exploits de <strong>ventaja económica o de combate</strong>.</li>
                  <li>Los bugs deben <strong>reportarse en Discord</strong>, no explotarse.</li>
                </ul>
              </div>
            </div>
            <div class="tip-box">
              <span class="tip-icon">✅</span>
              <div><strong>Mods permitidos:</strong> OptiFine, shaders, minimapas sin radar. Consulta en Discord antes de instalar.</div>
            </div>

            <h2 id="conducta">🤝 Normas de conducta</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Conducta dentro del servidor</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Prohibido el <strong>griefing</strong> en zonas no-PvP.</li>
                  <li>No se permite el <strong>robo</strong> en cofres o terrenos ajenos.</li>
                  <li>Prohibido el <strong>kill-farming</strong>.</li>
                  <li>Se debe <strong>respetar al staff</strong>. Sus decisiones son definitivas.</li>
                  <li>No se puede suplantar la identidad de jugadores o staff.</li>
                  <li>Prohibido el <strong>trampeo en eventos</strong>.</li>
                </ul>
              </div>
            </div>

            <h2 id="inactividad">⏱️ Política de inactividad</h2>
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
              <div>Si vas a ausentarte, avisa en Discord para que el staff no libere tu terreno.</div>
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
                  <li>Incluye tu <strong>nombre de usuario</strong>, la sanción y tu versión de los hechos.</li>
                  <li>Adjunta <strong>pruebas</strong> si las tienes.</li>
                  <li>Espera respuesta en máximo <strong>72 horas hábiles</strong>.</li>
                </ol>
              </div>
            </div>
            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Importante:</strong> Las apelaciones son <strong>exclusivamente por Discord</strong>.</div>
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
          path:        'pages/ingresar/java.html',
          description: 'Guía paso a paso para conectarte a PlanetMC desde Minecraft Java Edition.',
          keywords:    ['java','pc','windows','mac','linux','launcher','conectar','ip','1.21','multijugador','optifine'],
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
                ¿Juegas desde PC con Mac, Linux o Windows? Aquí te explicamos cómo conectarte paso a paso.
              </p>
            </div>

            <h2 id="que-es">☕ ¿Qué es Minecraft Java Edition?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Información general</div>
              <div class="desc-box-body">
                <p><strong>Minecraft Java Edition</strong> es la versión original del juego para PC (Windows, Mac y Linux).</p>
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
                <span class="info-val ip-copy" data-ip="planetmc.net">planetmc.net 📋</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🎮 Versión</span>
                <span class="info-val">1.21.x</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">🔌 Puerto</span>
                <span class="info-val">25565 (no necesitas escribirlo)</span>
              </div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div>Haz clic sobre la IP para copiarla automáticamente.</div>
            </div>

            <h2 id="pasos">🚀 Cómo conectarte paso a paso</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Guía de conexión — Java Edition</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Abre el <strong>Minecraft Launcher</strong> y selecciona la versión <strong>1.21.x</strong>.</li>
                  <li>Haz clic en <strong>"Jugar"</strong>.</li>
                  <li>En el menú principal, haz clic en <strong>"Multijugador"</strong>.</li>
                  <li>Haz clic en <strong>"Añadir servidor"</strong>.</li>
                  <li>Escribe en Dirección: <code>planetmc.net</code></li>
                  <li>Haz clic en <strong>"Listo"</strong> y luego en <strong>"Unirse al servidor"</strong>.</li>
                  <li>¡Ya estás dentro! Serás enviado al <strong>Spawn</strong>.</li>
                </ol>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div>Usa siempre la versión <strong>1.21.x</strong>. Otras versiones pueden dar error de conexión.</div>
            </div>

            <h2 id="faq">❓ Problemas comunes</h2>
            <div class="desc-box">
              <div class="desc-box-header">❓ FAQ — Java Edition</div>
              <div class="desc-box-body">
                <div class="faq-list">
                  <details class="faq-item">
                    <summary>Me sale "Failed to connect to the server"</summary>
                    <p>Verifica que la IP sea exactamente <code>planetmc.net</code>. Revisa tu internet. Si persiste, consulta <strong>#estado-servidor</strong> en Discord.</p>
                  </details>
                  <details class="faq-item">
                    <summary>Me sale "Outdated client"</summary>
                    <p>Tu versión no coincide. Asegúrate de jugar en <strong>1.21.x</strong>.</p>
                  </details>
                  <details class="faq-item">
                    <summary>No veo la opción "Multijugador"</summary>
                    <p>Necesitas una cuenta oficial. Cómprala en <strong>minecraft.net</strong>.</p>
                  </details>
                  <details class="faq-item">
                    <summary>El juego va lento</summary>
                    <p>Reduce la distancia de renderizado. Instala <strong>OptiFine</strong> o <strong>Sodium</strong>.</p>
                  </details>
                </div>
              </div>
            </div>
          `
        },

        {
          id:          'bedrock-edition',
          name:        'Bedrock Edition',
          icon:        '📱',
          path:        'pages/ingresar/bedrock.html',
          description: 'Guía para conectarte a PlanetMC desde Minecraft Bedrock (móvil, consola, Windows 10/11).',
          keywords:    ['bedrock','movil','celular','android','ios','tablet','consola','xbox','playstation','switch','puerto','19132'],
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
              </p>
            </div>

            <h2 id="que-es">📱 ¿Qué es Minecraft Bedrock?</h2>
            <div class="desc-box">
              <div class="desc-box-header">📌 Información general</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>📱 Compatible con <strong>Android</strong> e <strong>iOS</strong></li>
                  <li>🖥️ Compatible con <strong>Windows 10 / Windows 11</strong></li>
                  <li>🎮 Compatible con <strong>Xbox</strong>, <strong>PlayStation</strong> y <strong>Nintendo Switch</strong></li>
                  <li>🔗 Multijugador cruzado entre plataformas</li>
                </ul>
              </div>
            </div>

            <h2 id="datos">📡 Datos del servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">🌐 IP del servidor</span>
                <span class="info-val ip-copy" data-ip="planetmc.net">planetmc.net 📋</span>
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

            <h2 id="pasos">🚀 Cómo conectarte paso a paso</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Guía de conexión — Bedrock Edition</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Abre <strong>Minecraft</strong> en tu dispositivo.</li>
                  <li>Toca <strong>"Jugar"</strong> → pestaña <strong>"Servidores"</strong>.</li>
                  <li>Desplázate hacia abajo y toca <strong>"Añadir servidor"</strong>.</li>
                  <li>Rellena: Dirección <code>planetmc.net</code> · Puerto <code>19132</code></li>
                  <li>Toca <strong>"Guardar"</strong> y luego <strong>"Conectar"</strong>.</li>
                  <li>¡Listo! Estarás en el <strong>Spawn</strong>.</li>
                </ol>
              </div>
            </div>

            <h2 id="consolas">🎮 Conectarse desde consola</h2>
            <div class="desc-box">
              <div class="desc-box-header">🎮 Xbox / PlayStation / Switch</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Usa <strong>BedrockConnect</strong> — herramienta gratuita para acceder a servidores externos.</li>
                  <li>Busca <em>"BedrockConnect tutorial [tu consola]"</em> en YouTube.</li>
                </ul>
              </div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div>En PlayStation y Switch el acceso directo está limitado. Necesitas BedrockConnect.</div>
            </div>

            <h2 id="faq">❓ Problemas comunes</h2>
            <div class="desc-box">
              <div class="desc-box-header">❓ FAQ — Bedrock</div>
              <div class="desc-box-body">
                <div class="faq-list">
                  <details class="faq-item">
                    <summary>No aparece la pestaña "Servidores"</summary>
                    <p>Usa una VPN gratuita como <strong>Cloudflare WARP</strong> o actualiza Minecraft.</p>
                  </details>
                  <details class="faq-item">
                    <summary>No puedo conectarme desde consola</summary>
                    <p>Usa <strong>BedrockConnect</strong>. Busca tutorial en YouTube.</p>
                  </details>
                  <details class="faq-item">
                    <summary>¿Puedo jugar con amigos de Java?</summary>
                    <p>¡Sí! PlanetMC soporta conexión cruzada Java ↔ Bedrock vía Geyser.</p>
                  </details>
                </div>
              </div>
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
          path:        'pages/survival/primeros-pasos.html',
          description: 'Todo lo que necesitas saber al entrar por primera vez: spawn, crates, economía y protecciones.',
          keywords:    ['primeros pasos','spawn','kit','comandos','sethome','claim','warp','rtp','crates','jobs'],
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
                ¡Bienvenido! Esta guía te lleva de la mano en tus primeros momentos en el servidor.
              </p>
            </div>

            <h2 id="spawn">🏛️ El Spawn</h2>
            <div class="desc-box">
              <div class="desc-box-header">📍 ¿Qué es el Spawn?</div>
              <div class="desc-box-body">
                <p>El <strong>Spawn</strong> es la zona central y segura del servidor. Nadie puede atacarte aquí.</p>
                <ul class="wiki-list">
                  <li>🛡️ Zona protegida — nadie puede atacarte ni robar</li>
                  <li>🎁 Crates — cofres especiales con recompensas</li>
                  <li>🌍 Portales — accede al mundo Survival</li>
                  <li>🏪 Shop — compra y vende artículos</li>
                </ul>
              </div>
            </div>
            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div>Si te pierdes, usa <code>/spawn</code> para volver al centro. ¡Es gratis desde cualquier lugar!</div>
            </div>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Volver al Spawn</span></div>
              <div class="cmd-item"><code>/warp</code><span>Ver portales disponibles</span></div>
              <div class="cmd-item"><code>/help</code><span>Ver comandos disponibles</span></div>
              <div class="cmd-item"><code>/tpa [jugador]</code><span>Solicitar teletransporte</span></div>
            </div>

            <h2 id="crates">🎁 Los Crates</h2>
            <div class="desc-box">
              <div class="desc-box-header">🎁 ¿Cómo funcionan?</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>🗝️ Necesitas una <strong>llave</strong> específica para cada crate</li>
                  <li>🎰 Al abrirlo recibes un premio aleatorio de la lista de recompensas</li>
                  <li>✨ Premios: dinero, items encantados, protecciones, más llaves</li>
                </ul>
                <p style="margin-top:12px;"><strong>¿Cómo conseguir llaves?</strong></p>
                <ul class="wiki-list">
                  <li>🗳️ Votando con <code>/vote</code></li>
                  <li>🎯 Completando misiones</li>
                  <li>🏆 Ganando eventos</li>
                  <li>🛒 Comprando en la tienda</li>
                </ul>
              </div>
            </div>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/warcrates</code><span>Ir a la zona de Crates</span></div>
            </div>

            <h2 id="mundo-survival">🌍 Ir al Mundo Survival</h2>
            <div class="desc-box">
              <div class="desc-box-header">🌍 ¿Cómo llegar?</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Escribe <code>/rtp</code> para teletransportarte a un lugar aleatorio.</li>
                  <li>Explora y busca un buen lugar para tu base.</li>
                  <li>Protege tu terreno con <code>/claim</code> antes de construir.</li>
                  <li>Establece tu hogar con <code>/sethome</code>.</li>
                </ol>
              </div>
            </div>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/rtp</code><span>Teletransporte aleatorio</span></div>
              <div class="cmd-item"><code>/sethome</code><span>Establecer tu hogar</span></div>
              <div class="cmd-item"><code>/home</code><span>Ir a tu hogar</span></div>
            </div>

            <h2 id="primeras-horas">🏠 Qué hacer primero</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="feature-icon">⛏️</div>
                <div class="feature-title">Mina y recolecta</div>
                <div class="feature-desc">Consigue recursos para mejorar tu equipo.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏗️</div>
                <div class="feature-title">Construye tu base</div>
                <div class="feature-desc">Elige un lugar y crea tu hogar.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">👷</div>
                <div class="feature-title">Únete a un Job</div>
                <div class="feature-desc">Gana dinero automáticamente mientras juegas.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🛡️</div>
                <div class="feature-title">Protege tu base</div>
                <div class="feature-desc">Usa /claim antes de que alguien te robe.</div>
              </div>
            </div>

            <h2 id="consejos">🌟 Consejos para nuevos jugadores</h2>
            <div class="desc-box">
              <div class="desc-box-header">💡 Consejos de oro</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>🛡️ <strong>Protege tu base</strong> lo antes posible con <code>/claim</code></li>
                  <li>👷 <strong>Únete a un job</strong> desde el primer día con <code>/jobs</code></li>
                  <li>🗳️ <strong>Vota todos los días</strong> con <code>/vote</code> para llaves gratis</li>
                  <li>🏠 <strong>Usa /sethome</strong> al lado de tu base para volver fácil</li>
                  <li>💬 <strong>Pregunta en el chat</strong> — la comunidad siempre ayuda</li>
                </ul>
              </div>
            </div>
            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div>El servidor NO se responsabiliza por pérdidas en zonas sin proteger. ¡Siempre usa <code>/claim</code>!</div>
            </div>
          `
        },

        {
          id:          'economia',
          name:        'Economía',
          icon:        '💰',
          path:        'pages/survival/economia.html',
          description: 'Sistema económico de PlanetMC: PlanetCoins, tienda, subasta, jobs y misiones.',
          keywords:    ['economia','dinero','planetcoins','tienda','shop','subasta','ah','misiones','votar','vote','balance','pay','baltop','jobs'],
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
                Gana dinero, comercia con jugadores y convierte tus recursos en riqueza.
              </p>
            </div>

            <p>La moneda oficial es el <strong>PlanetCoin (PLC)</strong>. Puedes ganarla y gastarla de múltiples formas.</p>

            <h2 id="ganar">📈 ¿Cómo ganar PlanetCoins?</h2>
            <div class="desc-box">
              <div class="desc-box-header">💵 Formas de ganar dinero</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li><strong>/shop</strong> — Vende items a la tienda del servidor</li>
                  <li><strong>/ah sell [precio]</strong> — Vende a otros jugadores en la subasta</li>
                  <li><strong>/jobs</strong> — Gana dinero automáticamente minando, cortando, pescando…</li>
                  <li><strong>/missions</strong> — Completa misiones diarias y semanales</li>
                  <li><strong>/vote</strong> — Vota por el servidor cada día</li>
                  <li><strong>Eventos</strong> — Participa y gana premios especiales</li>
                </ul>
              </div>
            </div>

            <h2 id="jobs">👷 Trabajos (/jobs)</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Trabajo</th><th>Actividad remunerada</th></tr></thead>
                <tbody>
                  <tr><td>⛏️ Minero</td><td>Minar minerales y piedra</td></tr>
                  <tr><td>🌲 Leñador</td><td>Cortar árboles</td></tr>
                  <tr><td>🌾 Granjero</td><td>Cosechar cultivos y criar animales</td></tr>
                  <tr><td>🎣 Pescador</td><td>Pescar</td></tr>
                  <tr><td>⚔️ Cazador</td><td>Matar mobs</td></tr>
                  <tr><td>🏗️ Constructor</td><td>Colocar bloques</td></tr>
                </tbody>
              </table>
            </div>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/jobs</code><span>Ver trabajos disponibles</span></div>
              <div class="cmd-item"><code>/jobs join [nombre]</code><span>Unirte a un trabajo</span></div>
              <div class="cmd-item"><code>/jobs stats</code><span>Ver tus estadísticas</span></div>
            </div>

            <h2 id="tienda">🛒 Tienda (/shop)</h2>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Comando</span><span class="info-val"><code>/shop</code></span></div>
              <div class="info-card-row"><span class="info-label">Comisión</span><span class="info-val">0% (precio directo)</span></div>
            </div>
            <div class="table-wrap" style="margin-top:16px;">
              <table class="wiki-table">
                <thead><tr><th>Item</th><th>Venta al servidor</th><th>Compra al servidor</th></tr></thead>
                <tbody>
                  <tr><td>Diamante</td><td>$25 c/u</td><td>$80 c/u</td></tr>
                  <tr><td>Esmeralda</td><td>$15 c/u</td><td>$50 c/u</td></tr>
                  <tr><td>Hierro</td><td>$3 c/u</td><td>$10 c/u</td></tr>
                  <tr><td>Oro</td><td>$8 c/u</td><td>$25 c/u</td></tr>
                  <tr><td>Trigo (64)</td><td>$40</td><td>$120</td></tr>
                  <tr><td>Madera (64)</td><td>$20</td><td>$60</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="subasta">🏷️ Subasta (/ah)</h2>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Comando</span><span class="info-val"><code>/ah</code></span></div>
              <div class="info-card-row"><span class="info-label">Duración</span><span class="info-val">48 horas</span></div>
              <div class="info-card-row"><span class="info-label">Comisión</span><span class="info-val">5% del precio</span></div>
              <div class="info-card-row"><span class="info-label">Máx. listados</span><span class="info-val">5 (VIP: 15 / MVP: 30)</span></div>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/ah</code><span>Abrir la subasta</span></div>
              <div class="cmd-item"><code>/ah sell [precio]</code><span>Vender item en mano</span></div>
              <div class="cmd-item"><code>/ah search [item]</code><span>Buscar item</span></div>
              <div class="cmd-item"><code>/ah expired</code><span>Recoger items no vendidos</span></div>
            </div>

            <h2 id="comandos">⌨️ Comandos de Economía</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero</span></div>
              <div class="cmd-item"><code>/baltop</code><span>Ranking de más ricos</span></div>
              <div class="cmd-item"><code>/shop</code><span>Tienda del servidor</span></div>
              <div class="cmd-item"><code>/ah</code><span>Casa de subastas</span></div>
              <div class="cmd-item"><code>/jobs</code><span>Gestionar trabajos</span></div>
              <div class="cmd-item"><code>/missions</code><span>Ver misiones</span></div>
              <div class="cmd-item"><code>/vote</code><span>Votar y ganar recompensas</span></div>
            </div>

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div><strong>Consejo:</strong> Vota diariamente con <code>/vote</code>. ¡Es la forma más fácil de ganar PlanetCoins gratis!</div>
            </div>
          `
        },

        {
          id:          'protecciones',
          name:        'Protecciones',
          icon:        '🛡️',
          path:        'pages/survival/protecciones.html',
          description: 'Cómo proteger tu terreno del griefing con GriefPrevention.',
          keywords:    ['proteger','proteccion','claim','griefprevention','terreno','base','griefing','robo','pala dorada','trust','subclaim'],
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
                Protege tu base con GriefPrevention. Sin protección, tu terreno es vulnerable.
              </p>
            </div>

            <div class="warn-box">
              <span class="warn-icon">🔴</span>
              <div>El servidor <strong>NO</strong> se responsabiliza por robos en zonas sin proteger. ¡Protege tu terreno antes de construir!</div>
            </div>

            <h2 id="como-proteger">🔒 Cómo Proteger tu Terreno</h2>
            <div class="desc-box">
              <div class="desc-box-header">📋 Pasos para crear un claim</div>
              <div class="desc-box-body">
                <ol class="wiki-steps">
                  <li>Obtén una <strong>pala dorada</strong> (se otorga al unirte o en <code>/shop</code>).</li>
                  <li>Con la pala, haz <strong>clic derecho</strong> en una esquina de tu terreno.</li>
                  <li>Luego clic derecho en la <strong>esquina opuesta</strong> (en diagonal).</li>
                  <li>¡Listo! Verás partículas de oro en los bordes de tu protección.</li>
                </ol>
              </div>
            </div>

            <h2 id="bloques">📏 Bloques de Claim</h2>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Bloques iniciales</span><span class="info-val">100 bloques</span></div>
              <div class="info-card-row"><span class="info-label">Ganancia</span><span class="info-val">+100 bloques por hora jugada</span></div>
              <div class="info-card-row"><span class="info-label">Máximo (sin donación)</span><span class="info-val">10,000 bloques</span></div>
            </div>

            <h2 id="comandos">⌨️ Comandos de Protección</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/claim</code><span>Activar modo reclamación</span></div>
              <div class="cmd-item"><code>/abandonclaim</code><span>Eliminar el claim actual</span></div>
              <div class="cmd-item"><code>/claimlist</code><span>Ver tus claims activos</span></div>
              <div class="cmd-item"><code>/trust [jugador]</code><span>Dar acceso completo</span></div>
              <div class="cmd-item"><code>/containertrust [jugador]</code><span>Permitir abrir cofres</span></div>
              <div class="cmd-item"><code>/accesstrust [jugador]</code><span>Permitir puertas/botones</span></div>
              <div class="cmd-item"><code>/untrust [jugador]</code><span>Quitar permisos</span></div>
              <div class="cmd-item"><code>/trustlist</code><span>Ver jugadores con acceso</span></div>
            </div>

            <h2 id="trust">🤝 Niveles de Permiso (Trust)</h2>
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

            <div class="tip-box">
              <span class="tip-icon">💡</span>
              <div>Cuanto más tiempo juegues, más bloques de claim acumulas. ¡Los rangos VIP y MVP tienen bonus extra!</div>
            </div>

            <div class="warn-box">
              <span class="warn-icon">⚠️</span>
              <div><strong>Cuidado:</strong> Si usas <code>/abandonclaim</code>, la protección se elimina <strong>permanentemente</strong>.</div>
            </div>
          `
        },

      ]
    },

  ] // fin categories

}; // fin WIKI_DATA

} // fin guard
