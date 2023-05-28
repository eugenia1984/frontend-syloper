# :star: MODULO 6 - 23 - ARRAYS

---

## :book: Temas:

- 1 - GLOSARIO

- 2 - ARRAYS: DEFINICION / DECLARACION DEL ARRAY / ACCESO AL ARRAY / RECORRIDO DEL ARRAY

- 3 - ARRAY: MÉTODOS Y PROPIEDADES: LENGTH / AGREGAR ELEMENTOS / QUITAR ELEMENTOS / POP Y SHIFT / SPLICE / JOIN / CONCAT / SLICE / INDEX OF / INCLUDES / REVERSE / MÉTODOS Y PROPIEDADES MÁS COMUNES

- 4 - ARRAYS DE OBJETOS: ARRAYS + OBJETOS  /  FOR…OF / EJEMPLO APLICADO: OBJETOS, PRODUCTO Y ARRAY  / /

- 5 - MATERIAL AMPLIADO

- 6 - EJERCICIOS

---

## :star: 1 - GLOSARIO

**Objeto**: en programación, y también en JS, un objeto es una colección de datos relacionados y/o funcionalidad, que generalmente consta de variables y funciones, denominadas propiedades y métodos cuando están dentro de objetos. Cuando necesitamos enviarle a la función algún valor o dato para que luego la misma lo utilice en sus operaciones, estamos hablando de los parámetros de la función.

**Constructor de un objeto**: en JS, es una función donde se inicializa el mismo y todas sus propiedades.

**Método de un objeto**: es técnicamente un función, sólo que se limita a poder ser ejecutada únicamente desde el mismo objeto.

**Invocar**: en programación, una invocación o llamada a una función, implica pasarle el control de la ejecución del programa, así como los argumentos o parámetros que requiere para realizar su tarea.

---

## :star: 2 - ARRAYS

## DEFINICION

Un Array es un tipo de dato que sirve para almacenar valores en forma de lista. Puede ser una colección de números, strings, booleanos, objetos o hasta una lista de listas. 

Los valores del array pueden ser distintos y es posible agregar o quitar elementos en todo momento.

Los elementos del array tienen un índice, que va desde el 0 (el primer elemento del array) hasta el último elemento.

## DECLARACION DEL ARRAY

Para declarar una variable y asignar un array empleamos los corchetes ([ ]) y dentro de ellos definimos todos los valores separados por coma.
Los arrays en Javascript empiezan siempre en la posición 0. Un array que tenga, por ejemplo, 10 elementos, tendrá posiciones de 0 a  9.

```JavaScript
/ Declaraciòn de array vacío
const arrayA = [];
// Declaracion de array con nùmeros
const arrayB = [1,2];
// Declaracion de array con strings
const arrayC = ["C1","C2","C3"];
// Declaracion de array con booleanos
const arrayD = [true,false,true,false];
// Declaracion de array mixto
const arrayE = [1,false,"C4"];
```

## ACCESO AL ARRAY

Los elementos dentro de un array tienen un índice que determina su posición en el mismo. 
Así, es posible acceder a los elementos dentro de un array a través de su posición:

```JavaScript
const  numeros = [1,2,3,4,5];
console.log( numeros[0] ) // 1; 
console.log( numeros[3] ) // 4; 
let resultado  = numeros[1] + numeros[2] 
console.log( resultado  ) // 5;
```

## RECORRIDO DEL ARRAY

Decimos que estamos recorriendo un Array cuando empleamos un bucle para acceder a cada elemento por separado.
Los Array en JavaScript son objetos iterables, lo que permite usar distintas estructuras para iterar sobre ellos.

```JavaScript
const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}
```

---

## :star: 3 - ARRAY: MÉTODOS Y PROPIEDADES 

## LENGTH

Al igual que en un String, la propiedad length nos sirve para obtener el largo de un Array, es decir, para identificar cuántos elementos tiene.


```JavaScript
const miArray = ["marca", 3 ,"palabra"];
console.log( miArray.length ); //imprime 3
```

Es común utilizarlo para definir el límite de una iteración sobre un array, ya que la propiedad length me permite saber explícitamente la longitud del mismo:


```JavaScript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i= 0; i < numeros.length; i++) {
    alert(numeros[i]);
}
```

##  AGREGAR ELEMENTOS 

Para sumar un elemento a un Array ya existente, se utiliza el método push, pasando como parámetro el valor (o variable) a agregar.


```JavaScript
const miArray = ["marca", 3, "palabra"]
miArray.push('otro elemento')

console.log(miArray.length) // ⇒ 4
console.log(miArray)
//["marca", 3, "palabra", “otro elemento”]
```

El método push () agrega elementos al final del array. Si queremos agregar al inicio del array, utilizamos el método unshift() de forma similar:

```JavaScript
const miArray = ["marca", 3, "palabra"]

miArray.unshift('otro elemento')

console.log(miArray)
//[“otro elemento”, "marca", 3, "palabra"]
```

## QUITAR ELEMENTOS

De forma inversa, existen métodos para eliminar elementos del array.
Si queremos eliminar el primer elemento del array utilizamos el método shift(); y si queremos eliminar el último elemento, el método pop().

## POP Y SHIFT

```JavaScript
const nombres = ["Luis", "Ana", "Julia", “Juan”]

nombres.pop()
console.log(nombres) // ["Luis", "Ana", "Julia"]

nombres.shift()
console.log(nombres) // ["Ana", "Julia"]
```

## SPLICE

El método splice() permite eliminar uno o varios elementos de un array en cualquier posición. 
Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es la cantidad de elementos a eliminar desde esa posición.


```JavaScript
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa']
```

## JOIN

Mediante el método join  podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro:


```JavaScript
const nombres = ["Luis", "Ana", "Julia", “Juan”]

console.log( nombres.join(“, ”) ) 
// Luis, Ana, Julia

console.log( nombres.join(“*”) ) 
// Luis*Ana*Julia
```

## CONCAT

Mediante el método concat podemos combinar dos Arrays en un único Array resultante:

```JavaScript
const perros   = ["Pupy", “Ronnie”]
const gatos = ["Mishi", “Garfield”, "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas)
// ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]
```

## SLICE

El método slice devuelve una copia de una parte del Array dentro de un nuevo Array, empezando por el inicio hasta fin (fin no incluído). El Array original no se modificará.


```JavaScript
const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']
```

## INDEX OF 

El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1


```JavaScript
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1
```

## INCLUDES 

Similar al anterior, el método includes me permite saber si un elemento que recibo por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:

```JavaScript
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false
```

## REVERSE 

Como su nombre lo indica, el método reverse() invierte el orden de los elementos dentro de un array.

```JavaScript
const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres.reverse()
console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']
```

**NOTA**: : el método reverse es destructivo, o sea que modifica el array original, al igual que los métodos para agregar o quitar elementos.


## MÉTODOS Y PROPIEDADES MÁS COMUNES

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/cd28700b-eda7-477c-9272-a2c2057d7848)

---

## :STAR: 4 - ARRAYS DE OBJETOS

Los array pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.


```JavaScript
const objeto1 = { id: 1, producto: "Arroz" };
const array   = [objeto1, { id: 2, producto: "Fideo" }];
array.push({ id: 3, producto: "Pan" });
```

## ARRAYS + OBJETOS 

La combinación de arrays con objetos genera estructuras complejas de datos. 

Los métodos de arrays y las herramientas para recorrerlos nos permiten acceder y manipular todos estos datos de forma precisa y prolija.

##  FOR…OF

La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.

```JavaScript
const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
```

Es un iterador que recorre el array de principio a fin, y en cada iteración accedemos al elemento en cuestión a través de la referencia que declaramos. Por cada iteración se ejecuta el bloque de código que definimos entre llaves.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/d6f56ebe-e7aa-45e9-899a-6bac4db9089c)

```JavaScript
for (const referencia of array) { … }
```

## EJEMPLO APLICADO: OBJETOS, PRODUCTO Y ARRAY 

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

---

## :star: 5 - MATERIAL AMPLIADO

✦  [Array: Los apuntes de Majo (Página 21 a 24)](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view)

✦  [Estructuras de Datos: Objetos y Arreglos: Eloquent JavaScript(ES)](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/04_data.html)

✦  [Práctica guiada: Proyecto: Vida Electrónica](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/07_elife.html)

✦  Documentación:

[Documentación STRING](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)

[Documentación ARRAY](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)

---

## EJERCICIOS

**Consigna**: Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del tipo de proyecto que hayas elegido, deberás:

Incorporar al menos un Array en tu proyecto.

Utilizar algunos de los métodos o propiedades mencionados en la teoría.


**Sugerencia**: Los Array cumplen el papel de listas en el programa. Principalmente, los usamos para agrupar elementos de un mismo tipo. Siempre que sea posible emplear los métodos disponibles para trabajar con ellos.



---
