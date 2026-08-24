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


---

## Novedades v2 (rediseño de agosto 2026)

**Home nueva** — el contenido de `bienvenida` en `wiki-data.js` ahora usa:
`.home-hero` (+ `.home-hero-copy`, `.home-eyebrow`, `.home-lede`, `.home-hero-planet`),
`.home-search` (botón que abre el buscador ⌘K), `.ip-cards` > `.ip-card.java/.bedrock`
y `.step-strip` > `.step-card` (`.step-num` + `.step-body`).

**Buscador ⌘K** — `initCmdK()` en `assets/js/search.js`. Se abre con
`Ctrl/⌘ + K`, con `/`, o con cualquier elemento que llame a `window.openWikiSearch()`.
Usa el mismo índice de `WIKI_DATA`, así que las páginas nuevas entran solas.
Las sugerencias rápidas se editan en el array `SUGGESTIONS`.

**Riel de contenidos** — el TOC dejó de ser una caja dentro del texto: ahora es un
riel fijo a la derecha (`.wiki-toc-rail`) con resaltado del apartado que estás
leyendo y un bloque de "copiar IP". Aparece desde 1380px de ancho y con 3+
encabezados; se omite en la home.

**Barra de IP en móvil** — `.mobile-ip-bar`, fija abajo en pantallas ≤900px,
para copiar la IP desde cualquier página.

**Cabecera de página** — `.page-hero` pasó a estar alineada a la izquierda y
compacta, y los `<h2>` llevan una marca de acento. No hay que cambiar nada en el
contenido existente: el mismo markup se ve distinto.


## Novedades v3 (íconos y estructura)

**Íconos** — se redibujaron los glifos que se leían mal (`scroll`, `coins`, `gem`,
`hammer`, `handshake`, `wheat`, `footprints`, `pickaxe`, `party-popper`,
`keyboard`, `trophy`, `rocket`) y se agregaron `book`, `shield-check`,
`sparkles`, `copy`, `clock`. `Icon()` ahora dibuja a 1.15em con trazo 1.85:
más grande y más limpio en tamaños chicos. No hay que cambiar ninguna llamada.

**Menú lateral = ruta numerada** — cada categoría muestra su número de paso
(`01`…`06`) y su ícono en una caja con el color de la categoría; las páginas de
adentro quedaron como lista de texto, sin ícono, para que el ojo siga la jerarquía
categoría → página. El color activo de una página lo hereda de su categoría.

**Home = ruta explícita** — las tarjetas de categoría son enlaces y llevan
"Paso N de 6", así un jugador nuevo sabe por dónde seguir sin leer nada más.

**Cosas que se quitaron por innecesarias:**
- El bloque "¿Por qué jugar en PlanetMC?" de la home — era marketing duplicado de
  planetmc.net; la wiki tiene que responder preguntas, no vender el servidor.
- La barra de progreso de lectura — el riel de contenidos ya dice dónde estás.
- Los íconos repetidos en cada página del menú lateral y en las tarjetas.
- El polvo cósmico animado en pantallas de menos de 900px (solo costaba batería).


## Novedades v4 (estructura de contenido y lenguaje)

**Kits ya no es una página** — su contenido vive ahora como sección `#kits` dentro de
`Tienda Web y Rangos` (los kits dependen del rango). Se borró `pages/kits.html` y
los enlaces viejos apuntan a `tienda-web.html#kits`.

**Un solo comando de kits: `/kits`** — abre el menú, que muestra el contenido de cada
kit y cuáles puede reclamar el jugador. Se quitaron `/kit inicio` y `/kit <nombre>`.

**Rangos donador**: VOID · NOVA · LUNAR · METEOR · ECLIPSE. ECLIPSE reclama los kits
de todos los rangos anteriores y tiene `/fly`.

**Página nueva: Votar por el Servidor** (`pages/votar.html`, categoría Economía y
Comercio, antes de Crates) con botón directo a
`https://www.40servidoresmc.es/planetmc/votar`, el comando `/votar` y los pasos.
También se agregó "Votar" al footer y un aviso en `Eventos y Votaciones` que enlaza ahí.

**Lenguaje neutro** — se reemplazó todo el voseo por tuteo neutro en `wiki-data.js`,
`layout.js`, `main.js` y `search.js`: "Seguí con" → "Sigue con", "podés" → "puedes",
"tenés" → "tienes", "Leé" → "Lee", "acá" → "aquí", etc. (más de 200 reemplazos).
Si agregas contenido nuevo, escribí en esa misma forma: **tú**, sin "-á/-és/-ís".


## Novedades v5 (estructura de navegación en 3 niveles)

El menú lateral ahora tiene **grupo → categoría → (subcategoría) → página**, como una
wiki de servidor grande:

```
Bienvenida
INFORMACIÓN
  Normas                     ← categoría de una sola página: enlace directo
EMPEZAR
  Cómo Ingresar ›            Java · Bedrock
MODOS DE JUEGO
  Survival ⌄
    Primeros Pasos ›
    Territorio y Recursos ›  Recursos · Protecciones · Bóvedas
    Economía y Comercio ›    Economía · Tiendas · Trabajos · Misiones
    Recompensas ›            Votar · Crates
    Comunidad y PvP ›        Clanes · Chat · PvP · KOTH · Eventos · Rangos Sociales
    Rangos y Tienda ›        Tienda Web y Rangos
AYUDA
  Ayuda ›                    Comandos · FAQ · Soporte
```

**Cómo se define** en `data/wiki-data.js`: cada categoría admite

- `group`: título de sección del menú (se dibuja una vez por grupo, en orden);
- `pages`: páginas directas — si hay **una sola**, se dibuja como enlace, sin flecha;
- `subcats`: `[{ id, name, icon, pages: [...] }]` para partir una categoría grande.

Al final del archivo, un pequeño bloque aplana `subcats` en `cat.pages`, así el
buscador, el footer, el breadcrumb y las tarjetas de la home siguen funcionando sin
cambios. **Para agregar un modo de juego nuevo** (por ejemplo *Skyblock*), copia el
bloque de `survival` con su propio `id`, `color` y sus `subcats`.

También: la entrada del contenido pasó a ser una animación CSS (`wiki-content-in`),
ya no depende de JS.
