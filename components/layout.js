/* ═══════════════════════════════════════════════════════════════
   layout.js  —  Inyector central de layout
   PlanetMC Wiki
   ═══════════════════════════════════════════════════════════════ */

(function () {

  /* ══════════════════════════════════════════════════════════════
     1. ROOT PATH — Detectar ruta base desde la raíz del proyecto
        Todas las páginas están en /pages/ (un solo nivel).
        Usamos window.ROOT_PATH definido en cada HTML.
        Si no está definido, lo calculamos como fallback.
     ══════════════════════════════════════════════════════════════ */
  const ROOT = (function () {
    if (window.ROOT_PATH !== undefined) return window.ROOT_PATH;
    // Fallback automático: contar niveles de profundidad
    const parts = window.location.pathname.split('/').filter(Boolean);
    // Si es index.html en la raíz → './'
    // Si es pages/algo.html → '../'
    return parts.length <= 1 ? './' : '../';
  })();

  /* ══════════════════════════════════════════════════════════════
     2. INYECCIÓN DE CONTENIDO
        Busca en WIKI_DATA la página cuyo path coincida con la URL
        actual e inyecta su content en #content-slot.
        Esto resuelve las páginas en blanco (economía, protecciones).
     ══════════════════════════════════════════════════════════════ */
  function injectPageContent() {
    const slot = document.getElementById('content-slot');
    if (!slot) return;

    // Si el slot ya tiene contenido (HTML estático), no hacer nada
    if (slot.innerHTML.trim() !== '') return;

    // Obtener la ruta actual normalizada
    const currentPath = window.location.pathname
      .replace(/\\/g, '/')   // normalizar separadores en Windows
      .replace(/^\//, '');    // quitar slash inicial

    // Buscar la página en WIKI_DATA cuyo path termine igual que la URL actual
    let foundPage = null;
    for (const cat of WIKI_DATA.categories) {
      for (const page of cat.pages) {
        // Comparar por el final de la ruta (compatible con cualquier dominio/subdir)
        const pagePath = page.path.replace(/\\/g, '/');
        if (
          currentPath.endsWith(pagePath) ||
          currentPath.endsWith(pagePath.replace(/^.*\//, '')) // solo el nombre del archivo
        ) {
          foundPage = page;
          break;
        }
      }
      if (foundPage) break;
    }

    if (foundPage && foundPage.content) {
      slot.innerHTML = foundPage.content;
      // Actualizar el título de la pestaña
      document.title = foundPage.name + ' — PlanetMC Wiki';
    } else {
      // Página no encontrada en WIKI_DATA → mostrar error amigable
      slot.innerHTML = `
        <div class="page-hero" style="text-align:center;">
          <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
          <h1>Página no encontrada</h1>
          <p class="page-hero-desc">
            Esta página no tiene contenido registrado en la wiki todavía.
          </p>
        </div>
        <div class="warn-box">
          <span class="warn-icon">⚠️</span>
          <div>
            Si eres el administrador, asegúrate de que el <code>path</code> de esta página
            en <code>wiki-data.js</code> coincide exactamente con la ruta del archivo HTML.
          </div>
        </div>
      `;
    }
  }

  /* ══════════════════════════════════════════════════════════════
     3. HELPERS
     ══════════════════════════════════════════════════════════════ */
  function resolveLink(pagePath) {
    return ROOT + pagePath;
  }

  function isCurrentPage(pagePath) {
    const current = window.location.pathname.replace(/\\/g, '/');
    const normalized = pagePath.replace(/\\/g, '/');
    return (
      current.endsWith(normalized) ||
      current.endsWith('/' + normalized.split('/').pop())
    );
  }

  /* ── Estado del sidebar ─────────────────── */
  function getSidebarState() {
    try { return JSON.parse(localStorage.getItem('wikiSidebarState') || '{}'); }
    catch { return {}; }
  }
  function saveSidebarState(state) {
    try { localStorage.setItem('wikiSidebarState', JSON.stringify(state)); }
    catch {}
  }

  /* ══════════════════════════════════════════════════════════════
     4. BUILDERS — Sidebar, Navbar, Footer
     ══════════════════════════════════════════════════════════════ */
  function buildSidebar() {
    const state = getSidebarState();
    let html = `
      <div class="sidebar-search-wrap">
        <div class="sidebar-search">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" id="sidebar-search-input" placeholder="Buscar en la wiki..."
                 autocomplete="off" spellcheck="false">
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
            <svg class="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
          <div class="sidebar-pages ${isOpen ? 'open' : ''}">
      `;
      cat.pages.forEach(page => {
        const active = isCurrentPage(page.path) ? 'active' : '';
        const icon   = page.icon ? `<span class="page-icon">${page.icon}</span>` : '';
        html += `
          <a href="${resolveLink(page.path)}" class="sidebar-page-link ${active}">
            ${icon}${page.name}
          </a>
        `;
      });
      html += `</div></div>`;
    });

    html += `</nav>`;
    return html;
  }

  function buildNavbar() {
    const navLinks = WIKI_DATA.navLinks.map(link => {
      const href   = link.external ? link.url : resolveLink(link.url);
      const target = link.external ? 'target="_blank" rel="noopener"' : '';
      const discordIcon = link.icon === 'discord'
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;margin-right:4px;">
             <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.105 18.1.12 18.117a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
           </svg>`
        : '';
      return `<a href="${href}" ${target} class="nav-link ${link.icon ? 'nav-link-' + link.icon : ''}">${discordIcon}${link.name}</a>`;
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

  /* ══════════════════════════════════════════════════════════════
     5. INYECTAR LAYOUT EN EL DOM
        Primero inyectamos el contenido de wiki-data.js (si el slot
        está vacío), luego construimos el layout completo.
     ══════════════════════════════════════════════════════════════ */
  function injectLayout() {
    // Paso 1: llenar el slot con el contenido de wiki-data.js si está vacío
    injectPageContent();

    // Paso 2: capturar el contenido del slot (puede ser estático o recién inyectado)
    const slot    = document.getElementById('content-slot');
    const content = slot ? slot.innerHTML : '';
    const pageTitle = document.title;

    // Paso 3: reemplazar body con el layout completo
    document.body.innerHTML = `
      <div class="nebula"></div>
      <div class="destiny-grid"></div>
      <div class="scanlines"></div>

      <div id="sidebar-overlay" class="sidebar-overlay"></div>

      <header id="wiki-header">
        ${buildNavbar()}
      </header>

      <div id="wiki-layout">
        <aside id="wiki-sidebar" class="wiki-sidebar">
          ${buildSidebar()}
        </aside>

        <main id="wiki-main" class="wiki-main">
          <div class="wiki-content-wrap" id="wiki-content-wrap">
            ${content}
          </div>
        </main>
      </div>

      <footer id="wiki-footer">
        ${buildFooter()}
      </footer>

      <div id="copy-toast" class="copy-toast">✅ ¡Copiado al portapapeles!</div>
    `;

    document.title = pageTitle;
  }

  /* ══════════════════════════════════════════════════════════════
     6. EVENTOS
     ══════════════════════════════════════════════════════════════ */
  function bindEvents() {
    // Hamburguesa (menú móvil)
    const hamburger = document.getElementById('hamburger-btn');
    const sidebar   = document.getElementById('wiki-sidebar');
    const overlay   = document.getElementById('sidebar-overlay');

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

    if (hamburger) hamburger.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Categorías expandibles
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

    // Copiar IPs
    document.querySelectorAll('.ip-copy').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const ip = el.dataset.ip;
        if (!ip) return;
        navigator.clipboard.writeText(ip)
          .then(() => showToast(`✅ "${ip}" copiado`))
          .catch(() => {
            const ta = document.createElement('textarea');
            ta.value = ip;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast(`✅ "${ip}" copiado`);
          });
      });
    });

    // Marcar link activo en el sidebar y abrir su categoría
    document.querySelectorAll('.sidebar-page-link').forEach(link => {
      const linkPath = link.getAttribute('href');
      const currentPath = window.location.pathname;
      // Comparar la parte final de la ruta
      const linkFile = linkPath.split('/').pop();
      const currentFile = currentPath.split('/').pop();
      if (linkFile && currentFile && linkFile === currentFile) {
        link.classList.add('active');
        const pagesDiv = link.closest('.sidebar-pages');
        if (pagesDiv) {
          pagesDiv.classList.add('open');
          const catBtn = pagesDiv.previousElementSibling;
          if (catBtn) catBtn.classList.add('open');
        }
      }
    });

    // Scroll suave para anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     7. TOAST
     ══════════════════════════════════════════════════════════════ */
  function showToast(msg) {
    const t = document.getElementById('copy-toast');
    if (!t) return;
    if (msg) t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
  }
  window.showWikiToast = showToast;

  /* ══════════════════════════════════════════════════════════════
     8. INIT
     ══════════════════════════════════════════════════════════════ */
  function init() {
    injectLayout();
    bindEvents();
    if (typeof initSearch === 'function') initSearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
