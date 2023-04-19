# :star: 7 - Primeros pasos con HTML :star:

---

## :book: GLOSARIO

- **Sketch**: es un dibujo rápido o bosquejo guía, que reproduce de manera muy sencilla un concepto, una idea o generalidad de un proyecto.

- **Wireframe**: es la representación estática, en baja calidad, de un diseño.

- **Mockup**: es la representación estática de un diseño, en calidad media o alta.

- **Prototipo**: es la representación navegable del producto final.

- **HTML**: es un "lenguaje" de marcado de etiquetas, que permite crear documentos para web.

- **Doctype**: cuando escribís tu documento HTML, lo primero que tenés que hacer es escribir el DOCTYPE, el cual declara el tipo de documento. Es decir, sirve para indicar que tu documento está escrito siguiendo la estructura determinada por un DTD concreto. Un DTD es la definición del tipo de documento.


---

## :book: Temas

- Etiquetas HTML: atributos de las etiquetas, anidar etiquetas, sintaxis del código, etiquetas cerradas y abiertas.

- Estructura básica

- DOCTYPE

- Tipos de etiquetas: grupo general

- Listas: tipo de listas, ¿viñetas o números?, anidar listas / Práctica

- Tablas: etiquetas básicas para tablas en html

- Formularios: etiqueta form(action, method, enctype), ingreso de texto, botones, atributo value, controles de selección, etiqueta label, menu desplegable, conjunto de campos

- Enlaces: arquitectura de un sitio, enlaces relativos, absolutos e internos / Práctica / Material ampliado

---

## :star:  ETIQUETAS HTML :star:

Las etiquetas HTML están delimitadas por un inicio y un final de cada elemento. Lo que se encuentra dentro de la etiqueta (el contenido) es lo que estás formateando. 

Toda etiqueta es un juego de pares: una etiqueta abre, otra cierra. 

![image](https://user-images.githubusercontent.com/72580574/232800794-8dcca8ce-e51b-442a-9fc7-bcb3cc208757.png)

### ATRIBUTOS DE LAS ETIQUETAS

Todas las etiquetas aceptan atributos, esto es, cualquier característica que pueda ser diferente entre una etiqueta y la otra.  El valor que tendrá va entre comillas. 

Cada una puede tener más de un atributo, separados entre sí por espacios. Los mismos sólo van en la de apertura. 

![image](https://user-images.githubusercontent.com/72580574/232800943-2354a6da-8e17-43e5-bd76-a0cbd11f8dfb.png)


### ANIDAR ETIQUETAS

Es posible meter una etiqueta dentro de la otra, de hecho, esto es más común de lo que parece. 

Lo más importante es tener presente que siempre se cierran en orden inverso a la apertura.


![image](https://user-images.githubusercontent.com/72580574/232801130-ba1e408a-c983-4d01-a6df-2ae086a5eaf4.png)


### SINTAXIS DEL CÓDIGO

Orden dentro del código:

✱ Manejo de tabulaciones.

✱ Bloques de código.

###  ETIQUETAS CERRADAS Y ABIERTAS

Las cerradas encierran un contenido, por lo general texto, mientras que las abiertas sirven, entre otras cosas, para incluir elementos como imágenes, líneas, entre otros.

En el ejemplo tenemos una etiqueta cerrada llamada Párrafo, que engloba un texto y una etiqueta abierta para incluir una línea horizontal. El signo “/” se utiliza para las etiquetas de cierre. En estas últimas se pone a continuación del signo “<”, mientras que en las abiertas delante del signo “>”. 

![image](https://user-images.githubusercontent.com/72580574/232801341-1930503e-159e-4461-9efa-6b3924e83411.png)

## ETIQUETAS ABIERTAS EN HTML5

Ya no es una obligación poner el signo ``“ / ”``.  

Por ejemplo, ``<img src=””>`` funcionará correctamente, y lo mismo sucederá con ``<br>``, ``<hr>``, los meta tag.

---

##  :star: ESTRUCTURA BÁSICA :star:

✱  ``<head>``: es la parte privada del documento, que se utiliza como un espacio de comunicación entre el sitio web y el navegador. 

Esta etiqueta envuelve otras  importantes como <title>, las etiquetas <meta> y aquellas relacionadas con la importación de documentos CSS y JS.

✱  ``<body>``: encierra el contenido propiamente dicho del sitio. 

Ambos deben estar dentro de un elemento principal: la etiqueta `<html>`.

✱ ``<html>``: etiqueta inicial, que define que el documento está bajo el estándar de HTML. Abre y cierra, por lo tanto es fundamental no olvidar la etiqueta </html> al finalizar el documento, pues sino no cargará correctamente el contenido de mi sitio.


✱ ``<title>``: la etiqueta title define el título de la página, el cual será visualizado en la solapa del navegador.


✱ ``<meta>``: se utiliza para añadir información sobre la página (ya sean palabras clave, el autor, la descripción del sitio, etcétera), la cual pueden valerse los buscadores. También puede definir el idioma y la codificación en la cual está escrita la página.

---
  
##  :star: DOCTYPE :star:

Cuando escribís tu documento HTML, lo primero que tenés que hacer es escribir el DOCTYPE, el cual declara el tipo de documento. Es decir, sirve para indicar que tu documento está escrito siguiendo la estructura determinada por un DTD concreto. Un DTD es la definición del tipo de documento.

`<!DOCTYPE html>`

![image](https://user-images.githubusercontent.com/72580574/232804139-160c0689-11aa-45dc-ad9e-6151646f0650.png)

---
  
## :star: TIPOS DE ETIQUETAS: GRUPO GENERAL :star:

Todas las etiquetas que van dentro del ``<body> </body>`` se dividen en dos grupos: 

- **Elementos de bloque**: son aquellos que, sin ser modificados por CSS, ocupan el 100% del ancho del contenedor, y se mostrarán uno abajo del otro.


- **Elementos de línea**: sólo ocupan el ancho que diga el contenido, y se verán uno al lado del otro.


- ``<h1>`` a`` <h6> ``(de bloque): un encabezado es, semánticamente hablando, el texto que encabeza o titula el contenido que sigue. Se puede tratar de un artículo, un texto o una sección del documento que estamos viendo.

![image](https://user-images.githubusercontent.com/72580574/232804520-269a8929-22ca-41be-99e6-6407b0703fb1.png)

Existen 6 niveles: del`` <h1> </h1>`` al`` <h6> </h6>``. Esta jerarquía se debe respetar en cada documento HTML que forme parte del sitio web.


![image](https://user-images.githubusercontent.com/72580574/232804998-7e563be5-2a3f-486a-9430-799b3589110a.png)


## ETIQUETAS HTML

- ``<p></p>``

- ``<br/>`` (de bloque)

- ``<em>`` (de línea)

- ``<strong>`` (de línea)

- ``<div>`` (de bloque)

- ``<span>`` (de línea)


Utilizaremos todas estas etiquetas en nuestro primer ejemplo de estructura web:

![image](https://user-images.githubusercontent.com/72580574/232805451-f8ca8c55-d1ba-45c4-849e-bf6bf4631fa8.png)

HTML5 incorpora etiquetas semánticas que no sólo generan estructura, sino que también definen su contenido.

![image](https://user-images.githubusercontent.com/72580574/232805546-cafbfc08-ff03-4a25-a830-7f1056f6f8de.png)


---

## :star: LISTAS :star:

HTML permite agrupar elementos que tienen más significado de forma conjunta. 

El menú de navegación de un sitio web, por ejemplo, está formado por un grupo de palabras. Aunque cada palabra por separado tiene sentido, de forma conjunta constituyen el menú de navegación de la página, por lo que su significado conjunto es mayor que por separado. Esto se denomina listas.


## Tipos de listas

- **listas no ordenaas**

- **listas ordenadas**

- **listas de definición**

Ejemplos: paso a paso de un procedimiento (como una receta de cocina), características de una persona, galería de imágenes, el menú de una página web, entre otros.

### ¿VIÑETAS O NÚMEROS?

- Las listas numéricas establecen un orden en la lectura de sus ítems.


- Las listas de viñetas no representan ningún orden o importancia entre sus ítems. Son elementos compuestos. 

``<ol>``: define una lista ordenada de artículos (numéricas).

``<ul>``: define una lista de artículos sin orden (viñetas).

``<li>``: define un artículo de una lista.


## Ejemplo 

Ambas listas se deben insertar mediante la etiqueta <li></li> (list-item). Ejemplo de servicios de una empresa (lista de viñetas/sin orden):

![image](https://user-images.githubusercontent.com/72580574/232809842-37676edf-085a-48bc-b59c-3d8c1c3d135a.png)

### ANIDAR LISTAS


Es probable que te veas en la necesidad de crear una estructura de sublistas como la siguiente:  

```
- Computadoras portátiles:
  -Procesador I4.
  -Procesador I5.

- Computadoras de escritorio:
  -Procesador Pentium.
  -Procesador Celeron.
```


---

## :star: A PRACTICAR :star:

1.  Creá dos listas utilizando las etiquetas de HTML: Creá dos listas usando las etiquetas de HTML: una con viñetas que contenga cinco nombres, y otra ordenada con 5 pasos para preparar un mate. 



---

## :star: TABLAS :star:

Son un conjunto de celdas organizadas, dentro del cual es posible alojar distintos contenidos. HTML dispone de una gran variedad de etiquetas y atributos para crear tablas.

Sirven para representar información tabulada, en filas y columnas. En HTML4 las tablas se usaban para maquetar.  Cuando CSS creció y se hizo más fuerte, nacieron los detractores de las tablas.

###  ETIQUETAS BÁSICAS PARA TABLAS EN HTML .

![image](https://user-images.githubusercontent.com/72580574/232810588-ae9d5400-fc4f-4f54-988b-f29669e2a946.png)

![image](https://user-images.githubusercontent.com/72580574/232810753-5aa5a28f-f619-49d5-97eb-b2e715296b42.png)



La etiqueta`` <table> </table>`` acepta 3 atributos de “diseño”:

- Border: bordes de la tabla.

- Cellpadding: especifica el espacio, en píxeles, entre la pared de la celda y su contenido.

- Cellspacing: indica la distancia entre las celdas y el margen exterior de la tabla.

---

## :star:  FORMULARIOS :star:

Son etiquetas donde el usuario ingresará o seleccionará valores, que serán enviados a un archivo encargado de procesar la información.


![image](https://user-images.githubusercontent.com/72580574/232810925-615f7dd3-47e5-47ff-a77f-e74835e56443.png)

## ETIQUETA `<form>`

Para insertar un formulario se usa la etiqueta <form>, que dentro lleva todos los controles que vayan al mismo destino. Un formulario requiere 3 atributos para funcionar:

- Action: documento que se encarga de recibir los datos y procesarlos.

- Method: la forma en que será enviada la información. Existen dos métodos de envío, que son GET y POST.

- Enctype: cómo se codificarán los contenidos.

### ACTION

En este atributo se indicará cuál es el archivo que recibe y procesa los datos. 
Debe ser de un lenguaje de los llamados “del lado del servidor” (PHP / ASP / JSP). Si no se indica un valor, el Action será por defecto el mismo archivo donde está el formulario. 

IMPORTANTE: HTML no es un lenguaje de programación.

### METHOD

Es la forma en la que se recopilan y envían los datos. 

Existen dos métodos comunes en el HTML:

- GET: la información viajará por la barra de direcciones a continuación del nombre del archivo.


- POST: la información viajará junto a los encabezados del HTML (será “invisible”).
Si el method no se indica, por defecto será GET.

### ENCTYPE


Cuando el valor del atributo method es post, el mismo es el  tipo MIME del contenido, que es usado para enviar el formulario al servidor.

Los posibles valores son:

- application/x-www-form-urlencoded: será el valor por defecto si un atributo no está especificado.


- multipart/form-data: usar este valor si se está usando el elemento input con el atributo type ajustado a "file".


- text/plain (HTML5)

Normalmente se utiliza para permitir el envío de archivos a través de un formulario.

### INGRESO DE TEXTO

Existen tres controles generales para el ingreso de texto:
Cajas de texto de una sola línea (no acepta el uso de la tecla Enter).


- Cajas para el ingreso de contraseñas (el contenido no será visible).


- Cajas para contenido multilínea. Puede ser una o muchas líneas de texto.
Atributo “name”.

-Control de formulario:  <input>: Text, Email, Password.

-Control de formulario:  <textarea></textarea>

### BOTONES 

Los botones disparan las acciones del formulario. Hay 3 tipos:

- El que envía los datos al archivo indicado como Action.

- El que vacía todo lo ingresado y resetea los campos.

- El que “no hace nada”, pensado para usarse con Javascript.

Todos los botones son etiquetas  <input> con distintos tipos de “Type”. El botón debe de estar dentro del <form> que afectará.


### ATRIBUTO VALUE

Representa la etiqueta del botón, la cual es normalmente mostrada por los navegadores dentro de éste.

- Input de tipo “submit”: envía el formulario.

- Input de tipo “reset”: resetea el formulario.

- Input de tipo “button”: no tiene acciones por defecto.

![image](https://user-images.githubusercontent.com/72580574/232811936-eeab6f2f-30ce-4ab6-93cc-a1c5cb970388.png)

### CONTROLES DE SELECCION

En estos casos, el usuario no puede ingresar libremente un texto, sino que el programador le da una lista predefinida. El dato que llega al elegir una opción se define desde el atributo “value”. Existen 3 grupos de controles de selección:

- Botones de radio: sólo se puede elegir una opción.

- Casillas de chequeo: de toda la lista de opciones, el usuario puede optar por una, todas o ninguna opción.

- Menú desplegable: sólo es posible seleccionar una opción.

### ATRIBUTO VALUE

En este caso es el valor que se enviará al enviarse el formulario. 

![image](https://user-images.githubusercontent.com/72580574/232812173-14a71839-2f0e-4c0d-be50-a94f9c211945.png)

### ETIQUETA `<LABEL>`

Define formalmente a cada elemento de un formulario. Esta etiqueta es de mucha ayuda para generar un formulario accesible. 

Su principal atributo es “for”, que va a referenciar a “label” con su elemento del formulario. El valor del atributo “for” debe ser igual al valor del atributo “id” o “name” del elemento.

![image](https://user-images.githubusercontent.com/72580574/232812457-c9f7250b-f038-49d6-8d31-7f4016be68c2.png)

### MENU DESPLEGABLE

Es el llamado combo-box, selector o menú. De toda la lista, se puede elegir una opción (aunque tiene un atributo que permite cambiarlo). Lo ideal es que sean al menos dos elementos distintos para observar el select:

![image](https://user-images.githubusercontent.com/72580574/232812683-3054a2a6-f087-476d-9e7a-f799a407c4f8.png)


## CONJUNTO DE CAMPOS

Las etiquetas ``<fieldset>`` y <legend> se utilizan en conjunto. 

La primera tiene como objetivo crear grupos de elementos del formulario que posean un mismo propósito; mientras que la segunda, define formalmente el propósito del elemento fieldset. Se estructuran de la siguiente manera:

![image](https://user-images.githubusercontent.com/72580574/232812889-4d8491ee-a005-4896-a60c-fc39fb35d336.png)

---

## :star: ENLACES :star:

### ARQUITECTURA DE UN SITIO

Los enlaces, también conocidos como links o anchors, se utilizan para relacionar partes del mismo documento. Por defecto, se visualizan azules y subrayados.

Para crear uno, es necesario utilizar la etiqueta de ancla ``<a>`` con el atributo “href”, que establecerá el destino al que apunta. Por ejemplo:

![image](https://user-images.githubusercontent.com/72580574/232813026-f1433f2b-7d1e-49d0-8ac5-9967cc320d3d.png)

### ENLACES RELATIVOS, ABSOLUTOS E INTERNOS

- **ENLACES RELATIVOS**: Los enlaces relativos son aquellos que apuntan a páginas ubicadas dentro del mismo proyecto. Si la página referenciada se encuentra en el mismo directorio, alcanza con mencionar el nombre de la misma para generar el enlace.

![image](https://user-images.githubusercontent.com/72580574/232813188-e3b1dd7b-8663-4bb2-a035-3f8eb28c7bed.png)


En caso de que el archivo se encuentre en un directorio específico, el mismo deberá ser mencionado.


![image](https://user-images.githubusercontent.com/72580574/232813254-5247b7d2-9e81-4d70-bdd6-e5a25852809f.png)

- **ENLACES ABSOLUTOS**: Los enlaces absolutos son aquellos cuyo destino apunta a un documento que está fuera del sitio, y debe ser especificado utilizando la URL completa:

![image](https://user-images.githubusercontent.com/72580574/232813422-102497d0-7f84-4211-9d4a-6b340d2574d4.png)

- **ENLACES INTERNOS**: Los enlaces internos permiten referenciar secciones de tu página, para lo cual se utiliza el id:

![image](https://user-images.githubusercontent.com/72580574/232813592-74169750-0019-48e8-ad79-89a0c257eff4.png)

También podés usar como destino una sección específica una página distinta:

![image](https://user-images.githubusercontent.com/72580574/232813669-a0ee59e3-f18b-4bed-973e-255e10f5e39c.png)

 El enlace apunta a la sección que tiene el id formulario dentro de la página “contacto.html”. No sólo es posible agregar enlaces a texto, también podés hacerlo con otros elementos. Por lo general, se usan textos o imágenes.  Veamos un ejemplo de enlaces con una imagen:
 
 ![image](https://user-images.githubusercontent.com/72580574/232813741-7401dba0-d744-4ace-be77-0c32a4ceb929.png)

---

## :star: A PRACTICAR :star:

1. Crea un formulario de contacto: Creá un formulario de contacto como indica la imagen a continuación, usando los códigos vistos anteriormente.

![image](https://user-images.githubusercontent.com/72580574/232813935-c7cb2d4e-afac-406e-a24e-eeb3a6d530a6.png)



---

## :star: CREA UN DOCUMENTO NUEVO :star: 

En el editor de texto, creá un documento nuevo llamado “index.html”. Escribí con etiquetas HTML:


- Nombre y apellido: tu nombre y apellido.

- Nombre del docente: su nombre y apellido.


Guardá, abrí el archivo en el browser de tu preferencia, y observá el resultado.

---

##  :star: WIREFRAME Y ESQUELETO HTML :star:

1. Creá un wireframe en Balsamiq, Mockflow o similar, basado en el sketch diseñado en clase. 
Debe tener un encabezado, un logo y un pie de página.


2. Creá el esqueleto en HTML de la página principal, usando el wireframe como base



---


## :book: MATERIAL AMPLIADO

- [¿Como funciona un DNS?](https://www.youtube.com/watch?v=dIGxJCqLJlY)

- [Software para prototipar](https://mzl.la/2PCaR3h)

- [Referencia de elementos HTML5](https://mzl.la/2PCaR3h)
