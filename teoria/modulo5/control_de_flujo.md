# :star: 19 - CONTROL DE FLUJOS

## :book: Temas:

- 1-GLOSARIO 

- 2-CONDICIONALES EN JAVASCRIPT 

- 3-VARAIBLES BOOLEAN

- 4-OPERADORES LÓGICOS 

- 5-MATERIAL AMPLIADO 

- 6-EJERCICIO 

---

## :stars: - 1-GLOSARIO 

JavaScript: es un lenguaje de programación que se utiliza principalmente para aportar dinamismo a los sitios web.

Variable: es un espacio reservado en la memoria que, como su nombre indica, puede cambiar de contenido a lo largo de la ejecución de un programa. Podemos almacenar un número, un texto, un listado de números, etcétera.

Algoritmo: en programación, es un conjunto de procedimientos o funciones que se necesitan para realizar cierta operación o acción.

Operadores lógicos: permiten agrupar expresiones lógicas. Las expresiones lógicas son todas aquellas expresiones que obtienen como resultado verdadero o falso. Los operadores lógicos son aquellos que hacen de nexo de este tipo de expresiones.

Anidar: en programación, se refiere a escribir una sentencia junto a una subsiguiente dentro de la misma estructura sintáctica. Es decir, que no hay un salto de línea en el medio.

Parsear: es una palabra devengada del inglés "parse". Refiere en programación, a una actividad que consiste en el análisis de texto para determinar si cumple o no reglas o patrones y en base a esto tomar alguna determinación.

Script: un script es una secuencia de instrucciones que realizan una o más tareas.

---

## :stars:  2-CONDICIONALES EN JAVASCRIPT 

## Definición

Cuando en programación hablamos de condicionales, hablamos de una estructura sintáctica que sirve para tomar una decisión a partir de una condición.

``Si <condición> entonces <operación>``

### Control de flujos

Hasta ahora todas las instrucciones que escribimos se ejecutan en línea recta, una sentencia después de la otra.


La idea del control de flujos es marcar puntos en nuestra aplicación donde, a partir de alguna evaluación, nuestro programa pueda tomar varios caminos posibles de acción.

![image](https://user-images.githubusercontent.com/72580574/236694866-f1dd9709-7902-4ae5-88c5-efb23446c49d.png)


### Valores Booleanos

Para generar estos controles empezamos a trabajar con los valores booleanos. Estos pueden tomar dos valores posibles,  **true**  o  **false**, verdadero o falso. Así, para que nuestro programa tome un camino u otro le vamos a decir que resuelva alguna evaluación/comparación.

Si es verdadera (true) tomará un camino, y si es falsa (false) tomará otro.

## IF

La estructura más utilizada en la mayoría de los lenguajes, y por ende también en JS, es la estructura IF

```JavaScript
// si - condicion
if (true) {
	// bloque de código a ejecutar
    console.log("vas a ver este mensaje");
}
```

Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro de {...}. Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida en {...} y el programa continúa ejecutando el resto de instrucciones del script.

```JavaScript
if (false){
    console.log("no vas a ver este mensaje");
}
```

## COMPARACIÓN

Cuando utilizamos operadores matemáticos entre dos valores numéricos, éstos resuelven un nuevo tipo de valor numérico que es el resultado de la operación. 

Cuando comparamos dos valores a través de un operador de comparación, ésta operación siempre se resuelve en true o false, es decir la comparación es verdadera o falsa.

El primer operador de comparación es el operador de equivalencia **==**

### EJEMPLO CONDICIONALES

En este ejemplo, las comparaciones se realizan entre el valor de la variable unNumero y un valor numérico.

En el primer condicional, como los dos valores coinciden, la igualdad se cumple, y por lo tanto la condición es cierta; su valor es true, y se ejecutan las instrucciones contenidas en el bloque del if.


```JavaScript
let unNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
```

En el segundo caso unNumero  no es igual a 6; su valor es false, y no se ejecutan las instrucciones contenidas en el bloque del if.

```JavaScript
let unNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
```
La comparación del ejemplo suele ser el origen de muchos errores de programación, al confundir los operadores **==** y **=**.

Las comparaciones siempre se realizan con el operador  **==** , ya que el 
operador **=** sirve para asignar valores.


```JavaScript
let unNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
```

## IF - ELSE

En ocasiones, las decisiones que se deben realizar no son del tipo «si se cumple la condición, hazlo; si no se cumple, no hagas nada». Normalmente las condiciones suelen ser del tipo **«si se cumple esta condición, hazlo; si no se cumple, haz esto otro»**.

```JavaScript
let unColor = "Rojo"

// Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo"){
    console.log("el color es Rojo");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
    console.log("el color NO es Rojo");
}

```

###EJEMPLO IF - ELSE

```JavaScript
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
}
```

##   CONDICIONES ANIDADAS IF..ELSE IF .

```JavaScript
let precio = 100.5;

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}
```

---

## :stars: 3 - VARIABLES BOOLEAN

## TRUE O FALSE

Las variables booleanas son las que sólo tienen dos valores, true or false. Pueden recibir el valor a partir de una evaluación booleana sobre otras variables:

```JavaScript
let numero   = 10;
let esMayor5 = (numero > 5); // su valor sera true

if (esValida) {
    alert("Es boolean true");
}
```


---

## :stars:  4- OPERADORES LÓGICOS 

En JavaScript, disponemos de los operadores lógicos habituales en lenguajes de programación como son: 

```
es igual 
es distinto
menor
menor o igual
mayor
mayor o iguaL
 and (y)
or (o)
not (no).
```




![image](https://user-images.githubusercontent.com/72580574/236695220-7e58f38c-bffb-4472-a94a-55b36218f79d.png)


## CONDICIONES COMPUESTAS CON || 

En caso de utilizar || (OR), será requisito que al menos una de las comparaciones sea verdadera para que la condición compuesta sea verdadera.


```JavaScript
let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana")){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
}
```

## COMBINACIÓN DE OPERADORES && y || 

También es posible combinar || (OR) y && (AND) para hacer comparaciones cada vez más complejas.

```JavaScript
let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
```

Ya que las expresiones lógicas son evaluadas de izquierda a derecha, es necesario agrupar las operaciones para asegurar que se cumplan como uno lo desea. El cambio de agrupación con los paréntesis produce resultados diferentes.

![image](https://user-images.githubusercontent.com/72580574/236695295-6517a7ca-eaa7-4721-acad-97268308bac1.png)



---

## :stars:  5-MATERIAL AMPLIADO 

✦ [Conversión de tipos de datos, operadores y sentencias condicionales](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view) | Los apuntes de Majo (Página 9 a 16)

✦ [Operadores](https://teloexplicocongatitos.com/poster/tlecg08) | Te lo explico con gatitos

✦ [Operadores lógicos](https://teloexplicocongatitos.com/_next/image?url=https%3A%2F%2Fdoomvault.nyc3.digitaloceanspaces.com%2Ftlecg%2Fbig%2Fprog03.jpg&w=1200&q=75) | Te lo explico con gatitos

✦ [Condicionales](https://teloexplicocongatitos.com/_next/image?url=https%3A%2F%2Fdoomvault.nyc3.digitaloceanspaces.com%2Ftlecg%2Fbig%2Fprog04.jpg&w=1200&q=75) | Te lo explico con gatitos

✦ [Documentación sobre IF ... ELSE](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else) | MDN Web Docs

✦ [Documentación sobre SWITCH](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch) | MDN Web Docs

---

## :stars: 6-EJERCICIO 

**Consigna**: Crea un algoritmo que solicite al usuario uno o más valores ingresados por prompt(), compare las entradas y, en función de ciertas condiciones, muestre por consola o alert() el resultado según los valores ingresados y las condiciones cumplidas.

**Aspectos que deberías tener en cuenta**:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta ``<script src="js/miarchivo.js"></script>``, que incluya la definición de un algoritmo en JavaScript que emplee instrucciones condicionales.

**Ejemplo**:

Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

---
