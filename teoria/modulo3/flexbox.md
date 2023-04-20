# :star: 11 - FLEXBOX :star:

---

## :book: Temas:

- GLOSARIO

- FLEXBOX: definición, beneficio, flexbox

- PROPIEDADES DEL PADRE: display:flex, flex-direction: row | row-reverse, column, column-reverse, flex-wrap: nowrap, wrap, wrap-reverse, flex-flow, justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly, align-items: stretch | flex-start | flex-end | center | baseline, align-content: stretch | flex-start | flex-end | center |  space-between | space-around | space-evenly

- PROPIEDADES DEL HIJO: order, flex-basis, flex-grow, flex-shrink

- PÁGINAS CON FLEXBOX: ejemplos

- MATERIAL AMPLIADO 

- EJERCICIO

---
---

## :star: GLOSARIO

**Box model**: ese concepto de que “todo es una caja”, da lugar a algo llamado en web como box model. Sin importar si son de línea o de bloque (pero tienen su incidencia en lo que sean), todas las etiquetas tienen propiedades en común.

- **Width**: es la propiedad CSS que controla la anchura de la caja de los elementos.

- **Height**: es la propiedad CSS que controla la altura de la caja de los elementos.

- **Overflow**: es una propiedad que tiene 4 valores posibles. Ellos son: visible, hidden, scroll y auto.

- **Espacio exterior**: Margin (márgenes): las propiedades margin-top, margin-right, margin-bottom y margin-left, se utilizan para definir los márgenes de cada uno de los lados del elemento por separado.

- **Espacio interior**: Padding (relleno): las propiedades padding-top, padding-right, padding-bottom y padding-left, se utilizan para definir los espacios internos de cada uno de los lados del elemento, por separado.

- **Border**: las propiedades border-top, border-right, border-bottom, y border-left, se utilizan para definir los bordes de cada lado del elemento por separado.

- **Display**: se encarga de definir cómo se ve un elemento HTML.

- **Inline-block**: esta propiedad permite tomar lo mejor de ambos grupos. Brinda la posibilidad de tener “padding” y “margin” hacia arriba y abajo.

- **Float**: la flotación consiste en mover un elemento hacia la derecha o izquierda de su línea, y todo lo que viene después se acomodará en el “hueco” que queda vacío.

- **Clear**: esta propiedad permite modificar el comportamiento por defecto del posicionamiento flotante, para forzar a un elemento a mostrarse debajo de cualquier caja flotante.

- **Position**: una propiedad CSS pensada para ubicar un elemento, con una libertad muy flexible.

- **Propiedad z-index**: entra en juego cuando dos elementos que tienen position se superponen. Acepta como valor un número (sin ninguna unidad, ni px, ni cm, ni nada); a valor más alto, se mostrará por encima de los demás elementos.

---
---

## :star: FLEXBOX :star:

## Definición
**Flexbox** es un modo de diseño que nos permite crear estructuras para sitios web de una forma más fácil. Si ya sabes de HTML y CSS, probablemente alguna vez habrás visto que los sitios web se realizan utilizando la propiedad float, para desplazar contenedores.

Con Flexbox ya no necesitarás usar float para posicionar tus elementos. Al contrario, con Flexbox podrás posicionar y distribuir los elementos como tú quieras

Entonces, no se trata de una propiedad de CSS, sino de un conjunto de ellas. Se basa sobre un contenedor (**padre**) para ordenar a sus ítems (**hijos*).

No sólo puedes posicionar elementos vertical y horizontalmente, sino que puedes establecer cómo se distribuirán, el orden que tendrán e incluso el tamaño que tendrán en proporción a otros elementos. 

Esto es perfecto para crear diseños adaptables a dispositivos móviles (**Responsive Design**).



## Beneficio

- Distribuir los elementos en sentido vertical y horizontal.

- Facilita la adaptación del contenido en distintos dispositivos

- Redefinir el sentido del flujo de los elementos (hacia arriba, hacia abajo, hacia la izquierda o hacia la derecha).

- Alinear los elementos respecto al padre o respecto a sus hermanos.

## Flexbox

Antes se usaban tablas:

![image](https://user-images.githubusercontent.com/72580574/233392727-ba5ea9a4-3ab1-4ea6-bfae-20422ef6b3d2.png)

También el elemento float:

![image](https://user-images.githubusercontent.com/72580574/233392837-5fcd4d59-2e9d-442b-96e7-ba54e7c84f57.png)

En la actualidad, vemos como el mismo sitio web aplicando flexbox

![image](https://user-images.githubusercontent.com/72580574/233392944-84528fdb-1238-4a3d-9cfa-e85bdf3a94af.png)

### Objetivo

Vamos a crear una estructura así :

![image](https://user-images.githubusercontent.com/72580574/233393072-1a2b940b-6c3a-4cd5-a028-386686ecdbaa.png)

Para alcanzar este objetivo, vamos a necesitar seccionarlo en filas o columnas. En este caso, serán filas:


![image](https://user-images.githubusercontent.com/72580574/233393146-c10ceddb-3c36-4983-a373-a1f1b64c04de.png)

![image](https://user-images.githubusercontent.com/72580574/233393197-caae74f1-7886-4b5d-863f-f85f4af6b0af.png)





---
---

## :star: PROPIEDADES DEL PADRE :star:

Propiedades para aplicar en el contenedor flexible (el padre):

- **display**: flex (el que inicia): indicará que sus hijos serán “flexibles”.

- **flex-direction**: elegir dirección vertical u horizontal.

- **flex-wrap**: ¿se hará multilínea cuando llegue al límite?

- **flex-flow**: abreviación de propiedades.

- **justify-content**: alinear horizontalmente a los hijos si el padre es “fila” o verticalmente si el padre es “columna”.

- **align-items**: alinea verticalmente a los hijos (si el padre es “columna”).

- **align-content**: alinea verticalmente a los hijos cuando son multilínea.

![image](https://user-images.githubusercontent.com/72580574/233393787-79ce149d-a313-4d23-accb-8b825b703e18.png)


## display :flex

Lo primero que debemos hacer es establecer la propiedad display con el valor flex en el elemento padre.


```CSS
.padre-flex {
  display: flex;
}

```

## flex-direction: row | row-reverse, column, column-reverse

- **flex-direction: row**: Esta propiedad nos va a permitir especificar si queremos que los flex items se dispongan en **filas** o **columnas**.

```CSS
.padre-flex {
   display: flex;
   flex-direction: 
   row; /* predeterminado */
}
````

![image](https://user-images.githubusercontent.com/72580574/233394146-6542a204-7087-4d82-92db-fe64c40d408d.png)

- **flex-direction: row-reverse**:  (fila inversa) los flex items se apilan en una fila de derecha a izquierda.

```CSS
.padre-flex {
   display: flex;
   flex-direction: row-reverse;
}
```
![image](https://user-images.githubusercontent.com/72580574/233394341-0430098e-c90c-4bc5-a740-0d902f6350d8.png)


- **flex-direction: column**: los flex items se apilan en una columna de arriba hacia abajo.

```CSS
.padre-flex {
   display: flex;
   flex-direction: column;
}
```

![image](https://user-images.githubusercontent.com/72580574/233394557-e5a3dc47-2f00-4cc1-9593-8499bba1ebcc.png)


- **flex-direction: column-reverse**: os flex items se apilan en una columna de abajo hacia arriba

```CSS
.padre-flex {
   display: flex;
   flex-direction: column-reverse;
}
```

![image](https://user-images.githubusercontent.com/72580574/233395060-eb287297-07ef-4c4e-bb17-fee89535b75b.png)

Resumen:

![image](https://user-images.githubusercontent.com/72580574/233395138-2ec68915-f8f9-41a5-a9c8-d64ac2c77b77.png)

---

## flex-wrap

El comportamiento inicial del contenedor flexible es poder mantener los flex items en su eje, sin importar que las dimensiones de los mismos cambien.


- **flex-wrap: nowrap**: vamos a poder especificar si queremos que los ítems puedan saltar a una nueva línea, cuando el contenedor flexible se quede sin espacio.

```CSS
.padre-flex {
   display: flex;
   flex-wrap: nowrap;
}
```

![image](https://user-images.githubusercontent.com/72580574/233402803-1d847e42-2065-4b28-93c9-39263d5944f8.png)


- **flex-wrap: wrap**: Los flex items (hijos) pueden romper la línea del eje horizontal, si les es necesario para conservar las características de sus dimensiones. Esto es de izquierda a derecha, y de arriba a abajo.

```CSS
.padre-flex {
   display: flex;
   flex-wrap: wrap;
}
```

![image](https://user-images.githubusercontent.com/72580574/233403080-d10bc88f-e716-4232-bc5d-bfdd5a35a5ed.png)


- **flex-wrap:  wrap-reverse**: Esta vez el orden es de izquierda a derecha, y de abajo a arriba.

```CSS
.padre-flex {
   display: flex;
   flex-wrap: wrap-reverse;
}
```

![image](https://user-images.githubusercontent.com/72580574/233403211-dde221b2-d607-4a67-8e27-4981d1dd2fb3.png)


Resumen:

![image](https://user-images.githubusercontent.com/72580574/233403293-6bcdf803-db6b-4b0d-9144-6b141b4f3f91.png)

---

## flex-flow

Es la forma abreviada (shorthand) o rápida para las propiedades:

- flex-direction

- flex-wrap

Se pone primero la propiedad de flex-direction, y luego la de flex-wrap.

```CSS
.padre-flex {
   display: flex;
   flex-flow: row nowrap;
}
```

---

## justify-content

Justify-content nos va a permitir alinear los elementos.

Esto puede ser de forma vertical u horizontal, según lo especifiquemos con flex-direction.

Nos va a ayudar a distribuir los flex items (hijos) en el contenedor (padre), cuando los ítems no utilicen todo el espacio disponible en su eje principal actual.


Los siguientes ejemplos parten de la base del contenedor en “row”: 

```CSS
.padre-flex {
   display: flex;
   flex-direction: row; 
}
```


- **justify-content: flex-start**: Consiste en alinear los flex items (hijos) al lado izquierdo.


```CSS
.padre-flex {
   display: flex;   flex-direction: row; 
   justify-content: flex-start; /* predeterminado */
}
```

![image](https://user-images.githubusercontent.com/72580574/233404410-a412a043-b316-4e77-85e2-ebfc413c6299.png)


- **justify-content:  flex-end**: Consiste en alinear los flex items (hijos) al lado derecho.


```CSS
.padre-flex {
   display: flex;  
   flex-direction: row; 
   justify-content: flex-end;
}
```

![image](https://user-images.githubusercontent.com/72580574/233404521-eda8f38a-cf95-41ff-94b7-66ec82b1a5ab.png)



- **justify-content: center**: Consiste en alinear los flex items (hijos) al centro.


```CSS
.padre-flex {
   display: flex;  
   flex-direction: row; 
   justify-content: center;
}
```

![image](https://user-images.githubusercontent.com/72580574/233404610-4d3a4fec-c5ad-4629-bd83-54dc4294c9ad.png)


- ** justify-content: space-between**: Es hacer que los flex items (hijos) tomen la misma distancia o espaciado entre ellos dentro del contenedor flexible, quedando el primer y último elemento pegados con los bordes del contenedor en el eje principal.


```CSS
.padre-flex {
   display: flex;  
   flex-direction: row; 
   justify-content: space-between;
}
```

![image](https://user-images.githubusercontent.com/72580574/233404703-5d08f229-658c-41be-89d3-c85469de45d6.png)


- **justify-content: space-around**: Muestra los flex items (hijos) con el mismo espacio de separación entre sí.
El espaciado entre los bordes lo toman del contenedor padre


```CSS
.padre-flex {
   display: flex;  
   flex-direction: row; 
   justify-content: space-around;
}
```
![image](https://user-images.githubusercontent.com/72580574/233404832-9ca6017f-0d30-4cd4-b7fd-6b078724b21a.png)


- **justify-content: space-evenly**: Hace que el espacio entre los flex items (hijos) sea igual. No es lo mismo que space-around.

Nota: para Microsoft Edge16+ no funciona con flexbox, si con Grid.


```CSS
.padre-flex {
   display: flex;  
   flex-direction: row; 
   justify-content: space-evenly;
}
```

![image](https://user-images.githubusercontent.com/72580574/233404979-37fff553-2c59-4fb1-87b4-92da2ce4deed.png)


Resumen:

![image](https://user-images.githubusercontent.com/72580574/233405061-68b7d50e-7987-4b72-a61f-aa8fd5949f79.png)

-> Lo mismo que se vio con **row** se puede hacer con **column**

---

## align-items

- Alinear los elementos verticalmente: ``flex-direction: column``

![image](https://user-images.githubusercontent.com/72580574/233405809-cf4f8331-adbb-4efe-b2ae-8f6d4cb986fd.png)


- Alinear los elementos horizontalmente: ``flex-direction: row``

![image](https://user-images.githubusercontent.com/72580574/233405839-8a695e1e-1aa9-44b2-82c2-6415444d8cf9.png)



- **align-items: stretch**: Tratará de llenar toda la altura (o anchura) del contenedor, siempre y cuando los hijos no tengan propiedades de dimensión definidas.

```CSS
.padre-flex {
   display: flex; 
   flex-direction: row;
   align-items: stretch;
}
```

![image](https://user-images.githubusercontent.com/72580574/233406041-86a0e9de-0d38-4be2-a7ee-167f734853ff.png)


- **align-items: flex-start**: comienza desde el borde de ariba a la izquierda. 

```CSS
.padre-flex {
   display: flex; flex-direction: row;
   align-items: flex-start; /* predeterminado */
}
```

![image](https://user-images.githubusercontent.com/72580574/233406125-7db9ca24-7ee1-4ecb-894f-50c6b599fc85.png)

- **align-items:  flex-end**: comienza desde el borde abajo a la izquierda.

```CSS
.padre-flex {
   display: flex; 
   flex-direction: row;
   align-items: flex-end; /* predeterminado */
}
```

![image](https://user-images.githubusercontent.com/72580574/233406318-6ba88ca0-cac5-489b-9127-7b3132cb6f32.png)


- **align-items:  center**: empieza desde el centro a la izquierda.

```CSS
.padre-flex {
   display: flex; 
   flex-direction: row;
   align-items: center; /* predeterminado */
}
```

![image](https://user-images.githubusercontent.com/72580574/233406444-c8792ee1-cfed-4df8-bfc8-b48886d483d1.png)


- **align-items:  baseline**:

```CSS
.padre-flex {
   display: flex; 
   flex-direction: row;
   align-items: baseline; /* predeterminado */
}
```

![image](https://user-images.githubusercontent.com/72580574/233406496-0e6f8eff-2654-4992-b971-b91c9cca3ee4.png)


---


## align-content


Esta propiedad sólo tiene efecto cuando el contenedor flexible tiene varias líneas de flex items (hijos). Si se colocan en una sola línea, esta propiedad no tiene ningún efecto sobre el diseño.

Para poder aplicarlo se necesita tener el atributo flex-wrap, que permita verificar los ejes horizontales.

```CSS
.padre-flex {
   display: flex; 
   flex-wrap: wrap; 
   flex-direction: row;
   align-content:stretch; /* predeterminada */
}
```

- **align-content: stretch**:

![image](https://user-images.githubusercontent.com/72580574/233407247-71407516-3a00-4a12-9fa3-049f4c1bc77b.png)

- **align-content:  flex-start**

![image](https://user-images.githubusercontent.com/72580574/233407976-5a40c102-cabe-46d7-ae7a-66e0a975b50a.png)

- **align-content: flex-end**

![image](https://user-images.githubusercontent.com/72580574/233407925-afbce801-436c-4dd4-83bf-eb25a6285dd6.png)
- **align-content: center**

![image](https://user-images.githubusercontent.com/72580574/233407825-cfe52c47-cc82-4ade-b1a2-2205cbd22741.png)

- **align-content: stretch**

![image](https://user-images.githubusercontent.com/72580574/233408044-6a3d9fef-3129-411f-91b9-320687a15c84.png)

- **align-content: space-between**

![image](https://user-images.githubusercontent.com/72580574/233407736-0570a6de-9b84-415d-9cd6-520eab8e1434.png)
- **align-content: space-around**:

![image](https://user-images.githubusercontent.com/72580574/233407648-506cdb01-5f3a-44c7-abf1-627c87fb81a5.png)

- **align-content:  space-evenly**:

![image](https://user-images.githubusercontent.com/72580574/233407592-4a051e87-b44c-4e39-8982-f2fb2f0492d4.png)


---
---

## :star:PROPIEDADES DEL HIJO:star: 

---

## order

Esta propiedad permite modificar el orden de aparición de un elemento. Recibe como valor números enteros.

```CSS
.hijo-flex {
   order: -1;
}
```

![image](https://user-images.githubusercontent.com/72580574/233408948-ae42a606-624b-426a-843f-f84aa824ccdb.png)

---

## flex-basis

Define el ancho de un elemento inicial. Este valor por defecto viene configurado en “auto”. Actúa como “máximo” o “mínimo”, al usar flex-grow o flex-shrink.

```CSS
.hijo-flex {
  /* si esta en “row” es como el “width”, si está en “column” es cómo “height” */
   flex-basis: 100px; 
}
```
---

## flex-grow

Esta propiedad define la capacidad de un elemento de crecer, cuando en el contenedor todavía hay espacio sobrante.

- Se configura con un valor numérico entero natural (no acepta negativos).

- Por defecto, el valor viene configurado en "0", por lo tanto el elemento no crecerá de manera horizontal.

- Si este valor es configurado en 1 para todos los ítems, todos estos crecerán de igual manera, por lo que ocuparán la misma cantidad de espacio dentro del contenedor.

![image](https://user-images.githubusercontent.com/72580574/233409213-039c9f3c-290f-4f33-9c57-f79535142254.png)

Resultado:

```CSS
.hijo-flex {
   flex-grow: 0;
}
.hijo-flex.mayor {
   flex-grow: 1;
}
```

![image](https://user-images.githubusercontent.com/72580574/233409375-8c5bd105-8cee-48f6-b925-5a29fbcf7c07.png)

-Otro ejemplo:

![image](https://user-images.githubusercontent.com/72580574/233409444-1f83140e-2554-4c9d-a6a8-5006b287fe89.png)

Resultado:

```CSS
.hijo-flex {
   flex-grow: 1;
}
.hijo-flex.mayor {
   flex-grow: 2;
}
````

![image](https://user-images.githubusercontent.com/72580574/233409559-2af384c2-6d96-420e-bef2-1ac16b8c9bb2.png)


---

##  flex-shrink

Básicamente es lo mismo que flex-grow, pero con el espacio faltante.

![image](https://user-images.githubusercontent.com/72580574/233409638-aa633481-f51d-472c-92c5-7487c5de4ea7.png)

## Flexbox: unificación

Podemos unificar estos tres estilos mediante el atributo “flex” de la siguiente manera:

![image](https://user-images.githubusercontent.com/72580574/233409727-1e9bcb87-fea2-4216-920c-634deff6666b.png)


---
---

## :star:PÁGINAS CON FLEXBOX:star:

Con lo aprendido en esta clase, podríamos hacer una estructura de página con la siguiente estructura, mediante flexbox:

![image](https://user-images.githubusercontent.com/72580574/233409897-cd781ce4-8cd8-4add-a109-3d5d5e4799d1.png)

```HTML
<header>Header</header>
<div id="main">
 <nav>Nav</nav>
 <aside>Aside</aside>
 <article>Article   
 </article>
</div>
<footer>Footer</footer>
```

```CSS
body {
   display: flex;
   height: 600px;
   flex-direction: column;
   padding: 1em;
}

#main {
   display: flex;
   flex: 1;
}

article, nav, aside {
   background-color: pink;
}

header, footer {
   background-color: grey;
   margin:1px;
}

article, nav, aside, header, footer {
   flex:1;
   padding: 1rem;
   margin:1px;
}
```

## Ejemplos

![image](https://user-images.githubusercontent.com/72580574/233410291-f7aac29a-8d05-4811-9e40-c200fddcdddb.png)

![image](https://user-images.githubusercontent.com/72580574/233410351-e011489c-055a-4135-bc5d-789bddbeb9dd.png)

![image](https://user-images.githubusercontent.com/72580574/233410568-46de6777-c378-465e-8989-deaa0a455073.png)

![image](https://user-images.githubusercontent.com/72580574/233410618-5be41ea7-5d90-494a-bdd9-5d280142ce34.png)

![image](https://user-images.githubusercontent.com/72580574/233410669-c73e33d0-bcd2-4272-b430-fa26f0a8bd0f.png)


---
---

## :star:MATERIAL AMPLIADO:star:

✦  [Ejemplos de aplicaciones de flexbox para tus proyectos | quackit.com](https://www.quackit.com/css/flexbox/examples/)

✦  [Diferentes estructuras de páginas con flexbox | quackit.com](https://www.quackit.com/css/flexbox/examples/flexbox_website_layout_examples.cfm)

✦  [Juego para practicar las propiedades | flexboxfroggy.com](https://flexboxfroggy.com/#es)

✦  [Aprende flexbox jugando | flexboxdefense.com](http://www.flexboxdefense.com/)

✦  [Guía de flexbox | css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---
---

## :star: EJERCICIO

> **Consigna**: con los conocimientos adquiridos en la clase de hoy, modela con flexbox alguna sección de tu Proyecto Final.

> **Aspectos que deberías tener en cuenta**: Dentro de una sección o página de tu proyecto, modela con flexbox utilizando alguna/s de las siguientes propiedades: display: flex, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content, order, flex-basis, flex-shrink y/o flex-basis.

---
