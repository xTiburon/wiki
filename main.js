/* ═══════════════════════════════════════════
   main.js  —  Inicialización y utilidades
   PlanetMC Wiki
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Activar <details> FAQ con animación ─ */
  document.querySelectorAll('details.faq-item').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) d.querySelector('p')?.classList.add('faq-open');
    });
  });

  /* ── Grilla de categorías (solo en Bienvenida) ─ */
  const catGrid = document.getElementById('wikiCategoriesGrid');
  if (catGrid && typeof WIKI_DATA !== 'undefined') {
    const ROOT = window.ROOT_PATH || './';
    catGrid.innerHTML = WIKI_DATA.categories.map((cat, i) => `
      <a href="${ROOT + cat.pages[0].path}" class="wiki-cat-card" style="--cat-color:${cat.color}">
        <div class="wiki-cat-step">${cat.group || ''}</div>
        <div class="wiki-cat-header">
          <div class="wiki-cat-icon">${Icon(cat.icon, '1.25em')}</div>
          <div>
            <div class="wiki-cat-title">${cat.name}</div>
            <div class="wiki-cat-count">${cat.subcats ? cat.subcats.length + ' secciones · ' : ''}${cat.pages.length} página${cat.pages.length === 1 ? '' : 's'}</div>
          </div>
        </div>
        <div class="wiki-cat-pages">
          ${(cat.subcats || cat.pages).map(x => `<span class="wiki-cat-page-link">${x.name}</span>`).join('')}
        </div>
      </a>
    `).join('');
  }

  /* ── Copiar IPs con click ───────────────── */
  document.querySelectorAll('.ip-copy').forEach(el => {
    el.addEventListener('click', () => {
      const ip = el.dataset.ip;
      if (!ip) return;
      navigator.clipboard.writeText(ip).then(() => {
        if (typeof showWikiToast === 'function') showWikiToast(`${Icon('check')} "${ip}" copiado`);
      }).catch(() => {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = ip;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (typeof showWikiToast === 'function') showWikiToast(`${Icon('check')} "${ip}" copiado`);
      });
    });
  });

  /* ── Riel de contenidos + progreso de lectura ── */
  const content = document.getElementById('wiki-content-wrap');
  if (content) {
    const isHome = !!content.querySelector('.home-hero');
    const headings = [...content.querySelectorAll('h2[id], h3[id]')];

    if (!isHome && headings.length >= 3) {
      const rail = document.createElement('aside');
      rail.className = 'wiki-toc-rail';
      rail.innerHTML =
        '<div><div class="rail-title">En esta página</div><ul class="rail-list">' +
        headings.map(h =>
          '<li class="' + (h.tagName === 'H3' ? 'rail-sub' : '') + '">' +
          '<a href="#' + h.id + '">' + h.textContent.trim() + '</a></li>'
        ).join('') +
        '</ul></div>' +
        '<div class="rail-connect">' +
          '<div class="rail-title">Conectar</div>' +
          '<div class="ip-card-ip">planetmc.net</div>' +
          '<div class="rail-connect-sub">bedrock :19132</div>' +
          '<button class="rail-copy-btn ip-copy" data-ip="planetmc.net" type="button">COPIAR IP</button>' +
        '</div>';
      document.body.appendChild(rail);

      const links = [...rail.querySelectorAll('.rail-list a')];
      links.forEach(a => a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }));

      const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        });
      }, { rootMargin: '-' + (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) + 20) + 'px 0px -70% 0px' });
      headings.forEach(h => spy.observe(h));
    }

  }

  /* ── Barra de IP fija en móvil ─────────── */
  if (!document.querySelector('.mobile-ip-bar')) {
    const ipBar = document.createElement('div');
    ipBar.className = 'mobile-ip-bar';
    ipBar.innerHTML =
      '<span class="ip-chip ip-copy" data-ip="planetmc.net">Java: planetmc.net</span>' +
      '<span class="ip-chip ip-copy" data-ip="planetmc.net">Bedrock :19132</span>';
    document.body.appendChild(ipBar);
  }

  /* ── Copiar IP en elementos agregados después ── */
  document.querySelectorAll('.ip-copy').forEach(el => {
    if (el.dataset.copyBound) return;
    el.dataset.copyBound = '1';
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      const ip = el.dataset.ip;
      if (!ip) return;
      navigator.clipboard.writeText(ip).then(() => {
        if (typeof showWikiToast === 'function') showWikiToast(`${Icon('check')} "${ip}" copiado`);
      }).catch(() => {});
    });
  });

  /* ── Buscador ⌘K ───────────────────────── */
  if (typeof initCmdK === 'function') initCmdK();

  /* ── Back-to-top button ─────────────────── */
  const backTop = document.createElement('button');
  backTop.id = 'back-to-top';
  backTop.innerHTML = '↑';
  backTop.title = 'Volver arriba';
  document.body.appendChild(backTop);

  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Highlight de código inline ─────────── */
  document.querySelectorAll('code').forEach(code => {
    if (!code.dataset.highlighted) {
      code.dataset.highlighted = '1';
    }
  });

});