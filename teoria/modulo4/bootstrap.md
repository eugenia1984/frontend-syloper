# :star: 14 - BOOTSTRAP + THEME:star:

---

## :book: Temas:

- GLOSARIO

- BOOTSTRAP CON JS: carrousel, dropdown, modal, budges, popover, colapsados, breadcrumb

- BOOTSTRAP THEMES:

- RESPONSIVE: media queries, operador add, orientación

- MATERIAL AMPLIADO

---
---

## :star:GLOSARIO:star:

- **Librería**: es una colección de elementos, un conjunto de rutinas, en este caso código, que suelen tener un propósito concreto.

- **Framework**: se trata de un conjunto de herramientas y código, para trabajar de acuerdo con una metodología, utilizando determinados patrones.

- **Bootstrap**: es un framework originalmente creado por Twitter, que permite crear interfaces web con CSS y JavaScript, y cuya particularidad es la de adaptar la interfaz del sitio web al tamaño del dispositivo en que se visualice (es responsive).

---
---


## :star:BOOTSTRAP CON JS:star:

Muchos de los componentes de Bootstrap requieren el uso de JavaScript para funcionar. Específicamente, requieren jQuery, Popper.js y complementos propios de JavaScript. 

Para eso hay que colocar los <script> vistos en la clase anterior, cerca del final de las páginas, justo antes de la etiqueta de cierre </body>, para habilitarlas. jQuery debe ser lo primero, luego Popper.js, y luego nuestros complementos de JavaScript. 


## JS

Es un lenguaje con muchas posibilidades. No requiere de compilación, ya que el lenguaje funciona del lado del cliente, y los navegadores son los encargados de interpretar estos códigos.

Se utiliza para crear pequeños programas que luego son insertados en una página web, y en programas más grandes, orientados a objetos mucho más complejos. Con Javascript podemos crear diferentes efectos e interactuar con nuestros usuarios. 

##Bootstrap con JS

Para que puedas incluir en tu proyecto componentes tales como carrusel o menú con drop down, tenés que sumar al final de tus html tres links antes del cierre de la etiqueta body de la siguiente manera:

```HTML
<body> (…)
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
```



## carrousel

[Ejemplo](https://www.w3schools.com/bootstrap4/bootstrap_carousel.asp


##  dropdown

La clase **.dropdown** se usa para indicar un menú desplegable.

[Ejemplo](https://www.w3schools.com/bootstrap4/bootstrap_dropdowns.asp)

## modal

[Ejemplo](https://www.w3schools.com/bootstrap4/bootstrap_modal.asp)

## budges

```HTML
<h2>Título de ejemplo 
<span class="badge badge-secondary"> Nuevo </span> </h2>
<h3>Título de ejemplo <span class="badge badge-secondary"> Nuevo </span></h3>
```

## popover

```HTML
<div id="demo" class="collapse">
<a href="#" title="Título" data-toggle="popover" data-placement="left" data-content="Contenido">Izquierda</a>
<a href="#" title="Título" data-toggle="popover" data-placement="right" data-content="Contenido">Derecha</a>
```

## colapsados

```HTML
<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">
Click acá </button>
<div id="demo" class="collapse"> Texto desplegado a continuación: Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
```

## breadcrumb

```HTML
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Nosotros</a></li>
    <li class="breadcrumb-item active" aria-current="page">Contacto</li>
  </ol>
```


---
---

## :star:BOOTSTRAP THEMES:star:

Son marcos construidos por expertos, que permiten tener un diseño base como una extensión de Bootstrap, especialmente para un conjunto específico de problemas. Esto significa que no sólo extiende los componentes básicos de Bootstrap, sino que también se pueden agregar componentes, utilidades y complementos completamente nuevos.


En Bootstrap 4, los temas se crean con variables Sass, mapas Sass y código CSS propio. 
No existe una hoja de estilos especial para crear temas, como sucedía en Bootstrap 3. 
Se recomienda utilizar los archivos Sass (que veremos más adelante) incluidos en Bootstrap, para reutilizar todas las variables, mapas y mixins que puedas.


Estructura de archivos:

```
tu_proyecto
  scss
    custom.css
  node_modules
    bootstrap
      js
      scss
```

- Descargar el theme

1. Busca el tema de preferencia. [Bootstrap Oficial](https://themes.getbootstrap.com/) - [Otras Páginas](https://startbootstrap.com/themes/)

2. Seleccionar el tema, y descarga el .zip a la carpeta local. [Theme de Ejemplo](https://colorlib.com/wp/template/foodeiblog/)

3. Adapta el theme a tus necesidades.

#### Editando el Theme

Tener un theme es tan simple como descargarlo, y ya se tiene una página web completa.

La magia de cada diseñador está en cambiar, agregar y adaptar a la necesidad de cada cliente, y del diseño propuesto en nuestro mockup.

Para editarlo, sólo se debe revisar cada HTML y cambiar el contenido, si se desea cambiar el diseño hay que usar el SASS.

### Ventajas

- Se crea un sitio web de una forma rápida.

- Componentes incorporados.

- Fácil manejo de cada una de las páginas.

- Responsive.

- Mobile First.

- Óptimo.

- Base para un nuevo Theme.



### Desventajas

- Se escapan detalles de diseño.

- Hay que ser muy detallista para cambiar todo el contenido del theme.

- Es complicado cambiar de versión.

- Si necesitás añadir componentes que no existen, tenés que hacerlo vos mismo/a en CSS, cuidando que mantenga coherencia con el diseño y sea responsive.


---
---

##  :star:RESPONSIVE::star:

Para aprovechar Bootstrap, es fundamental conocer y entender muy bien el responsive. Cualquier cambio que se realice altera el diseño en todos los dispositivos.

## página responsive

El sistema detecta automáticamente el ancho de la pantalla y, a partir del mismo, adapta todos los elementos de la página, desde el tamaño de letra hasta las imágenes y los menús, ofreciendo al usuario la mejor experiencia posible. 

## media queries

- Pantallas extra pequeñas (móviles) < 576px.

- Pantallas pequeñas (_sm, tablets _en vertical) ≥ 576px.

- Pantallas medianas (md, para tablets en horizontal) ≥ 768 px.

- Pantallas grandes (lg, tamaño escritorio) ≥ 992px.

- Pantallas extra grandes (xl, escritorio grande) ≥ 1200 px.

### Ejemplo

Si quisieras que en las pantallas extra pequeñas (xs) el color de fondo que aplica la clase **.miestilo** sea rojo, y para el resto de tamaños sea verde, podrías hacer:

```CSS
.miestilo {
  background-color: green;
}

@media (max-width: 768px) {
  .miestilo {
     background-color: red;
  }
}
```


Si quisieras variar la alineación del texto que se aplica en una clase, a partir de las pantallas tipo escritorio:

```CSS
.miestilo {
      text-align: center;
}

@media (max-width: 992px) {
  .miestilo {
    text-align: left;
  }
}
```

Podés también modificar el cuerpo de texto, si lo utilizás en px para diferentes pantallas:

```CSS
@media (min-width: 600px) {
   div.example {
       font-size: 80px;
   }
}

@media (max-width: 600px) {
  div.example {
    font-size: 30px;
  }
}  
```

Recuerda que esto no es necesario si utilizas el font-size en “em”.


## operador add

Podés sumar diferentes indicaciones con las Media Queries, las cuales se utilizan con el operador “and”. En este caso, el estilo que definido se reproducirá en pantallas que van de 400px a 700px:

```CSS
@media (max-width: 700px) and (min-width: 400px) {
  .miestilo {
     text-align: left;
  }
}
```



## orientación

En este caso, sólo se reproducirá el estilo si la ventana tiene un ancho de de 700px o más, y la pantalla está en formato horizontal. 

```CSS
@media (min-width: 700px) and (orientation: landscape) {
  .miestilo {
    text-align: left;
   }
}
```

### Ejemplo de media queries

Modificación de menú de posición horizontal en pantallas grandes, a vertical en pantallas chicas.

```HTML
<div class=“topnav”>
  <a href="#">Home</a>
  <a href="#">Nosotros</a>
  <a href="#">Contacto</a>
</div>
```

```CSS
/* Top navigation bar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Topnav links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none; 
}

@media screen and (max-width: 600px) {
   .topnav a {
      float: none;
      width: 100%;
   }
}
```


Podés llegar a hacer cosas muy avanzadas y personalizar completamente el aspecto de una web según el tamaño del dispositivo.

- Cambiar el tamaño y la posición de una imagen. 

- Modificar la posición de cualquier elemento. 

- Cambiar el tamaño de letra, la fuente o su color. 

- Aplicar combinaciones de estilos avanzados. 

¡Cualquier cosa que se te ocurra!


---
---

## :star:ATERIAL AMPLIADO:star:

✦ [Font Awesome Iconos | Font Awesome Icons](https://fontawesome.com/icons

✦ [Íconos Material Design | Material Design Icons](https://materialdesignicons.com/)

---
---
