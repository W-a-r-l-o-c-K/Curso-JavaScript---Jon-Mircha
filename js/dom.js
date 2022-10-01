/* **********     Curso JavaScript: 60. WEB APIs - #jonmircha     ********** */
/* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model */
/* https://developer.mozilla.org/en-US/docs/Mozilla/Gecko/Chrome/API/Browser_API */
/* https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model */

/*  console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente digital... Jonathan MirCha";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */
/*





*/
/* **********     Curso JavaScript: 61. DOM: Introducción - #jonmircha     ********** */
/*  console.log("********** Elementos del Documento **********");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola Mundo desde el DOM</h2>"); */
/*





*/
/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li")); */
/*
  




*/
/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/* console.log(document.documentElement.lang);  // Accedemos al atributo lang
console.log(document.documentElement.getAttribute("lang"));  // Accedemos al atributo lang (mejor forma)
console.log(document.querySelector(".link-dom").href);  // http://127.0.0.1:5500/07_dom.html
console.log(document.querySelector(".link-dom").getAttribute("href"));  // ./07_dom.html

document.documentElement.lang = "en";  // Cambiamos el atributo lang a "en".
console.log(document.documentElement.lang);  // en
document.documentElement.setAttribute("lang", "es-MX"); // Cambiamos el atributo lang a "es-MX" (mejor forma).
console.log(document.documentElement.lang);  // es-MX

const $linkDOM = document.querySelector(".link-dom");  // Asignamos a la variable $linkDOM el elemento .link-dom para modificarla.
                                                       // Mejor en una constante. El $ se pone para tener una referencia de que es una variable del documento HTML.
$linkDOM.setAttribute("target", "_blank");  // Le ponemos el atributo target con el valor _blank, para que se abra en una nueva ventana.
$linkDOM.setAttribute("rel", "noopener");   // Le ponemos el atributo rel con el valor noopener, para que no haya una dependencia de la página que abre con la página de origen.
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");  // le cambiamos el atributo "href" con valor "https://youtube.com/jonmircha"
console.log($linkDOM.hasAttribute("rel"));  // Muestra en la consola si $linkDOM tiene el atributo "rel" dirá true.
$linkDOM.removeAttribute("rel");  // Eliminamos el atributo "rel".
console.log($linkDOM.hasAttribute("rel"));  // // Muestra en la consola si $linkDOM tiene el atributo "rel", ahora dirá false.

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));  // Document Object Model
console.log($linkDOM.dataset);   // DOMStringMap {id: '1', description: 'Document Object Model'}
console.log($linkDOM.dataset.description);   // Document Object Model
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");  // Le cambiamos el "data-description" con valor "Modelo de Objeto del Documento".
console.log($linkDOM.dataset.description);  // Modelo de Objeto del Documento
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);  // Suscríbete a mi canal y comparte
console.log($linkDOM.hasAttribute("data-id"));  // true
$linkDOM.removeAttribute("data-id");  // elimina el atributo "data-id".
console.log($linkDOM.hasAttribute("data-id"));  // false */
/*





*/
/* **********     Curso JavaScript: 64. DOM: Estilos y Variables CSS - #jonmircha     ********** */
/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);  // CSSStyleDeclaration {0: 'background-color', 1: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
console.log($linkDOM.getAttribute("style"));  // background-color: #F7DF1E; color: #222;
console.log($linkDOM.style.backgroundColor);  // rgb(247, 223, 30)
console.log($linkDOM.style.color);  // rgb(34, 34, 34)
console.log(window.getComputedStyle($linkDOM));  // Nos muestra las propiedades dinámicas de CSS, y los valores que le da el navegador por defecto.
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));  // rgb(34, 34, 34)

$linkDOM.style.setProperty("text-decoration", "none");  // Accedemos a la propiedad "text-decoration" y le ponemos el valor "none".
$linkDOM.style.setProperty("display", "block");  // Accedemos a la propiedad "display" y le ponemos el valor "block".
$linkDOM.style.width = "50%";  // Le ponemos el 50% de ancho.
$linkDOM.style.textAlign = "center";  // lo centramos el texto.
$linkDOM.style.marginLeft = "auto";  // asi lo centramos
$linkDOM.style.marginRight = "auto";  // asi lo centramos
$linkDOM.style.padding = "1rem";  // le ponemos un padding de 1rem
$linkDOM.style.borderRadius = ".5rem";  // y un border-radius de .5rem.

console.log($linkDOM.style);  // CSSStyleDeclaration {0: 'background-color', 1: 'color', 2: 'text-decoration-line', 3: 'text-decoration-thickness', 4: 'text-decoration-style', 5: 'text-decoration-color', 6: 'display', 7: 'width', 8: 'text-align', 9: 'margin-left', 10: 'margin-right', 11: 'padding-top', 12: 'padding-right', 13: 'padding-bottom', 14: 'padding-left', 15: 'border-top-left-radius', 16: 'border-top-right-radius', 17: 'border-bottom-right-radius', 18: 'border-bottom-left-radius', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
console.log($linkDOM.getAttribute("style"));  // background-color: rgb(247, 223, 30); color: rgb(34, 34, 34); text-decoration: none; display: block; width: 50%; text-align: center; margin-left: auto; margin-right: auto; padding: 1rem; border-radius: 0.5rem;
console.log(getComputedStyle($linkDOM));  // Nos muestra las propiedades dinámicas de CSS, y los valores que le da el navegador por defecto.

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,  // Guardamos en constantes que apuntan al html y el body.
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),  // Guardamos en variables las propiedades CSS
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");  // Guardamos en variables las propiedades CSS

console.log(varDarkColor, varYellowColor);  //  #222  #F7DF1E

$body.style.backgroundColor = varDarkColor;  // Le cambiamos al body el estilo bacgroundColor a varDarkColor.
$body.style.color = varYellowColor;  // Le cambiamos al body el estilo color a varYellowColor.

$html.style.setProperty("--dark-color", "magenta");  // le podemos cambiar el valor con setProperty
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");  // le cambiamos a la variable el color que le dimos al html

$body.style.setProperty("background-color", varDarkColor);  // y se lo aplicamos al body

console.log(varDarkColor);  // magenta */
/*





*/
/* **********     Curso JavaScript: 65. DOM: Clases CSS - #jonmircha     ********** */
/* const $card = document.querySelector(".card"); // apuntamos a la 1ª card

console.log($card);  //  <figure class="card rotate-135 opacity-80">...</figure>
console.log($card.className);  // card
console.log($card.classList);  // DOMTokenList ['card', value: 'card']
console.log($card.classList.contains("rotate-45")); // false
$card.classList.add("rotate-45");  // le añadimos la class rotate-45.
console.log($card.classList.contains("rotate-45"));  // true
console.log($card.className);  // card rotate-45
console.log($card.classList);  // DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45']
$card.classList.remove("rotate-45"); // le quitamos la clase rotate-45.
console.log($card.classList.contains("rotate-45"));  // false
$card.classList.toggle("rotate-45");  // interruptor, si tiene la clase se la quita y si no se la agrega.
console.log($card.classList.contains("rotate-45"));  // true
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));  // false
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");  // reemplazamos una clase por otra.
$card.classList.add("opacity-80", "sepia"); // añadimos varias clases.
$card.classList.remove("opacity-80", "sepia");  // quitamos varias clases.
$card.classList.toggle("opacity-80", "sepia");  // si tiene lo quita y si no lo tiene lo pone. */
/*





*/
/* **********     Curso JavaScript: 66. DOM: Texto y HTML - #jonmircha     ********** */
/* const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

//$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */
/*





*/
/* **********     Curso JavaScript: 67. DOM Traversing: Recorriendo el DOM - #jonmircha     ********** */
/* const $cards = document.querySelector(".cards");

console.log($cards); // <section class="cards">…</section>
console.log($cards.children); // HTMLCollection(5) [figure.card, figure.card, figure.card, figure.card, figure.card]
console.log($cards.children[2]); // <figure class="card">…</figure>
console.log($cards.parentElement); // <body>...</body>
console.log($cards.firstElementChild); // <figure class="card">…</figure>
console.log($cards.lastElementChild); // <figure class="card">…</figure>
console.log($cards.previousElementSibling); // <a class="link-dom" data-id="1" data-description="Document Object Model" href="./07_dom.html" style="background-color: #F7DF1E; color: #222;">DOM</a>
console.log($cards.nextElementSibling); // <template id="template-card">…</template>
console.log($cards.closest("div")); // null
console.log($cards.closest("body")); // <body>...</body>
console.log($cards.children[3].closest("section")); // <section class="cards">…</section> */
/*





 */
/* **********     Curso JavaScript: 68. DOM: Creando Elementos y Fragmentos - #jonmircha     ********** */
/*const $figure = document.createElement("figure"), // Creamos un elemento figure.
  $img = document.createElement("img"),            // Creamos un elemento img.
  $figcaption = document.createElement("figcaption"),  // Creamos un elemento figcaption.
  $figcaptionText = document.createTextNode("Animals"), // creamos un elemento TextNode para el figcaption.
  $cards = document.querySelector(".cards"),  // Apuntamos a la clase .cards.
  $figure2 = document.createElement("figure"); // // Creamos otro elemento figure.

$img.setAttribute("src", "https://placeimg.com/200/200/animals");  // A la variable $img le asisgnamos el atributo "src" con valor "https://placeimg.com/200/200/animals"
$img.setAttribute("alt", "Animals"); // y le asignamos el atributo "alt" con valor "Animals".
$figure.classList.add("card");  // le asignamos a figure la clase card.

$figcaption.appendChild($figcaptionText); // le agregamos como hijo el texto a la figcaption.
$figure.appendChild($img);  // le agregamos como hijo la img a la figure.
$figure.appendChild($figcaption);  // le agregamos como hijo la figcaption a la figure
$cards.appendChild($figure);  // y le agregamos a cards la figure como hijo

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;                                                  // Le añadimos a figure2 las etiquetas de img y figcaption.
$figure2.classList.add("card");                     // le ponemos la clase card.

$cards.appendChild($figure2);                       // y a cards le ponemos figure2 como hijo.

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");                              // Creamos 2 variables

document.write("<h3>Estaciones del Año</h3>");                    // escribimos en el documento un h3

document.body.appendChild($ul);                //  le agregamos un hijo al body con el $ul.

estaciones.forEach((el) => {
  const $li = document.createElement("li");   // con un forEach vamos creando los li y le pone el texto por cada una de las estaciones.
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));  // otra forma

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment(); // otra forma con createDocumentFragment (mejor forma)

meses.forEach((el) => {
  const $li = document.createElement("li");  // esta forma solo hace una inserción cuando ya estan todas.
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);*/
/*





*/
/* **********     Curso JavaScript: 69. DOM: Templates HTML - #jonmircha     ********** */
/*const $cards = document.querySelector(".cards"),                //  variable que apunta a cards
  $template = document.getElementById("template-card").content,  // variable que apunta al contenido de template-card
  $fragment = document.createDocumentFragment(),                 // creamos un fragmento
  cardsContent = [                                               // por cada tarjeta
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardsContent.forEach((el) => {                                    // recorremos el cardsContent
  $template.querySelector("img").setAttribute("src", el.img);     // en el template ponemos el atributo src con valor elemento.img
  $template.querySelector("img").setAttribute("alt", el.title);   // en el template ponemos el atributo alt con valor elemento.title
  $template.querySelector("figcaption").textContent = el.title;   // en el template ponemos en el figcaption.texContent el elemento.title

  let $clone = document.importNode($template, true);     // creamos un clon con document.importNode($template, true); el boolean dice que va a copiar toda la estructura.
  $fragment.appendChild($clone);  // le añadimos como hijo el clon al fragment.
});

$cards.appendChild($fragment);  // y finalmente a cards le añadimos el fragmento, con una sola inserción.*/
/*





*/
/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style) - #jonmircha     ********** */
/* const $cards = document.querySelector(".cards"),  // variable que apunta a cards.
  $newCard = document.createElement("figure"),  // variable que crea elemento figure.
  $cloneCards = $cards.cloneNode(true);  // variable con un clon de cards.

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;                                            // con innerHTML le añadimos al figure las etiquetas de la imagen y  figcaption.
$newCard.classList.add("card");               // le añadimos la clase cards.

//$cards.replaceChild($newCard, $cards.children[2]);  // para reemplazar un elemeto.
//$cards.removeChild($cards.lastElementChild);        // para eliminar el ultimo hijo.
$cards.insertBefore($newCard, $cards.firstElementChild);  // la inserta antes de un nodo.
document.body.appendChild($cloneCards);                   // insertamos el clone en el body como hijo. */
/*





*/
/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) - #jonmircha     ********** */
/*
.insertAdjacent...
  .insertAdjacentElement(position, el)  // agrega un elemento (como un appenChild)
  .insertAdjacentHTML(position, html)   // agrega contenido texto HTML (como un innerHTML)
  .insertAdjacentText(position, text)   // agrega un texto (como un textContent)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/
/* const $cards = document.querySelector(".cards"), // apuntamos a cards
  $newCard = document.createElement("figure"); // creamos un elemento figure

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`; // creamos el contenido de la tarjeta, img y figcaption.
$newCard.classList.add("card"); // le ponemos la clase card.

$newCard.insertAdjacentHTML("afterbegin", $contenCard); // le insertamos el contenido HTML $contentCard a la $newCard.
$cards.insertAdjacentElement("beforeend", $newCard); // insertamos la tarjeta como ultimo hijo.
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any"); // Apuntamos al figcaption y le insertamos el texto.

//$cards.prepend($newCard);  // agregame como hijo primero.
//$cards.append($newCard);   // agregame como ultimo hijo.
//$cards.before($newCard);   // como hermano anterior.
//$cards.after($newCard);    // como hermano posterior. */

/* **********     Curso JavaScript: 72. DOM: Manejadores de Eventos - #jonmircha y Curso JavaScript: 73. DOM: Eventos con Parámetros y Remover Eventos - #jonmircha     ********** */
/*
Los eventos son los mecanismos que tenemos en JavaScript para controlar las acciones del usuario y definir el comportamiento del documento en cierto momento o cuando se cumplan ciertas condiciones.

Las funciones que se ejecutan en un evento se llaman Event Handler (Manejador de Eventos).

https://developer.mozilla.org/en-US/docs/Web/Events
*/
/*function holaMundo() {
  alert("Hola Mundo");        // como un atributo
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);                       //
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;          // la función sin los parentesis.
$eventoSemantico.onclick = function (e) {             // el único parámetro que puede recibir es el evento (e)
  alert("Hola Mundo Manejador de Eventos Semántico");        // con función anónima.
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);    // lo ponemos a la escucha.
$eventoMultiple.addEventListener("click", (e) => {       // con arrow function.
  alert("Hola Mundo Manejador de Eventos Múltiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});
$eventoMultiple.addEventListener("click", () => {   // aqui la que recibe el evento es la arrow function.
  saludar();
  saludar("Jon");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);  // removerá el evento cuando se haga doble click en él.
  $eventoRemover.disabled = true;  // asi desabilitamos el botón.
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);*/
/*





*/
/* **********     Curso JavaScript: 74. DOM: Flujo de Eventos (Burbuja y Captura) - #jonmircha     ********** */
/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/
/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  });
}); */
/*





*/
/* **********     Curso JavaScript: 75. DOM: stopPropagation & preventDefault - #jonmircha     ********** */
/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
  e.preventDefault();
  e.stopPropagation();
}); */
/*





*/
/* **********     Curso JavaScript: 76. DOM: Delegación de Eventos - #jonmircha     ********** */
/* function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this} el click lo originó ${e.target.className}`
  );
  //e.stopPropagation();
}

document.addEventListener("click", (e) => {
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
    e.preventDefault();
    //e.stopPropagation();
  }
}); */
/*





*/
/* **********     Curso JavaScript: 77. BOM: Propiedades y Eventos - #jonmircha     ********** */
/*
El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, sin esperar hojas de estilo, imágenes y subtramas para finalizar la carga.

El evento load se dispara cuando se ha detectado la carga completa de la página.

Es un error frecuente usar load cuando DOMContentLoaded es mucho más apropiado.

Peticiones asíncronas pausan el parseo del DOM.
*/
/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********** Evento Resize **********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("********** Evento Scroll **********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
}); */
/*





*/
/* **********     Curso JavaScript: 78. BOM: Métodos - #jonmircha     ********** */
//window.alert("Alerta");
//window.confirm("Confirmación");
//window.prompt("Aviso");
/* const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener(
  "click",
  (e) => (ventana = window.open("https://jonmircha.com"))
);

$btnCerrar.addEventListener("click", (e) => {
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => window.print()); */
/*





*/
/* **********     Curso JavaScript: 79. BOM: Objetos: URL, Historial y Navegador - #jonmircha     ********** */
/* console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */
