# :star: MODULO 5 - 18 - CONCEPTOS GENERALES DE JAVASCRIPT

---

## :book: Temas:

- 1-SINTAXIS Y CODIGO 

- 2-VARIABLES Y VALORES 

- 3-POMPT, CONSOLA Y ALERT 

- 4-MATERIAL AMPLIADO 

- 5-EJERCICIOS

---

## :stars: 1-SINTAXIS Y CODIGO 

JavaScript tiene sus propias reglas para la sintaxis, aunque respeta los estándares de muchos lenguajes de programación lógicos.

Nuestro código JavaScript se asocia al archivo HTML que se carga en el navegador. 

**Tenemos dos maneras de escribir código JavaScript en nuestras aplicaciones web**. 

1. Dentro de un archivo html, entre medio de las etiquetas ``<script>``

Ejemplo:

```
<script>
    // Aquí se escribe el código JS 
</script>
```

2. En un archivo individual con extensión **.js**. Ejemplo: **mi-archivo.js** se vincula con la etiqueta <script> y el atributo “src”. Recuerda no utilizar espacios ni mayúsculas en los nombres de archivo

![image](https://user-images.githubusercontent.com/72580574/236694017-c5b9c471-3b6a-40a9-b42c-50e5889a9d40.png)


## SINTAXIS
  
- No se tienen en cuenta los espacios en blanco y las nuevas líneas (al igual que HTML).

- Case sensitive: se distingue mayúsculas de minúsculas.

- Se pueden incluir bloques de comentarios:
  
  
```
<script>
// Comentario simple: una línea
/* Comentario de más de una línea I
   Comentario de más de una línea II */
</script>  
```
  
- **Palabras reservadas**: son aquellas que se utilizan para construir las sentencias de JavaScript y que por tanto no pueden ser utilizadas libremente. Algunos ejemplos son:
  
*break, case, catch, continue, default, let, delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with, y varias más*
  
---

## :stars: 2-VARIABLES Y VALORES 

### Definición
  
Una variable es un espacio reservado en la memoria que, como su nombre indica, puede cambiar de contenido a lo largo de la ejecución de un programa.

En las variables almacenamos diversos tipos de datos que utilizamos en la aplicación.

```
 <script>
    //Declaración de variable ES5. 
    var nombre = "John";
  
    //Declaración de variable ES6.
    let   apellido = "Doe";
    const CURSO= "JavaScript";
</script>
```  
 
### Declaración
  
Declarar una variable significa crearla. Para esto usamos la palabra reservada var, let o const. Escribimos una de estas palabras claves seguido del nombre de nuestra variable. 

Para los nombres no debemos utilizar ni espacios ni caracteres especiales.
  
  
```JavaScript
// correcto
let apellido
let telefono
const anioNacimiento

// incorrecto
var año
var teléfono móvil  
```

### Valores
  
  
Podemos asociar distintos valores a una variable en JavaScript. Para empezar trabajaremos con los tipos de datos más comunes, que son las cadenas de texto y los números:

- **Number**: un valor numérico puede ser entero o decimal.

- **String**: por otro lado, un string o cadena de texto, es un valor compuesto por uno o más caracteres, definido entre comillas simples o dobles.
  
  
### Asignación
  
En una variable podemos asignar distintos tipos de valores mediante el operador de asignación, que es el símbolo **=**
  
```JavaScript
	// declaración
let edad
let nombre
let apellido
// asignación
edad = 5
nombre = "John R."
apellido = 'Doe'
```
  
### Inicializar variables  

Podemos declarar una variable y asignarle un valor inicial en el mismo proceso:
  
```JavaScript
// variables inicializadas
let edad = 5 
const nombre = "John R."
const apellido = 'Doe'
```  
  
### LET y CONST
  
Las declaraciones con let y const tienen controles adicionales para las variables. Principalmente impiden que se puedan crear dos variables con el mismo nombre.
  
Una variable let puede recibir múltiples asignaciones en el transcurso de la aplicación, es decir que puede cambiar de valor varias veces. Una constante const recibe una única asignación al momento de su declaración, impidiendo que su valor se modifique luego.
  
  
```JavaScript
let edad = 5 
edad = 34 

const apellido = 'Doe'
// no es posible cambiarlo
apellido = ‘Trump’
```  
  
### Operaciones básicas
  
Con variables de valores numéricos podes realizar operaciones matemáticas: sumas, restas, multiplicaciones,etc.  

  
```JavaScript
let  numeroA = 1;
let   numeroB = 2;
const NUMEROC = 3;
//Suma  de dos números (1 + 2 = 3)
let resultadoSuma  = numeroA + numeroB;
//Resta de dos números (2 - 1 = 1)
let resultadoResta = numeroB - numeroA;
//Producto de dos números (2 * 3 = 6)
let resultadoProducto = numeroB * NUMEROC;  
```
  
Con variables de tipo string (texto) se puede concatenar los valores. Es decir, combinarlas.

  
```JavaScript
 let  textoA = "Hola";
  let   textoB = "mundo";
  const BLANCO = " ";
  //Concatenar textoA y textoB ("Hola" + "mundo" = "Holamundo")
  let resultadoA = textoA + textoB;
  //Concatenar textoB y 1 ("mundo" + 1 = "mundo1")
  let resultadoB = textoB + 1;
  //Concatenar textoA, BLANCO y textoB ("Hola" + " " + "mundo" = "Hola mundo")
  let resultadoC = textoA + BLANCO + textoB; 
```
  
---

## :stars:  3-POMPT, CONSOLA Y ALERT 

La sentencia  prompt() mostrará un cuadro de diálogo para que el usuario ingrese un dato. Se puede proporcionar un mensaje que se colocará sobre el campo de texto. El valor que devuelve es una cadena que representa lo que el usuario ingresó.

  
```JavaScript
let nombreIngresado = prompt("Ingrese su nombre");  
```
 
### Ejemplo PROMPT
  
En la pantalla del navegador, el usuario verá una ventana sobre la web que le solicitará un dato.

Al valor que el usuario ingresa se lo conoce por el término de entrada.

![image](https://user-images.githubusercontent.com/72580574/236694455-006a5469-8d92-4a0c-9f40-5ff679811969.png)
  
### Conosla
  
La sentencia console.log() muestra el mensaje que pasemos como parámetro a la llamada en la consola JavaScript del Navegador web.
  
```JavaScript
console.log("Mensaje de prueba");

let nombre = “John Doe”
  console.log(nombre)  
```
  
### Ejemplo consola
  
En Chrome, la consola del navegador está disponible accediendo mediante:

Botón derecho sobre alguna parte de la web > Inspeccionar > Consola .
 
 ![image](https://user-images.githubusercontent.com/72580574/236694507-426042d0-97d1-482d-ab65-a3eaad29fbda.png)

  
### ALERT
  
La sentencia alert() mostrará una ventana sobre la página web que estemos accediendo mostrando el mensaje que se pase como parámetro a la llamada.

  
```JavaScript
alert("¡Hola full stack!");  
```
  
### Ejemplo ALERT
  
En la pantalla del navegador, el usuario verá una ventana sobre la web que muestra un mensaje.

Al valor que mostramos al usuario como un resultado se lo conoce por el término de salida.

![image](https://user-images.githubusercontent.com/72580574/236694543-69e85917-4b68-4485-856b-5caf2e21cb14.png)
  
### Ejemplo de un script completo
  
Este es un ejemplo de un Script JS corriendo en un archivo HTML.  
  
```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App - CoderHouse</title>
    <script>
      let entrada = prompt("Ingresar una letra");
      let salida  = entrada + " " + "ingresada";
      alert(salida);
    </script>
  </head>
  <body>
    <h2>Esta página contiene una app</h2>
  </body>
</html>  
```

![image](https://user-images.githubusercontent.com/72580574/236694582-c241c3fb-c9dd-4f69-bc31-be0384cf9fb0.png)
  
  
  
---

## :stars:  4-MATERIAL AMPLIADO 

- [Consola, variables y tipos de datos](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view) | Los apuntes de Majo

- [Valores, variables y referencias](https://teloexplicocongatitos.com/poster/tlecg08) | Te lo explico con gatitos
  
- [Práctica interactiva sobre Algoritmia](https://little-dot.toxicode.fr/?hour-of-code) | La aventura del punto
  

---

## :stars: 5-EJERCICIOS

**Consigna**: 
  
Crea un script en JS que le solicite al usuario ingresar mínimo 1(un) dato.
  
Luego, con JavaScript, realiza operaciones matemáticas o de concatenación sobre las entradas teniendo en cuenta el tipo de dato. Al finalizar mostrar el resultados con alert() o console.log()

**Ejemplos**: 
  
(pueden realizarse otros, detallando el comportamiento esperado en un documento):

Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. 
  
Ejemplo:  ¡Hola, Juan!
  
Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
  
---
