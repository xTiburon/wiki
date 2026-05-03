/* ═══════════════════════════════════════════════
   PLANETMC — main.js
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
        color: Math.random() > 0.85 ? '#a78bfa' : Math.random() > 0.7 ? '#7dd3fc' : '#fff'
      });
    }
    // nebula blobs
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
    // nebulae
    nebulae.forEach(n => {
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      g.addColorStop(0, n.color);
      g.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    });
    // stars
    stars.forEach(s => {
      s.phase += s.speed;
      const op = s.baseOpacity * (0.5 + 0.5 * Math.sin(s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color.replace(')', `,${op})`).replace('rgb', 'rgba').replace('rgba(fff', 'rgba(255,255,255');
      if (s.color === '#fff') {
        ctx.fillStyle = `rgba(255,255,255,${op})`;
      } else if (s.color === '#a78bfa') {
        ctx.fillStyle = `rgba(167,139,250,${op})`;
      } else {
        ctx.fillStyle = `rgba(125,211,252,${op})`;
      }
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
  const btn     = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  if (!btn) return;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
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
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !open);
      sublist.classList.toggle('open', !open);
    });
    // auto-open if current page is inside
    if (sublist && sublist.querySelector('.active')) {
      btn.setAttribute('aria-expanded', 'true');
      sublist.classList.add('open');
      btn.classList.add('active-group');
    }
  });
})();

/* ── Copy IP ── */
(function () {
  document.querySelectorAll('.ip-code[data-copy]').forEach(el => {
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

/* ── Search (basic live filter) ── */
(function () {
  const input    = document.querySelector('.search-input');
  const dropdown = document.querySelector('.search-dropdown');
  if (!input || !dropdown) return;

  const pages = [
    { label: 'Normas del Servidor',      url: 'pages/normas.html' },
    { label: 'Cómo Ingresar',            url: 'pages/como-ingresar.html' },
    { label: 'Java Edition',             url: 'pages/java.html' },
    { label: 'Bedrock Edition',          url: 'pages/bedrock.html' },
    { label: 'Survival — Primeros Pasos',url: 'pages/survival-primeros-pasos.html' },
    { label: 'Survival — Cómo Jugar',    url: 'pages/survival-como-jugar.html' },
    { label: 'Survival — Vender',        url: 'pages/survival-vender.html' },
    { label: 'Survival — Protecciones',  url: 'pages/survival-protecciones.html' },
    { label: 'Survival — Subasta',       url: 'pages/survival-subasta.html' },
    { label: 'Survival — Warps',         url: 'pages/survival-warps.html' },
    { label: 'Survival — Tienda',        url: 'pages/survival-tienda.html' },
    { label: 'Chat — Colores',           url: 'pages/chat-colores.html' },
    { label: 'Lista de Mods',            url: 'pages/lista-mods.html' },
  ];

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { dropdown.innerHTML = ''; dropdown.hidden = true; return; }
    const results = pages.filter(p => p.label.toLowerCase().includes(q));
    if (!results.length) { dropdown.innerHTML = ''; dropdown.hidden = true; return; }
    dropdown.hidden = false;
    dropdown.innerHTML = results.slice(0, 6).map(p =>
      `<li><a href="${p.url}" style="display:block;padding:10px 16px;font-size:13px;color:var(--text-secondary);transition:all .15s;letter-spacing:.02em" 
              onmouseover="this.style.color='var(--neon-cyan)';this.style.background='rgba(0,245,255,.05)'"
              onmouseout="this.style.color='var(--text-secondary)';this.style.background=''">${p.label}</a></li>`
    ).join('');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) { dropdown.hidden = true; }
  });

  input.addEventListener('keydown', e => { if (e.key === 'Escape') { dropdown.hidden = true; input.blur(); } });
})();

/* ── Keyboard shortcut Ctrl+K / Cmd+K ── */
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.querySelector('.search-input')?.focus();
  }
});

/* ── Active nav highlight ── */
(function () {
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item, .main-nav a').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href && href === path) link.classList.add('active');
  });
})();
