# :star: MODULO 4 - SASS

---

## :book: Temas:

- 1- GLOSARIO

- 2 - DEFINICIÓN

- 3-  VENTAJAS

- 4 - SINTAXIS

- 5 - INSTALACIÓN

---

## :stars: 1 - GLOSARIO

- **JavaScript**: es un lenguaje con muchas posibilidades. Se utiliza para crear pequeños programas que luego son insertados en una página web, y en programas más grandes, orientados a objetos mucho más complejos. Con Javascript podemos crear diferentes efectos e interactuar con nuestros usuarios.

- **Bootstrap themes**: son marcos construidos por expertos, que permiten tener un diseño base como una extensión de Bootstrap, especialmente para un conjunto específico de problemas.

- **Página responsive (repaso)**: el sistema detecta automáticamente el ancho de la pantalla y, a partir del mismo, adapta todos los elementos de la página, desde el tamaño de letra hasta las imágenes y los menús, ofreciendo al usuario la mejor experiencia posible.

---

## :stars: 2 - DEFINICIÓN

Es un **preprocesador de CSS** que te permite escribir un código, el cual luego se transforma (compila) en un archivo de CSS puro.

Esto genera un código más limpio y sencillo de mantener y editar, a través de una estructura ordenada, usando un lenguaje de estilos.

Sass significa **“Syntactically Awesome Stylesheets”**. 
Permite crear hojas de estilos estructuradas, limpias y fáciles de mantener.

Con **SASS** podrás escribir hojas de estilo que te ayudarán a generar ficheros **CSS más optimizados**, incorporando mayor contenido semántico.

Esto permite utilizar funcionalidades que normalmente encontrarías en lenguajes de programación tradicionales, como el uso de variables, creación de funciones, etc.


---

## :stars: 3 - VENTAJAS

- Normalmente, crear una hoja de estilos es relativamente sencillo. 

- Lo malo es cuando el proyecto va creciendo en tamaño: su CSS puede terminar siendo muy extenso.

- SASS permite una sintaxis **más simple y elegante**, implementando además bastantes características extra, para hacer más manejable tu hoja de estilos.


---

## :stars: 4 - SINTAXIS
En Sass cuentas con dos diferentes tipos de sintaxis: **SCSS** y **SASS**. 

La primera y más popular, es conocida como **SCSS** (Sassy CSS). 

Es muy similar a la sintaxis nativa de **CSS**, tanto así que te permite importar hojas de estilos CSS (copiar y pegar) directamente en un archivo SCSS, y obtener un resultado válido.

Para utilizarla, sólo debes crear un archivo con terminación **.scss** de la siguiente manera: **archivo.scss**

#### ¿Crees que es válido el siguiente CSS dentro de un SCSS?


```CSS
div {
   width: 100px;
   height: 100px;
   background-color: red;
   padding: 15px;
}

div p {
   font-size: 20px;
   color: white;
   font-family: Arial, sans-serif;
}
```

-> ¡La respuesta es SI ! Entonces, ¿cómo se escribe el SCSS? ¿igual que el CSS?

Si bien es válido el CSS tal como lo escribimos, podemos ir de a poco agregando la sintaxis SCSS. 
Siguiendo el ejemplo anterior, podría quedar de la siguiente forma.
¿Notas la diferencia sutil?


```SCSS
iv {
   width: 100px;
   height: 100px;
   background-color: red;
   padding: 15px;
   p {
       font-size: 20px;
       color: white;
       font-family: Arial, sans-serif;
   }
}

```


---

## :stars: 5 - INSTALACIÓN

---
