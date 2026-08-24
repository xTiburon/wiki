/* ═══════════════════════════════════════════
   search.js  —  Buscador global de la wiki
   PlanetMC Wiki
   ═══════════════════════════════════════════ */

function initSearch() {
  const input   = document.getElementById('sidebar-search-input');
  const panel   = document.getElementById('search-results-panel');
  const clearBtn= document.getElementById('sidebar-search-clear');
  if (!input || !panel) return;

  const ROOT = window.ROOT_PATH || './';

  /* ── Construir índice de búsqueda ─────── */
  const searchIndex = [];

  if (WIKI_DATA.standalonePages) {
    WIKI_DATA.standalonePages.forEach(page => {
      searchIndex.push({
        id:          page.id,
        name:        page.name,
        path:        ROOT + page.path,
        category:    'Wiki',
        catIcon:     page.icon || 'file-search',
        catColor:    'var(--cyan)',
        description: page.description || '',
        keywords:    (page.keywords || []).join(' ').toLowerCase(),
        content:     stripHTML(page.content || '').toLowerCase(),
      });
    });
  }

  WIKI_DATA.categories.forEach(cat => {
    cat.pages.forEach(page => {
      searchIndex.push({
        id:          page.id,
        name:        page.name,
        path:        ROOT + page.path,
        category:    cat.name,
        catIcon:     cat.icon,
        catColor:    cat.color,
        description: page.description || '',
        keywords:    (page.keywords || []).join(' ').toLowerCase(),
        content:     stripHTML(page.content || '').toLowerCase(),
      });
    });
  });

  function stripHTML(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  /* ── Función de búsqueda ──────────────── */
  function search(query) {
    if (!query || query.trim().length < 2) return [];
    const q = query.trim().toLowerCase();
    const results = [];

    searchIndex.forEach(page => {
      let score = 0;
      // Nombre exacto = máxima prioridad
      if (page.name.toLowerCase().includes(q)) score += 10;
      // Keywords
      if (page.keywords.includes(q)) score += 6;
      // Descripción
      if (page.description.toLowerCase().includes(q)) score += 4;
      // Contenido
      if (page.content.includes(q)) score += 2;

      if (score > 0) results.push({ ...page, score });
    });

    return results.sort((a, b) => b.score - a.score).slice(0, 8);
  }

  /* ── Renderizar resultados ────────────── */
  function renderResults(results, query) {
    if (!results.length) {
      panel.innerHTML = `
        <div class="search-empty">
          <div class="search-empty-icon">${Icon('file-search', '1.8rem')}</div>
          <div>Sin resultados para "<strong>${escapeHTML(query)}</strong>"</div>
        </div>
      `;
      panel.classList.add('visible');
      return;
    }

    const html = results.map(r => `
      <a href="${r.path}" class="search-result-item">
        <div class="search-result-cat" style="color:${r.catColor}">${Icon(r.catIcon)} ${r.category}</div>
        <div class="search-result-name">${highlight(r.name, query)}</div>
        <div class="search-result-desc">${escapeHTML(r.description)}</div>
      </a>
    `).join('');

    panel.innerHTML = html;
    panel.classList.add('visible');
  }

  function highlight(text, query) {
    const safe = escapeHTML(text);
    const q    = escapeHTML(query.trim());
    if (!q) return safe;
    const regex = new RegExp(`(${q})`, 'gi');
    return safe.replace(regex, '<mark>$1</mark>');
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Eventos ──────────────────────────── */
  let debounceTimer;

  input.addEventListener('input', () => {
    const val = input.value.trim();
    clearBtn.style.opacity = val ? '1' : '0';
    clearBtn.style.pointerEvents = val ? 'all' : 'none';

    clearTimeout(debounceTimer);
    if (!val || val.length < 2) {
      panel.classList.remove('visible');
      panel.innerHTML = '';
      return;
    }
    debounceTimer = setTimeout(() => {
      const results = search(val);
      renderResults(results, val);
    }, 180);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.opacity = '0';
    clearBtn.style.pointerEvents = 'none';
    panel.classList.remove('visible');
    panel.innerHTML = '';
    input.focus();
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', e => {
    if (!e.target.closest('.sidebar-search-wrap')) {
      panel.classList.remove('visible');
    }
  });

  // Navegar resultados con teclado
  input.addEventListener('keydown', e => {
    const items = panel.querySelectorAll('.search-result-item');
    const active = panel.querySelector('.search-result-item.focused');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!active) items[0]?.classList.add('focused');
      else {
        active.classList.remove('focused');
        const next = active.nextElementSibling;
        if (next) next.classList.add('focused');
        else items[0]?.classList.add('focused');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!active) items[items.length - 1]?.classList.add('focused');
      else {
        active.classList.remove('focused');
        const prev = active.previousElementSibling;
        if (prev) prev.classList.add('focused');
        else items[items.length - 1]?.classList.add('focused');
      }
    } else if (e.key === 'Enter') {
      const focused = panel.querySelector('.search-result-item.focused');
      if (focused) { e.preventDefault(); focused.click(); }
    } else if (e.key === 'Escape') {
      panel.classList.remove('visible');
      input.blur();
    }
  });
}

/* ═══════════════════════════════════════════
   initCmdK()  —  Buscador modal con Ctrl/⌘ + K
   Reusa WIKI_DATA; no depende del sidebar.
   ═══════════════════════════════════════════ */
function initCmdK() {
  if (document.getElementById('cmdk-backdrop')) return;
  const ROOT = window.ROOT_PATH || './';

  const index = [];
  const push = (page, catName, catIcon, catColor) => index.push({
    name: page.name, path: ROOT + page.path, category: catName,
    catIcon: catIcon || page.icon || 'file-search', catColor: catColor || 'var(--cyan)',
    description: page.description || '',
    keywords: (page.keywords || []).join(' ').toLowerCase(),
    body: String(page.content || '').replace(/<[^>]*>/g, ' ').toLowerCase(),
  });
  (WIKI_DATA.standalonePages || []).forEach(p => push(p, 'Wiki'));
  WIKI_DATA.categories.forEach(c => c.pages.forEach(p => push(p, c.name, c.icon, c.color)));

  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  const SUGGESTIONS = ['/sethome', 'proteger terreno', 'rangos', 'koth', 'no premium', 'crates', 'clanes'];

  const back = document.createElement('div');
  back.className = 'cmdk-backdrop';
  back.id = 'cmdk-backdrop';
  back.innerHTML =
    '<div class="cmdk" role="dialog" aria-modal="true" aria-label="Buscar en la wiki">' +
      '<div class="cmdk-row">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' +
        '<input type="text" id="cmdk-input" placeholder="Buscar comandos, rangos, normas…" autocomplete="off" spellcheck="false">' +
        '<span class="kbd">ESC</span>' +
      '</div>' +
      '<div class="cmdk-results" id="cmdk-results"></div>' +
      '<div class="cmdk-hint"><span>↑↓ navegar</span><span>↵ abrir</span><span>' + index.length + ' páginas</span></div>' +
    '</div>';
  document.body.appendChild(back);

  const input = back.querySelector('#cmdk-input');
  const out   = back.querySelector('#cmdk-results');

  function suggestions() {
    out.innerHTML = '<div class="cmdk-chips">' +
      SUGGESTIONS.map(s => '<button class="cmdk-chip" type="button" data-q="' + esc(s) + '">' + esc(s) + '</button>').join('') +
      '</div>';
    out.querySelectorAll('.cmdk-chip').forEach(b => b.addEventListener('click', () => {
      input.value = b.dataset.q; run();
      input.focus();
    }));
  }

  function run() {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { suggestions(); return; }
    const hits = index.map(p => {
      let s = 0;
      if (p.name.toLowerCase().includes(q)) s += 10;
      if (p.keywords.includes(q)) s += 6;
      if (p.description.toLowerCase().includes(q)) s += 4;
      if (p.body.includes(q)) s += 2;
      return { p, s };
    }).filter(h => h.s > 0).sort((a,b) => b.s - a.s).slice(0, 7);

    if (!hits.length) {
      out.innerHTML = '<div class="search-empty"><div class="search-empty-icon">' + Icon('file-search','1.8rem') + '</div><div>Sin resultados para "<strong>' + esc(input.value) + '</strong>"</div></div>';
      return;
    }
    out.innerHTML = hits.map(({p}) =>
      '<a href="' + p.path + '" class="search-result-item">' +
        '<div class="search-result-cat" style="color:' + p.catColor + '">' + Icon(p.catIcon) + ' ' + esc(p.category) + '</div>' +
        '<div class="search-result-name">' + esc(p.name).replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>') + '</div>' +
        '<div class="search-result-desc">' + esc(p.description) + '</div>' +
      '</a>').join('');
    out.querySelector('.search-result-item')?.classList.add('focused');
  }

  function open() { back.classList.add('open'); document.body.style.overflow = 'hidden'; input.value = ''; suggestions(); setTimeout(() => input.focus(), 20); }
  function close() { back.classList.remove('open'); document.body.style.overflow = ''; }
  window.openWikiSearch = open;

  input.addEventListener('input', run);
  back.addEventListener('mousedown', e => { if (e.target === back) close(); });

  input.addEventListener('keydown', e => {
    const items = [...out.querySelectorAll('.search-result-item')];
    const i = items.findIndex(el => el.classList.contains('focused'));
    if (e.key === 'ArrowDown' && items.length) {
      e.preventDefault(); items[i]?.classList.remove('focused');
      items[(i + 1 + items.length) % items.length].classList.add('focused');
    } else if (e.key === 'ArrowUp' && items.length) {
      e.preventDefault(); items[i]?.classList.remove('focused');
      items[(i - 1 + items.length) % items.length].classList.add('focused');
    } else if (e.key === 'Enter') {
      const f = items[i < 0 ? 0 : i]; if (f) { e.preventDefault(); f.click(); }
    } else if (e.key === 'Escape') { close(); }
  });

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); back.classList.contains('open') ? close() : open(); }
    else if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName) && !back.classList.contains('open')) { e.preventDefault(); open(); }
    else if (e.key === 'Escape' && back.classList.contains('open')) close();
  });

  document.getElementById('homeSearchBtn')?.addEventListener('click', open);
}
