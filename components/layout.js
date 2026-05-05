/* ═══════════════════════════════════════════
   layout.js  —  Inyector central de layout
   PlanetMC Wiki
   Modifica este archivo para cambiar el diseño
   de TODAS las páginas simultáneamente.
   ═══════════════════════════════════════════ */

(function () {
  /* ── Detectar profundidad de ruta ─────── */
  const path   = window.location.pathname;
  const depth  = (path.match(/\//g) || []).length - 1; // cuántos niveles de carpeta
  const ROOT   = window.ROOT_PATH || (depth <= 1 ? './' : '../');

  /* ── Helpers ──────────────────────────── */
  function resolveLink(pagePath) {
    return ROOT + pagePath;
  }

  function isCurrentPage(pagePath) {
    return path.endsWith(pagePath) || path.endsWith(pagePath.replace(/\.html$/, ''));
  }

  /* ── Guardar/leer estado de sidebar ───── */
  function getSidebarState() {
    try { return JSON.parse(localStorage.getItem('wikiSidebarState') || '{}'); }
    catch { return {}; }
  }
  function saveSidebarState(state) {
    try { localStorage.setItem('wikiSidebarState', JSON.stringify(state)); }
    catch {}
  }

  /* ── Construir HTML del sidebar ──────── */
  function buildSidebar() {
    const state = getSidebarState();
    let html = `
      <div class="sidebar-search-wrap">
        <div class="sidebar-search">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" id="sidebar-search-input" placeholder="Buscar en la wiki..." autocomplete="off" spellcheck="false">
          <button id="sidebar-search-clear" class="search-clear" title="Limpiar">✕</button>
        </div>
        <div id="search-results-panel" class="search-results-panel"></div>
      </div>
      <nav class="sidebar-nav">
    `;

    WIKI_DATA.categories.forEach(cat => {
      const isOpen = state[cat.id] !== undefined ? state[cat.id] : cat.open;
      html += `
        <div class="sidebar-category" data-cat="${cat.id}">
          <button class="sidebar-cat-btn ${isOpen ? 'open' : ''}" data-cat="${cat.id}">
            <span class="cat-icon">${cat.icon}</span>
            <span class="cat-name">${cat.name}</span>
            <svg class="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </button>
          <div class="sidebar-pages ${isOpen ? 'open' : ''}">
      `;
      cat.pages.forEach(page => {
        const active = isCurrentPage(page.path) ? 'active' : '';
        html += `<a href="${resolveLink(page.path)}" class="sidebar-page-link ${active}">${page.name}</a>`;
      });
      html += `</div></div>`;
    });

    html += `</nav>`;
    return html;
  }

  /* ── Construir HTML del navbar ────────── */
  function buildNavbar() {
    const navLinks = WIKI_DATA.navLinks.map(link => {
      const href   = link.external ? link.url : resolveLink(link.url);
      const target = link.external ? 'target="_blank" rel="noopener"' : '';
      const icon   = link.icon === 'discord' ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.105 18.1.12 18.117a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 13.93 13.93 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>' : '';
      return `<a href="${href}" ${target} class="nav-link ${link.icon ? 'nav-link-' + link.icon : ''}">${icon}${link.name}</a>`;
    }).join('');

    return `
      <div class="nav-brand">
        <button id="hamburger-btn" class="hamburger-btn" aria-label="Menú">
          <span></span><span></span><span></span>
        </button>
        <a href="${resolveLink('index.html')}" class="nav-logo">
          <div class="nav-logo-planet"></div>
          <span class="logo-name">${WIKI_DATA.site.name}</span>
          <span class="logo-sep">|</span>
          <span class="logo-wiki">${WIKI_DATA.site.wikiTitle}</span>
        </a>
      </div>
      <div class="nav-links">${navLinks}</div>
    `;
  }

  /* ── Construir HTML del footer ─────────── */
  function buildFooter() {
    const year = new Date().getFullYear();
    return `
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-planet"></div>
            <span>${WIKI_DATA.site.name}</span>
          </div>
          <p class="footer-tagline">${WIKI_DATA.site.tagline}</p>
          <div class="footer-ips">
            <span class="footer-ip-chip java">☕ Java: <strong>${WIKI_DATA.site.javaIP}</strong></span>
            <span class="footer-ip-chip bedrock">📱 Bedrock: <strong>${WIKI_DATA.site.bedrockIP}:${WIKI_DATA.site.bedrockPort}</strong></span>
          </div>
        </div>
        <div class="footer-links-col">
          <div class="footer-col-title">Wiki</div>
          ${WIKI_DATA.categories.map(cat =>
            `<a href="${resolveLink(cat.pages[0].path)}" class="footer-link">${cat.icon} ${cat.name}</a>`
          ).join('')}
        </div>
        <div class="footer-links-col">
          <div class="footer-col-title">Comunidad</div>
          <a href="${WIKI_DATA.site.discordURL}" target="_blank" class="footer-link">💬 Discord</a>
          <a href="${WIKI_DATA.site.shopURL}" target="_blank" class="footer-link">🛍️ Tienda</a>
          <a href="${resolveLink('pages/normas.html')}" class="footer-link">📜 Normas</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} ${WIKI_DATA.site.name} — Todos los derechos reservados</span>
        <span class="footer-version">Minecraft ${WIKI_DATA.site.version}</span>
      </div>
    `;
  }

  /* ── Inyectar layout en el DOM ─────────── */
  function injectLayout() {
    const slot = document.getElementById('content-slot');
    const content = slot ? slot.innerHTML : '';
    const pageTitle = document.title;

    document.body.innerHTML = `
      <div class="nebula"></div>
      <div class="destiny-grid"></div>
      <div class="scanlines"></div>

      <!-- Overlay sidebar móvil -->
      <div id="sidebar-overlay" class="sidebar-overlay"></div>

      <!-- Navbar -->
      <header id="wiki-header">
        ${buildNavbar()}
      </header>

      <!-- Layout principal -->
      <div id="wiki-layout">
        <!-- Sidebar -->
        <aside id="wiki-sidebar" class="wiki-sidebar">
          ${buildSidebar()}
        </aside>

        <!-- Contenido principal -->
        <main id="wiki-main" class="wiki-main">
          <div class="wiki-content-wrap" id="wiki-content-wrap">
            ${content}
          </div>
        </main>
      </div>

      <!-- Footer -->
      <footer id="wiki-footer">
        ${buildFooter()}
      </footer>

      <!-- Toast de copia -->
      <div id="copy-toast" class="copy-toast">✅ ¡Copiado al portapapeles!</div>
    `;

    // Restaurar title
    document.title = pageTitle;
  }

  /* ── Eventos ───────────────────────────── */
  function bindEvents() {
    /* Hamburguesa */
    const hamburger  = document.getElementById('hamburger-btn');
    const sidebar    = document.getElementById('wiki-sidebar');
    const overlay    = document.getElementById('sidebar-overlay');

    function openMenu() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });
    overlay.addEventListener('click', closeMenu);

    /* Categorías expandibles */
    document.querySelectorAll('.sidebar-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const catId  = btn.dataset.cat;
        const pages  = btn.nextElementSibling;
        const isOpen = btn.classList.contains('open');
        btn.classList.toggle('open', !isOpen);
        pages.classList.toggle('open', !isOpen);
        const state = getSidebarState();
        state[catId] = !isOpen;
        saveSidebarState(state);
      });
    });

    /* Copiar IPs */
    document.querySelectorAll('.ip-copy').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const ip = el.dataset.ip;
        navigator.clipboard.writeText(ip).then(() => showToast());
      });
    });

    /* Resaltar link activo en sidebar al cargar */
    document.querySelectorAll('.sidebar-page-link').forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active');
        // Asegurarse de que la categoría esté abierta
        const pages = link.closest('.sidebar-pages');
        if (pages) {
          pages.classList.add('open');
          const btn = pages.previousElementSibling;
          if (btn) btn.classList.add('open');
        }
      }
    });
  }

  /* ── Toast ─────────────────────────────── */
  function showToast(msg) {
    const t = document.getElementById('copy-toast');
    if (!t) return;
    if (msg) t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }
  window.showWikiToast = showToast;

  /* ── Init ──────────────────────────────── */
  function init() {
    injectLayout();
    bindEvents();
    // Inicializar búsqueda si existe
    if (typeof initSearch === 'function') initSearch();
    // Scroll suave para anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();