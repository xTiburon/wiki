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
          <div class="search-empty-icon">🔭</div>
          <div>Sin resultados para "<strong>${escapeHTML(query)}</strong>"</div>
        </div>
      `;
      panel.classList.add('visible');
      return;
    }

    const html = results.map(r => `
      <a href="${r.path}" class="search-result-item">
        <div class="search-result-cat" style="color:${r.catColor}">${r.catIcon} ${r.category}</div>
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