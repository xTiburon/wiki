/* ═══════════════════════════════════════════
   wiki-data.js  —  Fuente central de datos
   PlanetMC Wiki
   Para agregar contenido, solo edita este archivo.
   ═══════════════════════════════════════════ */

const WIKI_DATA = {

  /* ── Información global del sitio ─────── */
  site: {
    name:       'PlanetMC',
    wikiTitle:  'Wiki Oficial',
    tagline:    'Tu guía completa del servidor',
    javaIP:     'planetmc.net',
    bedrockIP:  'planetmc.net',
    bedrockPort:'19132',
    discordURL: 'https://discord.gg/HvcPfgXVHf',
    shopURL:    'https://planet.tebex.io/',
    mainURL:    'https://planetmc.net',
    version:    '1.21.x',
  },

  /* ── Navbar superior ──────────────────── */
  navLinks: [
    { name: 'Inicio',  url: 'https://planetmc.net',        external: true  },
    { name: 'Wiki',    url: 'index.html',                  external: false },
    { name: 'Tienda',  url: 'https://tienda.planetmc.net', external: true  },
    { name: 'Discord', url: 'https://discord.gg/planetmc', external: true, icon: 'discord' },
  ],

  /* ══════════════════════════════════════════
     PÁGINAS SUELTAS (sin categoría)
     Aparecen primero en el sidebar, solas.
     ══════════════════════════════════════════ */
  standalonePages: [
    {
      id:          'bienvenida',
      name:        'Bienvenida',
      icon:        '🏠',
      path:        'index.html',
      description: 'Tu punto de inicio para descubrir todo lo que ofrece el servidor PlanetMC.',
      keywords:    ['bienvenida','inicio','introduccion','empezar','nuevo','jugador','survival','planetmc'],
      content: `
        <div class="page-hero" style="text-align:center;">
          <img src="logo.png" alt="PlanetMC Logo" style="width:380px;max-width:90%;margin-bottom:20px;display:block;margin-left:auto;margin-right:auto;filter:drop-shadow(0 0 24px rgba(0,229,255,.3));">
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

        <div class="alert alert-info">
          <span class="alert-icon">💡</span>
          <div><strong>Consejo:</strong> Revisa siempre la wiki antes de preguntar en Discord. Muchas respuestas ya están aquí.</div>
        </div>
        <div class="alert alert-warn">
          <span class="alert-icon">⚠️</span>
          <div><strong>Importante:</strong> El desconocimiento de las normas no evita sanciones.</div>
        </div>

        <h2 id="info-servidor">📊 Información del servidor</h2>
        <div class="info-card">
          <div class="info-card-row">
            <span class="info-label">IP Java</span>
            <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net <span class="copy-hint">📋</span></span>
          </div>
          <div class="info-card-row">
            <span class="info-label">IP Bedrock</span>
            <span class="info-val ip-copy" data-ip="bedrock.planetmc.net">bedrock.planetmc.net <span class="copy-hint">📋</span></span>
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
            <span class="info-label">Modo principal</span>
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
        <div class="alert alert-info">
          <span class="alert-icon">🌟</span>
          <div><strong>Prepárate:</strong> explora, construye, haz amigos y diviértete en PlanetMC.</div>
        </div>
      `
    },
    {
      id:          'normas',
      name:        'Normas del Servidor',
      icon:        '📜',
      path:        'pages/normas.html',
      description: 'Reglas que todos los jugadores deben leer y respetar.',
      keywords:    ['reglas','normas','ban','sanciones','comportamiento','hack','chat','spam','castigo','griefing','robo'],
      content: `
        <div class="page-hero">
          <div class="page-hero-icon">📜</div>
          <h1>Normas del Servidor</h1>
          <p class="page-hero-desc">Todos los jugadores deben leer y aceptar estas normas al unirse al servidor.</p>
        </div>

        <div class="alert alert-warn">
          <span class="alert-icon">⚠️</span>
          <div>El incumplimiento de estas normas puede resultar en <strong>sanciones permanentes</strong>. La ignorancia de las reglas no es excusa.</div>
        </div>

        <h2 id="chat">💬 Normas de Chat</h2>
        <ul class="wiki-list">
          <li>Está <strong>prohibido</strong> el spam (repetir mensajes) y el flood (mensajes muy rápidos).</li>
          <li>No se permite publicidad de otros servidores ni redes sociales no oficiales.</li>
          <li>Queda prohibido el lenguaje ofensivo, discriminatorio o acoso hacia otros jugadores.</li>
          <li>No se permiten mayúsculas excesivas (CAPS) de forma repetida.</li>
          <li>Los links externos solo están permitidos con permiso de un moderador.</li>
        </ul>

        <h2 id="juego">🎮 Normas de Juego</h2>
        <ul class="wiki-list">
          <li>Queda completamente <strong>prohibido el uso de hacks, cheats o modificaciones</strong> que otorguen ventaja injusta (kill-aura, fly, speed, x-ray, etc.).</li>
          <li>No está permitido el griefing en zonas no-PvP ni en terrenos ajenos.</li>
          <li>Está prohibido el robo en cofres de otros jugadores.</li>
          <li>No se pueden construir trampas para matar jugadores sin su consentimiento en zonas pacíficas.</li>
          <li>Los bugs o exploits deben reportarse en Discord. Explotarlos está prohibido.</li>
        </ul>

        <h2 id="pvp">⚔️ Normas de PvP</h2>
        <ul class="wiki-list">
          <li>El PvP solo está permitido en zonas habilitadas para ello.</li>
          <li>No se permite el kill-farming (matar repetidamente al mismo jugador para farmear).</li>
          <li>Está prohibido el "camping" en spawn o en zonas de reaparición de nuevos jugadores.</li>
        </ul>

        <h2 id="construccion">🏗️ Normas de Construcción</h2>
        <ul class="wiki-list">
          <li>No construyas demasiado cerca de terrenos de otros jugadores sin permiso (mínimo 100 bloques de distancia).</li>
          <li>Está prohibido construir pilares de suciedad o estructuras de "1x1" sin función estética o útil en zonas visibles.</li>
          <li>Las granjas masivas deben seguir los límites establecidos en cada modo de juego (ver guías específicas).</li>
        </ul>

        <h2 id="sanciones">🔨 Tabla de Sanciones</h2>
        <div class="table-wrap">
          <table class="wiki-table">
            <thead><tr><th>Infracción</th><th>Sanción</th></tr></thead>
            <tbody>
              <tr><td>Spam / Flood</td><td>Mute 30 min – 24h</td></tr>
              <tr><td>Lenguaje ofensivo leve</td><td>Advertencia + Mute 1h</td></tr>
              <tr><td>Lenguaje ofensivo grave</td><td>Mute 24h – 7d</td></tr>
              <tr><td>Uso de hacks</td><td>Ban permanente</td></tr>
              <tr><td>Griefing</td><td>Ban 7d + reparación obligatoria</td></tr>
              <tr><td>Robo</td><td>Ban 3d – 30d</td></tr>
              <tr><td>Publicidad no autorizada</td><td>Ban permanente</td></tr>
            </tbody>
          </table>
        </div>

        <div class="alert alert-info">
          <span class="alert-icon">📩</span>
          <div>Para apelar una sanción, abre un ticket en nuestro servidor de <a href="https://discord.gg/planetmc" target="_blank">Discord</a>.</div>
        </div>
      `
    },
  ],

  /* ══════════════════════════════════════════
     CATEGORÍAS Y PÁGINAS
     Aparecen después de las páginas sueltas.
     ══════════════════════════════════════════ */
  categories: [

    /* ─────────────── CÓMO INGRESAR ─────── */
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
          description: 'Cómo conectarte a PlanetMC desde Minecraft Java Edition.',
          keywords:    ['java','pc','windows','mac','linux','launcher','conectar','ip','1.21','multijugador'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">☕</div>
              <h1>Cómo Ingresar — Java Edition</h1>
              <p class="page-hero-desc">¿Juegas desde PC con Windows, Mac o Linux? Aquí te explicamos cómo conectarte paso a paso.</p>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">💡</span>
              <div><strong>Versión compatible:</strong> Minecraft Java 1.21.x</div>
            </div>

            <h2 id="datos">📡 Datos del Servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">IP del servidor</span>
                <span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net <span class="copy-hint">📋</span></span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Versión</span>
                <span class="info-val">1.21.x</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Puerto</span>
                <span class="info-val">25565 (predeterminado)</span>
              </div>
            </div>

            <h2 id="pasos">🚀 Cómo Conectarte Paso a Paso</h2>
            <ol class="wiki-steps">
              <li>Abre el <strong>Minecraft Launcher</strong> y selecciona la versión <strong>1.21.x</strong>.</li>
              <li>Haz clic en <strong>"Jugar"</strong>.</li>
              <li>En el menú principal, haz clic en <strong>"Multijugador"</strong>.</li>
              <li>Haz clic en <strong>"Añadir servidor"</strong>.</li>
              <li>En el campo "Dirección del servidor" escribe: <code>play.planetmc.net</code></li>
              <li>Haz clic en <strong>"Listo"</strong> y luego en <strong>"Unirse al servidor"</strong>.</li>
              <li>¡Ya estás dentro! Serás enviado al <strong>Spawn</strong>.</li>
            </ol>

            <div class="alert alert-warn">
              <span class="alert-icon">⚠️</span>
              <div>Usa siempre la versión <strong>1.21.x</strong>. Otras versiones pueden generar errores de conexión.</div>
            </div>

            <h2 id="faq">❓ Problemas Comunes</h2>
            <div class="faq-list">
              <details class="faq-item">
                <summary>Me sale "Failed to connect to the server"</summary>
                <p>Verifica que la IP sea exactamente <code>play.planetmc.net</code>. Comprueba tu conexión a internet. Si el problema persiste, revisa el canal <strong>#estado-servidor</strong> en Discord.</p>
              </details>
              <details class="faq-item">
                <summary>Me sale "Outdated client"</summary>
                <p>Tu versión no coincide. Asegúrate de jugar en exactamente <strong>1.21.x</strong>.</p>
              </details>
              <details class="faq-item">
                <summary>No veo la opción "Multijugador"</summary>
                <p>Necesitas una cuenta oficial de Minecraft. Adquiérela en <strong>minecraft.net</strong>.</p>
              </details>
            </div>
          `
        },

        {
          id:          'bedrock-edition',
          name:        'Bedrock Edition',
          icon:        '📱',
          path:        'pages/ingresar/bedrock.html',
          description: 'Cómo conectarte a PlanetMC desde Minecraft Bedrock (móvil, consola, Windows 10/11).',
          keywords:    ['bedrock','movil','celular','android','ios','tablet','consola','xbox','playstation','switch','puerto','19132'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">📱</div>
              <h1>Cómo Ingresar — Bedrock Edition</h1>
              <p class="page-hero-desc">¿Juegas desde celular, tablet, consola o Windows 10/11? Esta guía es para ti.</p>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">💡</span>
              <div><strong>Versión compatible:</strong> Minecraft Bedrock 1.21.x</div>
            </div>

            <h2 id="datos">📡 Datos del Servidor</h2>
            <div class="info-card">
              <div class="info-card-row">
                <span class="info-label">IP del servidor</span>
                <span class="info-val ip-copy" data-ip="bedrock.planetmc.net">bedrock.planetmc.net <span class="copy-hint">📋</span></span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Puerto</span>
                <span class="info-val">19132</span>
              </div>
              <div class="info-card-row">
                <span class="info-label">Versión</span>
                <span class="info-val">1.21.x (Bedrock)</span>
              </div>
            </div>

            <h2 id="pasos">🚀 Cómo Conectarte Paso a Paso</h2>
            <ol class="wiki-steps">
              <li>Abre <strong>Minecraft</strong> en tu dispositivo.</li>
              <li>Toca <strong>"Jugar"</strong> → pestaña <strong>"Servidores"</strong>.</li>
              <li>Desplázate hacia abajo y toca <strong>"Añadir servidor"</strong>.</li>
              <li>Nombre: <code>PlanetMC</code> (puedes escribir lo que quieras).</li>
              <li>Dirección: <code>bedrock.planetmc.net</code> — Puerto: <code>19132</code></li>
              <li>Toca <strong>"Guardar"</strong> y luego <strong>"Conectar"</strong>.</li>
              <li>¡Listo! Estarás en el <strong>Spawn</strong>.</li>
            </ol>

            <h2 id="consolas">🎮 Conectarse desde Consola</h2>
            <div class="alert alert-info">
              <span class="alert-icon">🎮</span>
              <div>Xbox, PlayStation y Nintendo Switch tienen acceso limitado a servidores externos. Usa <strong>BedrockConnect</strong> — busca el tutorial para tu consola en YouTube.</div>
            </div>

            <h2 id="faq">❓ Problemas Comunes</h2>
            <div class="faq-list">
              <details class="faq-item">
                <summary>No aparece la pestaña "Servidores"</summary>
                <p>Prueba con una VPN gratuita como <strong>Cloudflare WARP</strong>, o verifica que tu cuenta tenga multijugador activo.</p>
              </details>
              <details class="faq-item">
                <summary>No puedo conectarme desde consola</summary>
                <p>Usa <strong>BedrockConnect</strong>. Busca un tutorial en YouTube para tu consola específica.</p>
              </details>
              <details class="faq-item">
                <summary>¿Puedo jugar con amigos de Java?</summary>
                <p>¡Sí! PlanetMC soporta conexión cruzada Java ↔ Bedrock mediante Geyser.</p>
              </details>
            </div>
          `
        },

      ]
    },

    /* ─────────────── SURVIVAL ─────────── */
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
          description: 'Guía de inicio para nuevos jugadores en Survival.',
          keywords:    ['inicio','comenzar','nuevo','primer','primeros pasos','tutorial','novato','spawn','kit','sethome'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🌱</div>
              <h1>Primeros Pasos</h1>
              <p class="page-hero-desc">Todo lo que necesitas saber para comenzar tu aventura en PlanetMC Survival.</p>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">👋</span>
              <div>¡Bienvenido a PlanetMC! Sigue esta guía para aprovechar al máximo tu experiencia desde el primer minuto.</div>
            </div>

            <h2 id="llegada">📍 Llegada al Spawn</h2>
            <p>Al conectarte por primera vez aparecerás en el <strong>Spawn principal</strong>. Desde ahí puedes:</p>
            <ul class="wiki-list">
              <li>Acceder a la tienda con <code>/shop</code> para vender y comprar items.</li>
              <li>Ver el ranking de jugadores en los leaderboards.</li>
              <li>Obtener tu <strong>kit de inicio</strong> con <code>/kit novato</code>.</li>
              <li>Ir al mundo Survival con <code>/warp survival</code>.</li>
            </ul>

            <h2 id="kit-inicio">🎁 Kit de Inicio</h2>
            <p>Todos los jugadores nuevos reciben un kit gratuito de inicio:</p>
            <div class="item-grid">
              <div class="item-chip">🗡️ Espada de hierro</div>
              <div class="item-chip">⛏️ Pico de hierro</div>
              <div class="item-chip">🪓 Hacha de hierro</div>
              <div class="item-chip">🍖 64x Carne cocida</div>
              <div class="item-chip">💎 $500 PlanetCoins</div>
              <div class="item-chip">📦 Cofre de madera</div>
            </div>

            <h2 id="primeros-30">⏱️ Qué Hacer en los Primeros 30 Minutos</h2>
            <ol class="wiki-steps">
              <li>Usa <code>/kit novato</code> para recibir tu kit de inicio.</li>
              <li>Viaja al Survival con <code>/warp survival</code>.</li>
              <li>Aléjate del spawn (mínimo 500 bloques) para encontrar terreno libre.</li>
              <li>Construye una base temporal para tu primera noche.</li>
              <li>Protege tu terreno con <code>/claim</code> (consulta la guía de protecciones).</li>
              <li>Establece tu hogar con <code>/sethome</code>.</li>
              <li>Empieza a farmear materiales básicos y a ganar PlanetCoins.</li>
            </ol>

            <h2 id="comandos">⌨️ Comandos Esenciales</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Volver al Spawn</span></div>
              <div class="cmd-item"><code>/sethome</code><span>Guardar tu ubicación actual</span></div>
              <div class="cmd-item"><code>/home</code><span>Ir a tu hogar guardado</span></div>
              <div class="cmd-item"><code>/warp</code><span>Ver portales disponibles</span></div>
              <div class="cmd-item"><code>/kit novato</code><span>Reclamar kit de inicio</span></div>
              <div class="cmd-item"><code>/tpa [jugador]</code><span>Solicitar teletransporte</span></div>
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo</span></div>
              <div class="cmd-item"><code>/vote</code><span>Votar y ganar recompensas</span></div>
            </div>

            <h2 id="consejos">💡 Consejos para Nuevos Jugadores</h2>
            <ul class="wiki-list">
              <li>Protege siempre tu terreno <strong>antes</strong> de construir cosas valiosas.</li>
              <li>Participa en el chat y pide ayuda: ¡la comunidad es amigable!</li>
              <li>Vende los recursos en exceso en <code>/shop</code> para acumular dinero.</li>
              <li>Únete a Discord para enterarte de eventos y actualizaciones.</li>
              <li>Vota diariamente con <code>/vote</code> para obtener recompensas gratuitas.</li>
            </ul>
          `
        },

        {
          id:          'economia',
          name:        'Economía',
          icon:        '💰',
          path:        'pages/survival/economia.html',
          description: 'Sistema económico de PlanetMC: cómo ganar y gastar PlanetCoins.',
          keywords:    ['economia','dinero','planetcoins','plc','tienda','shop','subasta','ah','misiones','votar','jobs','balance'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">💰</div>
              <h1>Economía</h1>
              <p class="page-hero-desc">Todo sobre el sistema económico de PlanetMC: gana, ahorra e intercambia PlanetCoins.</p>
            </div>

            <p>La moneda oficial del servidor es el <strong>PlanetCoin (PLC)</strong>. Puedes ganarla y gastarla de múltiples formas a lo largo de tu aventura.</p>

            <h2 id="ganar">📈 Cómo Ganar PlanetCoins</h2>
            <div class="desc-box">
              <div class="desc-box-header">💡 Fuentes de ingresos</div>
              <div class="desc-box-body">
                <ul class="wiki-list">
                  <li>Vender items en la tienda del servidor con <code>/shop</code>.</li>
                  <li>Publicar items en la subasta con <code>/ah sell [precio]</code>.</li>
                  <li>Completar misiones diarias y semanales con <code>/quests</code>.</li>
                  <li>Votar por el servidor con <code>/vote</code> (recompensa diaria).</li>
                  <li>Participar y ganar eventos especiales.</li>
                  <li>Comerciar directamente con otros jugadores.</li>
                </ul>
              </div>
            </div>

            <h2 id="tienda">🛒 Tienda del Servidor (/shop)</h2>
            <p>La tienda oficial permite intercambiar items con el servidor a <strong>precios fijos</strong>.</p>
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
                  <tr><td>Hierro (lingote)</td><td>$3 c/u</td><td>$10 c/u</td></tr>
                  <tr><td>Oro (lingote)</td><td>$8 c/u</td><td>$25 c/u</td></tr>
                  <tr><td>Trigo (64)</td><td>$40 por stack</td><td>$120 por stack</td></tr>
                  <tr><td>Madera (64)</td><td>$20 por stack</td><td>$60 por stack</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="subasta">🏷️ Subasta (/ah)</h2>
            <p>El Auction House es el mercado de jugadores: lista cualquier item y otros lo compran.</p>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Comando</span><span class="info-val"><code>/ah</code></span></div>
              <div class="info-card-row"><span class="info-label">Duración del listado</span><span class="info-val">48 horas</span></div>
              <div class="info-card-row"><span class="info-label">Comisión</span><span class="info-val">5% del precio de venta</span></div>
              <div class="info-card-row"><span class="info-label">Máx. items listados</span><span class="info-val">5 (VIP: 15 / MVP: 30)</span></div>
            </div>
            <div class="cmd-grid" style="margin-top:12px;">
              <div class="cmd-item"><code>/ah</code><span>Abrir la subasta</span></div>
              <div class="cmd-item"><code>/ah sell [precio]</code><span>Vender item en mano</span></div>
              <div class="cmd-item"><code>/ah search [item]</code><span>Buscar un item</span></div>
              <div class="cmd-item"><code>/ah expired</code><span>Recoger items no vendidos</span></div>
            </div>

            <h2 id="comandos">⌨️ Comandos de Economía</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/balance</code><span>Ver tu saldo actual</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero a otro jugador</span></div>
              <div class="cmd-item"><code>/baltop</code><span>Ranking de jugadores más ricos</span></div>
              <div class="cmd-item"><code>/shop</code><span>Abrir la tienda del servidor</span></div>
              <div class="cmd-item"><code>/ah</code><span>Abrir la casa de subastas</span></div>
              <div class="cmd-item"><code>/quests</code><span>Ver misiones disponibles</span></div>
              <div class="cmd-item"><code>/vote</code><span>Votar y ganar recompensas</span></div>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">💡</span>
              <div><strong>Consejo:</strong> Vota diariamente con <code>/vote</code>. ¡Es la forma más fácil de ganar PlanetCoins gratis!</div>
            </div>
          `
        },

        {
          id:          'protecciones',
          name:        'Protecciones',
          icon:        '🛡️',
          path:        'pages/survival/protecciones.html',
          description: 'Cómo proteger tu terreno y builds del griefing con GriefPrevention.',
          keywords:    ['proteger','proteccion','claim','griefprevention','terreno','base','griefing','robo','pala dorada','trust'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🛡️</div>
              <h1>Protecciones de Terreno</h1>
              <p class="page-hero-desc">Protege tu base y construcciones con el sistema GriefPrevention.</p>
            </div>

            <div class="alert alert-warn">
              <span class="alert-icon">🔴</span>
              <div>El servidor <strong>NO</strong> se responsabiliza por griefing o robos en zonas sin proteger. ¡Protege tu terreno antes de construir!</div>
            </div>

            <h2 id="como-proteger">🔒 Cómo Proteger tu Terreno</h2>
            <p>Usamos el plugin <strong>GriefPrevention</strong>. Para reclamar terreno:</p>
            <ol class="wiki-steps">
              <li>Obtén una <strong>pala dorada</strong> (se otorga al unirte o cómprala en <code>/shop</code>).</li>
              <li>Con la pala en mano, haz <strong>clic derecho</strong> en una esquina de tu terreno.</li>
              <li>Luego haz clic derecho en la <strong>esquina opuesta</strong> (en diagonal).</li>
              <li>¡Listo! Verás partículas de oro marcando los bordes de tu protección.</li>
            </ol>

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
              <div class="cmd-item"><code>/accesstrust [jugador]</code><span>Permitir puertas y botones</span></div>
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

            <div class="alert alert-info">
              <span class="alert-icon">💡</span>
              <div>Cuanto más tiempo juegues, más bloques de claim acumulas. ¡Los rangos VIP y MVP tienen bonus extra!</div>
            </div>

            <div class="alert alert-warn">
              <span class="alert-icon">⚠️</span>
              <div><strong>Cuidado:</strong> Si usas <code>/abandonclaim</code>, la protección se elimina <strong>permanentemente</strong>.</div>
            </div>
          `
        },

      ]
    },

  ] // fin categories

}; // fin WIKI_DATA
