# PlanetMC Wiki — Guía de Estructura y Mantenimiento

## Estructura de archivos

```
pag wiki planetmc/
│
├── components/
│   └── layout.js        ← Inyecta navbar, sidebar, footer, breadcrumb y fondo
│
├── data/
│   └── wiki-data.js      ← ÚNICA fuente de contenido. Todo el texto vive acá.
│
├── assets/
│   ├── css/styles.css    ← Mismo lenguaje visual que planetmc.net
│   ├── js/main.js        ← TOC automático, progress bar, copiar IP, etc.
│   ├── js/search.js      ← Buscador de la barra lateral
│   ├── js/background.js  ← Fondo animado (estrellas + polvo cósmico)
│   └── img/logo.png
│
├── pages/                ← Un .html "cascarón" por página, TODOS al mismo nivel
│   ├── normas.html
│   ├── economia.html
│   └── ...
│
├── index.html            ← Página de Bienvenida
└── _template.html         ← Copiar para crear una página nueva
```

**Importante:** el HTML dentro de `pages/*.html` es siempre el mismo cascarón vacío
(ver `_template.html`). El contenido real de cada página vive como HTML dentro de
`data/wiki-data.js`, en el campo `content` de cada página. `components/layout.js` lo
inyecta en tiempo de ejecución.

---

## Cómo agregar una página nueva

1. **Copiá** `_template.html` a `pages/tu-pagina.html` (todas las páginas van
   directo en `pages/`, sin subcarpetas — así `ROOT_PATH` siempre es `'../'`).
2. **Agregá tu página** en `data/wiki-data.js`, dentro de la categoría que
   corresponda (o en `standalonePages` si no pertenece a ninguna):

```js
{
  id:          'mi-pagina',
  name:        'Mi Nueva Guía',
  icon:        '🆕',
  path:        'pages/mi-pagina.html',
  description: 'Descripción breve para el buscador y el SEO.',
  keywords:    ['palabras', 'clave', 'de', 'busqueda'],
  content: `
    <div class="page-hero">
      <div class="page-hero-icon">🆕</div>
      <h1>Mi Nueva Guía</h1>
      <p class="page-hero-desc">Qué aprenderá el jugador acá.</p>
    </div>
    <p>Introducción breve...</p>
    <h2 id="seccion">📋 Una sección</h2>
    <ul class="wiki-list"><li>Un punto.</li></ul>
  `
}
```

Eso es todo: el breadcrumb, el índice de contenidos (TOC), la barra lateral y el
buscador se actualizan solos a partir de este objeto. **No hace falta tocar
`layout.js` ni `search.js`.**

---

## Cómo agregar una categoría nueva

En `data/wiki-data.js`, agregá un bloque nuevo dentro del array `categories`:

```js
{
  id: 'mi-categoria', name: 'Mi Categoría', icon: '🎯', color: '#5ce1ff', open: false,
  pages: [ /* páginas de esta categoría, mismo formato de arriba */ ]
}
```

`color` es el color de acento de la tarjeta de esa categoría en la página de
Bienvenida (usá alguno de los tokens de `styles.css`: `#5ce1ff`, `#8b6bf2`,
`#3ddc84`, `#ffd166`, `#e8823a`, `#ff5c6a`).

---

## Componentes de contenido disponibles

Usalos dentro del campo `content` de cualquier página:

| Clase | Uso |
|---|---|
| `.page-hero` + `.page-hero-icon` + `.page-hero-desc` | Cabecera de la página |
| `.alert.alert-info` / `.alert-warn` / `.alert-danger` | Cajas de aviso (info, advertencia, peligro) |
| `.alert.alert-todo` | Marca contenido pendiente de confirmar (dato de plugin sin verificar) |
| `.info-card` > `.info-card-row` > `.info-label` + `.info-val` | Datos clave → valor |
| `.ip-chip.ip-copy` con `data-ip="..."` | Texto copiable al clic |
| `.wiki-list` | Lista con viñetas |
| `.wiki-steps` | Lista numerada de pasos |
| `.cmd-grid` > `.cmd-item` (`<code>` + `<span>`) | Grid de comandos |
| `.table-wrap` > `table.wiki-table` | Tabla estilizada |
| `.faq-list` > `details.faq-item` (`summary` + `p`) | Acordeón de preguntas frecuentes |
| `.two-col` | Dos cajas lado a lado (responsive) |
| `.feature-grid` > `.feature-card` (icon/title/desc) | Tarjetas destacadas |
| `.item-grid` > `.item-chip` | Chips de ítems |
| `.rank-grid` > `.rank-item.rank-default/member/vip/mvp/elite` | Chips de rango |
| `.wiki-btn.wiki-btn-primary` / `.discord-btn` | Botones grandes |

El índice de contenidos (TOC) se genera automáticamente a partir de los `<h2 id="...">`
y `<h3 id="...">` de la página (a partir de 3 encabezados). El `id` de cada `<h2>`/`<h3>`
es obligatorio para que el enlace del TOC funcione.

---

## Personalizar el diseño

El diseño reutiliza exactamente los mismos tokens que `planetmc.net` (colores,
fuentes, sombras, fondo animado). Para cambiarlos, editá las variables en
`assets/css/styles.css`:

```css
:root {
  --cyan:    #5ce1ff;   /* Acento principal */
  --violet:  #8b6bf2;   /* Acento secundario */
  --gold:    #ffd166;   /* Acento dorado */
  --bedrock: #3ddc84;   /* Verde Bedrock / éxito */
  --java:    #e8823a;   /* Naranja Java */
}
```

Si cambiás algo acá, cambialo también en `pag web planetmc/css/base.css` para que
ambos sitios sigan siendo visualmente idénticos.

### Cambiar el logo
Reemplazá `logo.png` en la raíz del proyecto (se usa en el footer).

### Cambiar IP, Discord, tienda, etc.
Todo eso vive en `data/wiki-data.js`, en el objeto `site` al principio del archivo.
No hace falta buscar y reemplazar en varios HTML.

---

## Despliegue en GitHub Pages

1. Subí toda la carpeta a tu repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En "Source" seleccioná la rama principal y la carpeta `/root`.
4. Activá Pages y GitHub genera tu URL.
5. Para usar el dominio `wiki.planetmc.net`, agregá un archivo `CNAME` en la
   raíz con `wiki.planetmc.net` y configurá un registro CNAME en tu DNS
   apuntando a `TU-USUARIO.github.io`.
