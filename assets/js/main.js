/* ═══════════════════════════════════════════
   main.js  —  Inicialización y utilidades
   PlanetMC Wiki
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Animar entrada del contenido ──────── */
  const wrap = document.getElementById('wiki-content-wrap');
  if (wrap) {
    wrap.style.opacity = '0';
    wrap.style.transform = 'translateY(12px)';
    requestAnimationFrame(() => {
      wrap.style.transition = 'opacity .4s ease, transform .4s ease';
      wrap.style.opacity = '1';
      wrap.style.transform = 'translateY(0)';
    });
  }

  /* ── Activar <details> FAQ con animación ─ */
  document.querySelectorAll('details.faq-item').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) d.querySelector('p')?.classList.add('faq-open');
    });
  });

  /* ── Copiar IPs con click ───────────────── */
  document.querySelectorAll('.ip-copy').forEach(el => {
    el.addEventListener('click', () => {
      const ip = el.dataset.ip;
      if (!ip) return;
      navigator.clipboard.writeText(ip).then(() => {
        if (typeof showWikiToast === 'function') showWikiToast(`✅ "${ip}" copiado`);
      }).catch(() => {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = ip;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        if (typeof showWikiToast === 'function') showWikiToast(`✅ "${ip}" copiado`);
      });
    });
  });

  /* ── Generador de TOC (tabla de contenidos) */
  const content = document.getElementById('wiki-content-wrap');
  if (content) {
    const headings = content.querySelectorAll('h2[id], h3[id]');
    if (headings.length >= 3) {
      const toc = document.createElement('div');
      toc.className = 'wiki-toc';
      toc.innerHTML = '<div class="toc-title">📋 En esta página</div>';
      const list = document.createElement('ul');
      list.className = 'toc-list';
      headings.forEach(h => {
        const li = document.createElement('li');
        li.className = h.tagName === 'H3' ? 'toc-item toc-sub' : 'toc-item';
        li.innerHTML = `<a href="#${h.id}">${h.textContent}</a>`;
        list.appendChild(li);
      });
      toc.appendChild(list);
      // Insertar después del .page-hero o al inicio del contenido
      const hero = content.querySelector('.page-hero');
      const alertAfterHero = hero?.nextElementSibling;
      const insertPoint = alertAfterHero?.classList?.contains('alert') ? alertAfterHero : hero;
      if (insertPoint && insertPoint.nextSibling) {
        content.insertBefore(toc, insertPoint.nextSibling);
      }
    }

    /* ── Progress bar de lectura ──────────── */
    const bar = document.createElement('div');
    bar.id = 'reading-progress';
    bar.innerHTML = '<div id="reading-progress-fill"></div>';
    document.body.prepend(bar);

    const fill = document.getElementById('reading-progress-fill');
    window.addEventListener('scroll', () => {
      const docH   = document.documentElement.scrollHeight - window.innerHeight;
      const pct    = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      if (fill) fill.style.width = pct + '%';
    }, { passive: true });
  }

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