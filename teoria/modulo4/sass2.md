# :star: MODULO 4 -  SASS 2

---

## Temas:

- 1 - GLOSARIO

- 2 - DEFINICIÓN

- 3 - BUCLE

- 4 - @EACH

- 5 - MAPAS

- 6 - @EXTENDS

- 7 - MIXINS

- 8 - MATERIAL AMPLIADO

- 9 - EJERCICIOS

---

## :stars: GLOSARIO

**SASS**: es un preprocesador de CSS que te permite escribir un código, el cual luego se transforma (compila) en un archivo de CSS puro. Esto genera un código más limpio y sencillo de mantener y editar, a través de una estructura ordenada, usando un lenguaje de estilos.

- **Sintaxis**: en Sass cuentas con dos diferentes tipos de sintaxis: SCSS y SASS. La primera y más popular, es conocida como SCSS (Sassy CSS). Es muy similar a la sintaxis nativa de CSS, tanto así que te permite importar hojas de estilos CSS (copiar y pegar) directamente en un archivo SCSS, y obtener un resultado válido.

- **Nesting o anidación**: con la anidación de SASS, puedes organizar tu hoja de estilo de una manera que se asemeja a la de HTML, lo que reduce la posibilidad de conflictos en el CSS.

- **Import**: te permite incluir la fuente de tus archivos individuales en una hoja de estilo maestra.

- **Vars (variables)**: son una manera de guardar información que necesites reutilizar en tus hojas de estilos: colores, dimensiones, fuentes o cualquier otro valor. SASS utiliza el símbolo dólar ($) al principio de la palabra clave para crear una variable.

---

## :stars:  DEFINICIÓN

Con SASS puedes realizar operaciones matemáticas básicas en la misma hoja de estilo, y es tan sencillo como poner el símbolo aritmético adecuado.

### ejemplo:

```scss
$ancho: 720px;
$blue: #4285F4;
$green: #33D374;

.box_uno {
         background-color: $blue;
          width: $ancho/2; /* Ancho de 360*/
}
.box_dos {
            background-color: $green;
             width: ($ancho/2)-50;
}
```


```css
.box_uno {
   background-color: #4285f4;
   width: 360px;
}

.box_dos {
   background-color: #33d374;
   width: 310px;
}

```


Permiten establecer reglas para validar si se aplica o no una acción, cambio o asignación en el atributo de un elemento. Estas condiciones podrán incluir comparadores típicos (==, !=, <, >) entre variables, constantes o cualquier expresión intermedia.

``If: (Si condicional)``


Sólo en caso de cumplirse la condición, se ejecutará la generación de código del bloque asociado.

### EJEMPLO

```
$animal: gato; /* Mi constante */
p {
      @if $animal == gato {
             color: blue;
      } @else if $animal == perro {
                 color: red;
     } @else if $animal == caballo {
                color: green;
     } @else {
                color: black;
      }
}
```



---

## :stars:  BUCLE

Un bucle es una secuencia que repite más de una vez una porción de código, dada cierta condición. Cuando la misma deja de cumplirse, el bucle finaliza.

- `For: (Para) `

```
@for $var from  [to|through]  {
  //Bloque de reglas donde podrás utilizar $var mediante interpolación
}
```

``$var`` será el nombre de la variable que queramos utilizar en nuestro bloque.

Tanto ``<start>`` como ``<end>`` tendrán que ser expresiones SassScript válidas, que devuelvan números enteros. 
Por último, si indicamos ‘through’ se tendrán en cuenta los valores ``<start>`` y ``<end>`` dentro del bucle; si utilizamos ‘to’, no se tendrá en cuenta el valor ``<end>`` dentro del bucle.

```SCSS
@for $i from 1 through 3 {
  .casitodos-#{$i} { width: 2em * $i; }
}
```

```CSS
.casitodos-1 {
   width: 2em;
}

.casitodos-2 {
   width: 4em;
}

.casitodos-3 {
   width: 6em;
}
```


---

## :stars:  @EACH

La regla @each facilita la emisión de estilos, o la evaluación del código para cada elemento de una lista, o cada par en un mapa.

Es ideal para estilos repetitivos que sólo tienen algunas variaciones entre ellos ya que, de cumplirse una característica, realiza dicha acción.

```
@each $var in  {
  // Bloque de reglas donde podremos utilizar $var mediante interpolación
}
```

En este caso, <list> será cualquier expresión que devuelva una lista de elementos SassScript válida, es decir, una sucesión de elementos separados por comas.
  
### EJEMPLO
  
```SCSS
  @each $animal in puma, sea-slug, egret {
   .#{$animal}-icon { 
         Background-image:  
          url('/images/#{$animal}.png');
    }
} /*animal tendrá los valores de cada uno */
```
  
  
```CSS
  .puma-icon {
   background-image: url("/images/puma.png");
}

.sea-slug-icon {
   background-image: url("/images/sea-slug.png");
}

.egret-icon {
   background-image: url("/images/egret.png");
}
```
  
---
  
## :stars:  MAPAS

Los mapas son variables cuyo valor es una colección de variables. Se definen con un nombre que los identifica. Las claves suelen ser cadenas o números, mientras que los valores pueden ser cualquier tipo de dato.
  
Ejemplo: se necesita crear una serie de botones para compartir contenido y te exigen tres de diferente color. Para no crearlos uno a uno, generas un mapa  con clave “el botón” y valor “el color que tendrá”.
  
`$map: (key1: value1, key2: value2, key3: value3);`  
  
  ### EJEMPLO
  
  ```SCSS
  $redes: ( /*Declaramos nuestro mapa*/
        twitter: #55acee,
        facebook:  #3a5795,
        send-mail: #C25E30
); 
/*Creamos el bucle para usar los valores del mapa*/
@each $red, $color in $redes {
   .btn--#{$red} {
       background-color: $color;
   }
}
```
  
  ```CSS
  .btn--twitter {
   background-color: #55acee;
}

.btn--facebook {
   background-color: #3a5795;
}

.btn--send-mail {
   background-color: #C25E30;
}
  ```
  
---
  
## :stars:  @EXTEND
  
A menudo, al diseñar una página una clase debe tener todos los estilos de otra clase, así como sus propios estilos específicos. En esos casos usamos @extend, para traer los estilos de otra clase.

Por ejemplo, la metodología BEM fomenta las clases modificadoras que van en los mismos elementos que las clases de bloque o elemento. Pero esto puede crear HTML desordenado, es propenso a errores al olvidar incluir ambas clases, y puede traer problemas de estilo no semántico a su marcado.

### EJEMPLO
  
  ```SCSS
  .redsocial {
        border: 1px #f00;
        background-color: #fdd;
}
.redsocial--nueva {
        @extend .redsocial;
        border-width: 3px;
}
```
  
```HTML
<div class="redsocial redsocial--nueva">
  ¡Esta es una nueva red social!
</div>
```
  
```CSS
.redsocial, .redsocial--nueva {
  border: 1px #f00;
  background-color: #fdd;
}
.redsocial--nueva {
  border-width: 3px;
}  
```
  
---
 
## :stars:  MIXINS
  
Te permiten definir estilos que pueden ser reutilizados en tu proyecto. Una de las mayores diferencias con los Extend, es que los Mixins pueden recibir argumentos, los cuales nos permitirán producir una gran variedad de estilos con unas simples líneas.

Ya tenemos un poco más claro cuales son las diferencias entre estas importantes características de SASS. Recuerden que utilizaremos:

- Extends para compartir fragmentos de estilos idénticos entre componentes.

- Mixins para reutilizar fragmentos de estilos que puedan tener un resultado diferente en cada lugar donde los declaremos.

## EJEMPLO
  
  ```SCSS
  @mixin sizes($width, $height) {
   height: $height;
   width: $width;
}
.box {
   @include sizes(500px, 50px);
}
```
  
```CSS
.box {
      height: 50px;
      width: 500px;
}
```

---
  
## :stars:  MATERIAL AMPLIADO
  
- [Más información sobre BEM](https://css-tricks.com/bem-101/) | BEM 101

- [Más información sobre OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/) | Smashing Magazine
  
---

## :stars:  EJERCICIOS
         
1. Consigna: Escoge una porcion de codigo de tu CSS y aplica SCSS con al menos dos propiedades vistas en la clase de hoy:

-1 - Operaciones

-2 -Condicionales

-3 - Bucle
         
-4 - Each
         
-5 - Mapas
         
-6 - Extend
         
-7 - Mixins

2. Consigna: agrega SASS y sus operaciones a tu Proyecto Final.

-Aspectos que deberías tener en cuenta: Selecciona tres o más bloques de alguna de tus páginas que aún no tengan estilos, y genera el código necesario en SCSS.

---
