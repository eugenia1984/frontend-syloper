# :star: DOM

---

## :book: Temas

- GLOSARIO

- MODELO DE OBJETOS DEL DOCUMENTO (DOM): DEFINICION / ¿COMO FUNCIONA? / HTML A DOM / EDITAR EL DOM DESDE EL NAVEGADOR 

- ESTRUCTURA DEL DOM Y NODOS: TIPOS DE NODOS 

- ACCESO AL DOM: ACCESO A LOS NODOS 
 
- MODIFICAR NODOS: INNER TEXT / INNER HTML / CLASS NAME 

- AGREGAR O QUITAR NODOS: CREAR DE ELEMENTO / ELIMINAR ELEMENTO / EJEMPLO: CREANDO OPCIONES DESDE UN ARRAY 

- PLANTILLAS DE TEXTO:  PLANTILLAS LITERALES  /  PLANTILLAS LITERALES E innerHTML / EJEMPLO: CREANDO ELEMENTOS DESDE OBJETOS / QUERY SELECTOR / QUERY SELECTOR ALL 

- MATERIAL AMPLIADO
 
- OBTENER DATOS DE INPUTS 

- PRÁCTICA

---

## :computer: GLOSARIO

**Abstracción**: Resumen de un grupo complejo de instrucciones bajo una palabra clave (función) que sugiere cuál es el problema a resolver por la misma.

**Función de orden superior**: Es aquella que bien retorna una función, o recibe una función por parámetro. También es conocida como función de alto orden o higher-order functions.

**Objeto Math**: Contenedor de herramientas y serie de métodos propio de Javascript para realizar funciones matemáticas complejas.

**Clase Date**: Clase propia de Javascript que nos permite representar y manipular fechas.

---

## :computer: MODELO DE OBJETOS DEL DOCUMENTO (DOM)

### DEFINICION

¿Qué es el modelo de objetos del documento (DOM) y cómo funciona?

El Modelo de Objetos del Documento (DOM) es una estructura de objetos generada por el navegador, la cual representa la página HTML actual.

Con JavaScript la empleamos para acceder y modificar de forma dinámica elementos de la interfaz.
Es decir que, por ejemplo, desde JavaScript podemos modificar el texto contenido de una etiqueta <h1>.

## ¿COMO FUNCIONA?
  
 La estructura de un documento HTML son las etiquetas. En el Modelo de Objetos del Documento (DOM), cada etiqueta HTML es un objeto, al que podemos llamar nodo.
  
Las etiquetas anidadas son llamadas “nodos hijos” de la etiqueta “nodo padre” que las contiene.
Todos estos objetos son accesibles empleando JavaScript mediante el objeto global document.

Por ejemplo, document.body es el nodo que representa la etiqueta` `<body>``
  
## HTML A DOM 
  
![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/ff030512-a0fa-4959-9fb8-df7d6d892d96)
  
  
---
  
##:computer: ESTRUCTURA DEL DOM Y NODOS

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/6053e000-fe8d-4cf5-a3c8-0ef790250454)

### Ejemplo:
  
  ![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/3f59470a-5aaa-448d-be93-f1b7adf0fbc6)

  
## EDITAR EL DOM DESDE EL NAVEGADOR  
  
  
Los navegadores modernos brindan medios para editar el DOM de cualquier página en tiempo real.

Ejemplo: en Chrome podemos hacerlo mediante la Herramienta para desarrolladores en la pestaña “Elements”.

Referencia: [Editar el DOM en Chrome](https://developer.chrome.com/docs/devtools/dom/)

Si bien la estructura DOM está simplificada, es un medio muy útil para verificar y probar actualizaciones en la estructura.
  
  
## EJEMPLO APLICADO: ACCESO POR OBJETO document 
  
  ![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/4f026eb4-c7b3-4ad0-953d-5d9d75b7c09a)
  
El acceso a body usando la referencia document.body requiere que el script se incluya al final del ``<body>`` en el HTML. 
 
 ```HTML
  <body>
    <h2>Full stack</h2>
    <script src="js/main.js"></script>
  </body>
```
  
## TIPOS DE NODOS 
  
  ![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/7ff522c4-1941-4e3b-b86f-808d289e0bef)

---

## :computer: ACCESO AL DOM
  
### ACCESO A LOS NODOS 
  
Existen distintos métodos para acceder a los elementos del DOM empleando en la clase Document. Los más comunes son:
  
  ![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/73edc1c5-85c9-4345-aa26-b8a5ef25dc2c)

## GETELEMENTBYID()
  
 El método getElementById() sirve para acceder a un elemento de la estructura HTML, utilizando su atributo ID como identificación.
 
 - CODIGO HTML DE REFERENCIA 
 ```HTML
<div id = "app">
<p id = "parrafo1" >Hola Mundo</p>
</div>
 ```
  
- CODIGO JS
 ```JavaScript
let div     = document.getElementById("app");
let parrafo = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(parrafo.innerHTML);
```
  
##  GETELEMENTSBYCLASSNAME() 
  
El método getElementsByClassName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su atributo class como identificación. Se retornará un Array de elementos con todas las coincidencias:

- CODIGO HTML DE REFERENCIA
  
```HTML
 <ul>
      <li class="paises">AR</li>
      <li class="paises">CL</li>
 	<li class="paises">UY</li>
 </ul>
```
  
- CODIGO JS  
```JavaScript  
let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);  
```

## GETELEMENTSBYTAGNAME() 
  
El método getElementsByTagName() sirve para acceder a un conjunto de elementos de la estructura HTML, utilizando su nombre de etiqueta como identificación. Esta opción es la menos específica de todas, ya que es muy probable que las etiquetas se repitan en el código HTML.
  
- CODIGO HTML DE REFERENCIA
  
```HTML
<div>
<div>CONTENEDOR 2</div>
      <div>CONTENEDOR 3</div>
</div>
```
 - CODIGO JS
  
 ```JavaScript 
let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML); 
```
  
## EJEMPLO : RECORRE HTMLCollection CON FOR...OF  
  
```JavaScript
let paises       = document.getElementsByClassName("paises");
let contenedores = document.getElementsByTagName("div");

for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores) {
    console.log(div.innerHTML);
}  
```
  
---
 
##:computer: MODIFICAR NODOS

## INNER TEXT
  
La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder y/o modificar el contenido textual de algún elemento del DOM.  
  
- CODIGO HTML DE REFERENCIA  
```HTML
<h1 id=”titulo”>Hola Mundo!</h1>
```

- /CODIGO JS
```JavaScript
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) // “Hola Mundo!”
// cambio el contenido del elemento
titulo.innerText = “Ey Mundo!”
console.log( titulo.innerText ) // “Ey Mundo!”  
```  

## INNER HTML 
  
innerHTML permite definir el código html interno del elemento seleccionado. 
El navegador lo interpreta como código HTML y no como contenido de texto, permitiendo desde un string crear una nueva estructura de etiquetas y contenido.

Al pasar un string con formato de etiquetas html y contenido a través de la propiedad innerHTML, el navegador genera nuevos nodos con su contenido dentro del elemento seleccionado.
 
EJEMPLO INNER HTML
  
- CODIGO HTML DE REFERENCIA  
```HTML
<div id=”contenedor”></div>
```
  
- CODIGO JS
```
let container = document.getElementById("contenedor")
```

- cambio el código HTML interno
```JavaSCript
container.innerHTML = “<h2>Hola mundo!</h2><p>Lorem ipsum</p>”
```
  
- Resultado en el DOM
```HTML
<div id=”contenedor”>
    <h2>Hola mundo!</h2>
    <p>Lorem ipsum</p>
</div>  
```  

 ## CLASS NAME 
  
A través de la propiedad className de algún nodo seleccionado podemos acceder al atributo class del mismo y definir cuáles van a ser sus clases.  
  
- CODIGO HTML DE REFERENCIA
```HTML  
<div id=”contenedor”></div>
```
  
- CODIGO JS
```JavaScript
let container = document.getElementById("contenedor")
// cambio el código HTML interno
container.innerHTML = “<h2>Hola mundo!</h2>”
// cambio el atributo class
container.className = “container row”
```
- Resultado en el DOM
```HTML
<div id=”contenedor” class=“container row”>
    <h2>Hola mundo!</h2>
</div> 
```
  
---
 
## :stars: AGREGAR O QUITAR NODOS

## CREAR DE ELEMENTO 
 
Para crear elementos se utiliza la función document.createElement(), y se debe indicar el nombre de etiqueta HTML que representará ese elemento.
Luego debe agregarse como hijo el nodo creado con append(), al body o a otro nodo del documento actual.
 
```JavaScript
// Crear nodo de tipo Elemento, etiqueta p
let parrafo = document.createElement("p");
// Insertar HTML interno
parrafo.innerHTML = "<h2>¡Hola tú!</h2>"; 
// Añadir el nodo Element como hijo de body
document.body.append(parrafo);
```
 
## ELIMINAR ELEMENTO 
 
Se pueden eliminar nodos existentes y nuevos. El método remove() permite eliminar un nodo seleccionado del DOM.

 
```JavaScript
let parrafo = document.getElementById("parrafo1");
//Elminando el propio elemento
parrafo.remove();

let paises = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove()
```

## OBTENER DATOS DE INPUTS 
 
Para obtener o modificar datos de un formulario HTML desde JS, podemos hacerlo mediante el DOM. Accediendo a la propiedad value de cada input seleccionado:
 
- CODIGO HTML DE REFERENCIA 
```HTML
<input id = "nombre" type="text">
<input id = "edad"   type="number">
```
 
- CODIGO JS
```JavaScript
document.getElementById("nombre").value = "HOMERO";
document.getElementById("edad").value   = 39;
```
 
## EJEMPLO: CREANDO OPCIONES DESDE UN ARRAY 

```JavaScript
 //Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}
```
 
---
 
##:stars: PLANTILLAS DE TEXTO:  
 
## PLANTILLAS LITERALES  
 
En versiones anteriores a ES6, solía emplearse la concatenación para incluir valores de las variables en una cadena de caracteres (string). Esta forma puede ser poco legible ante un gran número de referencias. En JS ES6 que solventa esta situación son los template strings.

 ```JavaSCript
let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla);
 ```
 
 
## PLANTILLAS LITERALES E innerHTML 

La plantillas son un medio para incluir variables en la estructura HTML de nodos nuevos o existentes , modificando el innerHTML.

```JavaSCript
 let producto   = { id: 1,  nombre: "Arroz", precio: 125 };
let contenedor = document.createElement("div");
//Definimos el innerHTML del elemento con una plantilla de texto
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>  Producto: ${producto.nombre}</p>
                        <b> $ ${producto.precio}</b>`;
//Agregamos el contenedor creado al body
document.body.appendChild(contenedor);
```
 
 ## EJEMPLO: CREANDO ELEMENTOS DESDE OBJETOS 
 
 ```JavaScript
 const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
}
```

## QUERY SELECTOR 
 
El método querySelector() nos permite seleccionar nodos con la misma sintaxis que utilizamos en los selectores de CSS.
 
```HTML
<div id=”contenedor”>
    <p class=”texto”></p>
</div>
```
 
```JavaScript 
// puedo seleccionar la etiqueta <p> siguiendo la sintaxis de CSS para selectores:
let parrafo = document.querySelector("#contenedor p")
// seleccionar sólo el contenedor por id con #
let contenedor = document.querySelector("#contenedor")

// o por clase:
parrafo = document.querySelector(".texto")
``` 
 
Lo interesante del querySelector es que también aplica a pseudo-clases de CSS, brindando un nivel más avanzado de precisión:

```JavaScript
let radioChecked = document.querySelector(".radio:checked")
```
 
Suponiendo que tengo elementos html radio button y quiero seleccionar sólo aquel que esté en checked, ésto lo puedo lograr muy fácil con querySelector y la pseudo-clase :checked de CSS.
 
## QUERY SELECTOR ALL 

Query Selector me retorna el primer elemento que coincida con el parámetro de búsqueda, o sea un sólo elemento. 
Si quiero obtener una colección de elementos puedo utilizar el método querySelectorAll() siguiendo el mismo comportamiento.
 
## MATERIAL AMPLIADO
 
✦  [Árbol del Modelo de Objetos del Documento (DOM) | Ejemplos interactivos: DOM](https://es.javascript.info/dom-nodes)
 
✦  [Recorriendo el DOM | Ejemplos interactivos: DOM](https://es.javascript.info/dom-navigation)
 
✦  [Propiedades de los nodos | Ejemplos interactivos: DOM](https://es.javascript.info/basic-dom-node-properties)
 
✦  [Documentación DOM | Documentación](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
 
---
  
## :computer: PRACTICA

**Consigna**:  Traslada al proyecto integrador el concepto de objetos. En función del tipo de proyecto que hayas elegido, deberás:

Crear elementos manipulando el DOM a partir de la información de tus objetos.

Modificar etiquetas existentes en función del resultado de operaciones.

**Sugerencia**:  Generalmente, identificamos a un único elemento del DOM con el atributo id y a un conjunto asociado por class.

---
