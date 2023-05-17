MODULO 6 - 22 - OBJETOS

---

- GLOSARIO

- OBJETOS:  CONCEPTOS GENERALES

- OBJETOS: CONSTRUCTORES

- MÉTODOS Y OPERACIONES CON OBJETOS

- CLASES

- PRACTICA

--- 

## :star: GLOSARIO

- **Parámetros**: cuando necesitamos enviarle a la función algún valor o dato para que luego la misma lo utilice en sus operaciones, estamos hablando de los parámetros de la función.

- **Ámbito de una variable (llamado "scope" en inglés)**: es la zona del programa en la que se define la variable, el contexto al que pertenece la misma dentro de un algoritmo. 

JavaScript define dos ámbitos para las variables: global y local.

- **Variables locales**: se crean y se usan siempre en las funciones.

- **Variables globales**: se definen fuera de las funciones, y se pueden usar en cualquier lugar del código.

---

## :star: OBJETOS:  CONCEPTOS GENERALES

## Definición

En JS, los objetos son estructuras que podemos definir para agrupar valores bajo un mismo criterio. 

Podemos decir que un objeto es una colección de datos relacionados como una entidad. Se componen de un listado de pares clave-valor, es decir, contienen propiedades y valores agrupados.

## Utilidad

La utilidad de los objetos deviene de su composición por varios valores y operaciones comunes (funciones) para todos los elementos de este tipo y sus propiedades.

```JavaSCript
let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }
```

## Anatomía de un objeto

Un objeto literal se define directamente entre llaves { }
Los valores que almacenan se listan separados por coma, bajo la forma propiedad: valor
 
```JvaScript
const persona1 = { 
     nombre: "Homero", 
     edad: 39, 
     calle: "Av. Siempreviva 742" 
}
```

## OBTENER VALORES DE UN OBJETO 

Para obtener el valor de una propiedad en un objeto utilizamos la notación punto (.): El nombre de la variable del objeto, seguido de punto y el nombre de la propiedad:

```JvaScript
const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle)
```

Otra forma de obtener el valor de una propiedad en un objeto utilizamos la notación corchetes ([]): El nombre de la variable del objeto, seguido de corchetes y dentro de ellos un string del nombre de la propiedad:

```JvaScript
const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])
```

## ASIGNAR VALORES A LAS PROPIEDADES .

Es posible usar las dos formas( corchetes y paréntesis) para acceder a las propiedades y asignar nuevos valores a los datos almacenados en las propiedades del objeto.


```JvaScript
const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
                   
persona1["nombre"] = "Marge"
persona1.edad = 36
```

---

## OBJETOS: CONSTRUCTORES

## CONSTRUCTORES

En JS, el constructor de un objeto es una función que usamos para crear un nuevo objeto cada vez que sea necesario.

Con esta “función constructora” podemos inicializar las propiedades del objeto al momento de ser instanciado con new.

```JvaScript
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
```

## CONSTRUCTOR Y NEW

En el ejemplo anterior, se define la función Persona, donde se asignan las diferentes propiedades con los valores recibidos como parámetros.

Luego, en algún lugar del código posterior a esas líneas, se puede construir un objeto Persona declarando una variable y asignando la referencia del objeto instanciado mediante la instrucción new Persona(...)

## USO DEL THIS

La palabra clave this (“este”) refiere al elemento actual en el que se está escribiendo el código.  Cuando se emplea un función constructora para crear un objeto (con la palabra clave new), this está enlazado al nuevo objeto instanciado.

This es muy útil para asegurar que se emplean las propiedades del objeto actual.


```JvaScript
function Persona(literal) {
    this.nombre = literal.nombre;
    this.edad   = literal.edad;
    this.calle  = literal.calle;
}
const persona1 = new Persona({ nombre: "Homero", edad: 39, calle: "Av.Siempreviva 742" });
```

---

## :star: MÉTODOS Y OPERACIONES CON OBJETOS

FUNCIÓM

```JvaScript
//Funciones: Generalmente retornar un valor y son de acceso global.
function f1(){
    return this;
}
```

MÉTODO

```JvaScript
//Métodos: Se requiere un objeto y puede no retornar un valor.
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
```

## MÉTODOS EN OBJETOS JS

JavaScript cuenta con sus propios objetos, incluso ya usamos algunos de ellos sin identificar que son objetos.

Por ejemplo: Cada vez que creamos una cadena de caracteres se crea automáticamente como una instancia del objeto String y, por lo tanto, tiene varios métodos/propiedades comunes disponibles en ella.


```JvaScript
let cadena = "HOLA MUNDO";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());
```

##  MÉTODOS PERSONALIZADOS

Podemos crear nuestros propios métodos para objetos personalizados, referenciando funciones por su nombre o definiendo funciones anónimas asociadas a una propiedad de la función constructora. 

Llamar a un método es similar a acceder a una propiedad, pero se agrega () al final del nombre del método, posiblemente con argumentos.


```JvaScript
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
```

## OPERADOR IN Y FOR…IN 

El operador in devuelve true si la propiedad especificada existe en el objeto. 
Mientras que el bucle for...in permite acceder a todas las propiedades del objeto, obteniendo una propiedad por cada iteración.

```JvaScript
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
```

---

## :star: CLASES

Las clases de JavaScript, introducidas en ES6, proveen una sintaxis mucho más clara y simple para crear objetos personalizados.

Son una equivalencia al empleo de función constructora y permite definir distintos tipos de métodos. 

```JvaScript
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
```

## CLASES Y MÉTODO

En la declaración de clase, la función constructora es reemplazada por el método constructor. Los métodos en las clases no referencian a propiedades, se declaran dentro del bloque sin la palabra function.

```JvaScript
class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();
```

## EJEMPLO APLICADO: CLASE PRODUCTO

```JvaScript
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
```

## OBJETOS: RESUMEN 

Los objetos tienen propiedades y métodos.

El método constructor de un objeto sirve para crear el mismo y asignarle sus propiedades. Permite crear varios objetos usando el mismo constructor.

Las funciones de JS son generalmente de acceso global y los métodos son únicamente utilizados para ser invocados por los objetos que lo contienen.

Las clases son otra forma de crear objetos personalizados en JS.

---

## :star: MATERIAL AMPLIADO

✦  Objetos

[Los apuntes de Majo (Página 25 a 30)](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view)

[Te lo explico con gatitos](https://teloexplicocongatitos.com/poster/tlecg07)

✦   Documentación

[Documentación Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos)

[Documentación Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes)

---

## :star: PRACTRICA

### INCORPORAR OBJETOS

- **Consigna**: A partir de los ejemplos, y en función de proyecto que hayas elegido, deberás:

Crear al menos un objeto para controlar el funcionamiento de tu proyecto.

Incorporar sus propiedades y su constructor.

Invocar a ese objeto en algún momento donde el usuario realice alguna acción.

Utilizar sus métodos.

- **Sugerencia**: Reconocer elementos en el simulador cuya información está compuesta por más de un valor y existen operaciones comunes (funciones) para todos los elementos de este tipo y sus propiedades. 
