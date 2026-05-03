/* ═══════════════════════════════════════════════════════════
   PLANETMC WIKI — JavaScript Principal
   Carga de componentes + todas las funcionalidades
   ═══════════════════════════════════════════════════════════ */

/* ── DETECCIÓN DE RUTA RAÍZ ──────────────────────────────── */
const WIKI_ROOT = (function () {
  const path = window.location.pathname.replace(/\\/g, '/');
  return path.includes('/pages/') ? '../' : '';
})();


/* ── STARFIELD (inicia de inmediato, el canvas ya existe) ── */
(function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [], nebula = [], W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    const count = Math.floor((W * H) / 3000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.015 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
    nebula = [];
    const colors = ['rgba(0,229,255,','rgba(168,85,247,','rgba(0,255,136,','rgba(255,110,180,'];
    for (let i = 0; i < 4; i++) {
      nebula.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 300 + 150,
        color: colors[i % colors.length],
        opacity: Math.random() * 0.04 + 0.02,
      });
    }
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    nebula.forEach(n => {
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      grad.addColorStop(0, n.color + n.opacity + ')');
      grad.addColorStop(1, n.color + '0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });
    stars.forEach(s => {
      const twinkle = Math.sin(t * s.speed * 60 + s.twinkleOffset) * 0.3 + 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(200, 230, 255, ' + (s.opacity * twinkle) + ')';
      ctx.fill();
    });
    t += 0.016;
    requestAnimationFrame(draw);
  }

  resize(); createStars(); draw();
  window.addEventListener('resize', () => { resize(); createStars(); });
})();


/* ── CARGADOR DE COMPONENTES ─────────────────────────────── */
async function loadComponent(placeholderId, componentPath) {
  const placeholder = document.getElementById(placeholderId);
  if (!placeholder) return;
  try {
    const res = await fetch(WIKI_ROOT + componentPath);
    if (!res.ok) throw new Error('HTTP ' + res.status + ' al cargar ' + componentPath);
    const html = (await res.text()).replace(/\{\{ROOT\}\}/g, WIKI_ROOT);
    placeholder.insertAdjacentHTML('beforebegin', html);
    placeholder.remove();
  } catch (err) {
    console.error('[PlanetMC Wiki] Error cargando componente:', err);
  }
}


/* ── INICIALIZAR SIDEBAR TOGGLE (móvil) ──────────────────── */
function initSidebarToggle() {
  const toggle  = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => sidebar.classList.toggle('open'));

  document.addEventListener('click', e => {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) { sidebar.classList.remove('open'); }
  });
}

/* ── INICIALIZAR GRUPOS COLAPSABLES DEL SIDEBAR ──────────── */
function initSidebarCollapse() {
  document.querySelectorAll('.nav-group-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.nextElementSibling.classList.toggle('open', !expanded);
    });
  });
}

/* ── MARCAR PÁGINA ACTIVA ────────────────────────────────── */
function markActivePage() {
  const filename = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

  document.querySelectorAll('.nav-item[data-page]').forEach(link => {
    if (link.dataset.page === filename) {
      link.classList.add('active');
      const sublist = link.closest('.nav-sublist');
      if (sublist) {
        sublist.classList.add('open');
        const header = sublist.previousElementSibling;
        if (header) header.setAttribute('aria-expanded', 'true');
      }
    }
  });
}

/* ── BÚSQUEDA ────────────────────────────────────────────── */
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const searchIndex = [
    { title: 'Normas Principales',         url: WIKI_ROOT + 'pages/normas.html',                  tags: 'reglas normas convivencia' },
    { title: 'Cómo Ingresar',              url: WIKI_ROOT + 'pages/como-ingresar.html',           tags: 'ingresar conectar ip servidor' },
    { title: 'Java Edition',               url: WIKI_ROOT + 'pages/java.html',                    tags: 'java pc computadora' },
    { title: 'Bedrock Edition',            url: WIKI_ROOT + 'pages/bedrock.html',                 tags: 'bedrock móvil tablet xbox' },
    { title: 'Primeros Pasos en Survival', url: WIKI_ROOT + 'pages/survival-primeros-pasos.html', tags: 'survival inicio comenzar empezar' },
    { title: 'Cómo Jugar en el Servidor',  url: WIKI_ROOT + 'pages/survival-como-jugar.html',     tags: 'survival jugar comandos' },
    { title: 'Cómo Vender Ítems',          url: WIKI_ROOT + 'pages/survival-vender.html',         tags: 'survival vender dinero monedas economía shop' },
    { title: 'Cómo Usar Protecciones',     url: WIKI_ROOT + 'pages/survival-protecciones.html',   tags: 'survival protección terreno griefing' },
    { title: 'Cómo Usar la Subasta',       url: WIKI_ROOT + 'pages/survival-subasta.html',        tags: 'survival subasta auction' },
    { title: 'Warps y Player Warps',       url: WIKI_ROOT + 'pages/survival-warps.html',          tags: 'survival warp teletransporte' },
    { title: 'La Tienda',                  url: WIKI_ROOT + 'pages/survival-tienda.html',         tags: 'survival tienda shop comprar' },
    { title: 'Chat en Colores',            url: WIKI_ROOT + 'pages/chat-colores.html',            tags: 'chat color colores texto' },
    { title: 'Lista de Mods',              url: WIKI_ROOT + 'pages/lista-mods.html',              tags: 'mods modpack lista plugins' },
  ];

  let searchResults = null;

  searchInput.addEventListener('input', handleSearch);
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if (e.key === 'Enter') {
      const first = searchResults && searchResults.querySelector('a');
      if (first) window.location.href = first.href;
    }
  });

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
  });

  function handleSearch() {
    const q = searchInput.value.toLowerCase().trim();
    closeSearch();
    if (!q) return;

    const matches = searchIndex.filter(item =>
      item.title.toLowerCase().includes(q) || item.tags.includes(q)
    );
    if (!matches.length) return;

    searchResults = document.createElement('ul');
    searchResults.className = 'search-dropdown';
    searchResults.style.cssText = [
      'position:absolute', 'top:calc(100% + 8px)', 'left:0', 'right:0',
      'background:#0a1628', 'border:1px solid rgba(0,229,255,0.25)',
      'border-radius:10px', 'list-style:none', 'overflow:hidden',
      'z-index:200', 'box-shadow:0 16px 40px rgba(0,0,0,0.6)'
    ].join(';');

    matches.forEach(item => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      a.style.cssText = 'display:block;padding:10px 16px;color:#8ab4d4;font-size:14px;border-bottom:1px solid rgba(255,255,255,0.05);transition:all 0.15s;';
      a.addEventListener('mouseenter', () => { a.style.background = 'rgba(0,229,255,0.08)'; a.style.color = '#00e5ff'; });
      a.addEventListener('mouseleave', () => { a.style.background = ''; a.style.color = '#8ab4d4'; });
      li.appendChild(a);
      searchResults.appendChild(li);
    });

    const wrap = searchInput.closest('.search-wrap');
    wrap.style.position = 'relative';
    wrap.appendChild(searchResults);
  }

  function closeSearch() {
    if (searchResults) { searchResults.remove(); searchResults = null; }
  }

  document.addEventListener('click', e => {
    if (searchResults && !searchResults.contains(e.target) && e.target !== searchInput) {
      closeSearch();
    }
  });
}

/* ── COPIAR IP (global, llamada desde onclick en HTML) ─────── */
window.copyIP = function (id, el) {
  const text = el.textContent.trim();
  navigator.clipboard.writeText(text).then(() => {
    const orig = el.textContent;
    el.textContent = '✓ ¡Copiado!';
    el.style.color = 'var(--accent-green)';
    setTimeout(() => { el.textContent = orig; el.style.color = ''; }, 2000);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove();
  });
};

/* ── ARRANQUE PRINCIPAL ──────────────────────────────────── */
(async function init() {
  await Promise.all([
    loadComponent('wiki-header',  'components/header.html'),
    loadComponent('wiki-sidebar', 'components/sidebar.html'),
    loadComponent('wiki-footer',  'components/footer.html'),
  ]);

  // Inicializar todo una vez los componentes estén en el DOM
  initSidebarToggle();
  initSidebarCollapse();
  markActivePage();
  initSearch();
})();
