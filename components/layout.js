/* ═══════════════════════════════════════════════════════════════
   layout.js  —  Inyector central de layout
   PlanetMC Wiki
   ═══════════════════════════════════════════════════════════════ */

// Guard: evitar doble ejecución si el script se carga más de una vez
if (typeof window._layoutLoaded === 'undefined') {
window._layoutLoaded = true;

(function () {

  /* ══════════════════════════════════════════════════════════════
     ROOT PATH
     Cada HTML declara window.ROOT_PATH antes de cargar este script:
       Raíz (index.html)              → ROOT_PATH = './'
       pages/*.html                   → ROOT_PATH = '../'
       pages/ingresar/*.html          → ROOT_PATH = '../../'
       pages/survival/*.html          → ROOT_PATH = '../../'
     ══════════════════════════════════════════════════════════════ */
  var ROOT = window.ROOT_PATH !== undefined ? window.ROOT_PATH : './';

  /* ══════════════════════════════════════════════════════════════
     INYECCIÓN DE CONTENIDO DESDE WIKI_DATA
     Si el #content-slot está vacío, busca la página en WIKI_DATA
     y mete su contenido. Esto resuelve las páginas en blanco.
     ══════════════════════════════════════════════════════════════ */
  function injectPageContent() {
    var slot = document.getElementById('content-slot');
    if (!slot) return;
    if (slot.innerHTML.trim() !== '') return; // ya tiene contenido estático

    var currentFile = window.location.pathname.split('/').pop() || 'index.html';

    var foundPage = null;
    for (var i = 0; i < WIKI_DATA.categories.length; i++) {
      var cat = WIKI_DATA.categories[i];
      for (var j = 0; j < cat.pages.length; j++) {
        var page = cat.pages[j];
        var pageFile = page.path.split('/').pop();
        if (pageFile === currentFile) {
          foundPage = page;
          break;
        }
      }
      if (foundPage) break;
    }

    if (foundPage && foundPage.content) {
      slot.innerHTML = foundPage.content;
      document.title = foundPage.name + ' \u2014 PlanetMC Wiki';
    } else if (currentFile !== 'index.html') {
      slot.innerHTML = `
        <div class="page-hero" style="text-align:center;">
          <div style="font-size:3rem;margin-bottom:16px;">🔍</div>
          <h1>Página no encontrada</h1>
          <p class="page-hero-desc">El contenido de esta página no está registrado en la wiki todavía.</p>
        </div>
        <div class="warn-box">
          <span class="warn-icon">⚠️</span>
          <div>Si eres administrador, verifica que el <code>path</code> en <code>wiki-data.js</code>
          coincida con la ruta real del archivo HTML.</div>
        </div>`;
    }
  }

  /* ══════════════════════════════════════════════════════════════
     HELPERS
     ══════════════════════════════════════════════════════════════ */
  function resolveLink(pagePath) {
    return ROOT + pagePath;
  }

  function isCurrentPage(pagePath) {
    var current = window.location.pathname;
    var pageFile = pagePath.split('/').pop();
    var currentFile = current.split('/').pop();
    return pageFile !== '' && pageFile === currentFile;
  }

  function getSidebarState() {
    try { return JSON.parse(localStorage.getItem('wikiSidebarState') || '{}'); }
    catch (e) { return {}; }
  }
  function saveSidebarState(state) {
    try { localStorage.setItem('wikiSidebarState', JSON.stringify(state)); }
    catch (e) {}
  }

  /* ══════════════════════════════════════════════════════════════
     BUILDERS
     ══════════════════════════════════════════════════════════════ */
  function buildSidebar() {
    var state = getSidebarState();
    var html = '<div class="sidebar-search-wrap">' +
      '<div class="sidebar-search">' +
      '<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
      '<input type="text" id="sidebar-search-input" placeholder="Buscar en la wiki..." autocomplete="off" spellcheck="false">' +
      '<button id="sidebar-search-clear" class="search-clear" title="Limpiar">✕</button>' +
      '</div>' +
      '<div id="search-results-panel" class="search-results-panel"></div>' +
      '</div>' +
      '<nav class="sidebar-nav">';

    WIKI_DATA.categories.forEach(function(cat) {
      var isOpen = state[cat.id] !== undefined ? state[cat.id] : cat.open;
      html += '<div class="sidebar-category" data-cat="' + cat.id + '">' +
        '<button class="sidebar-cat-btn ' + (isOpen ? 'open' : '') + '" data-cat="' + cat.id + '">' +
        '<span class="cat-icon">' + cat.icon + '</span>' +
        '<span class="cat-name">' + cat.name + '</span>' +
        '<svg class="cat-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>' +
        '</button>' +
        '<div class="sidebar-pages ' + (isOpen ? 'open' : '') + '">';

      cat.pages.forEach(function(page) {
        var active = isCurrentPage(page.path) ? 'active' : '';
        html += '<a href="' + resolveLink(page.path) + '" class="sidebar-page-link ' + active + '">' +
          (page.icon ? '<span class="page-icon">' + page.icon + '</span>' : '') +
          page.name + '</a>';
      });

      html += '</div></div>';
    });

    html += '</nav>';
    return html;
  }

  function buildNavbar() {
    // ── Iconos SVG reutilizables ──────────────────────────────────
    var iconDiscord = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-3px;flex-shrink:0;"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.105 18.1.12 18.117a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>';

    var iconShop = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;flex-shrink:0;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';

    // ── Sólo mostramos: Tienda y Discord ─────────────────────────
    //    (Inicio y Wiki eliminados según instrucciones)
    var navHTML =
      '<a href="' + WIKI_DATA.site.shopURL + '" target="_blank" rel="noopener" class="nav-link nav-link-shop">' +
        iconShop + 'Tienda' +
      '</a>' +
      '<a href="' + WIKI_DATA.site.discordURL + '" target="_blank" rel="noopener" class="nav-link nav-link-discord">' +
        iconDiscord + 'Discord' +
      '</a>';

    return '<div class="nav-brand">' +
      '<button id="hamburger-btn" class="hamburger-btn" aria-label="Menú"><span></span><span></span><span></span></button>' +
      '<a href="' + resolveLink('index.html') + '" class="nav-logo">' +
      '<div class="nav-logo-planet"></div>' +
      '<span class="logo-name">' + WIKI_DATA.site.name + '</span>' +
      '<span class="logo-sep">|</span>' +
      '<span class="logo-wiki">' + WIKI_DATA.site.wikiTitle + '</span>' +
      '</a></div>' +
      '<div class="nav-links">' + navHTML + '</div>';
  }

  function buildFooter() {
    var year = new Date().getFullYear();
    return '<div class="footer-inner">' +
      '<div class="footer-brand">' +
      '<div class="footer-logo"><img src="' + ROOT + 'logo.png" alt="PlanetMC" class="footer-logo-img"></div>' +
      '<p class="footer-tagline">' + WIKI_DATA.site.tagline + '</p>' +
      '<div class="footer-ips">' +
      '<span class="footer-ip-chip java">☕ Java: <strong>' + WIKI_DATA.site.javaIP + '</strong></span>' +
      '<span class="footer-ip-chip bedrock">📱 Bedrock: <strong>' + WIKI_DATA.site.bedrockIP + ':' + WIKI_DATA.site.bedrockPort + '</strong></span>' +
      '</div></div>' +
      '<div class="footer-links-col"><div class="footer-col-title">Wiki</div>' +
      WIKI_DATA.categories.map(function(cat) {
        return '<a href="' + resolveLink(cat.pages[0].path) + '" class="footer-link">' + cat.icon + ' ' + cat.name + '</a>';
      }).join('') +
      '</div>' +
      '<div class="footer-links-col"><div class="footer-col-title">Comunidad</div>' +
      '<a href="' + WIKI_DATA.site.discordURL + '" target="_blank" class="footer-link">💬 Discord</a>' +
      '<a href="' + WIKI_DATA.site.shopURL + '" target="_blank" class="footer-link">🛍️ Tienda</a>' +
      '<a href="' + resolveLink('pages/normas.html') + '" class="footer-link">📜 Normas</a>' +
      '</div></div>' +
      '<div class="footer-bottom">' +
      '<span>© ' + year + ' ' + WIKI_DATA.site.name + ' — Todos los derechos reservados</span>' +
      '<span class="footer-version">Minecraft ' + WIKI_DATA.site.version + '</span>' +
      '</div>';
  }

  /* ══════════════════════════════════════════════════════════════
     INYECTAR LAYOUT
     ══════════════════════════════════════════════════════════════ */
  function injectLayout() {
    // 1. Llenar el slot si está vacío
    injectPageContent();

    // 2. Capturar el contenido del slot
    var slot    = document.getElementById('content-slot');
    var content = slot ? slot.innerHTML : '';
    var pageTitle = document.title;

    // 3. Reemplazar todo el body con el layout completo
    document.body.innerHTML =
      '<div class="nebula"></div>' +
      '<div class="destiny-grid"></div>' +
      '<div class="scanlines"></div>' +
      '<div id="sidebar-overlay" class="sidebar-overlay"></div>' +
      '<header id="wiki-header">' + buildNavbar() + '</header>' +
      '<div id="wiki-layout">' +
        '<aside id="wiki-sidebar" class="wiki-sidebar">' + buildSidebar() + '</aside>' +
        '<main id="wiki-main" class="wiki-main">' +
          '<div class="wiki-content-wrap" id="wiki-content-wrap">' + content + '</div>' +
        '</main>' +
      '</div>' +
      '<footer id="wiki-footer">' + buildFooter() + '</footer>' +
      '<div id="copy-toast" class="copy-toast">✅ ¡Copiado al portapapeles!</div>';

    document.title = pageTitle;
  }

  /* ══════════════════════════════════════════════════════════════
     EVENTOS
     ══════════════════════════════════════════════════════════════ */
  function bindEvents() {
    var hamburger = document.getElementById('hamburger-btn');
    var sidebar   = document.getElementById('wiki-sidebar');
    var overlay   = document.getElementById('sidebar-overlay');

    function openMenu() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      if (hamburger) hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      if (hamburger) hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (hamburger) hamburger.addEventListener('click', function() {
      sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Categorías expandibles
    document.querySelectorAll('.sidebar-cat-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var catId  = btn.dataset.cat;
        var pages  = btn.nextElementSibling;
        var isOpen = btn.classList.contains('open');
        btn.classList.toggle('open', !isOpen);
        pages.classList.toggle('open', !isOpen);
        var state = getSidebarState();
        state[catId] = !isOpen;
        saveSidebarState(state);
      });
    });

    // Copiar IPs
    document.querySelectorAll('.ip-copy').forEach(function(el) {
      el.style.cursor = 'pointer';
      el.addEventListener('click', function() {
        var ip = el.dataset.ip;
        if (!ip) return;
        navigator.clipboard.writeText(ip)
          .then(function() { showToast('\u2705 "' + ip + '" copiado'); })
          .catch(function() {
            var ta = document.createElement('textarea');
            ta.value = ip;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('\u2705 "' + ip + '" copiado');
          });
      });
    });

    // Resaltar página activa en sidebar y abrir su categoría
    document.querySelectorAll('.sidebar-page-link').forEach(function(link) {
      var linkFile    = link.getAttribute('href').split('/').pop();
      var currentFile = window.location.pathname.split('/').pop();
      if (linkFile && currentFile && linkFile === currentFile) {
        link.classList.add('active');
        var pagesDiv = link.closest('.sidebar-pages');
        if (pagesDiv) {
          pagesDiv.classList.add('open');
          var catBtn = pagesDiv.previousElementSibling;
          if (catBtn) catBtn.classList.add('open');
        }
      }
    });

    // Scroll suave para anchors
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ── Toast ─────────────────────────────── */
  function showToast(msg) {
    var t = document.getElementById('copy-toast');
    if (!t) return;
    if (msg) t.textContent = msg;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2200);
  }
  window.showWikiToast = showToast;

  /* ── Init ──────────────────────────────── */
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

} // fin guard _layoutLoaded
