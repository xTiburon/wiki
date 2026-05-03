/* ═══════════════════════════════════════════════
   PLANETMC — main.js v2.0
   ═══════════════════════════════════════════════ */

/* ── Starfield ── */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [], nebulae = [], W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    nebulae = [];
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.6 + 0.2,
        baseOpacity: Math.random() * 0.7 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.018 + 0.005,
        color: Math.random() > 0.85 ? 'purple' : Math.random() > 0.7 ? 'blue' : 'white'
      });
    }
    for (let i = 0; i < 3; i++) {
      nebulae.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 120 + Math.random() * 200,
        color: ['rgba(124,58,237,0.04)', 'rgba(0,245,255,0.03)', 'rgba(168,85,247,0.04)'][i]
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    nebulae.forEach(n => {
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      g.addColorStop(0, n.color);
      g.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });
    stars.forEach(s => {
      s.phase += s.speed;
      const op = s.baseOpacity * (0.5 + 0.5 * Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      if      (s.color === 'purple') ctx.fillStyle = `rgba(167,139,250,${op})`;
      else if (s.color === 'blue')   ctx.fillStyle = `rgba(125,211,252,${op})`;
      else                           ctx.fillStyle = `rgba(255,255,255,${op})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  initStars();
  draw();
  window.addEventListener('resize', () => { resize(); initStars(); });
})();

/* ── Mobile Sidebar Toggle ── */
(function () {
  const btn     = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!btn || !sidebar) return;

  function openSidebar() {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    btn.textContent = '✕';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    btn.textContent = '☰';
  }

  btn.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  overlay?.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });
})();

/* ── Sidebar Accordion ── */
(function () {
  document.querySelectorAll('.nav-group-header').forEach(btn => {
    const sublist = btn.nextElementSibling;
    if (!sublist) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!isOpen));
      sublist.classList.toggle('open', !isOpen);
    });

    // Auto-open si la página actual está dentro
    if (sublist.querySelector('.active')) {
      btn.setAttribute('aria-expanded', 'true');
      sublist.classList.add('open');
      btn.classList.add('active-group');
    }
  });
})();

/* ── Active nav highlight ── */
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page], .main-nav a').forEach(link => {
    const dataPg = link.getAttribute('data-page');
    const href   = (link.getAttribute('href') || '').split('/').pop().split('#')[0];
    if (dataPg && path.includes(dataPg)) {
      link.classList.add('active');
    } else if (!dataPg && href && href === path) {
      link.classList.add('active');
    }
  });
})();

/* ── Copy IP ── */
(function () {
  document.querySelectorAll('.ip-code[data-copy]').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Clic para copiar';
    el.addEventListener('click', () => {
      navigator.clipboard.writeText(el.dataset.copy || el.textContent.trim()).then(() => {
        const original = el.textContent;
        el.textContent = '✔ Copiado!';
        el.style.color = 'var(--neon-green)';
        setTimeout(() => { el.textContent = original; el.style.color = ''; }, 1800);
      });
    });
  });
})();

/* ── Search (live filter) ── */
(function () {
  const input    = document.querySelector('.search-input');
  const dropdown = document.querySelector('.search-dropdown');
  if (!input || !dropdown) return;

  // Detectar si estamos en pages/ o en raíz
  const inPages  = location.pathname.includes('/pages/');
  const ROOT     = inPages ? '../' : '';

  const pages = [
    { label: 'Normas del Servidor',        url: ROOT + 'pages/normas.html' },
    { label: 'Cómo Ingresar al Servidor',  url: ROOT + 'pages/como-ingresar.html' },
    { label: 'Survival — Primeros Pasos',  url: ROOT + 'pages/survival-primeros-pasos.html' },
    { label: 'Survival — Cómo Jugar',      url: ROOT + 'pages/survival-como-jugar.html' },
    { label: 'Survival — Vender Ítems',    url: ROOT + 'pages/survival-vender.html' },
    { label: 'Survival — Protecciones',    url: ROOT + 'pages/survival-protecciones.html' },
    { label: 'Survival — Subasta',         url: ROOT + 'pages/survival-subasta.html' },
    { label: 'Survival — Warps',           url: ROOT + 'pages/survival-warps.html' },
    { label: 'Survival — La Tienda',       url: ROOT + 'pages/survival-tienda.html' },
    { label: 'Votar por el Servidor',      url: ROOT + 'votar.html' },
    { label: 'Redes Sociales',             url: ROOT + 'redes.html' },
    { label: 'Jerarquía Staff',            url: ROOT + 'jerarquia.html' },
  ];

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.innerHTML = ''; dropdown.hidden = true; return; }
    const results = pages.filter(p => p.label.toLowerCase().includes(q));
    if (!results.length) { dropdown.innerHTML = ''; dropdown.hidden = true; return; }

    dropdown.hidden = false;
    dropdown.innerHTML = results.slice(0, 6).map(p =>
      `<li><a href="${p.url}">${p.label}</a></li>`
    ).join('');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) dropdown.hidden = true;
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dropdown.hidden = true; input.blur(); }
  });
})();

/* ── Keyboard shortcut Ctrl+K / Cmd+K ── */
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.querySelector('.search-input')?.focus();
  }
});
