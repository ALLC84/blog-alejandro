---
template: post
title: Markdown en ReactJS
slug: marckdown-en-reactjs
draft: false
date: '2019-12-29'
description: >-
  Cubriremos como incluir Markdon en React.js de la forma simple y práctica
  posible.
category: ReactJS
tags:
  - ReactJS
  - Markdown
  - Web Development
---
#### Hoy aprenderemos de forma sencilla como utilizar [Markdown](https://daringfireball.net/projects/markdown/) a una App hecha en **react.js**

> En este post damos por hecho que tenga insatalado **node.js** y **nmp**, \
> necesarios para crear nuestra App **react.js**

**Empezaremos creando nuestra App de prueba**

* Abrimos un terminal y nos posicionamos en la carpeta donde queremos crear el proyecto.

  * Ejemplo: `cd usuario/documentos/react`
* Una vez posicionado en la carpeta deseada escribimos en la terminal

Crearemos un nuevo proyecto React, donde `my-app` puede ser el nombre de nuestra elección.

```javascript
npx create-react-app my-app
```

Nos movemos a la carpeta del proyecto creado

```javascript
cd my-app
```

Ejecutamos nuestra App React por primera vez

```javascript
npm start
```

Tenemos varias opciones para incluir **Markdown** en **React** utilizando librerías muy bien hechas para este fin que nos ahorraran tiempo y nos garantizarán un funcionamiento óptimo.

En este caso utilizaremos **Marked** por su facilidad de uso y sus buenas opciones de configuración.

El primer paso es instalar la librería

```javaScript
npm install marked
```

Nos dirigimos a nuesto archivo **App.js** e importamos la librería  **marked**

* En este ejemplo utilizaremos **marked** en su forma mas simple, crearemos una función que le pasaremos dos parametros, el primero el contenido y el segundo el id del contenedor donde queremos introducirlo.

```javascript
import React, {useEffect} from 'react'
import marked from 'marked'

const parseMarkdownToHtml = (content, idContainer) => {
	return document.getElementById(idContainer).innerHTML = marked(content)
}

const App = () => {

	useEffect({
		parseMarkdownToHtml('# Esto es un h1', 'content') 
	},[])

   return (
      <div id='content'></div>
   )
   
}
export default App
```

Ahora configuraremos un poco **marked** pasando unas opciones de nuestras preferencias o necesidades para la transpilación a HTML. 

En este caso crearemos un componente de react para reutilizarlo simpre que necesitemos, ya estara preparado con nuestra configuración deseada.

* En nuestra carpeta `src` creamos una nueva carpeta llamada `components` donde incluiremos un archivo que le llamaremos `parseMarkdownToHtml.js`

```javascript
import marked from 'marked'

marked.setOptions({
   gfm: true,
   tables: true,
   breaks: true,
   pedantic: false,
   sanitize: true,
   smartLists: true,
   smartypants: false,
})



const parseMarkdownToHtml = (content, idContainer) => {
    return document.getElementById(idContainer).innerHTML = marked(content)
}


export default parseMarkdownToHtml
```

Puedes ver en la documentación oficial de [Marked](https://marked.js.org/#/README.md) todas las opciones posibles y el fin de cada una de ellas e incluir las que crean convenientes según proyecto.

* Volviendo a nuestro **App.js**

Es hora de utilizar nuestro **componente personalizado**

```javascript
import React from 'react'
import parseMarkdownToHtml from './components/parseMarkdownToHtml'

const App = () => {

   return (
      <div>
         {parseMarkdownToHtml('## Marked desde compoennte', 'content')}
      </div>
   )
   
}
export default App
```

> Si has llegado hasta aquÃ­ seguro te interesa saber como darle un poco de estilos a nuestro **Markdown** 

Para ello utilizaremos dos vás de personalización

* Una de ellas serÃ¡ un archivo `style.css` para algunos estilos personalizados de nuestras etiquetas.
* Y para el resaltado de nuestras etiquetas `<pre>`,  `<code>` utilizaremos la libreria `highlight.js` que trabajarán junto con **Marked** de forma perfecta.

Lo primero que haremos será instalar la libreria `highlight.js` en nuestro proyecto como hemos hecho con **Marked** anteriormente.

```javascript
npm install highlight.js
```

Podemos buscar mas información sobre [Highlight.js](https://highlightjs.org/) en su página oficial donde encontraremos todas sus funcionalidades, opciones posibles y modo de uso detallado. [Api de Highlight.js](https://highlightjs.readthedocs.io/en/latest/index.html)

Continuamos creando un archivo **style.css** donde pondremos unos estilos básicos para una mejor apariencia del **HTML** resultante de nuestro texto **Markdown**

En el perfil de github de [fabiocolacio](https://github.com/fabiocolacio/markdown-css-themes) podras encontrar ejemplos de diferentes estilos para tu configuración de **Markdown** aqui te muestro uno de ellos.

Aqui te muestro un ejemplo de uno de los estilos que encontrarás y que utilizaremos para nuestra prueba

```css
body {
	font-family: "Avenir Next", Helvetica, Arial, sans-serif;
	padding:1em;
	margin:auto;
	max-width:42em;
	background:#fefefe;
}

h1, h2, h3, h4, h5, h6 {
	font-weight: bold;
}

h1 {
	color: #000000;
	font-size: 28pt;
}

h2 {
	border-bottom: 1px solid #CCCCCC;
	color: #000000;
	font-size: 24px;
}

h3 {
	font-size: 18px;
}

h4 {
	font-size: 16px;
}

h5 {
	font-size: 14px;
}

h6 {
	color: #777777;
	background-color: inherit;
	font-size: 14px;
}

hr {
	height: 0.2em;
	border: 0;
	color: #CCCCCC;
	background-color: #CCCCCC;
}

p, blockquote, ul, ol, dl, li, table, pre {
	margin: 15px 0;
}

img {
	max-width: 100%;
}

table {
	border-collapse: collapse;
	width: 100%;
}

table, th, td {
	border: 1px solid #EAEAEA;
	
	border-radius: 3px;
	padding: 5px;
}

tr:nth-child(even) {
  background-color: #F8F8F8;
}

a, a:visited {
	color: #4183C4;
	background-color: inherit;
	text-decoration: none;
}

#message {
	border-radius: 6px;
	border: 1px solid #ccc;
	display:block;
	width:100%;
	height:60px;
	margin:6px 0px;
}

button, #ws {
	font-size: 10pt;
	padding: 4px 6px;
	border-radius: 5px;
	border: 1px solid #bbb;
	background-color: #eee;
}

code, pre, #ws, #message {
	font-family: Monaco, monospace;
	font-size: 10pt;
	border-radius: 3px;
	background-color: #F8F8F8;
	color: inherit;
}

code {
	border: 1px solid #EAEAEA;
	margin: 0 2px;
	padding: 0 5px;
}

pre {
	border: 1px solid #CCCCCC;
	overflow: auto;
	padding: 4px 8px;
}

pre > code {
	border: 0;
	margin: 0;
	padding: 0;
}

#ws { background-color: #f8f8f8; }

.send { color:#77bb77; }
.server { color:#7799bb; }
.error { color:#AA0000; }
```

Es hora de incluir el link de nuestro **CSS** en el archivo **index.js** de nuestro proyecto.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './styles.css'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
```

El siguiente paso lo que haremos será modificar nuestro componente **parseMarkdownToHtml** creado anteriormente.

```javascript
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'


marked.setOptions({
   renderer: new marked.Renderer(),
   gfm: true,
   tables: true,
   breaks: true,
   pedantic: false,
   sanitize: true,
   smartLists: true,
   smartypants: false,
   highlight: function (code) {
      return hljs.highlightAuto(code).value
   }
})

const parseMarkdownToHtml = textMd => {
   return marked(textMd)
}

export default parseMarkdownToHtml
```

Habras visto la importación de la nueva libreria instalada y como la incluimos en las opciones que pasamos a **marked** para el resaltado de nuestras etiquetas `<code>`

Tambien hacemos la importación de los estilos para la apariencia de nuestro resaltado de código.

Podemos encontrar todos los estilos disponibles en la carpeta **node_modules** `node_modules/highlight.js/styles/` 

He intentado ser lo mas breve posible, dejando sin explicar a fondo las librerias utilizadas para nuestros ejemplos, queda a su disposición los enlaces a cada una de ellas donde podrás investigar a 100% sus detalles.

Gracias por llegar hasta el final del post y de verdad espero les haya servido de ayuda.

> Para no extender mas dejamos para un siguiente post el incluir **Markdown** desde un archivo `.md` proveniente de una carpeta del proyecto ó desde una base de datos. Seguramente utilizaremos [Firebase](https://firebase.google.com/) para nuestro ejemplo.
>
> **Les dejaré el enlace cuando este disponible**
