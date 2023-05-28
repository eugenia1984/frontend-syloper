# :star: MODULO 6 - 24 - HIGHER ORDER FUNCTIONS

---

## :book: Temas:

- 1 - GLOSARIO

- 2 - ABSTRACCIÓN

- 3 - FUNCIONES DE ORDEN SUPERIOR

- 4 - RETORNAR FUNCIONES

- 5 - RECIBIR FUNCIONES POR PARÁMETRO: CONSOLE.LOG / ARROW FUNCTION

- 6 - MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN: FOR EACH  / FIND / FILTER / SOME / MAP / REDUCE / SORT /

- 7 - EL OBJETO MATH: PROPIEDADES: MIN & MAX / CEIL, FLOOR, ROUND / SQUARE, ROOT / RANDOM

- 8 - LA CLASE DATE: CONSTRUCTOR / OBTENER UN VALOR SINGULAR DE LA FECHA / DIFERENCIAS ENTRE FECHAS

- 9 - EJERCICIO

---

## :star: 1 - GLOSARIO

- **Operar**: en programación, cuando hablamos de operar sobre las variables, nos referimos a utilizarlas en funciones, métodos, o a lo largo del código. Consiste en desarrollar los algoritmos a partir, y en función del valor de estas variables.

- **Propiedad length**: nos permite saber el largo de una cadena String, es decir, cuántos caracteres tiene.

- **Método replace()**: permite reemplazar un carácter o grupo de caracteres por otros.

- **Método trim()**: permite quitar los espacios ubicados al principio y al final de la cadena.

- **Array**: es una variable que almacena una lista de elementos. Puede ser una lista de números, una lista de números y palabras o hasta una lista de listas.

- **Método slice**: devuelve una copia de una parte del array dentro de un nuevo array, empezando por inicio hasta fin (fin no incluido). El array original no se modificará.

- **Método toString**: convierte un Array a un String, compuesto por cada uno de los elementos del Array separados por comas.

- **Método push**: se utiliza para sumar un elemento a un Array ya existente.

- **Método join**: permite juntar todos los elementos de un Array en una cadena String.

- **Método concat**: combinar dos arrays en un único array resultante.


---

## :star: 2 - ABSTRACCIÓN

Para meternos de lleno en el tema de hoy, antes necesitamos mirar un poco atrás. 
Empecemos por analizar el siguiente código.
Se declara una variable que, a través de un iterador, va acumulando la suma del contador:

```JavaScript
let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}

console.log(total)  //  55
```

Ahora lo presentamos resumido en una función, y ocupa sólo una línea de código:


```JavaScript
console.log( sumarRango(1, 10) ) //  55
```

El segundo caso es lo que denominamos una abstracción.

Resumimos un grupo complejo de instrucciones bajo una palabra clave (función) que sugiere cuál es el problema a resolver por la misma.  

Las abstracciones ocultan detalles sobre la operación a resolver y nos permite “hablar” sobre los problemas en un nivel más alto (o mayor grado de abstracción).

El segundo ejemplo es más corto y fácil de interpretar, pero hay que tener más claros ciertos conceptos para poder aplicarlo efectivamente (funciones, parámetros, return, etc.) y trabajar en un nivel de abstracción superior, lo cual nos ahorra tiempo de desarrollo y claridad de escritura.

Si no entendemos cómo puede funcionar una función de este tipo, es común que desconfiemos de su versatilidad y caigamos en la declaración paso a paso de la solución, como en el primer ejemplo.

Como desarrolladores constantemente estamos creando funciones y abstracciones para pensar en un nivel superior y poder construir soluciones complejas a los problemas que se nos presentan.

En Javascript hay muchos métodos nativos incorporados que, como abstracciones, nos ofrecen soluciones a problemas recurrentes; sumado a la posibilidad de que nosotros podemos declarar las nuestras.


---

## :star: 3 - FUNCIONES DE ORDEN SUPERIOR

Es aquella que bien retorna una función, o recibe una función por parámetro.

Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores. 

En esta clase, nos concentraremos más en la segunda acepción.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/986303f4-b8df-4edf-945b-fb0d954d0b67)


---

## :star: 4 - RETORNAR FUNCIONES

En el primer caso, podremos tener una función que retorna una función, lo cual nos permitiría crear funciones con un esquema superior. 

```JavaScript
function mayorQue(n) {
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false
```

En este caso, mayorQue(n) retorna una función que compara un valor contra n y retorna true o false (porque es el resultado de la comparación).

En mayorQueDiez se termina asignando la función que retorna el llamado de mayorQue(10). Al ser llamada con el valor de 10, la asignación se resuelve de la siguiente forma:


```JavaScript
let mayorQueDiez = (m) => m > 10
```

En este ejemplo, según el parámetro op se termina asignando un return de función u otro a las variables declaradas.

```JavaScript
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2
```

---

## :star: 5 - RECIBIR FUNCIONES POR PARÁMETRO

Significa escribir funciones que puedan recibir funciones por parámetro.
Empecemos con un ejemplo:

```JavaScript
function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}
```

Supongamos que quiero recorrer un array y hacer algo con cada uno de sus elementos.


Esta función recibe un array por primer parámetro y una función por el segundo. 
Recorre el array y, por cada elemento, hace un llamado a la función mencionada enviando dicho elemento por parámetro.


```JavaScript
const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4
```

##  CONSOLE.LOG 

Enviando console.log por parámetro, se ejecuta esa función con cada elemento del array.

Podemos enviar funciones diferentes en distintos llamados y ejecutar distintas acciones sobre los elementos del array, todo con una misma función.


```JavaScript
let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total) // 10
```

## ARROW FUNCTION

Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function.
Esto permite definir acciones más dinámicas.


```JavaScript
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8]
```

---

## :star: 6- MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN

Javascript incorpora nativamente varias funciones de orden superior. 
Existen métodos para operar sobre arrays que trabajan con esta lógica.
Los siguientes, funcionan siempre iterando sobre el array correspondiente. Reciben una función por parámetro, la cual recibe a la vez el elemento del array que se está iterando.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/18af5ca4-2e5b-44be-a42b-614c4a7f325e)

Cada uno de estos métodos están pensados para solucionar problemas recurrentes con los arrays.

## FOR EACH 

El método forEach() es similar al ejemplo porCadaUno anterior.
Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:

```JavaScript
const numeros = [1, 2, 3, 4, 5, 6]

numeros.forEach( (num)=> {
    console.log(num)
} )
```

## FIND

El método find() recibe una función de comparación por parámetro. Captura el elemento que se está recorriendo y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que cumpla con esa condición:


```JavaScript
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
]

const resultado = cursos.find((el) => el.nombre === "ReactJS")
const resultado2 = cursos.find((el) => el.nombre === "DW")

console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
console.log(resultado2) // undefined
```

Nótese que el find() retorna el primer elemento del array que cumpla con la condición enviada, de ahí que podemos almacenarlo en una variable o usarlo de referencia para otro proceso. Si no hay ninguna coincidencia en el array, el método find retorna undefined.


## FILTER

El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición.
Si no hay coincidencias, retornará un array vacío.


```JavaScript
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []
```

## SOME

El método some() funciona igual que el find() recibiendo una función de búsqueda. 
En vez de retornar el elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda.


```JavaScript
console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false
```

## MAP

El método map() crea un nuevo array con todos los elementos del original transformados según las operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados son el return de la función:

```JavaScript
const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const nombres = cursos.map((el) => el.nombre)
console.log(nombres)
// [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]
```

En el ejemplo, la función retorna la propiedad nombre de cada elemento y eso es lo que se almacena en el nuevo array nombres. 

Map() se utiliza mucho para transformación de arrays.

Si quisiera aumentar el precio de todos los cursos en este ejemplo, puedo mapear y retornar una copia de los elementos con el precio modificado:


```JavaScript
const actualizado = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.25
    }
})

console.log(actualizado)
/* [
     { nombre: 'Javascript', precio: 18750 },
     { nombre: 'ReactJS', precio: 27500 },
     { nombre: 'AngularJS', precio: 27500 },
     { nombre: 'Desarrollo Web', precio: 20000 }
] */
```

## REDUCE

El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método que resume el array a un único valor de retorno.

Ejemplos de aplicación:

- Cuando queremos acumular la suma de alguna propiedad de los elementos,

- O cuando deseamos obtener algún resultado general sobre todo el array.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/7a5fee48-1ad2-40e1-99b4-ec74549b243a)

En este ejemplo, en el acumulador sumamos cada elemento del array y al terminar la iteración nos devuelve ese resultado. 
El segundo parámetro del reduce, que aquí se ve como 0, es el valor inicial del acumulador.

```JavaScript
const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) // 21
```

Con este caso podría, pensando por ejemplo en un simulacro de compra, sumar el precio de todos los productos elegidos:


```JavaScript
const miCompra = [
    { nombre: 'Desarrollo Web', precio: 20000 },
    { nombre: 'Javascript', precio: 18750 },
    { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total) // 66250
```

## SORT

El método sort() nos permite reordenar un array según un criterio que definamos. 

Recibe una función de comparación por parámetro que, a la vez, recibe dos elementos del array. 

La función retorna un valor numérico (1, -1, 0) que indica qué elemento se posiciona antes o después.

CUIDADO -> Este método es destructivo, es decir, modifica el array sobre el cual se llama.

Para ordenar números, basta con restar uno al otro, y el orden indica si será ordenado de forma ascendente o descendente:

```JavaScript
const numeros = [ 40, 1, 5, 200 ];
numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]
```

Para ordenar un array por algún string, debemos definir una función comparadora que retorne un valor numérico de referencia, según queramos el orden ascendente o descendente:

```JavaScript
const items = [
    { name: 'Pikachu', price: 21 },
    { name: 'Charmander', price: 37 },
    { name: 'Pidgey', price: 45 },
    { name: 'Squirtle', price: 60 }
  ]
items.sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a es igual a b
    return 0;
})
```

---

## :star: 7 - EL OBJETO MATH

Javascript provee el objeto Math que funciona como un contenedor de herramientas y métodos para realizar operaciones matemáticas.

El objeto Math contiene una serie de métodos que nos permiten realizar algunas operaciones matemáticas más complejas.

Veremos a continuación algunas de las funciones que se desprenden de este objeto, aunque el repertorio completo lo pueden ver en su documentación: [Math - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)

## PROPIEDADES

Se puede acceder a algunas constantes matemáticas a través del objeto Math, como pueden ser el número PI o la constante de Euler:

```JavaScript
console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/debdfc2a-6a15-4205-98a9-ea1b0e6d8607)

##  MIN & MAX 

Los métodos de Math.min() y Math.max() reciben una serie de argumentos numéricos y devuelven aquel de valor máximo o mínimo, según corresponda:

```JavaScript
console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25
```

También se pueden referenciar los valores de infinito positivo o negativo a través de la variable global Infinity, de tipo number:

```JavaScript
console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity
```

```JavaScript
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();
```

## CEIL, FLOOR, ROUND 

Sirven para redondear un valor numérico a un número entero cercano:

```JavaScript
const pi = Math.PI // 3.141592653589793

// CEIL: devuelve el entero mayor o igual más próximo
console.log( Math.ceil(pi) ) // 4

// FLOOR: devuelve el entero más cercano redondeado hacia abajo
console.log( Math.floor(pi) ) // 3

// ROUND: retorna el valor de un número redondeado al entero más cercano
console.log( Math.round(pi) ) // 3
```


## SQUARE

El método Math.sqrt() retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método retorna NaN.


```JavaScript
Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1)  // 1
Math.sqrt(-1) // NaN
```

## RANDOM 

El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 1 exclusivo.


```JavaScript
console.log( Math.random() ) // 0.6609867980868442
console.log( Math.random() ) // 0.09291446900104305
console.log( Math.random() ) // 0.6597817047013095
```

Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado por el rango esperado. A la vez podemos sumar el límite inferior si lo necesitamos:

```JavaScript
// números entre 0 y 10
console.log( Math.random() * 10 )
// números entre 0 y 50
console.log( Math.random() * 50)
// números entre 20 y 50
console.log( Math.random() * 30 + 20 )
```

En el último ejemplo quiero generar números entre 20 y 50. Por eso, el rango de números es de 30 a partir del número 20 (límite inferior adicionado). Pero todos los números siguen conteniendo una larga serie de decimales.
Esto se suele combinar con las funciones de redondeo para obtener números enteros aleatoriamente, que suelen ser de uso más común.


Al usar Math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive. Si usara Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; y si usa Math.floor el rango sería de 0 a 99.

```JavaScript
const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() )
```

---

## :star: 8 - LA CLASE DATE

Seguramente en algún momento necesitemos manipular fechas dentro de los datos que manejamos. 
Para ésto, JavaScript posee la clase Date diseñada para representar fechas.

- Instanciar un objeto Date nos genera la fecha y tiempo actual:

```JavaScript
console.log( new Date() )
// Fri Dec 17 2021 11:35:08 GMT-0300 (hora estándar de Argentina)
```

## CONSTRUCTOR

El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number).

La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0 (0 = enero, 11 = diciembre) y los días a partir del 1:

```JavaScript
console.log(new Date(2020, 1, 15))
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

const casiNavidad = new Date(2022, 11, 25, 23, 59, 59)
console.log(casiNavidad)
// Sat Dec 25 2022 23:59:59 GMT-0300 (hora estándar de Argentina)
```

También puede crear una fecha a partir de un string con formato específico:


```JavaScript
const casiNavidad = new Date("December 25, 2022 23:59:59")
console.log(casiNavidad)
// Sat Dec 25 2022 23:59:59 GMT-0300 (hora estándar de Argentina)
```

## OBTENER UN VALOR SINGULAR DE LA FECHA


![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/7d0c35c2-3a85-4d81-8ff2-372ac080bb39)


```JavaScript
const hoy = new Date("December 17, 2022")

console.log(hoy.getFullYear()) // 2022
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) // 5  (viernes)
```

La clase también tiene distintos métodos que presentan la fecha con distintos formatos posibles de tipo string.

Según la utilidad que queramos presentar, podemos optar por alguna de las siguientes opciones, aunque hay más disponibles que pueden investigar en la documentación [(Date - JavaScript | MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date)

```JavaScript
const hoy = new Date("December 17, 2022")

console.log( hoy.toDateString() ) // Fri Dec 17 2022
console.log( hoy.toLocaleString() ) // 17/12/2022 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2022
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)
```

## DIFERENCIAS ENTRE FECHAS

Los resultados de las diferencias entre fechas se generan en milisegundos.

Si quisiera calcular la diferencia de días entre dos fechas habría que generar cálculos adicionales sobre esta diferencia en milisegundos.

Por suerte, existen librerías que solucionan estos problemas de forma eficiente y rápida, pero las trabajaremos en clases posteriores.


```JavaScript
const navidad = new Date("December 25, 2022")
const hoy = new Date("December 17, 2022")

console.log( navidad - hoy ) // 691200000

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia) // 8
```

```JavaScript
const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// El proceso tardó: 396 milisegundos
```

---

## :star: 9 - EJERCICIO

**Consigna**: 

1. Codificar la funcionalidad inicial del proyecto.

2. Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del proyecto y notificación de resultados en forma de salida.

3. Capturar entradas mediante prompt().

4. Declarar variables y objetos necesarios para simular el proceso seleccionado.

5. Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).

6. Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().


**Aspectos que deberías tener en cuenta**:

1. La estructura hace referencia a el html y css, correspondientes al armado de la página general, pero que el JS, aún no está interactuando con ella.

2. Estructura HTML del proyecto.

3. Variables de JS necesarias.

4. Funciones esenciales del proceso a simular.

5. Objetos de JS

6. Arrays

7. Métodos de búsqueda y filtrado sobre el Array

**Sugerencia**: Si bien, por el momento solo podemos hacer entradas con prompt() y salidas con alert() o console.log(), es suficiente para empezar a pensar el proceso a simular en términos de entradas, variables, estructuras, funciones, métodos y salidas. Verificar Rúbrica.

---
