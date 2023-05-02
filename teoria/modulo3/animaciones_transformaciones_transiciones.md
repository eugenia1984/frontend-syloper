# :star: 13 - ANIMACIONES, TRANSFORMACIONES Y TRANSICIONES :star:

---

## :book: Temas

- GLOSARIO

- GRADIENTES: ejes, gradientes

- TRANSFORMACIONES: trasladar objetos -> transform: translate, rotación de objetos -> transform: rotate|totatex|rotatey|rotatez, escalar objetos -> transform:scale, sesgar/torcer un elemento > transform: skew|skewx|skewy

- TRANSICIONES

- ANIMACIONES: animate.css

- EJERCICIO

---
---

## :star:GLOSARIO:star:

- CSS Grid: es el sistema de maquetación más potente que hay disponible. Se trata de un sistema en 2D que permite definir filas y columnas (a diferencia de, por ejemplo, Flexbox, el cual funciona en una única dimensión).

- Diseño responsive: se refiere a la idea de que un sitio web debería mostrarse igual de bien en todo tipo de dispositivo, desde monitores de pantalla panorámica hasta teléfonos móviles.
El diseño responsive se logra a través de "Media Queries" de CSS. Pensemos en las Media Queries como una forma de aplicar condicionales a las reglas de CSS.

- Mobile First: significa crear el código primero para los dispositivos más pequeños que los usuarios probablemente tengan, como teléfonos o tabletas. Implica trabajar en el dispositivo más pequeño, y luego acumular desde allí todo en el mismo código y el mismo proyecto, en lugar de hacer uno nuevo para cada tamaño de pantalla.

- Meta viewport: una etiqueta <meta> viewport da al navegador las instrucciones sobre cómo controlar las dimensiones, y el ajuste a escala de la página.


---
---

## :star:GRADIENTES:star:

## Ejes

Para entender los valores que debemos aplicar, es necesario comprender el concepto de los ejes.


![image](https://user-images.githubusercontent.com/72580574/233440063-c39d024a-5ade-48a1-8401-c160022bbd9d.png)

- **X** se refiere a la posición horizontal, de izquierda a derecha.

- **Y** se refiere a la posición vertical, de arriba hacia abajo.

- **Z**  puedes también mover los elementos hacia adelante o atrás en el documento (2D), como si se tratara de un espacio 3D.

## Gradientes

CSS3 ha agregado la opción de crear gradientes (fondos en degradé) sin la necesidad de usar imágenes. 

Los gradientes en CSS son de dos tipos: lineales (linear-gradient) y radiales (radial-gradient).

En el gradiente lineal, la transformación de color va avanzando línea a línea; mientras que en el radial, dicha transformación se produce debido a que sucesivos círculos concéntricos van cambiando de color.

El gradiente normalmente se usa en la propiedad **background**:


![image](https://user-images.githubusercontent.com/72580574/233440300-0453505e-09da-4634-8c09-915137149c49.png)

```HTML
<div id="grid">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</div>
```

![image](https://user-images.githubusercontent.com/72580574/233440404-6d90e3ab-485b-4009-aa8d-c335bc165894.png)

![image](https://user-images.githubusercontent.com/72580574/233440467-7ef449a9-19f9-46e4-89fb-8b0cfe3b6411.png)

![image](https://user-images.githubusercontent.com/72580574/233440497-b007d9d8-0c89-4c4a-b8a0-e3476cefe05a.png)

![image](https://user-images.githubusercontent.com/72580574/233440525-0d6c0bf3-786f-44c0-8075-6d476205f997.png)

![image](https://user-images.githubusercontent.com/72580574/233440542-1abdee96-cbad-404c-977a-a489d23e721e.png)


---
---

## :star:TRANSFORMACIONES:star:

Una transformación es una modificación de la forma en que se muestra un elemento. 

Todo elemento transformado por CSS cambia la forma en que se ve, pero no el lugar que ocupa. Los efectos que se pueden lograr son:  

- Mover un elemento de lugar (¡sin position!).  

- Escalar el tamaño de un elemento.  

- Voltear y girar elementos.  

- Cambiar la perspectiva de un elemento.

## Transformaciones

![image](https://user-images.githubusercontent.com/72580574/233440675-5f52c60d-91be-4ccc-ab89-7f152c939146.png)


![image](https://user-images.githubusercontent.com/72580574/233440692-3b477780-ead6-47e0-a6af-535a563ac27b.png)


Los siguientes ejemplos que veremos están animados (tema que veremos más adelante), para un entendimiento más simple.


## trasladar objetos -> transform: translate

**transform:translate( )** cambia la ubicación del objeto (como si fuese un position).  

Requiere dos números y su unidad, separados por una coma:  

- El primero es el desplazamiento horizontal (eje X).

- El segundo es el desplazamiento vertical (eje Y).

- Valores positivos mueven a la derecha/abajo.

- Valores negativos mueven a la izquierda/arriba.  

- Sí, existe translateX() y translateY(), cada uno sólo recibe un número con su unidad.

![image](https://user-images.githubusercontent.com/72580574/233440810-b442f8f6-d212-4da1-8d1a-9f4cd53d1ba7.png)


## rotación de objetos -> transform: rotate|totatex|rotatey|rotatez

La rotación permite girar un objeto sin deformarlo. 

Se hace con el **transform: rotate( )**. Recibe entre paréntesis un número que representa la cantidad de grados a girar el objeto: 

- Si es positivo, rota hacia la derecha (en sentido horario).

- Si es negativo, rota hacia la izquierda (sentido antihorario). 

Por tratarse de grados, la unidad que acompaña el número será deg (degrees

![image](https://user-images.githubusercontent.com/72580574/233440898-ece9b38f-30e2-43f8-8d84-5d594add10de.png)

**transform: ratatex**

![image](https://user-images.githubusercontent.com/72580574/233440943-b419cf61-a334-4cd7-b524-cf88612e45b1.png)

**transform: roratey**

![image](https://user-images.githubusercontent.com/72580574/233441040-8b58e80d-0b9e-4683-bb37-da0a3e4c76f4.png)


**trnsform: rotatez**

![image](https://user-images.githubusercontent.com/72580574/233441092-89de6aba-54b0-4409-8826-d4b0796497a9.png)




## escalar objetos -> transform:scale

**transform:scale( )**, cambia la escala del objeto (como si fuese un zoom).  
Requiere dos números separados por coma: 

- El primero es el ancho (Escala en eje X).  

- El segundo es el alto (Escala en eje Y).

- Valores mayores a 1, agrandan.

- Valores entre 1 y 0, achican.

- Valores negativos, escalan dado vuelta.  

- Si solo se quiere cambiar un eje, existe scaleX() y scaleY(), cada uno solo recibe un número. 

## sesgar/torcer un elemento > transform: skew|skewx|skewy

**transform:skew( )**, para deformar objetos en el CSS utilizamos el método skew (sesgar).
 
Puede tener hasta dos números separados por coma: 

- Sus parámetros son los ángulos de deformación en grados sexagesimales (deg).  

- El primero indica el eje  “X”.

- El segundo indica el eje “Y”.


---
---

## :star:TRANSICIONES:star:

Con la propiedad transition, es posible lograr que al pasar el mouse por el elemento, el mismo “haga una animación”.

Recuerda que para los enlaces se utiliza a:hover, con el fin de que cambien sus estilos al pasar el mouse por encima.

:hover se puede utilizar con cualquier elemento sobre el cual quisieras ejecutar una transición, un div, span, párrafo, etc. Veamos los ejemplos...

Imaginemos que queremos que cambie su altura: debemos indicar qué propiedad queremos que se anime y por cuántos segundos (2 segundos).

![image](https://user-images.githubusercontent.com/72580574/233441451-a9735406-f0d6-4660-8a0a-f762813934fb.png)

También se puede especificar más de una propiedad:

![image](https://user-images.githubusercontent.com/72580574/233441486-4da46f12-1810-42f4-a8ac-a48df106428b.png)

Aplicar transición a toda propiedad que haya variado:


![image](https://user-images.githubusercontent.com/72580574/233441518-aded10b7-cbf2-42d9-ae1b-684c8a8507dd.png)


![image](https://user-images.githubusercontent.com/72580574/233441550-74837bd6-e207-4230-8246-a2d8824edfba.png)

```CSS
div {
   width: 100px; height: 100px;
   transition: all 2s;       
}
div:hover {
   height: 200px; width: 200px;
   padding: 20px;
   background-color: cyan;
}
```


¿Sólo con la propiedad “:hover” funciona?

No, también lo hace con cualquier propiedad del elemento que aplique cambios en él.

Por ejemplo con la propiedad focus, la cual indica que el elemento tiene el foco. Generalmente se activa cuando el usuario hace clic, toca un elemento o lo selecciona con la tecla "Tab" del teclado.

![image](https://user-images.githubusercontent.com/72580574/233441665-deac3890-1407-48a8-8ff3-061a74f8d0c4.png)


```CSS
input {
   width: 100px; height: 100px;
   transition: all 2s;       
}
input:focus {
   width: 200px;
   font-size: 24px;
}

```


---
---

## :star:ANIMACIONES:star:

Es un elemento **@keyframe**s con un nombre. 

Luego del nombre y entre llaves, se definen los puntos donde cambiará el CSS.  

Cada cambio pasa en un porcentaje de la animación. Por cada punto de inflexión, y entre llaves, van las reglas CSS que se aplicarán en ese momento.  

El cambio es paulatino de un porcentaje al otro.

Ejemplo:

![image](https://user-images.githubusercontent.com/72580574/233441784-d6cc55b2-f51c-4a65-825a-0786c8005eb8.png)

![image](https://user-images.githubusercontent.com/72580574/233441817-57a42dbc-ab8c-4c7c-99a6-66c69576b913.png)


Y cambia a verde

- Puedes hacer animaciones con texto:

```CSS
h1 {
   animation-duration: 2s;
   animation-name: aparecer;
}


@keyframes aparecer {
   0% {
     opacity: 0;
   }
   100% {
     opacity: 1;
   }
}
```

Aparece y desaparece el texto

---

Puedes usar lo siguiente para poner las animaciones que quieras,
haz clic sobre la imagen para ver la página web:


![image](https://user-images.githubusercontent.com/72580574/233442044-48e72709-37ee-49af-ab8e-94424bed8ac5.png)


## animate.css

1. Enlace a la biblioteca de animación CSS dentro del ``<head>``

```HTML
<link rel="stylesheet" href="https://raw.github.com/daneden/animate.css/master/animate.css">
```

2. Enlace y activar wow.js poner antes del cierre de ``<body>``

```HTML
<script src="js/wow.min.js"></script>
<script>new WOW().init();</script>
```


3. Haz un elemento revelable. Agregue la clase CSS .wow a un elemento HTML: será invisible hasta que el usuario se desplace para revelarlo.

```HTML
<div class="wow">
   Contenido para revelar aquí
</div>
```

4.  Elige el estilo de animación. Elija un estilo de animación en Animate.css, luego agregue la clase CSS al elemento HTML.

```HTML
<div class="wow bounceInUp">
   Contenido para revelar aquí
</div>
```

---
---

## :star:EJERCICIO:star:

**Consigna**: Agregá animaciones, transformaciones y/o gradientes a tu proyecto, que se adapten al mismo. 
Por ejemplo: podrías hacer que cuando pase el mouse por alguna foto, escale al doble; animar un título o imagen de la sección de publicidad; agregar gradiente al footer; y/o cambiar el color de los botones al pasar sobre ellos.

**Aspectos que deberías tener en cuenta**: Utiliza un gradiente en alguna sección de tu sitio, ya sea lineal (linear-gradient) o radial (radial-gradient). Aplica una o más de una transformación (transform): mover un elemento (translate), escalar el tamaño (scale), girar (rotate) o cambiar la perspectiva (skew).

---
---
