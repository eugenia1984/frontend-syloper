# :star: 12 - GRIDS :star:

---

## :book: Temas:

- GLOSARIO

- GRIDS: definición, grid layout,

- IMPLEMENTAR GRID: ¿por qué elegir grids?, diferencia entre flexbox y grids,

- PROPIEDADES DEL PADRE: el objetivo, filas y columnas explícitas, filas y columnas repetitivas, grids por áreas, espacios en grids, 

- PROPIEDADES DEL HIJO: distribución de elementos, justify-items(strech, start, end, center) y align-items(stretch, start, end, center), posición de elementos: justify-content(start, end, center, stretch, space-around, space-between, space-evenly), aling-content(start, end, center, stretch, space-around, space-between, space-evenly), posición de elementos: justify-self, elign-self, grid-area

- GRIDS MOBILE FIRST: media queries, breakpoints, tablet, desktop, meta viewport

- EJERCICIO

---
---

## :star:GLOSARIO:star:


**Flexbox**: es un modo de diseño que nos permite crear estructuras para sitios web de una forma más fácil. No se trata de una propiedad de CSS, sino de un conjunto de ellas. Se basa sobre un contenedor (padre) para ordenar a sus ítems (hijos).

- Row (flex-direction): esta propiedad nos va a permitir especificar si queremos que los flex items se dispongan en filas o columnas.

- Row-reverse (flex-direction): con el valor row-reverse (fila inversa) los flex items se apilan en una fila de derecha a izquierda.

- Column (flex-direction): con este valor, los flex items se apilan en una columna de arriba hacia abajo.

- Column-reverse: con este valor, los flex items se apilan en una columna de abajo hacia arriba.

- Flex-wrap: permite especificar si queremos que los ítems puedan saltar a una nueva línea, cuando el contenedor flexible se quede sin espacio.

- Wrap (flex-wrap): los flex items (hijos) pueden romper la línea del eje horizontal, si les es necesario para conservar las características de sus dimensiones. Esto es de izquierda a derecha, y de arriba a abajo.

- Wrap-reverse (flex-wrap): esta vez el orden es de izquierda a derecha, y de abajo a arriba.

- Flex-flow: Es la forma abreviada (shorthand) o rápida para las propiedades: flex-direction y flex-wrap. Se pone primero la propiedad de flex-direction, y luego la de flex-wrap.

- Justify-content: nos va a permitir alinear los elementos. Esto puede ser de forma vertical u horizontal, según lo especifiquemos con flex-direction. Nos va a ayudar a distribuir los flex items (hijos) en el contenedor (padre), cuando los ítems no utilicen todo el espacio disponible en su eje principal actual.

- Flex-start (justify-content): consiste en alinear los flex items (hijos) al lado izquierdo.

- Flex-end (justify-content): consiste en alinear los flex items (hijos) al lado derecho.

- Center (justify-content): consiste en alinear los flex items (hijos) al centro.

- Space-between (justify-content): es hacer que los flex items (hijos) tomen la misma distancia o espaciado entre ellos dentro del contenedor flexible, quedando el primer y último elemento pegados con los bordes del contenedor en el eje principal.

- Space-around (justify-content): muestra los flex items (hijos) con el mismo espacio de separación entre sí. El espaciado entre los bordes lo toman del contenedor padre.

- Space-evenly: hace que el espacio entre los flex items (hijos) sea igual. No es lo mismo que space-around. 

- Stretch (align-items): tratará de llenar toda la altura (o anchura) del contenedor, siempre y cuando los hijos no tengan propiedades de dimensión definidas.

- Align-content: esta propiedad sólo tiene efecto cuando el contenedor flexible tiene varias líneas de flex items (hijos). Si se colocan en una sola línea, esta propiedad no tiene ningún efecto sobre el diseño.

- Order: esta propiedad permite modificar el orden de aparición de un elemento. Recibe como valor números enteros.

- Flex-basis: define el ancho de un elemento inicial. Este valor por defecto viene configurado en “auto”. Actúa como “máximo” o “mínimo”, al usar flex-grow o flex-shrink.

- Flex-grow: esta propiedad define la capacidad de un elemento de crecer, cuando en el contenedor todavía hay espacio sobrante.

- Flex-shrink: básicamente es lo mismo que flex-grow, pero con el espacio faltante.


---
---

## :Star:GRIDS:star:

## Definición

CSS Grid es el sistema de maquetación más potente que hay disponible. Se trata de un sistema en 2D que permite definir filas y columnas (a diferencia de, por ejemplo, Flexbox, el cual funciona en una única dimensión). 

El grid layout permite alinear elementos en columnas y filas. Sin embargo, son posibles más diseños con CSS grid que como lo eran con las tablas. 

Por ejemplo, los elementos secundarios de un contenedor de cuadrícula podrían posicionarse de manera que se solapen y se superpongan, similar a los elementos posicionados en CSS.

## Grid layout

CSS Grid layout contiene funciones de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes. 

Se destaca por dividir una página en regiones principales, o definir la relación en términos de tamaño, posición y capas, entre partes de un control.

![image](https://user-images.githubusercontent.com/72580574/233415044-80901f5e-58a6-414e-948e-3b80c26f2bf1.png)


---
---

## :star:IMPLEMENTAR GRID:star:

¿Position? ¿Float? ¿Elementos de Bloque? ¿Elementos de líneas?

¿Es suficiente crear un layout/estructuras para páginas web actuales?

Y… ¿Flexbox?

¿Necesitaremos algo más potente para estructuras web?

 ¡ SI !  Los complementos vistos anteriormente suelen ser insuficientes, o a veces un poco complejos para crear un layout/estructuras para páginas web actuales.
La propiedad CSS que controla la altura de la caja de los elementos se denomina height.

No admite valores negativos, y aquellos en porcentaje se calculan a partir de la altura de su elemento padre. 

Flexbox fue una gran mejora, pero está orientado a estructuras de una sola dimensión.

Muchos frameworks y librerías utilizan un sistema grid, donde definen una cuadrícula determinada, y cambiando los nombres de las clases de los elementos HTML es posible trabajar muchos atributos.


## ¿por qué elegir grids?

- Grid CSS surge de la necesidad de algo más potente, y toma las ventajas del sistema Flexbox, sumándole muchas mejoras y características que permiten crear muy rápido cuadrículas sencillas y potentes.

- Grid toma la filosofía y la base del sistema Flexbox. Esto no significa que lo reemplaza, sino que pueden convivir.

- Está pensado para estructuras grandes y complejas.

## Diferencia entre flexbox y grids

![image](https://user-images.githubusercontent.com/72580574/233415469-ee3e198d-efb0-49f1-803a-5233997d0d3d.png)

![image](https://user-images.githubusercontent.com/72580574/233415514-123f078f-5dfe-426c-ba2b-192bb59a6a48.png)

Pueden convivir:

![image](https://user-images.githubusercontent.com/72580574/233415592-5afa381e-1981-4db3-a3c7-5dd7778319f9.png)



---
---

## :star:PROPIEDADES DEL PADRE:star:

Activamos la cuadrícula Grid utilizando, sobre el elemento contenedor, la propiedad display con el valor grid o inline-grid. Esto influye en cómo se comportará la cuadrícula con el exterior. El primero de ellos permite que la cuadrícula aparezca encima/debajo del contenido exterior (en bloque), mientras que el segundo permite que la cuadrícula se vea a la izquierda/derecha (en línea) del contenido exterior

```HTML
<section>
 Elemento padre
 <div>
   Elemento hijo
 </div>
</section>
```

![image](https://user-images.githubusercontent.com/72580574/233415757-3da136f5-480c-438d-85c8-053bdbff0f35.png)


En primer lugar, aplicas la propiedad   display: grid  al elemento padre.     Luego puedes usar lo siguiente para crear la estructura principal:

![image](https://user-images.githubusercontent.com/72580574/233415890-b0993926-8d8e-43aa-b165-5de8efaf8b30.png)


## El objetivo

Este tipo de estructura no es posible con Flexbox, por eso podemos pensar en usar Grid

![image](https://user-images.githubusercontent.com/72580574/233416021-2142f959-69ca-431d-adcb-35f2b7a727d7.png)


## Filas y columnas explícitas

Es posible crear cuadrículas con un tamaño definido. Para ello, sólo tienes que usar las propiedades CSS grid-template-columns y grid-template-rows, las cuales sirven para indicar las dimensiones de cada celda de la cuadrícula, diferenciando entre columnas y filas.    

![image](https://user-images.githubusercontent.com/72580574/233416097-d8309667-d15c-4f92-b589-6e0657ea40ac.png)


Veamos la forma más simple de crear una grilla, especificando cuántas columnas y filas queremos.

```CSS
.grid {
   display: grid;  
	 /* 2 columnas */
   grid-template-columns: 300px 100px; 
   	/* 2 filas */
   grid-template-rows: 40px 100px; 
}
```

```HTML
<section class="grid">
   <div>Item 1</div>
   <div>Item 2</div>
   <div>Item 3</div>
   <div>Item 4</div>
</section>
```

![image](https://user-images.githubusercontent.com/72580574/233416382-b0c8c55f-2b89-4f16-9e9b-7c54afcb8a8d.png)

Unidad creada para ser usada en grid:  ( fr (fraction) ).    
Nota: también es posible utilizar otras unidades y combinarlas, como porcentajes o la palabra clave auto (que obtiene el tamaño restante).


```CSS
.grid {
display: grid;  
	grid-template-columns: 2fr 1fr; 
	grid-template-rows: 3fr 1fr; 
}
```

Cuadrícula de 2x2, donde el tamaño de ancho de la cuadrícula se divide en dos columnas (una el doble de tamaño que la siguiente), y el tamaño de alto de la cuadrícula se divide en dos filas, donde la primera ocupará el triple (3 fr) que la segunda (1 fr):

![image](https://user-images.githubusercontent.com/72580574/233416710-1a6e617c-412d-4bed-b9b2-4383333d4aed.png)


## Filas y columnas repetitivas

Si necesitás hacer muchas columnas y filas iguales, podés usar lo siguiente:


```CSS
.grid {
   display: grid;  
	grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr)
}
```

Deberíamos hacer los divs necesarios, pero la grilla está lista para acomodar a sus ítems.



## Grids por áreas

Ahora veremos otra forma de crear grillas, de una forma más flexible.

Es posible indicar el nombre y la posición concreta de cada área de la cuadrícula. 

Utiliza la propiedad grid-template-areas, donde debes especificar el orden de las áreas. 

Luego, en cada ítem hijo, usas la propiedad grid-area para indicar el nombre del área en cuestión.

Es muy importante marcar la estructura HTML.

```HTML
<div id="grilla">
 	<header class="border">Header</header>
 	<section id="productos" class="border">Section</section>
 	<section id="servicios" class="border">Section</section>
 	<nav class="border">Navegación</nav>
 	<aside class="border">Aside</aside>
 	<footer class="border">Pie de página</footer>
</div>
```

```CSS
#grilla {
   display: grid;
   grid-template-areas:
     "nav header header"
     "nav productos publicidad"
     "nav servicios publicidad"
     "nav footer footer";
   grid-template-rows: 100px 1fr 1fr 75px; 
   grid-template-columns: 20% auto 15%;
}
.border {
   border: 1px solid black;
}
header {
   grid-area: header;
}
footer {
   grid-area: footer;
}
section#productos {
   grid-area: productos;     
}
section#servicios {
   grid-area: servicios;     
}
nav {
   grid-area: nav;
}
aside {
   grid-area: publicidad;
}
```

De esta forma, se aproxima a lo que queremos inicialmente, sólo nos falta darle unas decoraciones:

![image](https://user-images.githubusercontent.com/72580574/233417242-a0d35fd8-a244-413e-b5ad-fe7a9052177d.png)


## Eespacios en grids

La cuadrícula tiene todas sus celdas una a continuación de la otra. 

Aunque sería posible darle un margen a las celdas dentro del contenedor, existe una forma más apropiada, evitando los problemas clásicos de los modelos de caja: los huecos (gutters).


```CSS
.grid {
   grid-column-gap: 10px;
   grid-row-gap: 15px;
}
```

![image](https://user-images.githubusercontent.com/72580574/233417445-ac8a97e0-d20e-4c3f-9502-959f2870818b.png)


## Grids por areas

En la propiedad grid-template-areas también es posible indicar una palabra clave especial:

- La palabra clave none: Indica que no se colocará ninguna celda en esta posición.

- Uno o más puntos (.): Indica que se colocará una celda vacía en esta posición.

Llevemos a práctica , agregando más estilos al padre (el contenedor) y verificando que tiene las propiedades grid-row-gap y grid-column-gap, para hacer separaciones entre las columnas o filas, según el caso.

![image](https://user-images.githubusercontent.com/72580574/233417772-910bc509-b458-451c-a98f-a3249e5a8224.png)

![image](https://user-images.githubusercontent.com/72580574/233417809-8d7c7037-0057-4692-ad5e-efe61ae6cd04.png)

De esta forma, se aproxima a lo que queremos... sólo nos falta darle unas decoraciones:

![image](https://user-images.githubusercontent.com/72580574/233417876-eeb80295-db5e-44e9-868a-d8a1a7e74551.png)


---
---

## :star:PROPIEDADES DEL HIJO:star:

## distribución de elementos

Existen propiedades que se pueden utilizar para colocar los ítems dentro de la cuadrícula. Es posible distribuir los elementos de una forma muy sencilla y cómoda: justify-items y align-items, que ya conocemos del módulo CSS Flexbox:

![image](https://user-images.githubusercontent.com/72580574/233431684-53bcf312-e644-4ccb-8f95-e34b364f6f95.png)

##  JUSTIFY-ITEMS Y ALIGN-ITEMS 

La grilla está, pero las celdas “se achican”, se ajustan.
Estas propiedades trabajan sobre la celda:

![image](https://user-images.githubusercontent.com/72580574/233431790-a0f9d9ee-40ac-4883-8fc6-98226a7ef46c.png)

La grilla está, pero las celdas “se achican”, se ajustan. Estas propiedades trabajan sobre la celda:

![image](https://user-images.githubusercontent.com/72580574/233431951-fe792b6c-3362-4c04-85ea-d863aef66ee7.png)

![image](https://user-images.githubusercontent.com/72580574/233431979-a1a634f6-886a-43d5-8614-5eb38fa85447.png)


## justify-items: strech

Alineando el contenido dentro de las celdas, de forma horizontal :

![image](https://user-images.githubusercontent.com/72580574/233432243-3bd2ca72-0c9c-468a-a813-09b2354b03e2.png)


## justify-items: start

Alineando el contenido dentro de las celdas, de forma horizontal :

![image](https://user-images.githubusercontent.com/72580574/233432293-fe1ea64d-272f-4403-877b-9564ca02459d.png)

## justify-items: end

Alineando el contenido dentro de las celdas, de forma horizontal :

![image](https://user-images.githubusercontent.com/72580574/233432366-16adb523-6276-44ad-b2c2-aa75600ef13b.png)


## justify-items: center

Alineando el contenido dentro de las celdas, de forma horizontal :

![image](https://user-images.githubusercontent.com/72580574/233432418-5dd04458-c69e-4f9b-982a-696f22d74a23.png)

## align-items: stretch

Alineando el contenido dentro de las celdas, de forma vertical

![image](https://user-images.githubusercontent.com/72580574/233432869-3daba3e9-07c6-4ee4-b6cb-c3bb7cd63f75.png)

---

## align-items: start

Alineando el contenido dentro de las celdas, de forma vertical :

![image](https://user-images.githubusercontent.com/72580574/233433000-f846db23-95e9-4350-bee3-326b14547d69.png)


## align-items:  end

Alineando el contenido dentro de las celdas, de forma vertical :


![image](https://user-images.githubusercontent.com/72580574/233433070-cc522947-268f-4812-a2fe-7265c25dbcb8.png)

## align-items: center

Alineando el contenido dentro de las celdas, de forma vertical :

![image](https://user-images.githubusercontent.com/72580574/233433120-8eaee19e-378f-4aee-9ef9-ccb744ee2ca4.png)

---

## posición de elementos

Es posible utilizar las propiedades justify-content o align-content para cambiar la distribución de todo el contenido en su conjunto. 


![image](https://user-images.githubusercontent.com/72580574/233433241-0ff34c14-cfea-4313-ad28-bc46f671c71a.png)

## justify-content: start

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433626-aabc395a-a571-42f9-bf75-610e172d4207.png)


## justify-content: end

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433677-d190a169-f80f-40ee-84f1-7a64033d9180.png)


## justify-content: center

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433734-c43c5640-011b-431a-be57-29925dbeb099.png)


## justify-content: stretch

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433783-ce086b57-8f3a-4c8a-bcdb-7d457134f65f.png)


## justify-content: space-around

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433837-6522778e-ee84-446e-bc9f-4485e0f0a7fe.png)


## justify-content: space-between

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433896-3615bbb5-ced8-4649-b1dd-8a60fb44de27.png)


## justify-content: space-evenly

Alineando todo el conjunto de celdas, de forma horizontal. Dentro de su “padre” (es requisito que tenga ancho).

![image](https://user-images.githubusercontent.com/72580574/233433953-f789d6eb-fc17-427c-8460-86bf0e971952.png)


---

## aling-content: start

Alineando todo el conjunto de celdas, de forma vertical. 
Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434309-0d6e4310-e0f9-498b-86b6-d5822d5f689f.png)


## aling-content: end

Alineando todo el conjunto de celdas, de forma vertical. 
Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434374-f8448acd-86f8-42d1-a7b8-e346838f8dac.png)


## aling-content:  center

Alineando todo el conjunto de celdas, de forma vertical.

Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434423-40fb6784-6343-4ebd-a7ff-8ad348693684.png)


## aling-content:  stretch

Alineando todo el conjunto de celdas, de forma vertical. 
Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434483-e73f6217-d8e5-43bb-a9f0-29b09e3c204d.png)

## aling-content:  space-around

Alineando todo el conjunto de celdas, de forma vertical. 
Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434565-5af57927-b79e-49c0-a72e-e6e23c7c7482.png)


## aling-content:  space-between

Alineando todo el conjunto de celdas, de forma vertical. 
Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434716-90145d4e-c498-4c9b-bb99-8e14275c3756.png)

## aling-content:  space-evenly

Alineando todo el conjunto de celdas, de forma vertical. 
Dentro de su “padre” (es requisito que tenga altura).

![image](https://user-images.githubusercontent.com/72580574/233434836-85d28ead-02b3-4b51-9508-7fc7780d6c4a.png)

---

## posición de elementos: 


Hasta ahora hemos visto propiedades CSS que se aplican solamente al contenedor padre de una cuadrícula. Ahora vamos a ver ciertas propiedades que se aplican a cada ítem hijo de la cuadrícula, para alterar o cambiar el comportamiento específico de dicho elemento. 

![image](https://user-images.githubusercontent.com/72580574/233435032-206f2114-80c4-4272-917a-17bf00297f78.png)



## justify-self: start


Alinea específicamente a la celda (item, hijo) que necesites, de forma horizontal:

![image](https://user-images.githubusercontent.com/72580574/233435093-9c6bb6ca-f03d-4b8d-bde3-c2bf01c24f30.png)


## justify-self: end

Alinea específicamente a la celda (item, hijo) que necesites, de forma horizontal:

![image](https://user-images.githubusercontent.com/72580574/233435191-823d93d7-1af3-411f-b7d4-5bd03062dd7b.png)

## justify-self: center

Alinea específicamente a la celda (item, hijo) que necesites, de forma horizontal:

![image](https://user-images.githubusercontent.com/72580574/233435263-e26d71c5-1e1c-4a22-9eae-56514ff95b28.png)

---


## align-self: start

Alinea específicamente a la celda (item, hijo) que necesites, de forma vertical:

![image](https://user-images.githubusercontent.com/72580574/233435639-3895deb4-efee-43e9-9bd4-e6a3fda1a920.png)


## align-self: end

Alinea específicamente a la celda (item, hijo) que necesites, de forma vertical:

![image](https://user-images.githubusercontent.com/72580574/233435719-2914aff8-94a6-4de0-96ba-d8235289420e.png)

## align-self:  center

Alinea específicamente a la celda (item, hijo) que necesites, de forma vertical:

![image](https://user-images.githubusercontent.com/72580574/233435807-920ef921-94dc-4dce-9a8c-feb69ca0adc6.png)

## align-self: stretch

Alinea específicamente a la celda (item, hijo) que necesites, de forma vertical:

![image](https://user-images.githubusercontent.com/72580574/233436038-84788f58-b58f-49c0-ace4-9e08abc7f99d.png)




---
---

## :star:GRIDS MOBILE FIRST:star:

![image](https://user-images.githubusercontent.com/72580574/233436143-1ca6b4ca-f345-40b8-b2e0-19f04c084949.png)

## Mobile First

Antes de hablar de “Mobile-First”, debemos hacer una referencia al llamado diseño responsive. 

Se refiere a la idea de que un sitio web debería mostrarse igual de bien en todo tipo de dispositivo, desde monitores de pantalla panorámica hasta teléfonos móviles.

Es un enfoque para el diseño y desarrollo web que elimina la distinción entre la versión amigable para dispositivos móviles de un sitio web, y su contraparte de escritorio. Con un diseño responsive, ambos son lo mismo.

Mobile First significa crear el código primero para los dispositivos más pequeños que los usuarios probablemente tengan, como teléfonos o tabletas. Implica trabajar en el dispositivo más pequeño, y luego acumular desde allí todo en el mismo código y el mismo proyecto, en lugar de hacer uno nuevo para cada tamaño de pantalla. 

Se recomienda :

- Trabajar el código para que se reproduzca perfectamente en un teléfono.

- Luego ajustar para que se ejecute en una tableta.

- Por último, en un dispositivo de escritorio.

## media queries

Cualquier estilo dentro del siguiente Media Querie se ejecutará cuando el tamaño de la pantalla sea de al menos 768px de ancho (tablet, portrait, iPad Mini), pero no cuando el tamaño de la pantalla sea menor:

```CSS
@media only screen and (min-width: 768px) {
    .body {
            background-color: #000000;
      }
}
```

El diseño responsive se logra a través de "Media Queries" de CSS. Pensemos en las Media Queries como una forma de aplicar condicionales a las reglas de CSS. Estas últimas le indican al navegador qué reglas debe ignorar o aplicar, dependiendo del dispositivo del usuario.

## breakpoints

![image](https://user-images.githubusercontent.com/72580574/233436517-1f9c179e-8dae-485e-a552-918b0a857627.png)

### Grids mobile first

1. Estructura HTML.

2. Asígnale a tu contenedor la propiedad de 
display: grid;

3. Luego asigna el número de columnas y filas que tendrá tu grilla, así como un espacio de separación.

4. Define el área que ocupará cada caja de tu contenedor. Asígnales un nombre y un color característico.

5. Determina cómo quieres que cada área sea acomodada en tu layout.



## tablet

Siguiendo el ejemplo de las grillas por áreas:

- Para la versión tablet, lo primero que haces es cambiar la disposición de las columnas de tu Grid.

- Luego cambia la disposición de los ítems, esta vez usando el recurso de grid-row y grid-column, que es el método corto de grid-row-start/end grid-column-start/end.

```CSS
@media only screen and (min-width: 768px) {
       #grilla {
            grid-template-columns: repeat(4, 1fr);
      }
      .border {
    	border: 4px solid black;
    	background-color: blue;
     }
}
```

## desktop

Siguiendo el ejemplo de las grillas por áreas:

- Cambia la disposición de la grilla.

- Una vez más, cambia la disposición de los ítems.

```CSS
@media only screen and (min-width: 1024px) {
      #grilla {
            grid-template-columns: repeat(3, 1fr);
      }
      .border {
    	border: 4px solid black;
    	background-color: green;
     }
}
```

![image](https://user-images.githubusercontent.com/72580574/233437081-447ced91-7955-4337-a0cc-8807f7ca60b3.png)



![image](https://user-images.githubusercontent.com/72580574/233437060-981b51e2-1f86-4f45-90f7-8add13623faa.png)

![image](https://user-images.githubusercontent.com/72580574/233437129-001125f9-1a2f-43e8-8699-b26394eabc92.png)


## meta viewport

Las páginas optimizadas para diferentes dispositivos deben incluir la etiqueta <meta> viewport, en el encabezado del documento HTML. 
Una etiqueta <meta> viewport da al navegador las instrucciones sobre cómo controlar las dimensiones, y el ajuste a escala de la página.

- Usa la etiqueta <meta> viewport para controlar el ancho y el ajuste de la ventana de visualización del navegador. 

- Incluye width=device-width para hacer coincidir el ancho de la pantalla en píxeles independientes del dispositivo.

- Incluye initial-scale=1 para establecer una relación de 1:1 entre los píxeles CSS, y los píxeles independientes del dispositivo.


El uso del valor de width=device-width indica a la página que debe hacer coincidir el ancho de la pantalla en píxeles independientes del dispositivo. 
Esto permite que la página realice el reprocesamiento del contenido para adaptarlo a diferentes tamaños de pantalla.


![image](https://user-images.githubusercontent.com/72580574/233437370-eef30f43-62e7-4234-927e-ed91908748a2.png)


![image](https://user-images.githubusercontent.com/72580574/233437427-377eb4d3-043a-44aa-839b-12c8121eb177.png)



---
---

## :star:EJERCICIO:star:

> **Consigna**:

1. Aplicar GRIDS en uno o más HTML que tengas 

2. Aplicar Mobile First en el Home de tu proyecto para que sea responsive en tres dispositivos. 

---
---

