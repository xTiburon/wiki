/* ═══════════════════════════════════════════════════════════
   wiki-data.js  —  Fuente central de datos  |  PlanetMC Wiki
   Para agregar contenido solo edita este archivo.
   ═══════════════════════════════════════════════════════════ */

const WIKI_DATA = {

  site: {
    name:        'PlanetMC',
    wikiTitle:   'Wiki Oficial',
    tagline:     'Tu guía completa del servidor',
    javaIP:      'play.planetmc.net',
    bedrockIP:   'bedrock.planetmc.net',
    bedrockPort: '19132',
    discordURL:  'https://discord.gg/planetmc',
    shopURL:     'https://tienda.planetmc.net',
    mainURL:     'https://planetmc.net',
    version:     '1.21.x',
  },

  navLinks: [
    { name: 'Inicio',  url: 'https://planetmc.net',        external: true  },
    { name: 'Wiki',    url: 'index.html',                  external: false },
    { name: 'Tienda',  url: 'https://tienda.planetmc.net', external: true  },
    { name: 'Discord', url: 'https://discord.gg/planetmc', external: true, icon: 'discord' },
  ],

  categories: [

    /* ─── GENERAL ─────────────────────────────────────────── */
    {
      id: 'general', name: 'General', icon: '🌐', color: '#00e5ff', open: true,
      pages: [
        {
          id: 'bienvenida', name: 'Bienvenida', path: 'pages/guias.html',
          description: 'Introducción a PlanetMC y todo lo que puedes encontrar en la wiki.',
          keywords: ['bienvenida','inicio','planetmc','presentacion','intro'],
          breadcrumb: ['General'],
          content: `
<div class="page-hero">
  <div class="page-hero-icon">🌌</div>
  <h1>Bienvenido a PlanetMC</h1>
  <p class="page-hero-desc">El servidor de Minecraft que lleva la experiencia al siguiente nivel. Explora, construye y compite con miles de jugadores.</p>
</div>
<div class="desc-box">
  <div class="desc-box-header">📌 Información</div>
  <div class="desc-box-body">
    <p>PlanetMC es una red de servidores hispanohablante con modalidades variadas como <strong>Survival</strong>, eventos exclusivos y contenido en constante actualización. Esta wiki contiene todo lo que necesitas para empezar con buen pie.</p>
  </div>
</div>
<p>En esta wiki encontrarás <strong>reglas de convivencia</strong>, <strong>guías paso a paso</strong> y <strong>tutoriales detallados</strong> para cada modalidad. Conocer y respetar las normas es clave para mantener un ambiente <strong>justo, amigable y seguro</strong> para todos.</p>
<h2 id="que-encontraras">📚 Qué encontrarás aquí</h2>
<div class="feature-grid">
  <div class="feature-card"><div class="feature-icon">📜</div><div class="feature-title">Normas del servidor</div><div class="feature-desc">Reglas claras que garantizan una experiencia justa para todos.</div></div>
  <div class="feature-card"><div class="feature-icon">🚀</div><div class="feature-title">Cómo ingresar</div><div class="feature-desc">Guías para conectarte desde Java Edition o Bedrock.</div></div>
  <div class="feature-card"><div class="feature-icon">⚔️</div><div class="feature-title">Guías de Survival</div><div class="feature-desc">Todo sobre el modo más popular: economía, protecciones y más.</div></div>
  <div class="feature-card"><div class="feature-icon">💬</div><div class="feature-title">Comunidad</div><div class="feature-desc">Únete a Discord con eventos y sorteos frecuentes.</div></div>
</div>
<h2 id="como-usar">🗺️ Cómo usar esta wiki</h2>
<p>Navega usando el <strong>panel izquierdo</strong> para explorar categorías. Usa el <strong>buscador</strong> del sidebar para encontrar cualquier tema. Cada página tiene un índice a la derecha para saltar a secciones.</p>
<div class="tip-box"><span class="tip-icon">💡</span><div><strong>Consejo:</strong> Si eres nuevo, empieza por la sección <a href="pages/como-ingresar/java.html">Cómo ingresar</a> y luego revisa los <a href="pages/survival/primeros-pasos.html">Primeros Pasos en Survival</a>.</div></div>
<h2 id="versiones">🎮 Versiones compatibles</h2>
<div class="two-col">
  <div class="info-card">
    <div class="info-card-row"><span class="info-label">Java Edition</span><span class="info-val" style="color:var(--java)">1.21.x</span></div>
    <div class="info-card-row"><span class="info-label">IP</span><span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span></div>
    <div class="info-card-row"><span class="info-label">Plataformas</span><span class="info-val">Windows · Linux · macOS</span></div>
  </div>
  <div class="info-card">
    <div class="info-card-row"><span class="info-label">Bedrock Edition</span><span class="info-val" style="color:var(--bedrock)">1.21.x</span></div>
    <div class="info-card-row"><span class="info-label">IP</span><span class="info-val ip-copy" data-ip="bedrock.planetmc.net">bedrock.planetmc.net 📋</span></div>
    <div class="info-card-row"><span class="info-label">Plataformas</span><span class="info-val">Móvil · Xbox · Win10 · PS</span></div>
  </div>
</div>
<div class="warn-box"><span class="warn-icon">⚠️</span><div><strong>Importante:</strong> Usa exactamente la versión <code>1.21.x</code>. Versiones diferentes causarán errores de conexión.</div></div>
          `
        },
        {
          id: 'normas', name: 'Normas del Servidor', path: 'pages/normas.html',
          description: 'Reglas y normas que todos los jugadores deben leer y respetar.',
          keywords: ['reglas','normas','ban','sanciones','hack','chat','spam','respeto','castigo','conducta'],
          breadcrumb: ['General'],
          content: `
<div class="page-hero">
  <div class="page-hero-icon">📜</div>
  <h1>Normas del Servidor</h1>
  <p class="page-hero-desc">Lee y respeta estas normas. Son el escudo que protege la diversión de todos.</p>
</div>
<div class="warn-box"><span class="warn-icon">⚖️</span><div>El equipo de moderación tiene plena autoridad para sancionar cualquier conducta que considere inapropiada, <strong>aunque no aparezca expresamente en este reglamento</strong>. Esto garantiza juego justo para todos.</div></div>
<p>En el reino de PlanetMC, las <strong>Normas</strong> son el código de honor que cuida la convivencia. Léelas antes de empezar y síguelas siempre. Juega con honor y que los dioses del servidor te acompañen.</p>
<h2 id="normas-chat">💬 Normas sobre el uso del Chat</h2>
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
<h2 id="normas-modificaciones">🚫 Normas sobre Modificaciones ilegales</h2>
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
<div class="tip-box"><span class="tip-icon">✅</span><div><strong>Mods permitidos:</strong> OptiFine, shaders, minimapas sin radar. Ante la duda, consulta en Discord antes de instalar cualquier mod.</div></div>
<h2 id="normas-conducta">🤝 Normas generales de conducta</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Conducta dentro del servidor</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li>Está prohibido el <strong>griefing</strong> (destruir construcciones ajenas) en zonas no-PvP.</li>
      <li>No se permite el <strong>robo</strong> en cofres o terrenos ajenos.</li>
      <li>Está prohibido el <strong>kill-farming</strong> (matar repetidamente al mismo jugador).</li>
      <li>Se debe <strong>respetar al staff</strong>. Sus decisiones son definitivas.</li>
    </ul>
  </div>
</div>
<h2 id="inactividad">⏱️ Gestión de inactividad</h2>
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
<h2 id="apelaciones">📩 Gestión de apelaciones</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Proceso de apelación</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li>Las apelaciones se gestionan <strong>exclusivamente por Discord</strong>.</li>
      <li>Abre un <strong>ticket de soporte</strong> en nuestro Discord.</li>
      <li>Incluye tu <strong>nombre de usuario</strong>, la sanción recibida y tu versión de los hechos.</li>
      <li>El staff responderá en máximo <strong>72 horas</strong>.</li>
    </ul>
  </div>
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
      <tr><td>Uso de hacks</td><td>Ban permanente</td><td>—</td></tr>
      <tr><td>Griefing</td><td>Ban 7 días</td><td>Ban permanente</td></tr>
      <tr><td>Robo</td><td>Ban 3 días</td><td>Ban 30 días</td></tr>
      <tr><td>Explotar bugs</td><td>Ban 7 días</td><td>Ban permanente</td></tr>
    </tbody>
  </table>
</div>
          `
        },
      ]
    },

    /* ─── CÓMO INGRESAR ───────────────────────────────────── */
    {
      id: 'como-ingresar', name: 'Cómo Ingresar', icon: '🚀', color: '#a78bfa', open: false,
      pages: [
        {
          id: 'ingresar-java', name: 'Java Edition', path: 'pages/como-ingresar/java.html',
          description: 'Conéctate a PlanetMC desde Minecraft Java Edition (Premium y No Premium).',
          keywords: ['java','premium','cracked','tlauncher','conectar','ip','login','register','multijugador','launcher'],
          breadcrumb: ['Cómo Ingresar'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">🚀 CÓMO INGRESAR</span><span class="bc-sep">›</span><span class="bc-page">☕ JAVA</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">☕</div>
  <h1 style="margin-bottom:8px;">Java Edition</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">Conectarte a PlanetMC desde Java es sencillo. Solo necesitas tu launcher y la IP. Sigue los pasos según tu tipo de cuenta.</p>
</div>
<p>Tanto si tienes cuenta <strong>Premium</strong> (Mojang/Microsoft) como si juegas en modo <strong>No Premium (Cracked)</strong>, en PlanetMC podrás entrar sin problemas.</p>
<h2 id="soy-premium">🔑 Soy Premium (Mojang / Microsoft)</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Pasos para Premium</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Abre el launcher oficial y selecciona la versión <strong>1.21.x</strong>.</li>
      <li>Ve a <strong>Multijugador → Agregar servidor</strong>.</li>
      <li>En "Nombre" escribe: <code>PlanetMC</code></li>
      <li>En "Dirección" escribe: <span class="ip-chip ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span></li>
      <li>Haz clic en <strong>Listo</strong> y luego en <strong>Unirse</strong>.</li>
      <li>La primera vez escribe <code>/premium</code> para vincular tu cuenta.</li>
    </ol>
  </div>
</div>
<div class="tip-box"><span class="tip-icon">✅</span><div>Desde ahora no necesitarás <code>/login</code> al entrar. Tu cuenta queda vinculada automáticamente.</div></div>
<h2 id="no-premium">🔓 Soy No Premium (Cracked)</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Pasos para No Premium</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Abre tu launcher (TLauncher, PolyMC, etc.) y selecciona <strong>1.21.x</strong>.</li>
      <li>Ve a <strong>Multijugador → Agregar servidor</strong>.</li>
      <li>Escribe la IP: <span class="ip-chip ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span></li>
      <li>Al entrar <strong>por primera vez</strong> escribe: <code>/register &lt;contraseña&gt; &lt;contraseña&gt;</code></li>
      <li>Cada vez que entres escribe: <code>/login &lt;contraseña&gt;</code></li>
    </ol>
  </div>
</div>
<div class="warn-box"><span class="warn-icon">⚠️</span><div><strong>Importante:</strong> Elige una contraseña segura. No la compartas con nadie, ni con el staff.</div></div>
<h2 id="ips-java">🌐 IPs disponibles para Java</h2>
<div class="info-card">
  <div class="info-card-row"><span class="info-label">IP Principal</span><span class="info-val ip-copy" data-ip="play.planetmc.net">play.planetmc.net 📋</span></div>
  <div class="info-card-row"><span class="info-label">IP Alternativa</span><span class="info-val ip-copy" data-ip="mc.planetmc.net">mc.planetmc.net 📋</span></div>
  <div class="info-card-row"><span class="info-label">Versión</span><span class="info-val">1.21.x</span></div>
  <div class="info-card-row"><span class="info-label">Puerto</span><span class="info-val">25565 (predeterminado)</span></div>
</div>
<h2 id="ayuda-rapida">🛠️ Ayuda Rápida</h2>
<div class="desc-box">
  <div class="desc-box-header">❓ Problemas frecuentes</div>
  <div class="desc-box-body">
    <div class="faq-list">
      <details class="faq-item"><summary>"Contraseña incorrecta" al hacer /login</summary><p>Revisa mayúsculas y minúsculas. Si olvidaste la contraseña, abre un ticket en Discord para que el staff la resetee.</p></details>
      <details class="faq-item"><summary>"Sesión activa / Ya hay una sesión iniciada"</summary><p>Espera 1-2 minutos y vuelve a intentarlo. La sesión anterior no se cerró correctamente.</p></details>
      <details class="faq-item"><summary>"Invalid session" (Premium)</summary><p>Cierra sesión en el launcher, vuelve a iniciarla y reconéctate.</p></details>
      <details class="faq-item"><summary>"Outdated client / server"</summary><p>Tu versión no coincide. Selecciona exactamente la versión <strong>1.21.x</strong>.</p></details>
      <details class="faq-item"><summary>No puedo conectarme / "Connection refused"</summary><p>Verifica la IP sin espacios. Revisa el canal #estado-servidor en Discord.</p></details>
    </div>
  </div>
</div>
          `
        },
        {
          id: 'ingresar-bedrock', name: 'Bedrock Edition', path: 'pages/como-ingresar/bedrock.html',
          description: 'Conéctate a PlanetMC desde Minecraft Bedrock (móvil, consola, Windows 10/11).',
          keywords: ['bedrock','movil','android','ios','xbox','playstation','switch','windows10','consola','puerto','19132'],
          breadcrumb: ['Cómo Ingresar'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">🚀 CÓMO INGRESAR</span><span class="bc-sep">›</span><span class="bc-page">📱 BEDROCK</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">📱</div>
  <h1 style="margin-bottom:8px;">Bedrock Edition</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">PlanetMC es compatible con Minecraft Bedrock en todas sus plataformas: móvil, Windows 10/11, Xbox y PlayStation.</p>
</div>
<p>¡Los portales del servidor están abiertos para Bedrock! En pocos pasos estarás construyendo junto a la comunidad.</p>
<h2 id="soy-bedrock">📱 Pasos para Bedrock (Microsoft)</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Abre <strong>Minecraft Bedrock</strong> y ve a <strong>Jugar</strong>.</li>
      <li>Selecciona la pestaña <strong>Servidores</strong>.</li>
      <li>Baja hasta el final y pulsa <strong>Añadir servidor</strong>.</li>
      <li>Completa los campos:</li>
    </ol>
    <div class="info-card" style="margin-top:12px;">
      <div class="info-card-row"><span class="info-label">Nombre del servidor</span><span class="info-val">PlanetMC</span></div>
      <div class="info-card-row"><span class="info-label">Dirección</span><span class="info-val ip-copy" data-ip="bedrock.planetmc.net">bedrock.planetmc.net 📋</span></div>
      <div class="info-card-row"><span class="info-label">Puerto</span><span class="info-val ip-copy" data-ip="19132">19132 📋</span></div>
    </div>
    <ol class="wiki-steps" style="margin-top:12px;" start="5">
      <li>Pulsa <strong>Guardar</strong> y luego conéctate. ¡Listo!</li>
    </ol>
  </div>
</div>
<div class="tip-box"><span class="tip-icon">💡</span><div>Necesitas una cuenta de <strong>Microsoft / Xbox</strong> activa para jugar en Bedrock.</div></div>
<h2 id="consolas">🎮 Consolas (Xbox / PlayStation / Switch)</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Método para consolas</div>
  <div class="desc-box-body">
    <p>Las consolas no permiten agregar servidores personalizados directamente. Usa este método alternativo:</p>
    <ol class="wiki-steps">
      <li>Desde un PC o móvil, añade el servidor con el método Bedrock normal.</li>
      <li>Inicia sesión con la <strong>misma cuenta Microsoft</strong> en tu consola.</li>
      <li>En Minecraft, ve a la lista de un <strong>amigo</strong> que esté conectado.</li>
      <li>Únete a su sesión desde el menú de amigos.</li>
    </ol>
    <div class="warn-box" style="margin-top:12px;"><span class="warn-icon">ℹ️</span><div>Este método puede variar según actualizaciones. Si tienes problemas, consulta en <strong>#soporte-bedrock</strong> en Discord.</div></div>
  </div>
</div>
<h2 id="datos-conexion">🌐 Datos de conexión Bedrock</h2>
<div class="info-card">
  <div class="info-card-row"><span class="info-label">IP Bedrock</span><span class="info-val ip-copy" data-ip="bedrock.planetmc.net">bedrock.planetmc.net 📋</span></div>
  <div class="info-card-row"><span class="info-label">Puerto</span><span class="info-val ip-copy" data-ip="19132">19132 📋</span></div>
  <div class="info-card-row"><span class="info-label">Versión</span><span class="info-val">1.21.x</span></div>
  <div class="info-card-row"><span class="info-label">Plataformas</span><span class="info-val">Android · iOS · Win10 · Xbox · PS · Switch</span></div>
</div>
<h2 id="ayuda-rapida">🛠️ Ayuda Rápida</h2>
<div class="desc-box">
  <div class="desc-box-header">❓ Problemas frecuentes</div>
  <div class="desc-box-body">
    <div class="faq-list">
      <details class="faq-item"><summary>No aparece la pestaña "Servidores"</summary><p>Algunos dispositivos bloquean servidores externos. Prueba usando la VPN <strong>Cloudflare WARP</strong> y vuelve a intentarlo.</p></details>
      <details class="faq-item"><summary>"No se puede conectar al servidor"</summary><p>Verifica que la IP y el puerto estén correctos. El puerto debe ser <strong>19132</strong> exactamente.</p></details>
      <details class="faq-item"><summary>"Sesión activa / Ya hay una sesión iniciada"</summary><p>Espera 1-2 minutos. Suele ocurrir tras desconexiones abruptas.</p></details>
      <details class="faq-item"><summary>El servidor no aparece en mi lista</summary><p>Agrégate a algún amigo que esté conectado para entrar directamente.</p></details>
    </div>
  </div>
</div>
          `
        },
      ]
    },

    /* ─── SURVIVAL ────────────────────────────────────────── */
    {
      id: 'survival', name: 'Survival', icon: '⚔️', color: '#22d3a5', open: false,
      pages: [
        {
          id: 'primeros-pasos', name: 'Primeros Pasos', path: 'pages/survival/primeros-pasos.html',
          description: 'Todo lo que necesitas saber al comenzar en el modo Survival de PlanetMC.',
          keywords: ['inicio','comenzar','nuevo','primer','primeros pasos','novato','spawn','kit','rtp'],
          breadcrumb: ['Survival'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">⚔️ SURVIVAL</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">🌱</div>
  <h1 style="margin-bottom:8px;">Primeros Pasos en Survival</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">Bienvenido al modo Survival de PlanetMC. Aquí comienza tu verdadera aventura.</p>
</div>
<p>Sigue estos pasos para empezar con buen pie y no perderte ningún beneficio inicial.</p>
<h2 id="explora-spawn">🏛️ Explora el Spawn</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <p>Al entrar aparecerás en el <strong>Spawn</strong>, la zona central del servidor.</p>
    <ul class="wiki-list">
      <li>Recorre los <strong>lugares de interés</strong>: paneles de estadísticas, warps e información.</li>
      <li>Localiza el <strong>NPC de kits</strong> y reclama tu Kit Inicial.</li>
      <li>Visita la <strong>Tienda</strong> para conocer los precios de compra y venta.</li>
    </ul>
  </div>
</div>
<h2 id="comienza-aventura">🗺️ Comienza tu Aventura</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li>Habla con el <strong>NPC "Comenzar Aventura"</strong> para un teletransporte aleatorio al mundo.</li>
      <li>O usa <code>/rtp</code> para ir directamente a un punto aleatorio en el mundo Survival.</li>
    </ul>
  </div>
</div>
<div class="tip-box"><span class="tip-icon">💡</span><div>Aleja del spawn al menos <strong>500 bloques</strong> para encontrar terreno sin reclamar.</div></div>
<h2 id="kit-inicial">🎁 Reclama tu Kit Inicial</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <p>Una vez en el mundo escribe <code>/kit novato</code>:</p>
    <div class="item-grid">
      <div class="item-chip">🗡️ Espada de hierro</div>
      <div class="item-chip">⛏️ Pico de hierro</div>
      <div class="item-chip">🪓 Hacha de hierro</div>
      <div class="item-chip">🍖 64x Carne cocida</div>
      <div class="item-chip">💰 $500 PlanetCoins</div>
      <div class="item-chip">📦 Cofre de madera</div>
    </div>
  </div>
</div>
<h2 id="piedra-proteccion">🛡️ Tu primer objetivo: Proteger tu terreno</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Consigue una <strong>pala dorada</strong> (incluida en el kit o disponible en /shop).</li>
      <li>Haz clic derecho en una esquina de tu terreno.</li>
      <li>Haz clic derecho en la esquina opuesta para delimitar el área.</li>
      <li>¡Tu terreno queda protegido automáticamente!</li>
    </ol>
  </div>
</div>
<div class="warn-box"><span class="warn-icon">⚠️</span><div>El servidor <strong>no se responsabiliza</strong> por griefing o robos en terrenos sin proteger.</div></div>
<h2 id="en-resumen">📌 Checklist del nuevo jugador</h2>
<div class="desc-box">
  <div class="desc-box-header">🗺️ En resumen</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li>✅ Usar <code>/kit novato</code> al entrar por primera vez</li>
      <li>✅ Viajar al mundo con <code>/rtp</code> o el NPC</li>
      <li>✅ Proteger tu terreno con la pala dorada</li>
      <li>✅ Establecer tu hogar con <code>/sethome</code></li>
      <li>✅ Unirte al Discord para enterarte de eventos</li>
      <li>✅ Votar con <code>/vote</code> para recompensas diarias</li>
    </ul>
  </div>
</div>
          `
        },
        {
          id: 'como-jugar', name: 'Cómo Jugar', path: 'pages/survival/como-jugar.html',
          description: 'Mecánicas del Survival: economía, misiones, niveles, comandos y más.',
          keywords: ['jugar','mecánicas','economia','misiones','niveles','votar','pvp','arena','comandos','balance'],
          breadcrumb: ['Survival'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">⚔️ SURVIVAL</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">🎮</div>
  <h1 style="margin-bottom:8px;">Cómo Jugar Survival</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">Mecánicas completas: economía, misiones, niveles y más.</p>
</div>
<h2 id="comandos-basicos">⌨️ Comandos Básicos</h2>
<div class="cmd-grid">
  <div class="cmd-item"><code>/spawn</code><span>Volver al spawn principal</span></div>
  <div class="cmd-item"><code>/home</code><span>Ir a tu hogar establecido</span></div>
  <div class="cmd-item"><code>/sethome</code><span>Establecer tu hogar actual</span></div>
  <div class="cmd-item"><code>/rtp</code><span>Teletransporte aleatorio</span></div>
  <div class="cmd-item"><code>/tpa [jugador]</code><span>Solicitar TP a un jugador</span></div>
  <div class="cmd-item"><code>/tpaccept</code><span>Aceptar solicitud de TP</span></div>
  <div class="cmd-item"><code>/msg [jugador] [msg]</code><span>Mensaje privado</span></div>
  <div class="cmd-item"><code>/balance</code><span>Ver tu dinero actual</span></div>
  <div class="cmd-item"><code>/pay [jugador] [monto]</code><span>Enviar dinero</span></div>
  <div class="cmd-item"><code>/warp</code><span>Lista de warps disponibles</span></div>
  <div class="cmd-item"><code>/kit</code><span>Ver kits disponibles</span></div>
  <div class="cmd-item"><code>/vote</code><span>Votar y ganar recompensas</span></div>
</div>
<h2 id="economia">💰 Sistema de Economía</h2>
<p>La moneda oficial es el <strong>PlanetCoin (PLC)</strong>.</p>
<div class="two-col">
  <div class="desc-box">
    <div class="desc-box-header">📈 Cómo ganar PLC</div>
    <div class="desc-box-body">
      <ul class="wiki-list">
        <li>Vender items en <code>/shop</code></li>
        <li>Publicar en la subasta <code>/ah sell</code></li>
        <li>Completar misiones diarias</li>
        <li>Votar con <code>/vote</code></li>
        <li>Ganar eventos especiales</li>
      </ul>
    </div>
  </div>
  <div class="desc-box">
    <div class="desc-box-header">📉 Cómo gastar PLC</div>
    <div class="desc-box-body">
      <ul class="wiki-list">
        <li>Comprar items en <code>/shop</code></li>
        <li>Comprar en la subasta <code>/ah</code></li>
        <li>Pagar a otros jugadores</li>
        <li>Ampliar protecciones</li>
        <li>Comprar permisos especiales</li>
      </ul>
    </div>
  </div>
</div>
<h2 id="misiones">🎯 Sistema de Misiones</h2>
<p>Accede con <code>/quests</code>. Hay misiones <strong>diarias</strong> y <strong>semanales</strong>:</p>
<div class="table-wrap">
  <table class="wiki-table">
    <thead><tr><th>Tipo</th><th>Ejemplo</th><th>Recompensa</th></tr></thead>
    <tbody>
      <tr><td>Diaria</td><td>Minar 64 diamantes</td><td>$250 PLC + XP</td></tr>
      <tr><td>Diaria</td><td>Matar 20 zombies</td><td>$150 PLC</td></tr>
      <tr><td>Diaria</td><td>Pescar 30 peces</td><td>$200 PLC</td></tr>
      <tr><td>Semanal</td><td>Craftear 100 items</td><td>$1,500 PLC + Kit especial</td></tr>
    </tbody>
  </table>
</div>
<h2 id="mundos">🌍 Mundos disponibles</h2>
<div class="table-wrap">
  <table class="wiki-table">
    <thead><tr><th>Mundo</th><th>PvP</th><th>Descripción</th></tr></thead>
    <tbody>
      <tr><td>Overworld</td><td>❌</td><td>Mundo principal de construcción</td></tr>
      <tr><td>Nether</td><td>✅</td><td>Recursos y PvP activo</td></tr>
      <tr><td>End</td><td>✅</td><td>Recursos avanzados y combate</td></tr>
      <tr><td>Mining World</td><td>❌</td><td>Solo minería, se resetea mensualmente</td></tr>
    </tbody>
  </table>
</div>
<div class="tip-box"><span class="tip-icon">⛏️</span><div>Usa el <strong>Mining World</strong> para extraer minerales y deja el mundo principal para construir.</div></div>
          `
        },
        {
          id: 'protecciones', name: 'Protecciones', path: 'pages/survival/protecciones.html',
          description: 'Cómo proteger tu terreno y construcciones del griefing con GriefPrevention.',
          keywords: ['proteger','proteccion','claim','griefprevention','terreno','base','griefing','robo','trust'],
          breadcrumb: ['Survival'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">⚔️ SURVIVAL</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">🛡️</div>
  <h1 style="margin-bottom:8px;">Gestión de Protecciones</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">Las protecciones son tu herramienta principal para mantener tu terreno seguro.</p>
</div>
<p>Todo se controla con el sistema <strong>GriefPrevention</strong> y la herramienta principal: <code>la pala dorada</code>.</p>
<h2 id="como-proteger">🔒 Cómo proteger tu terreno</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Pasos para crear una protección</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Obtén una <strong>pala dorada</strong> (incluida en el kit inicial o en <code>/shop</code>).</li>
      <li>Con la pala en mano, haz <strong>clic derecho</strong> en una esquina de tu terreno.</li>
      <li>Luego haz <strong>clic derecho</strong> en la esquina opuesta.</li>
      <li>Verás partículas doradas confirmando la protección.</li>
    </ol>
    <div class="info-card" style="margin-top:12px;">
      <div class="info-card-row"><span class="info-label">Bloques iniciales</span><span class="info-val">100 bloques</span></div>
      <div class="info-card-row"><span class="info-label">Ganancia automática</span><span class="info-val">+100 bloques/hora jugada</span></div>
      <div class="info-card-row"><span class="info-label">Máximo sin donación</span><span class="info-val">10,000 bloques</span></div>
    </div>
  </div>
</div>
<h2 id="lista-comandos">⌨️ Lista de comandos de protección</h2>
<div class="desc-box">
  <div class="desc-box-header">🔷 Teleport a la protección</div>
  <div class="desc-box-body"><code>/p teleport</code><p>Te teletransporta directamente a la protección que indiques.</p></div>
</div>
<div class="desc-box">
  <div class="desc-box-header">📦 Obtener una protección</div>
  <div class="desc-box-body"><code>/p get</code><p>Reclama una protección disponible para ti.</p></div>
</div>
<div class="desc-box">
  <div class="desc-box-header">🏷️ Alias de la protección</div>
  <div class="desc-box-body"><code>/p alias</code><p>Cambia el nombre de tu protección para reconocerla fácilmente.</p></div>
</div>
<div class="cmd-grid">
  <div class="cmd-item"><code>/claim</code><span>Activar modo reclamación</span></div>
  <div class="cmd-item"><code>/abandonclaim</code><span>Eliminar el claim actual</span></div>
  <div class="cmd-item"><code>/claimlist</code><span>Ver todos tus claims</span></div>
  <div class="cmd-item"><code>/trust [jugador]</code><span>Acceso completo</span></div>
  <div class="cmd-item"><code>/containertrust [jugador]</code><span>Solo cofres</span></div>
  <div class="cmd-item"><code>/accesstrust [jugador]</code><span>Puertas y botones</span></div>
  <div class="cmd-item"><code>/untrust [jugador]</code><span>Retirar permisos</span></div>
  <div class="cmd-item"><code>/trustlist</code><span>Ver jugadores con acceso</span></div>
</div>
<h2 id="tipos-protecciones">💎 Tipos de Piedras de Protección</h2>
<div class="table-wrap">
  <table class="wiki-table">
    <thead><tr><th>Tamaño del área</th><th>Precio</th><th>Método</th></tr></thead>
    <tbody>
      <tr><td>15×15</td><td>$7,000</td><td><code>/menu</code></td></tr>
      <tr><td>50×50</td><td>$28,750</td><td><code>/menu</code></td></tr>
      <tr><td>100×100</td><td>$57,500</td><td><code>/menu</code></td></tr>
      <tr><td>160×160</td><td>$93,437</td><td><code>/menu</code></td></tr>
      <tr><td>250×250</td><td>USD exclusivo</td><td>Tienda web</td></tr>
    </tbody>
  </table>
</div>
<h2 id="recomendaciones">⚠️ Recomendaciones importantes</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Consejos de seguridad</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li>Protege tu terreno <strong>antes de construir</strong> cualquier cosa valiosa.</li>
      <li>No otorgues <code>/trust</code> a jugadores que no conoces bien.</li>
      <li>Usa <code>/containertrust</code> para dar acceso solo a cofres.</li>
      <li>Verifica tus claims periódicamente con <code>/claimlist</code>.</li>
    </ul>
  </div>
</div>
          `
        },
        {
          id: 'subasta', name: 'Subastas (/ah)', path: 'pages/survival/subasta.html',
          description: 'Cómo usar el sistema de subastas del servidor para comprar y vender items.',
          keywords: ['subasta','auction','ah','vender','comprar','mercado','items','precio','pujar'],
          breadcrumb: ['Survival'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">⚔️ SURVIVAL</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">🏷️</div>
  <h1 style="margin-bottom:8px;">Subastas</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">El sistema de subastas permite comprar y vender objetos entre jugadores de forma rápida y segura.</p>
</div>
<p>Se accede con el comando: <code>/ah</code></p>
<h2 id="comprar-ah">🛒 Comprar en /ah</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Abre el menú con <code>/ah</code>.</li>
      <li>Revisa los items listados por otros jugadores.</li>
      <li>Elige el objeto y pulsa en él para <strong>comprarlo directamente</strong> o <strong>pujar</strong>.</li>
      <li>Los objetos comprados llegarán automáticamente a tu inventario.</li>
    </ol>
    <div class="tip-box" style="margin-top:10px;"><span class="tip-icon">💡</span><div><strong>Consejo:</strong> comprueba siempre el precio antes de comprar.</div></div>
  </div>
</div>
<h2 id="vender-ah">📤 Vender en /ah</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Ten el item en tu mano.</li>
      <li>Usa el comando: <code>/ah sell [precio]</code></li>
    </ol>
    <p><strong>Ejemplo:</strong></p>
    <div class="code-block"><code>/ah sell 500</code></div>
    <p>Esto listará el item por <strong>$500 PLC</strong> durante <strong>48 horas</strong>.</p>
  </div>
</div>
<h2 id="comandos-ah">⌨️ Comandos útiles</h2>
<div class="cmd-grid">
  <div class="cmd-item"><code>/ah</code><span>Abrir el Auction House</span></div>
  <div class="cmd-item"><code>/ah sell [precio]</code><span>Vender item en mano</span></div>
  <div class="cmd-item"><code>/ah search [nombre]</code><span>Buscar item específico</span></div>
  <div class="cmd-item"><code>/ah selling</code><span>Ver tus items en venta</span></div>
  <div class="cmd-item"><code>/ah expired</code><span>Recoger items no vendidos</span></div>
  <div class="cmd-item"><code>/ah history</code><span>Historial de ventas</span></div>
</div>
<h2 id="normas-ah">⚠️ Normas importantes</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Reglas del Auction House</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li>Está prohibido listar items a precios <strong>absurdamente inflados</strong> para engañar.</li>
      <li>No se permite el <strong>acaparamiento masivo</strong> de un recurso para monopolizar.</li>
      <li>La comisión del servidor es del <strong>5%</strong> del precio de venta.</li>
    </ul>
  </div>
</div>
<div class="info-card">
  <div class="info-card-row"><span class="info-label">Duración del listado</span><span class="info-val">48 horas</span></div>
  <div class="info-card-row"><span class="info-label">Comisión servidor</span><span class="info-val">5% del precio</span></div>
  <div class="info-card-row"><span class="info-label">Máx. items (Novato)</span><span class="info-val">5 listados simultáneos</span></div>
  <div class="info-card-row"><span class="info-label">Máx. items (VIP)</span><span class="info-val">15 listados simultáneos</span></div>
  <div class="info-card-row"><span class="info-label">Máx. items (MVP+)</span><span class="info-val">30 listados simultáneos</span></div>
</div>
          `
        },
        {
          id: 'tienda', name: 'La Tienda (/shop)', path: 'pages/survival/tienda.html',
          description: 'Cómo usar la tienda oficial del servidor para comprar y vender items.',
          keywords: ['tienda','shop','comprar','vender','items','precio','economia','materiales'],
          breadcrumb: ['Survival'],
          content: `
<div class="breadcrumb-bar"><span class="bc-cat">⚔️ SURVIVAL</span></div>
<div class="page-hero" style="text-align:left;padding:28px 28px 24px;">
  <div style="font-size:2.2rem;margin-bottom:10px;">🛒</div>
  <h1 style="margin-bottom:8px;">La Tienda</h1>
  <p class="page-hero-desc" style="text-align:left;max-width:100%;">El comando /shop abre la tienda oficial donde puedes comprar y vender items directamente al servidor.</p>
</div>
<p>Es la forma más estable y segura de conseguir materiales o ganar dinero extra.</p>
<h2 id="comprar-tienda">💳 Comprar en la tienda</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Escribe <code>/shop</code> para abrir la tienda.</li>
      <li>Navega por las categorías (bloques, minerales, comida, etc.).</li>
      <li>Selecciona el item y elige la cantidad.</li>
      <li>El precio se descuenta automáticamente de tu saldo.</li>
    </ol>
    <div class="tip-box" style="margin-top:10px;"><span class="tip-icon">💡</span><div><strong>Consejo:</strong> usa la tienda para materiales difíciles de farmear.</div></div>
  </div>
</div>
<h2 id="vender-tienda">💵 Vender en la tienda</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Descripción</div>
  <div class="desc-box-body">
    <ol class="wiki-steps">
      <li>Abre la tienda con <code>/shop</code>.</li>
      <li>Navega a la categoría del item que quieres vender.</li>
      <li>Haz clic en el item y selecciona <strong>"Vender"</strong>.</li>
      <li>Elige la cantidad y confirma. El dinero llega al instante.</li>
    </ol>
  </div>
</div>
<h2 id="ventajas-shop">✨ Ventajas de usar /shop</h2>
<div class="desc-box">
  <div class="desc-box-header">📋 Por qué usar la tienda oficial</div>
  <div class="desc-box-body">
    <ul class="wiki-list">
      <li><strong>Precios estables:</strong> a diferencia de /ah, los precios no fluctúan.</li>
      <li><strong>Disponibilidad 24/7:</strong> siempre hay stock disponible.</li>
      <li><strong>Sin comisiones:</strong> no hay descuentos por comisión del servidor.</li>
      <li><strong>Rapidez:</strong> las transacciones son instantáneas.</li>
    </ul>
  </div>
</div>
<h2 id="categorias-tienda">📦 Categorías disponibles</h2>
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
<h2 id="precios-referencia">💰 Precios de referencia</h2>
<div class="table-wrap">
  <table class="wiki-table">
    <thead><tr><th>Item</th><th>Venta al servidor</th><th>Compra al servidor</th></tr></thead>
    <tbody>
      <tr><td>Diamante</td><td>$25 c/u</td><td>$80 c/u</td></tr>
      <tr><td>Esmeralda</td><td>$15 c/u</td><td>$50 c/u</td></tr>
      <tr><td>Lingote de hierro</td><td>$3 c/u</td><td>$10 c/u</td></tr>
      <tr><td>Lingote de oro</td><td>$8 c/u</td><td>$25 c/u</td></tr>
      <tr><td>Trigo (stack 64)</td><td>$40</td><td>$120</td></tr>
      <tr><td>Madera (stack 64)</td><td>$20</td><td>$60</td></tr>
    </tbody>
  </table>
</div>
<div class="warn-box"><span class="warn-icon">⚠️</span><div>Los precios pueden cambiar con actualizaciones. El mercado <code>/ah</code> generalmente ofrece mejores precios para items raros.</div></div>
          `
        },
      ]
    },

  ]
};
