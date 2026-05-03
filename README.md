# PlanetMC Wiki — Guía de Estructura y Mantenimiento

## Estructura de archivos

```
wiki-planetmc/
│
├── index.html                    ← Página principal (inicio)
│
├── assets/
│   ├── css/
│   │   └── style.css             ← Estilos generales (EDITAR AQUÍ los colores/fuentes)
│   ├── js/
│   │   └── main.js               ← JavaScript (starfield, búsqueda, sidebar)
│   └── img/
│       └── logo.png              ← 🖼️ PON TU LOGO AQUÍ (36x36px recomendado)
│
└── pages/
    ├── normas.html               ← Normas del servidor
    ├── como-ingresar.html        ← Cómo conectarse al servidor
    ├── java.html                 ← Guía para Java Edition
    ├── bedrock.html              ← Guía para Bedrock Edition
    ├── survival-primeros-pasos.html
    ├── survival-como-jugar.html
    ├── survival-vender.html
    ├── survival-protecciones.html
    ├── survival-subasta.html
    ├── survival-warps.html
    ├── survival-tienda.html
    ├── chat-colores.html
    └── lista-mods.html
```

---

## Cómo agregar una nueva página

1. **Copia** el archivo `pages/survival-primeros-pasos.html` (es el template base).
2. **Renómbrala** con el nombre de tu nueva sección, por ejemplo: `pages/mi-nueva-guia.html`.
3. **Cambia** el `<title>` en el `<head>`.
4. **Cambia** el breadcrumb y el `<h1>` de la página.
5. **Escribe** el contenido dentro de `<div class="page-content">`.
6. **Agrega el link** en el sidebar de TODAS las páginas:

En la sección correspondiente del sidebar, agrega:
```html
<li><a href="mi-nueva-guia.html" class="nav-item" data-page="mi-nueva-guia">
  <span class="nav-icon">🆕</span> Mi Nueva Guía
</a></li>
```

7. **Agrega al índice de búsqueda** en `assets/js/main.js`:
```javascript
{ title: 'Mi Nueva Guía', url: 'pages/mi-nueva-guia.html', tags: 'palabras clave de búsqueda' },
```

---

## Cómo agregar una nueva CATEGORÍA en el sidebar

En cada archivo HTML, dentro del bloque del sidebar, agrega un nuevo grupo:
```html
<div class="nav-group">
  <button class="nav-group-header" aria-expanded="false">
    <span class="nav-icon">🎯</span> Nueva Categoría <span class="chevron">▶</span>
  </button>
  <ul class="nav-sublist">
    <li><a href="pagina1.html" class="nav-item" data-page="pagina1">
      <span class="nav-icon">📄</span> Página 1
    </a></li>
  </ul>
</div>
```

---

## Personalizar el diseño

### Cambiar colores (en `assets/css/style.css`)
```css
:root {
  --accent-cyan:   #00e5ff;   /* Color principal (cyan) */
  --accent-green:  #00ff88;   /* Color secundario (verde) */
  --accent-purple: #a855f7;   /* Acento púrpura */
  --accent-gold:   #ffd700;   /* Acento dorado */
}
```

### Cambiar el logo
Reemplaza `assets/img/logo.png` con tu imagen.
Si quieres cambiar el tamaño, edita en `style.css`:
```css
.logo-img {
  width: 36px;   /* Ancho del logo */
  height: 36px;  /* Alto del logo */
}
```

### Cambiar la IP del servidor
En `index.html`, busca:
```html
<code class="ip-code" id="javaIP" ...>play.planetmc.net</code>
<code class="ip-code" id="bedrockIP" ...>bedrock.planetmc.net</code>
```
Y reemplaza las IPs con las de tu servidor.

### Cambiar redes sociales
En todos los archivos HTML, busca la sección `social-nav` y cambia los enlaces:
```html
<a href="https://discord.gg/TU_LINK_AQUI" ...>
<a href="https://tiktok.com/@TU_USUARIO" ...>
<a href="https://youtube.com/@TU_CANAL" ...>
```

### Cambiar el banner del header
En todos los archivos HTML, busca:
```html
<a href="#" class="header-banner">🌟 ¡Nuevo evento disponible!</a>
```
Cambia el texto o el href por un link a tu evento/tienda/discord.

---

## Elementos de formato disponibles en las páginas

```html
<!-- Caja de información -->
<div class="info-box">Texto informativo aquí.</div>

<!-- Caja de consejo/tip -->
<div class="tip-box">Tip o consejo positivo.</div>

<!-- Caja de advertencia -->
<div class="warn-box">Advertencia importante.</div>

<!-- Código de comando -->
<code>/comando aquí</code>

<!-- Bloque de código grande -->
<pre><code>/comando1
/comando2</code></pre>

<!-- Lista con viñetas -->
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>
```

---

## Despliegue en GitHub Pages

1. Sube toda la carpeta `wiki-planetmc/` a tu repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En "Source" selecciona la rama principal (main o master) y carpeta `/root` o `/docs`.
4. Activa Pages y GitHub generará tu URL.
5. Para usar el dominio `wiki.planetmc.net`, agrega un archivo `CNAME` en la raíz con:
   ```
   wiki.planetmc.net
   ```
   Y configura un registro CNAME en tu DNS apuntando a `TU-USUARIO.github.io`.

---

## Archivos pendientes de crear

Los siguientes archivos están enlazados en el sidebar pero necesitas crearlos
copiando el template `survival-primeros-pasos.html`:

- `pages/como-ingresar.html`
- `pages/java.html`
- `pages/bedrock.html`
- `pages/survival-como-jugar.html`
- `pages/survival-vender.html`
- `pages/survival-protecciones.html`
- `pages/survival-subasta.html`
- `pages/survival-warps.html`
- `pages/survival-tienda.html`
- `pages/chat-colores.html`
- `pages/lista-mods.html`
