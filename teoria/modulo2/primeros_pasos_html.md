# :star: 7 - Primeros pasos con HTML :star:

##  ETIQUETAS HTML

Las etiquetas HTML están delimitadas por un inicio y un final de cada elemento. Lo que se encuentra dentro de la etiqueta (el contenido) es lo que estás formateando. 

Toda etiqueta es un juego de pares: una etiqueta abre, otra cierra. 

![image](https://user-images.githubusercontent.com/72580574/232800794-8dcca8ce-e51b-442a-9fc7-bcb3cc208757.png)

## ATRIBUTOS DE LAS ETIQUETAS

Todas las etiquetas aceptan atributos, esto es, cualquier característica que pueda ser diferente entre una etiqueta y la otra.  El valor que tendrá va entre comillas. 

Cada una puede tener más de un atributo, separados entre sí por espacios. Los mismos sólo van en la de apertura. 

![image](https://user-images.githubusercontent.com/72580574/232800943-2354a6da-8e17-43e5-bd76-a0cbd11f8dfb.png)


## ANIDAR ETIQUETAS

Es posible meter una etiqueta dentro de la otra, de hecho, esto es más común de lo que parece. 

Lo más importante es tener presente que siempre se cierran en orden inverso a la apertura.


![image](https://user-images.githubusercontent.com/72580574/232801130-ba1e408a-c983-4d01-a6df-2ae086a5eaf4.png)


## SINTAXIS DEL CÓDIGO

Orden dentro del código:

✱ Manejo de tabulaciones.

✱ Bloques de código.

##  ETIQUETAS CERRADAS Y ABIERTAS

Las cerradas encierran un contenido, por lo general texto, mientras que las abiertas sirven, entre otras cosas, para incluir elementos como imágenes, líneas, entre otros.

En el ejemplo tenemos una etiqueta cerrada llamada Párrafo, que engloba un texto y una etiqueta abierta para incluir una línea horizontal. El signo “/” se utiliza para las etiquetas de cierre. En estas últimas se pone a continuación del signo “<”, mientras que en las abiertas delante del signo “>”. 

![image](https://user-images.githubusercontent.com/72580574/232801341-1930503e-159e-4461-9efa-6b3924e83411.png)

## ETIQUETAS ABIERTAS EN HTML5

Ya no es una obligación poner el signo ``“ / ”``.  

Por ejemplo, ``<img src=””>`` funcionará correctamente, y lo mismo sucederá con ``<br>``, ``<hr>``, los meta tag.

## ESTRUCTURA BÁSICA

✱  ``<head>``: es la parte privada del documento, que se utiliza como un espacio de comunicación entre el sitio web y el navegador. 

Esta etiqueta envuelve otras  importantes como <title>, las etiquetas <meta> y aquellas relacionadas con la importación de documentos CSS y JS.

✱  ``<body>``: encierra el contenido propiamente dicho del sitio. 

Ambos deben estar dentro de un elemento principal: la etiqueta `<html>`.

✱ ``<html>``: etiqueta inicial, que define que el documento está bajo el estándar de HTML. Abre y cierra, por lo tanto es fundamental no olvidar la etiqueta </html> al finalizar el documento, pues sino no cargará correctamente el contenido de mi sitio.


✱ ``<title>``: la etiqueta title define el título de la página, el cual será visualizado en la solapa del navegador.


✱ ``<meta>``: se utiliza para añadir información sobre la página (ya sean palabras clave, el autor, la descripción del sitio, etcétera), la cual pueden valerse los buscadores. También puede definir el idioma y la codificación en la cual está escrita la página.

##  DOCTYPE

Cuando escribís tu documento HTML, lo primero que tenés que hacer es escribir el DOCTYPE, el cual declara el tipo de documento. Es decir, sirve para indicar que tu documento está escrito siguiendo la estructura determinada por un DTD concreto. Un DTD es la definición del tipo de documento.

`<!DOCTYPE html>`

![image](https://user-images.githubusercontent.com/72580574/232804139-160c0689-11aa-45dc-ad9e-6151646f0650.png)

## TIPOS DE ETIQUETAS: GRUPO GENERAL

Todas las etiquetas que van dentro del ``<body> </body>`` se dividen en dos grupos: 

- **Elementos de bloque**: son aquellos que, sin ser modificados por CSS, ocupan el 100% del ancho del contenedor, y se mostrarán uno abajo del otro.


- **Elementos de línea**: sólo ocupan el ancho que diga el contenido, y se verán uno al lado del otro.


- ``<h1>`` a`` <h6> ``(de bloque): un encabezado es, semánticamente hablando, el texto que encabeza o titula el contenido que sigue. Se puede tratar de un artículo, un texto o una sección del documento que estamos viendo.

![image](https://user-images.githubusercontent.com/72580574/232804520-269a8929-22ca-41be-99e6-6407b0703fb1.png)

Existen 6 niveles: del`` <h1> </h1>`` al`` <h6> </h6>``. Esta jerarquía se debe respetar en cada documento HTML que forme parte del sitio web.

![image](https://user-images.githubusercontent.com/72580574/232804688-70330e4a-6432-449c-bab5-3e5c0c425de8.png)


