## :star: 10 - BOX MODELING 


## :star: GLOSARIO

- Joroba de camello: permite que se puedan leer de forma más simple palabras compuestas.

- Reset CSS: contienen en su código fuente definiciones para propiedades problemáticas, que los diseñadores necesitan unificar desde un principio.

. Unidades de medidas

-Absolutas

Px (pixels): es la unidad que usan las pantallas.


-Relativas

Rem: relativa a la configuración de tamaño de la raíz (etiqueta html). 

Porcentaje: tomando en cuenta que 16px es 100%.

Viewport: se utilizan para layouts responsivos (más adelante).

---

## :star:  BOX MODEL

## Propiedades de la caja

Todos los elementos del HTML son cajas. Un ``<strong>``, un`` <h2>`` y demás, son rectangulares: 

- En los elementos de línea, se verá uno al lado del otro. 

- En cambio en los de bloque, uno debajo del otro.

![image](https://user-images.githubusercontent.com/72580574/233109474-98673fa7-db74-40cb-bf12-0afbdee209af.png)

Ese concepto de que “todo es una caja”, da lugar a algo llamado en web como box model. Sin importar si son de línea o de bloque (pero tienen su incidencia en lo que sean), todas las etiquetas tienen propiedades en común.

## Propiedades en común

- CONTENT: el espacio para el texto o imagen.

- BORDER: el límite entre el elemento y el espacio externo.

- PADDING: separación entre el borde y el contenido de la caja. Es un espacio interior.

- MARGIN: separación entre el borde y el afuera de la caja. Es un espacio exterior.

![image](https://user-images.githubusercontent.com/72580574/233109917-0891a11b-7af8-4ec7-bfbe-7e1f8859fde5.png)

**Ejemplo**:

![image](https://user-images.githubusercontent.com/72580574/233110016-81cf2022-d3ca-4c97-9351-384e793007ea.png)


## Alto y ancho de los elementos

### Alto

La propiedad CSS que controla la altura de la caja de los elementos se denomina height.

No admite valores negativos, y aquellos en porcentaje se calculan a partir de la altura de su elemento padre. 

### Ancho

Se denomina width a la propiedad CSS que controla la anchura de la caja de los elementos.

Dicha propiedad no admite valores negativos, y aquellos en porcentaje se calculan a partir de la anchura de su elemento padre. 


![image](https://user-images.githubusercontent.com/72580574/233110213-c843aadc-beaa-4b66-8ceb-3dee1a8071a5.png)


## Problema común y solución

Problema:

![image](https://user-images.githubusercontent.com/72580574/233110281-257b2ff3-2775-4a1a-aae5-c1bdfb1befa9.png)

Solución:

![image](https://user-images.githubusercontent.com/72580574/233110322-7c14b9cd-7014-4fdc-a0a8-9801c2773f7f.png)

-Aclaración: Cuando un elemento tiene un alto o ancho fijos, cualquier contenido que exceda la caja será visible. El inconveniente que esto genera es que, si luego se suma otro contenido, los mismos se van a superponer. 

![image](https://user-images.githubusercontent.com/72580574/233110583-697e1de5-fabd-45b6-b2b3-4752bf903f13.png)


## Overflow

Propiedad: **overflow**

Tiene 4 valores posibles:

- **visible**: valor por defecto. El excedente es visible.  

- **hidden**: el excedente no se muestra (lo corta) →  recomendado.  

- **scroll**: genera una barra de scroll en los dos ejes (x/y) del elemento, aunque no se necesite.  
- **auto**: genera el scroll solo en el eje necesario.

Veamos cómo se ve aplicando el **overflow: hidden**.

![image](https://user-images.githubusercontent.com/72580574/233110840-72fc8774-ca2b-44f1-872e-00a4f9344d78.png)


## Espacio exterior

### Margin (márgenes)

Las propiedades margin-top, margin-right, margin-bottom y margin-left, se utilizan para definir los márgenes de cada uno de los lados del elemento por separado.

Podés definir los 4 lados (forma abreviada “margin”) o sólo aquellos que necesites. 

![image](https://user-images.githubusercontent.com/72580574/233110983-c64c5d4e-fe10-4e99-8598-0cc6c9bfb44d.png)

![image](https://user-images.githubusercontent.com/72580574/233111068-4f5600d9-2fdf-433f-aaac-2d8aac694f05.png)


## Espacio interior

### Padding (relleno)

Las propiedades padding-top, padding-right, padding-bottom y padding-left, se utilizan para definir los espacios internos de cada uno de los lados del elemento, por separado.

Podés definir los 4 lados (forma abreviada “padding”) o sólo aquellos que necesites.

![image](https://user-images.githubusercontent.com/72580574/233111173-8984510a-906e-42eb-bb54-cf95c2378563.png)

![image](https://user-images.githubusercontent.com/72580574/233111497-87d8cd4c-2c79-45ef-b96b-990eba00f656.png)


## Bordes

### Border

Las propiedades border-top, border-right, border-bottom, y border-left, se utilizan para definir los bordes de cada lado del elemento por separado.

Podés definir los 4 lados (forma abreviada “border”) o sólo aquellos que necesites. 

![image](https://user-images.githubusercontent.com/72580574/233111657-ab93e3b9-3d77-4e5a-b9b6-773b7d06ba33.png)

### Nota
A diferencia de los márgenes y padding, los bordes se forman con 3 valores:

- Tipo de borde (border-style).

- Grosor (width).

- Color (color).

![image](https://user-images.githubusercontent.com/72580574/233111831-ed811164-746c-4e8a-afb8-75556b516f17.png)

![image](https://user-images.githubusercontent.com/72580574/233111888-9ee53922-7f81-4f3f-a6be-46b7424a59e3.png)


---

## :star: DISPLAY :star:


## Tipo de elementos (block, inline)

- El estándar HTML clasifica a todos sus elementos en dos grandes grupos: elementos en línea (inline) y de bloque (block).

- Los elementos de bloque siempre empiezan en una nueva línea, y ocupan todo el espacio disponible hasta el final de la misma (100%). 

- Por otra parte, los elementos en línea no empiezan necesariamente en nueva línea y sólo ocupan el espacio necesario para mostrar sus contenidos.

![image](https://user-images.githubusercontent.com/72580574/233112025-d0fff28d-bb4e-4d62-917c-71c19e36b2a3.png)

- Los elementos en línea definidos por HTML son aquellos que se usan para marcar texto, imágenes y formularios. 

- Los elementos de bloque definidos por HTML se utilizan para marcar estructura (división de información/código) 


## Display

Se encarga de definir **cómo se ve un elemento HTML**. Los dos comportamientos más importantes son: 

- Pasar un elemento de bloque a uno de línea. 

- Pasar un elemento de línea a uno de bloque.

Eso se hace con los valores block e inline respectivamente: 

- **block**: convierte el elemento en uno de bloque.

- **Inline**: transforma el elemento en uno de línea.

![image](https://user-images.githubusercontent.com/72580574/233112513-b3705a9d-d06d-4d54-be55-ae525750a0a4.png)

### Inline-block

Hay una propiedad que permite tomar lo mejor de ambos grupos, llamada “inline-block”. Brinda la posibilidad de tener “padding” y “margin” hacia arriba y abajo.

```CSS
li {
    display: inline-block;
}
```

El **display inline-block con ancho fijo** pone las cosas una al lado de la otra. Pero si tenés los anchos milimétricamente calculados, puede ser que el último aparezca abajo (y no al lado). 
Si entre los elementos de línea (inline o inline-block) hay “aire” (sea uno o 500 enter, espacios o tab), el mismo se muestra como un espacio de barra espaciadora. Esa es la razón por la cual no entran, y se muestran uno debajo de los demás.

![image](https://user-images.githubusercontent.com/72580574/233112776-41dee8ac-7d03-42d9-9d2b-6625c901b51f.png)


## Tabla comparativa

Dependiendo de si la etiqueta de HTML es “ de bloque” o “en línea”, algunas propiedades serán omitidas

![image](https://user-images.githubusercontent.com/72580574/233112861-17abe367-a813-44af-aa4f-f1857e426dc9.png)

## Quitar un elemento(display none)

El display tiene también un valor para quitar un elemento del layout  **display: none**;  Lo oculta, y además lo quita (no ocupa su lugar). 

```CSS
div {
    display: none;
}
```

## :star: FLOTACIONES :star:

## Float

La flotación consiste en mover un elemento hacia la derecha o izquierda de su línea, y todo lo que viene después se acomodará en el “hueco” que queda vacío. Es una manera ‘old fashion’ de hacer una columna. Se usa la propiedad float que acepta dos valores:

- **left**: corre la caja a la izquierda.

- **right**: corre la caja a la derecha.

Importante: cuando un elemento flota, deja de pertenecer al flujo normal del HTML.

```CSS
divgreen {
    width: 400px;
    background-color: rgb(238, 255, 65);
    float: left;
    padding: 10px; 
}
```

![image](https://user-images.githubusercontent.com/72580574/233113306-0261c29f-cdae-4b75-bd7d-3341556e08ee.png)

### Advertencias de flow

Todo elemento flotado, deja de “empujar” en alto a su contenedor. Este último colapsa su altura si todos los elementos flotan.

**¿Cómo solucionarlo?**

Si googleás sobre el tema, encontrarás muchas técnicas para solucionar el problema del float.  Al elemento que se colapsa, dale un **overflow** (excedente) con cualquier valor -**menos scroll**-.


## Clear

La **propiedad clear** permite modificar el comportamiento por defecto del posicionamiento flotante, para forzar a un elemento a mostrarse debajo de cualquier caja flotante. La regla CSS que se aplica al segundo párrafo del ejemplo anterior (el cuadro azul) es la siguiente

```CSS
divblue {
    clear: left;
    background-color: blue;
    width: 400px;
}
```

---

##:star: POSICIONES :star:  

## Position

Es una propiedad CSS pensada para ubicar un elemento, con una libertad muy flexible. Algunos ejemplos de uso:

- Superponer elementos.

- Crear publicidades que te sigan con el scroll o un menú.

- Hacer un menú con submenú adentro.

Valores posibles: **relative**, **absolute**, **fixed**, o **sticky** (cualquiera excepto static).


## ¿Cómo ubicar un elemento?

¿CÓMO UBICAR UN ELEMENTO?.

1. Define qué tipo de posición querés usar.

2. Indicá desde dónde calcular la distancia (si será desde arriba, derecha, abajo o izquierda).

3. Determiná un valor numérico para las propiedades top, bottom, left, right.


## Position: relative - absolute - fixed - sticky

Al aplicar esta propiedad, puedes usar 4 propiedades para posicionar los elementos, y debes darles un valor numérico. Ellas son:

- top: calcula desde el borde superior (ej:  top: 100px ).

- right: calcula desde el borde derecho (ej:  right: 50px).

- bottom: calcula desde el borde inferior (ej: bottom: 100px ).

- left: calcula desde el borde izquierdo (ej: left: 50%).

### Position relative

El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado en relación a sí mismo.

El desplazamiento no afecta la posición de ningún otro elemento, provocando que se pueda superponer sobre otro.

```CSS
div {
    width: 100px;
    height: 100px;

    position: relative;
    top: 40px; 
    left: 40px;
}
```

Se ve asi:

![image](https://user-images.githubusercontent.com/72580574/233114510-71be388a-e48e-4888-90f8-c9c574ff1fab.png)

### Position absolute

El elemento es removido del flujo normal del documento, sin crearse espacio alguno para el mismo en el esquema de la página. 

Es posicionado relativo a su padre, siempre y cuando su padre tenga “position:relative”. De lo contrario, se ubica relativo al body. Se recomienda establecer un ancho y alto (width, height). 

```div
div {
    width: 100px;
    height: 100px;

    position: absolute;
    top: 40px; 
    left: 40px;
}
```

Se ve asi:

![image](https://user-images.githubusercontent.com/72580574/233114735-739a9d1c-592e-4d41-ab33-ec3e6ae78039.png)


### Position: Fixed and Sticky

Ambos métodos permiten que el elemento se mantenga visible, aunque se haga scroll.

### Fixed

Esta posición es similar a la absoluta, con la excepción de que el elemento contenedor es el “viewport”, es decir, la ventana del navegador. 

Puede ser usada para crear elementos que floten, y que queden en la misma posición aunque se haga scroll. 

```CSS
div {
    width: 300px;
    background-color: yellow;
    
    position: fixed;
    top: 0;
    left: 0;
}
````

Se ve asi:

![image](https://user-images.githubusercontent.com/72580574/233115042-03529a46-4b61-464b-b03e-61f51d41cb36.png)

### Sticky

El elemento es posicionado en el “flow” natural del documento, podría decirse que es un valor que funciona de forma híbrida, es decir, como “relative” y también “fixed”. 

Esto es, cuando llega el “viewport” (la ventana del navegador) hasta donde se encuentra, se “pegará” sobre el borde superior.

```CSS
div {
    position: sticky;
    top: 20px;
}
```

Se ve asi:

![image](https://user-images.githubusercontent.com/72580574/233115385-8b579aa5-7c49-4341-ab2d-ef8feb826a7a.png)


### Menu con Submenu

- El position (tanto relative como absolute) se usa, entre otras, para hacer un menú que tenga un submenú emergente. Los ítems del primero son relativos, sirven como borde de cualquier hijo. 

- La lista dentro de un list-item es absoluta. Por defecto, la sublista tiene display: none. Recién cuando un list-item detecte el :hover, si adentro tiene una lista, dale display: block (no te preocupes, esto quedará quedará más claro con el ejemplo que veremos a continuación).

![image](https://user-images.githubusercontent.com/72580574/233115587-ca83483a-bf9e-47dc-a59d-59cdee99ceeb.png)

```HTML
<ul>
    <li><a href="">Item</a></li>
    <li><a href="">Item</a></li>
    <li><a href="">Item</a>
        <ul>
            <li><a href="">Subitem</a></li>
            <li><a href="">Subitem</a></li>
        </ul>
    </li>
    <li><a href="">Item</a></li>
</ul>
```

```CSS
ul {
   list-style: none;
   font-size:0 /* truco por el uso de inline-block*/
}
li {
   display: inline-block;
   width: 25%;
   position:relative;
   font-size: 14px
}
ul ul {
   position: absolute;
   display: none;
}
ul ul li {
   display: block;
}
ul li:hover ul {
   display:block;
}

```

## Propiedad z-index

El z-index entra en juego cuando dos elementos que tienen position se superponen. Esta propiedad acepta como valor un número (sin ninguna unidad, ni px, ni cm, ni nada); a valor más alto, se mostrará por encima de los demás elementos. 

Por defecto, todos los objetos tienen z-index:1. Si dos objetos tienen el mismo valor de z-index y se superponen, el que fue creado después en el HTML se verá encima del otro.


---

## :star: MATERIAL AMPLIADO :star:

✦  [Imágenes de relleno | placekitten](https://placekitten.com/)

✦  [Imágenes de relleno | placedog.net](https://placedog.net)

✦  [The CSS Box Model | CSS-TRICKS](https://css-tricks.com/the-css-box-model/)

---

## :star: EJERCICIO BOX MODEL :star:

> **Consigna**: agregá al CSS del Proyecto Final (¿Cuál necesitan: espacio exterior, interior, bordes?). 

- Márgenes. 

- Rellenos.

- Bordes.

- Menú.

> **Aspectos que deberías tener en cuenta**: modificá el menú con las propiedades de Display. Sumar márgenes, rellenos y bordes a las secciones dentro de las páginas. No necesariamente tienen que estar las tres propiedades a la misma sección, pueden estar aplicadas a diferentes secciones diferentes propiedades.

---
