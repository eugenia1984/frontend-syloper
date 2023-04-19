# :star: 8 - INCLUYENDO CSS EN NUESTRO PROYECTO :star:

---

## :book: Temas

- MULTIMEDIA EN HTML: imáges, video, audio, iframe.

-  A PRACTICAR

- BASE DE CSS: premisas, sintaxis CSS, padres e hijos, insertar CSS

- CLASS

- ATRIBUTO ID

- CLASS VS. ID

- HERENCIA Y CASCADA

- PROCEDENCIA DE DECLARACIONES 

- ESTILOS INLINE 

- ESPECIFICIDAD 

- PRIMERAS PROPIEDADES BÁSICAS: COLOR

- A PRACTICAR

- MATERIAL AMPLIADO

---

## :book: GLOSARIO

- **Listas**: HTML permite agrupar elementos que tienen más significado de forma conjunta. Aunque cada palabra por separado tiene sentido, de forma conjunta constituyen el menú de navegación de la página, por lo que su significado conjunto es mayor que por separado. Esto se denomina listas.

- **Tablas**: son un conjunto de celdas organizadas, dentro del cual es posible alojar distintos contenidos. Sirven para representar información tabulada en filas y columnas.

- **Formularios**: son etiquetas donde el usuario ingresará o seleccionará valores, que serán enviados a un archivo encargado de procesar la información.

- **Enlaces**: también conocidos como links o anchors, se utilizan para relacionar partes del mismo documento. Por defecto, se visualizan azules y subrayados.

---

## :star: MULTIMEDIA EN HTML :star:

## IMÁGENES

✦ **Enriquecen el HTML**: las imágenes son elementos que enriquecen la experiencia de los usuarios. 

✦ **Insertar imágenes**: se insertan con la etiqueta <img />, que pertenece al grupo de las etiquetas que se cierran a sí mismas (con la barra al final). Para funcionar requiere, como mínimo, indicar en dónde está el archivo a mostrar. Eso se hace con el atributo “src” (el source o fuente), que respeta todas las reglas de ruteo vistas en los links. Se comportan como elementos de línea, esto significa que se verán una al lado de la otra.

### ALT

El “alt” es un texto que debe representar la foto que se está visualizando. Tiene que ser conciso y breve, pero dejar en claro de qué se trata la imagen.

![image](https://user-images.githubusercontent.com/72580574/232935210-5b42bc18-895c-40ec-9afc-d4605e4007d8.png)

---

## VIDEO

![image](https://user-images.githubusercontent.com/72580574/232935279-f3e1b15f-5081-4c76-9e5c-7e2fa7b51727.png)

---

## AUDIO

![image](https://user-images.githubusercontent.com/72580574/232935337-e0263df5-281d-4fc7-b419-5e7efb29b344.png)

### ATRIBUTOS DE LA ETIQUETA AUDIO 

. **Controls**: controles para manejar el audio.

- **Autoplay**: reproducción automática.

- **Loop**: repetición automática.

- **Preload**: almacenamiento temporal del audio.

- **"none"** : no almacena el archivo.

- **"auto"** : almacenamiento temporal del archivo.

- **"metadata"** : almacena temporalmente sólo los metadatos del archivo.

Se pueden especificar múltiples fuentes de archivos usando el elemento <source>, con el fin de proporcionar vídeo o audio codificados en formatos diferentes, para diversos navegadores.

![image](https://user-images.githubusercontent.com/72580574/232935478-429dcc60-5588-4347-bd83-5ea1c710ca10.png)

---

## IFRAME

Es un elemento HTML que permite insertar o incrustar un documento HTML dentro de un documento HTML principal.

![image](https://user-images.githubusercontent.com/72580574/232935579-97ded107-c77f-4e49-8fbc-603c0dd46126.png)


![image](https://user-images.githubusercontent.com/72580574/232935605-9d32aff8-9d23-4b82-9494-d9e170861691.png)


---

## :star: A PRACTICAR 

1. Creá un archivo HTML: Crea un archivo HTML que contenga: un video, un audio (podés descargar ambos de Drive), y un iframe que muestre un video que elijas en YouTube.


---

## :star: BASE DE CSS :star:

## PREMISAS

CSS (Cascading Style Sheets) es un lenguaje web para aplicar formato visual (color, tamaño, separación y ubicación) al HTML. 
Con él puedes cambiar por completo el aspecto de cualquier etiqueta HTML.


![image](https://user-images.githubusercontent.com/72580574/232935836-139a9dee-f7f4-4d43-927c-db535ae5750b.png)

CSS bien implementado permite cambiar todo el diseño de un sitio web, sin modificar el HTML. 

Las siguientes dos imágenes corresponden al mismo código HTML pero distinto CSS:


![image](https://user-images.githubusercontent.com/72580574/232935866-67887736-8759-429e-acdf-406151230df7.png)

---

## SINTAXIS CSS

![image](https://user-images.githubusercontent.com/72580574/232935927-15c839b9-7ad7-4281-8693-757142380fe6.png)

### REGLAS SINTÁCTICAS

- Cada declaración CSS está formada por un juego de pares propiedad: valor;

- No se ve afectado por el espacio en blanco. Las propiedades se pueden escribir de corrido o una debajo de la otra.

- Siempre que la propiedad represente un número, el valor debe indicar en qué unidad se expresa. 


---

## PADRES E HIJOS

Cuando tienes una etiqueta “dentro” de otra, lo que hacemos es aplicar el concepto de padres e hijos.

En este caso,  section es padre de article y, a su vez, article es padre del h2 y del p.

![image](https://user-images.githubusercontent.com/72580574/232936084-f4054aec-70ce-4748-957e-55c924701d08.png)

Esto te habilita a agregar atributos específicos a “hijos”, sin alterar los del “padre”. Un padre puede tener muchos hijos, y todos ellos heredan sus características, pudiendo tener también características particulares.


![image](https://user-images.githubusercontent.com/72580574/232936113-8a77c3e6-3477-455e-bb0f-0535814f9ece.png)

En este caso, se observa la forma correcta de declarar cada estilo. Cuando querés seleccionar una etiqueta, debés incluir las etiquetas padre/s para que sean más específicas a la hora de aplicar estilos.

![image](https://user-images.githubusercontent.com/72580574/232936143-2a3c2395-eab4-4d61-bad7-53ccd5c156b3.png)


---

## INSERTAR CSS EN EL HTML

- **Forma EXTERNA**: dentro de la etiqueta <head>, llamás al archivo CSS que necesites (recordá el uso de rutas relativas y absolutas).

 ![image](https://user-images.githubusercontent.com/72580574/232936262-8054e8c2-60e8-4fda-9f05-3d7861b38072.png)
 
- **Forma INTERNA**: es recomendable que esté dentro de la etiqueta <head>. Puede estar en <body>, pero sería más desprolijo.

  ![image](https://user-images.githubusercontent.com/72580574/232936330-2cf20088-1df7-4af5-8149-f71b06d66000.png)

  Otra forma INTERNA, muy poco recomendable, consiste en usar para “parches” específicos, o pruebas. Se hace difícil mantenerlo.
  
  ![image](https://user-images.githubusercontent.com/72580574/232936366-af93b623-af78-4908-a29e-45652f31c921.png)

---
  
## :star: CLASS :star:
  
Generalmente se utiliza para darle estilos a cierta parte del código. 
Por ejemplo, si querés que una imagen tenga bordes, y que además sean redondeados.
  
  
### CLASS DESDE CSS
  
Desde CSS, podés usar los nombres que quieras, siempre y cuando empiecen con LETRAS, y pongas un “.” adelante. Lo recomendable es poner un nombre que haga referencias a los estilos que tendrá. Por ejemplo: 

![image](https://user-images.githubusercontent.com/72580574/232936476-a6e651ac-c417-431e-ac98-ea7282b66eaa.png)

###  HTML: ATRIBUTO CLASS=“” 
  
En el HTML, para aplicar una clase tenés que usar el atributo “class”, y luego colocar en el valor el nombre de la clase (que has especificado en CSS).

  ![image](https://user-images.githubusercontent.com/72580574/232936540-a7909c60-3abb-4217-a8d6-8d8052e1b7af.png)

  
### MÁS DE UNA CLASS   
  
Podés aplicar más de una clase a cada etiqueta separada por un espacio. De esta manera, podrás tener estilos diferenciados para cada clase.
  
 ![image](https://user-images.githubusercontent.com/72580574/232936603-9471b8b9-5bc7-4e1d-9a43-dc158775fd25.png)

  
--- 
  
## :star: ATRIBUTO ID :star:

- Generalmente se usa para nombrar porciones de código y sectores, como por ejemplo cuando querés nombrar distintas secciones.

- Es posible ponerle ID a cualquier elemento HTML para darle un "nombre". Y así como el ID, todos los elementos también aceptan el atributo class="". 

- Dicha clase se utiliza cuando querés aplicar el mismo estilo a más de un elemento, y la búsqueda por etiqueta no sirve para lograrlo. No necesitás escribir varias veces el mismo CSS, ni repetir el ID.
  
 ###   ID DESDE CSS 
  
Desde CSS, podés usar los nombres que quieras, siempre y cuando empiecen con LETRAS, y pongas un “#” adelante. Lo recomendable es poner un nombre que haga referencias a los estilos que tendrá. Por ejemplo: 
  
![image](https://user-images.githubusercontent.com/72580574/232936811-03f14b71-3eaf-48f3-a53e-a515f1781db8.png)
 
### HTML: ATRIBUTO ID=“” .

  Para aplicar un ID en el HTML, debes usar el atributo “id”, y luego en el valor el nombre del ID (que especificaste en CSS). Por ejemplo:
  
![image](https://user-images.githubusercontent.com/72580574/232936872-592b28ee-4838-42fb-8198-6acf7603c686.png)
  
  
---
  
## :star: CLASS VS. ID :star:
  
![image](https://user-images.githubusercontent.com/72580574/232936953-1f704a44-6620-49e8-a625-4a47eb47c3d6.png)
  
### EJEMPLO
  
  
Tanto ID como Class pueden ser utilizadas dentro del html en diferentes etiquetas. Sin embargo, los nombres otorgados a las clases se pueden repetir, mientras que utilizados en los IDs no.

  ![image](https://user-images.githubusercontent.com/72580574/232936993-70665a8e-02d4-4df7-bbf4-98d70714c3ae.png)

  
  
---  
  
##:star: HERENCIA Y CASCADA :star:  
  
  
### HERENCIA
  
  
En general, estas propiedades se pueden intuir. Por ejemplo, podrás heredar de un elemento padre el tamaño de letra y color de la misma, a menos que el elemento hijo tenga otros estilos aplicados. 
  
![image](https://user-images.githubusercontent.com/72580574/232937148-ed44c61c-91a2-4da3-b09d-9813388c8fd4.png)
 
### CASCADA
  
El navegador lee de arriba hacia abajo (forma de cascada) ¿qué color creés que se aplicará al párrafo (p) al ver el siguiente código?
  
![image](https://user-images.githubusercontent.com/72580574/232937279-75a45720-fe4a-41c2-be2b-e9f9fc5db1f5.png)

###   EJEMPLO DE BUENA PRÁCTICA
  
  
![image](https://user-images.githubusercontent.com/72580574/232937331-58103bb9-2ccf-4ba1-ad7d-90c1bb919054.png)

---
  
## :star: PROCEDENCIA DE DECLARACIONES  :star:
  
Cuando reglas distintas apuntan al mismo objeto: 

- Si son propiedades distintas, se suman (se combinan). 

- Si tienen alguna propiedad repetida, sólo una queda. 


Esto es lo que se denomina precedencia. 

- ID pisa cualquier otra regla.

- Class sobreescribe las reglas de etiqueta, pero no las de ID.

- Etiquetas tienen la menor precedencia.
  
**ID > Class > Etiquetas**

---
  
## :star: ESTILOS INLINE :star:  
 
Si utilizas estilos inline, sobrescribirán cualquier estilo de las páginas externas de CSS. Se podría decir que los estilos inline son los que tienen una mayor especificidad, por lo tanto, no es recomendable utilizarlos en tu página

![image](https://user-images.githubusercontent.com/72580574/232937629-142847e4-c35a-4c44-8a03-1ebb091e08f0.png)
  
---  
  
## :star: ESPECIFICIDAD :star:
  
La importancia de cada selector:

![image](https://user-images.githubusercontent.com/72580574/232938706-06cf77e1-21b7-4f85-83b7-36a9a70ea0d7.png)
  
### IMPORTANT
  
- Si tenés 3 reglas CSS, es poco probable que “choquen”, pero en un CSS extenso es más común.

- La declaración !important; corta la precedencia.  Se escribe después del valor de la propiedad CSS que se quiere convertir en la más importante.  Se utiliza un !important; por cada valor a pisar. 

Si necesitas más de 5 !important en tu CSS, algo estás haciendo mal.
  
---
 
## :star: PRIMERAS PROPIEDADES BÁSICAS :star:
  
###  COLOR

Mediante esta propiedad, podrás agregar color a los textos de tu sitio.

#### ¿Cómo se eligen los colores?

- Desde Google, podés buscar “color picker” (alternativa w3schools).
  
![image](https://user-images.githubusercontent.com/72580574/232939239-96cdf13b-8bc0-42d6-96cb-7a7109185cee.png)

- Desde Visual Studio Code, simplemente te “parás” sobre el color. Por ejemplo, escribí “red” y hacé la prueba:

![image](https://user-images.githubusercontent.com/72580574/232939271-a879f481-a034-49bc-bf15-5f91c9ee1840.png)
  
###  TIPOS DE VALORES PARA COLOR 
  
Existen distintos valores, pero nos centraremos en 3:

- Por nombre del color (ej: red).

- Hexadecimal (ej: #ffffff).

- RGB (por ejemplo: 50, 212, 227). Si agregás un valor más, podés manejar su opacidad. 
  
red, green, blue) Cada color permite hasta 256 valores.
  
---
 
## :star: A PRACTICAR

1. Agregá atributos a los archivos:   Al archivo HTML creado previamente, agregá un div con un párrafo lleno de texto, y asignale la clase “desafio1”. Además, creá un archivo CSS con una clase llamada “desafio1”; y asignale la propiedad color con valor naranja (orange). 

  
---
 
## :star: MATERIAL AMPLIADO : star:
  
- [patrones sutiles](https://www.toptal.com/designers/subtlepatterns/)  
  
- [recursos de dominio público](https://archive.org/) 
  
- [jardín zen CSS](http://www.csszengarden.com/)
  
---  
