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
    javaIP:     'play.planetmc.net',
    bedrockIP:  'bedrock.planetmc.net',
    bedrockPort:'19132',
    discordURL: 'https://discord.gg/planetmc',
    shopURL:    'https://tienda.planetmc.net',
    mainURL:    'https://planetmc.net',
    version:    '1.21.x',
  },

  /* ── Navbar superior ──────────────────── */
  navLinks: [
    { name: 'Inicio',  url: 'https://planetmc.net', external: true  },
    { name: 'Wiki',    url: 'index.html',            external: false },
    { name: 'Tienda',  url: 'https://tienda.planetmc.net', external: true },
    { name: 'Discord', url: 'https://discord.gg/planetmc', external: true, icon: 'discord' },
  ],

  /* ── Categorías y páginas ─────────────── */
  categories: [

    /* ─────────────── GENERAL ─────────── */
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
          id:          'como-ingresar',
          name:        'Cómo Ingresar',
          path:        'pages/como-ingresar.html',
          description: 'Aprende a conectarte al servidor por primera vez en Java y Bedrock.',
          keywords:    ['conectar','ingresar','ip','java','bedrock','unirse','instalar','launcher','tlauncher','port','puerto'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🚀</div>
              <h1>Cómo Ingresar al Servidor</h1>
              <p class="page-hero-desc">Guía paso a paso para conectarte a PlanetMC desde cualquier edición de Minecraft.</p>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">💡</span>
              <div><strong>Versión compatible:</strong> Minecraft Java 1.21.x y Bedrock 1.21.x</div>
            </div>

            <h2 id="java">☕ Edición Java</h2>
            <p>Sigue estos pasos para conectarte desde el Launcher oficial o alternativo:</p>
            <ol class="wiki-steps">
              <li>Abre tu Launcher de Minecraft (oficial, TLauncher, etc.)</li>
              <li>Selecciona la versión <code>1.21.x</code> y haz clic en <strong>Jugar</strong></li>
              <li>En el menú principal, ve a <strong>Multijugador → Agregar Servidor</strong></li>
              <li>En el campo "Dirección del servidor" escribe: <span class="ip-chip">play.planetmc.net</span></li>
              <li>Dale clic en <strong>Listo</strong> y luego conéctate</li>
            </ol>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">IP Java</span><span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net <span class="copy-hint">📋</span></span></div>
              <div class="info-card-row"><span class="info-label">Versión</span><span class="info-val">1.21.x</span></div>
            </div>

            <h2 id="bedrock">📱 Edición Bedrock</h2>
            <p>Compatible con Windows 10/11, consolas, móviles y tablets:</p>
            <ol class="wiki-steps">
              <li>Abre Minecraft Bedrock y ve a <strong>Jugar</strong></li>
              <li>Selecciona la pestaña <strong>Servidores</strong> y luego <strong>Añadir servidor</strong></li>
              <li>Nombre: <code>PlanetMC</code> (puedes poner lo que quieras)</li>
              <li>Dirección del servidor: <span class="ip-chip">bedrock.planetmc.net</span></li>
              <li>Puerto: <span class="ip-chip">19132</span></li>
              <li>Guarda y conéctate</li>
            </ol>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">IP Bedrock</span><span class="info-val ip-copy" data-ip="bedrock.planetmc.net">bedrock.planetmc.net <span class="copy-hint">📋</span></span></div>
              <div class="info-card-row"><span class="info-label">Puerto</span><span class="info-val">19132</span></div>
            </div>

            <h2 id="problemas">⚠️ Problemas Comunes</h2>
            <div class="faq-list">
              <details class="faq-item">
                <summary>No puedo conectarme / "Connection refused"</summary>
                <p>Verifica que estés usando la versión correcta (1.21.x) y que la IP esté bien escrita sin espacios. Si el problema persiste, revisa el canal <strong>#estado-servidor</strong> en Discord.</p>
              </details>
              <details class="faq-item">
                <summary>Me aparece "Outdated server" o "Outdated client"</summary>
                <p>Tu versión no coincide. Asegúrate de seleccionar exactamente la versión <strong>1.21.x</strong> en tu launcher.</p>
              </details>
              <details class="faq-item">
                <summary>En Bedrock no aparece la pestaña "Servidores"</summary>
                <p>Algunos dispositivos tienen restricciones. Intenta usar una VPN gratuita (como Cloudflare WARP) o revisa si tu cuenta tiene permisos de multijugador activos.</p>
              </details>
            </div>
          `
        },
        {
          id:          'normas',
          name:        'Normas',
          path:        'pages/normas.html',
          description: 'Reglas y normas que todos los jugadores deben respetar.',
          keywords:    ['reglas','normas','ban','sanciones','comportamiento','hack','trampas','chat','spam','respeto','castigo'],
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
        {
          id:          'guias',
          name:        'Guías Generales',
          path:        'pages/guias.html',
          description: 'Guías y consejos para todos los jugadores del servidor.',
          keywords:    ['guias','ayuda','tutorial','consejos','tips','comandos','economía','dinero'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">📖</div>
              <h1>Guías Generales</h1>
              <p class="page-hero-desc">Consejos, comandos básicos y recursos útiles para todos los jugadores.</p>
            </div>

            <h2 id="comandos">⌨️ Comandos Básicos</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/spawn</code><span>Volver al spawn principal</span></div>
              <div class="cmd-item"><code>/home</code><span>Ir a tu hogar establecido</span></div>
              <div class="cmd-item"><code>/sethome</code><span>Establecer tu hogar</span></div>
              <div class="cmd-item"><code>/tpa [jugador]</code><span>Solicitar teletransporte a un jugador</span></div>
              <div class="cmd-item"><code>/tpaccept</code><span>Aceptar solicitud de TP</span></div>
              <div class="cmd-item"><code>/tpdeny</code><span>Rechazar solicitud de TP</span></div>
              <div class="cmd-item"><code>/msg [jugador] [msg]</code><span>Mensaje privado</span></div>
              <div class="cmd-item"><code>/balance</code><span>Ver tu dinero</span></div>
              <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero a otro jugador</span></div>
              <div class="cmd-item"><code>/warp</code><span>Ver los warps disponibles</span></div>
              <div class="cmd-item"><code>/kit</code><span>Ver kits disponibles</span></div>
              <div class="cmd-item"><code>/rules</code><span>Ver las normas del servidor</span></div>
            </div>

            <h2 id="economia">💰 Sistema de Economía</h2>
            <p>PlanetMC cuenta con una economía propia basada en <strong>PlanetCoins (PLC)</strong>. Puedes ganar dinero de varias formas:</p>
            <ul class="wiki-list">
              <li><strong>Vendiendo items</strong> en la tienda del servidor (/shop)</li>
              <li><strong>Comerciando</strong> con otros jugadores en la subasta (/ah)</li>
              <li><strong>Completando misiones</strong> diarias y semanales</li>
              <li><strong>Votando</strong> por el servidor en páginas de listing</li>
              <li><strong>Participando</strong> en eventos especiales</li>
            </ul>

            <h2 id="rangos">👑 Sistema de Rangos</h2>
            <div class="rank-grid">
              <div class="rank-item rank-default"><span class="rank-badge">Novato</span><span class="rank-desc">Rango inicial al unirte</span></div>
              <div class="rank-item rank-member"><span class="rank-badge">Miembro</span><span class="rank-desc">Completar tutorial + 5h de juego</span></div>
              <div class="rank-item rank-vip"><span class="rank-badge">VIP</span><span class="rank-desc">Disponible en la tienda</span></div>
              <div class="rank-item rank-mvp"><span class="rank-badge">MVP</span><span class="rank-desc">Disponible en la tienda</span></div>
              <div class="rank-item rank-elite"><span class="rank-badge">Elite</span><span class="rank-desc">Rango premium exclusivo</span></div>
            </div>

            <h2 id="discord">💬 Discord Oficial</h2>
            <p>Nuestro Discord es el centro de la comunidad. Ahí encontrarás:</p>
            <ul class="wiki-list">
              <li>Noticias y actualizaciones del servidor</li>
              <li>Soporte técnico y tickets de ayuda</li>
              <li>Eventos y sorteos exclusivos</li>
              <li>Canal de sugerencias</li>
              <li>Comunidad activa 24/7</li>
            </ul>
            <a href="https://discord.gg/planetmc" target="_blank" class="wiki-btn discord-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.105 18.1.12 18.117a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
              Unirte a Discord
            </a>
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
          id:          'survival-overview',
          name:        'Modo Survival',
          path:        'survival/index.html',
          description: 'Descripción general del modo Survival de PlanetMC.',
          keywords:    ['survival','supervivencia','modo','overview'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">⚔️</div>
              <h1>Modo Survival</h1>
              <p class="page-hero-desc">Construye, sobrevive y prospera en el mundo más popular de PlanetMC.</p>
            </div>

            <p>El modo <strong>Survival</strong> de PlanetMC es la experiencia principal del servidor. Aquí podrás explorar mundos infinitos, construir tu base, proteger tu terreno, comerciar con otros jugadores y progresar en nuestra economía exclusiva.</p>

            <h2 id="caracteristicas">✨ Características</h2>
            <div class="feature-grid">
              <div class="feature-card">
                <div class="feature-icon">🗺️</div>
                <div class="feature-title">Mundo Infinito</div>
                <div class="feature-desc">Explora terrenos generados con semillas únicas y biomas especiales.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏠</div>
                <div class="feature-title">Protecciones</div>
                <div class="feature-desc">Protege tu terreno con GriefPrevention. Nadie puede entrar sin tu permiso.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">💰</div>
                <div class="feature-title">Economía</div>
                <div class="feature-desc">Sistema económico robusto con tienda, subasta y mercado entre jugadores.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🏆</div>
                <div class="feature-title">Niveles</div>
                <div class="feature-desc">Sistema de niveles y estadísticas que muestran tu progreso en el servidor.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <div class="feature-title">Misiones</div>
                <div class="feature-desc">Misiones diarias y semanales con recompensas en PlanetCoins y items.</div>
              </div>
              <div class="feature-card">
                <div class="feature-icon">🌍</div>
                <div class="feature-title">Eventos</div>
                <div class="feature-desc">Eventos especiales periódicos con premios exclusivos para ganadores.</div>
              </div>
            </div>

            <h2 id="mundos">🌐 Mundos Disponibles</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Mundo</th><th>Tipo</th><th>PvP</th><th>Descripción</th></tr></thead>
                <tbody>
                  <tr><td>Overworld</td><td>Principal</td><td>No</td><td>Mundo principal de construcción</td></tr>
                  <tr><td>Nether</td><td>Recurso</td><td>Sí</td><td>Nether para recursos y PvP</td></tr>
                  <tr><td>End</td><td>Recurso</td><td>Sí</td><td>End para recursos avanzados</td></tr>
                  <tr><td>Mining World</td><td>Recurso</td><td>No</td><td>Mundo de minería (se resetea mensualmente)</td></tr>
                </tbody>
              </table>
            </div>
          `
        },
        {
          id:          'primeros-pasos',
          name:        'Primeros Pasos',
          path:        'survival/primeros-pasos.html',
          description: 'Guía de inicio para nuevos jugadores en Survival.',
          keywords:    ['inicio','comenzar','nuevo','primer','primeros pasos','tutorial','novato'],
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
            <p>Al conectarte por primera vez, aparecerás en el <strong>Spawn principal</strong>. Desde ahí puedes:</p>
            <ul class="wiki-list">
              <li>Acceder a la tienda (/shop) para vender y comprar items</li>
              <li>Ver el ranking de jugadores en los leaderboards</li>
              <li>Obtener tu <strong>kit de inicio</strong> con el comando <code>/kit novato</code></li>
              <li>Ir al mundo Survival con <code>/warp survival</code></li>
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

            <h2 id="primeros-30">⏱️ Qué hacer en los primeros 30 minutos</h2>
            <ol class="wiki-steps">
              <li>Usa <code>/kit novato</code> para recibir tu kit de inicio</li>
              <li>Viaja al Survival con <code>/warp survival</code></li>
              <li>Aleja del spawn (mínimo 500 bloques) para encontrar terreno libre</li>
              <li>Construye una base temporal para tu primera noche</li>
              <li>Protege tu terreno con <code>/claim</code> (consulta la guía de protecciones)</li>
              <li>Establece tu hogar con <code>/sethome</code></li>
              <li>Empieza a farmear materiales básicos</li>
            </ol>

            <h2 id="consejos">💡 Consejos para Nuevos Jugadores</h2>
            <ul class="wiki-list">
              <li>Siempre protege tu terreno antes de construir cosas valiosas</li>
              <li>Participa en el chat y pide ayuda a la comunidad: ¡somos amigables!</li>
              <li>Vende los recursos en exceso en <code>/shop</code> para acumular dinero</li>
              <li>Únete a nuestro Discord para enterarte de eventos y actualizaciones</li>
              <li>Vota diariamente con <code>/vote</code> para obtener recompensas gratuitas</li>
            </ul>
          `
        },
        {
          id:          'como-jugar',
          name:        'Cómo Jugar',
          path:        'survival/como-jugar.html',
          description: 'Mecánicas del Survival: economía, misiones, niveles y más.',
          keywords:    ['jugar','mecánicas','economia','misiones','niveles','votar','vote','pvp','arena'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🎮</div>
              <h1>Cómo Jugar Survival</h1>
              <p class="page-hero-desc">Mecánicas completas del modo Survival: economía, misiones, niveles y más.</p>
            </div>

            <h2 id="economia">💰 Economía</h2>
            <p>La moneda oficial es el <strong>PlanetCoin (PLC)</strong>. Puedes ganarla y gastarla de múltiples formas:</p>
            <div class="two-col">
              <div>
                <h3>📈 Cómo ganar PLC</h3>
                <ul class="wiki-list">
                  <li>Vender items en <code>/shop</code></li>
                  <li>Publicar en la subasta (<code>/ah sell [precio]</code>)</li>
                  <li>Completar misiones diarias</li>
                  <li>Votar con <code>/vote</code></li>
                  <li>Ganar eventos</li>
                </ul>
              </div>
              <div>
                <h3>📉 Cómo gastar PLC</h3>
                <ul class="wiki-list">
                  <li>Comprar items en <code>/shop</code></li>
                  <li>Comprar en la subasta (<code>/ah</code>)</li>
                  <li>Pagar a otros jugadores</li>
                  <li>Ampliar protecciones</li>
                  <li>Personalizar tu perfil</li>
                </ul>
              </div>
            </div>

            <h2 id="misiones">🎯 Misiones</h2>
            <p>El servidor tiene misiones diarias y semanales accesibles con <code>/quests</code>:</p>
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

            <h2 id="niveles">📊 Sistema de Niveles</h2>
            <p>Cada acción otorga puntos de experiencia (XP) que suben tu nivel en el servidor. Los niveles más altos desbloquean:</p>
            <ul class="wiki-list">
              <li>Acceso a kits exclusivos</li>
              <li>Títulos y prefijos en el chat</li>
              <li>Más homes disponibles</li>
              <li>Mayor límite de claims</li>
            </ul>

            <h2 id="pvp">⚔️ PvP y Arena</h2>
            <p>El PvP está <strong>desactivado</strong> en el mundo Survival principal. Para combate, visita:</p>
            <ul class="wiki-list">
              <li><code>/warp arena</code> — Arena PvP con kits igualados</li>
              <li><code>/warp nether</code> — Nether con PvP activo</li>
              <li>Eventos de PvP semanales con premios</li>
            </ul>
          `
        },
        {
          id:          'protecciones',
          name:        'Protecciones',
          path:        'survival/protecciones.html',
          description: 'Cómo proteger tu terreno y builds del griefing.',
          keywords:    ['proteger','proteccion','claim','griefprevention','terreno','base','griefing','robo'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🛡️</div>
              <h1>Protecciones de Terreno</h1>
              <p class="page-hero-desc">Protege tu base y tus construcciones con el sistema GriefPrevention.</p>
            </div>

            <div class="alert alert-warn">
              <span class="alert-icon">🔴</span>
              <div>El servidor <strong>NO</strong> se responsabiliza por griefing o robos en zonas sin proteger. ¡Siempre protege tu terreno!</div>
            </div>

            <h2 id="como-proteger">🔒 Cómo Proteger tu Terreno</h2>
            <p>Usamos el plugin <strong>GriefPrevention</strong>. Para reclamar terreno:</p>
            <ol class="wiki-steps">
              <li>Obtén una <strong>pala dorada</strong> (se otorga al unirte o cómprala en /shop)</li>
              <li>Con la pala en mano, haz clic derecho en <strong>una esquina</strong> de tu terreno</li>
              <li>Luego haz clic derecho en la <strong>esquina opuesta</strong></li>
              <li>¡Tu terreno estará protegido automáticamente!</li>
            </ol>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Bloques iniciales</span><span class="info-val">100 bloques de claim</span></div>
              <div class="info-card-row"><span class="info-label">Ganancia</span><span class="info-val">+100 bloques cada hora jugada</span></div>
              <div class="info-card-row"><span class="info-label">Máximo (sin donación)</span><span class="info-val">10,000 bloques</span></div>
            </div>

            <h2 id="comandos">⌨️ Comandos de Protección</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/claim</code><span>Activar modo reclamación</span></div>
              <div class="cmd-item"><code>/abandonclaim</code><span>Eliminar el claim actual</span></div>
              <div class="cmd-item"><code>/claimlist</code><span>Ver tus claims activos</span></div>
              <div class="cmd-item"><code>/trust [jugador]</code><span>Dar acceso completo a un jugador</span></div>
              <div class="cmd-item"><code>/containertrust [jugador]</code><span>Permitir abrir cofres solo</span></div>
              <div class="cmd-item"><code>/accesstrust [jugador]</code><span>Permitir usar puertas/botones</span></div>
              <div class="cmd-item"><code>/untrust [jugador]</code><span>Quitar permisos a un jugador</span></div>
              <div class="cmd-item"><code>/trustlist</code><span>Ver jugadores con acceso</span></div>
            </div>

            <h2 id="subclaims">📦 Subclaims</h2>
            <p>Puedes dividir tu claim en áreas más pequeñas con diferentes permisos usando el modo de subdivisión:</p>
            <ol class="wiki-steps">
              <li>Usa <code>/claimsubdivisions</code> para activar modo subdivisión</li>
              <li>Crea un subclaim dentro de tu claim principal</li>
              <li>Asigna permisos distintos al subclaim</li>
            </ol>
          `
        },
        {
          id:          'subasta',
          name:        'Subasta (/ah)',
          path:        'survival/subasta.html',
          description: 'Cómo usar el sistema de subasta del servidor.',
          keywords:    ['subasta','auction','house','ah','vender','comprar','mercado','items'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🏷️</div>
              <h1>Casa de Subastas</h1>
              <p class="page-hero-desc">Compra y vende items con otros jugadores usando el Auction House.</p>
            </div>

            <p>El <strong>Auction House</strong> (/ah) es el mercado de jugadores donde puedes listar cualquier item para su venta y comprar items que otros han publicado.</p>

            <h2 id="vender">📤 Cómo Vender un Item</h2>
            <ol class="wiki-steps">
              <li>Ten el item que quieres vender en tu mano</li>
              <li>Escribe <code>/ah sell [precio]</code></li>
              <li>Tu item quedará publicado en el mercado por <strong>48 horas</strong></li>
              <li>Cuando se venda, recibirás el dinero automáticamente</li>
            </ol>
            <div class="info-card">
              <div class="info-card-row"><span class="info-label">Duración del listado</span><span class="info-val">48 horas</span></div>
              <div class="info-card-row"><span class="info-label">Comisión del servidor</span><span class="info-val">5% del precio de venta</span></div>
              <div class="info-card-row"><span class="info-label">Máx. items listados</span><span class="info-val">5 (VIP: 15 / MVP: 30)</span></div>
            </div>

            <h2 id="comprar">📥 Cómo Comprar un Item</h2>
            <ol class="wiki-steps">
              <li>Abre la subasta con <code>/ah</code></li>
              <li>Navega por las categorías o usa el buscador</li>
              <li>Haz clic en el item que deseas</li>
              <li>Confirma la compra y el item llegará a tu inventario</li>
            </ol>

            <h2 id="comandos">⌨️ Comandos de Subasta</h2>
            <div class="cmd-grid">
              <div class="cmd-item"><code>/ah</code><span>Abrir el Auction House</span></div>
              <div class="cmd-item"><code>/ah sell [precio]</code><span>Vender item en mano</span></div>
              <div class="cmd-item"><code>/ah search [nombre]</code><span>Buscar item específico</span></div>
              <div class="cmd-item"><code>/ah expired</code><span>Recoger items no vendidos</span></div>
              <div class="cmd-item"><code>/ah selling</code><span>Ver tus items en venta</span></div>
            </div>

            <h2 id="consejos">💡 Consejos de Trading</h2>
            <ul class="wiki-list">
              <li>Revisa los precios antes de publicar para no perder dinero</li>
              <li>Los items con encantamientos valen considerablemente más</li>
              <li>Las horas pico (tarde/noche) tienen más compradores activos</li>
              <li>Los bloques de construcción decorativos tienen alta demanda</li>
            </ul>
          `
        },
        {
          id:          'tienda',
          name:        'Tienda del Servidor',
          path:        'survival/tienda.html',
          description: 'Cómo usar la tienda oficial del servidor (/shop).',
          keywords:    ['tienda','shop','comprar','vender','items','precio','economía'],
          content: `
            <div class="page-hero">
              <div class="page-hero-icon">🛒</div>
              <h1>Tienda del Servidor</h1>
              <p class="page-hero-desc">Compra y vende items directamente al servidor usando /shop.</p>
            </div>

            <p>La <strong>tienda oficial</strong> (/shop) te permite intercambiar items con el servidor a precios fijos. Es la forma más rápida de monetizar tus recursos y obtener materiales básicos.</p>

            <h2 id="acceso">🔑 Cómo Acceder</h2>
            <ul class="wiki-list">
              <li>Comando: <code>/shop</code></li>
              <li>También puedes ir físicamente al Spawn y entrar por el portal de la tienda</li>
            </ul>

            <h2 id="categorias">📦 Categorías de la Tienda</h2>
            <div class="shop-grid">
              <div class="shop-cat"><div class="shop-cat-icon">⛏️</div><span>Bloques</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">🌾</div><span>Cultivos</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">🥩</div><span>Comida</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">💎</div><span>Minerales</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">🧪</div><span>Pociones</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">🎣</div><span>Pesca</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">🌲</div><span>Madera</span></div>
              <div class="shop-cat"><div class="shop-cat-icon">🐄</div><span>Mob Drops</span></div>
            </div>

            <h2 id="precios">💵 Precios de Referencia</h2>
            <div class="table-wrap">
              <table class="wiki-table">
                <thead><tr><th>Item</th><th>Venta al servidor</th><th>Compra al servidor</th></tr></thead>
                <tbody>
                  <tr><td>Diamante</td><td>$25 cada uno</td><td>$80 cada uno</td></tr>
                  <tr><td>Esmeralda</td><td>$15 cada uno</td><td>$50 cada uno</td></tr>
                  <tr><td>Hierro (lingote)</td><td>$3 cada uno</td><td>$10 cada uno</td></tr>
                  <tr><td>Oro (lingote)</td><td>$8 cada uno</td><td>$25 cada uno</td></tr>
                  <tr><td>Trigo (64)</td><td>$40 por stack</td><td>$120 por stack</td></tr>
                  <tr><td>Madera (64)</td><td>$20 por stack</td><td>$60 por stack</td></tr>
                </tbody>
              </table>
            </div>

            <div class="alert alert-info">
              <span class="alert-icon">💡</span>
              <div>Los precios pueden variar según actualizaciones del servidor. El mercado de jugadores (/ah) generalmente ofrece mejores precios de venta.</div>
            </div>
          `
        },
      ]
    },

  ] // fin categories

}; // fin WIKI_DATA
