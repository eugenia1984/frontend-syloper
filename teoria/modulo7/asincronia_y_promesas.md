#:Star: 29 - ASINCRONÍA Y PROMESAS

---

## :book: Temas:

- GLOSARIO

- MODELOS DE PROGRAMACIÓN SINCRÓNICA Y ASINCRÓNICA: PROGRAMACIÓN SINCRÓNICA / PROGRAMACIÓN ASINCRÓNICA / ARCHIVOS MINIFICADOS 

- setTimeout : EJEMPLO DE APLICACIÓN DE setTimeout /   EJEMPLO DE APLICACIÓN DE setTimeout / ANTES DE SEGUIR / EJEMPLO DE APLICACIÓN DE setTimeout

- CALL STACK:  DEFINICIÓN / CALL STACK / ESTADOS DE CALLSTACK 

- EVENT LOOP: LOUPE /   EVENT LOOP

-  setInterval

- clearInterval & clearTimeout

- PROMESAS: DEFINICIÓN / PROMESAS 

- RESOLVE Y REJECT

- THEN & CATCH

- FINALLY:   DEFINICIÓN / SIMULANDO PETICIÓN DE DATOS

---

## :computer: GLOSARIO

Librerías: Códigos pre-escritos que facilitan el desarrollo de aplicaciones. Funcionan como cajas de herramientas que resuelven problemas recurrentes de forma rápida y eficiente.

Implementación: Las librerías se incorporan como archivos. Se vinculan como cualquier otro script de JS. Puede realizarse por descarga de archivos o a través del CDN.

Documentación: Es el manual de instrucciones para la implementación y el manejo de librerías

Sweet Alert: Es una librería que permite crear alertas personalizadas, atractivas, sencillas, customizables e interactivas.

Toastify: Es una librería que permite crear notificaciones personalizadas.

Luxon: Es una librería que permite trabajar con fechas y horas de forma sencilla. Se puede sumar, formatear, parsear y restar fechas, entre otras funciones.

---


## :computer: MODELOS DE PROGRAMACIÓN SINCRÓNICA Y ASINCRÓNICA

## PROGRAMACIÓN SINCRÓNICA 

En este modelo, nuestro programa funciona de manera lineal, ejecutando una acción y después otra. Sólo podemos realizar una tarea a la vez y cada tarea es bloqueante de la siguiente 🎯.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/33cd2582-a823-4342-b25d-81f73b60d120)



## PROGRAMACIÓN ASINCRÓNICA

Este modelo permite que múltiples tareas sucedan a la vez. Al comenzar una acción, nuestro programa sigue en ejecución; y cuando la acción termina nuestro programa es informado y consigue acceso al resultado correspondiente 🤹.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/4538fe72-8885-41d5-97c6-be87d9ee37e4)

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/95387cbf-0dd2-445e-b936-f24a0e41fe67)

Entonces, en modelos asincrónicos debemos aprender cuándo y cómo sincronizar los resultados con la ejecución vigente🙌.

## ARCHIVOS MINIFICADOS 

👍 Una de las principales ventajas del modelo asincrónico: facilita el manejo de programas que realizan múltiples acciones a la vez.

✋ Uno de sus principales riesgos: puede dificultar la comprensión de aquellos programas que tienden a seguir una única línea de acción

¿Cómo funciona la asincronía en este contexto?
¿Cómo resolver situaciones comunes?

---

## :computer:  setTimeout

Es una función que permite realizar acciones asincrónicamente 🤹. La función recibe dos parámetros:
Una función de callback y un valor numérico que representa milisegundos

```JavaScript
setTimeout(fn, time)
```

Así, la función que pasamos por primer parámetro se ejecuta luego de que transcurra el tiempo definido en el segundo parámetro. Por ejemplo:

```JavaScript
setTimeout(()=> {
    console.log("Proceso asincrónico")
}, 3000)
```

Sin embargo, la salida se produce de la siguiente forma:

```JavaScript
// Inicia proceso
// Fin proceso

// Mitad de proceso  - tras 2 segundos
```

Esto sucede porque setTimeout funciona de forma asincrónica. Por eso es que los dos console.log se ejecutan antes, y por último vemos el resultado del setTimeout que va en el medio.

## EJEMPLO DE APLICACIÓN DE setTimeout

Podemos estilar un elemento del DOM tras un evento y removerle una clase tras cierto tiempo:


```JavaScript
const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
})
```

Aquí se agrega una clase a un elemento tras clickear un botón, y luego se dispara un setTimeout que remueve esa clase del elemento tras 2500 milisegundos. Permite automatizar un evento interactivo.

Para casos sencillos asociados a eventos, lo visto en el ejemplo anterior puede resultar muy conveniente.

Sin embargo, el problema está cuando tratamos combinar de forma compleja ambos tipos de procesos.

## EJEMPLO DE APLICACIÓN DE setTimeout

De forma sincrónica, esperamos ver en vertical un console.log de cada letra de ambos strings, uno después del otro:


```JavaScript
for (let letra of "hola") {
    console.log(letra)
}

for (let letra of "mundo") {
    console.log(letra)
}
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/58e7164a-4f3c-4968-8f9d-22e21cacbb67)



## EJEMPLO DE APLICACIÓN DE setTimeout

¿Qué pasa cuando dentro de los iteradores agregamos un setTimeout a cada console.log? 👀 
El iterador ejecuta de forma sincrónica los llamados al setTimeout por cada letra, y estos se resuelven en orden con el delay correspondiente de forma asincrónica:



```JavaScript
for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
}
```

## ANTES DE SEGUIR

Lo visto anteriormente en los ejemplos no se explica precisamente con el tiempo de ejecución del proceso, sino con el orden que ocupa en el listado de peticiones a ejecutar.  



## EJEMPLO DE APLICACIÓN DE setTimeout

Si se explicase realmente por el tiempo de ejecución, podríamos suponer que un setTimeout con 0 milisegundos se ejecutaría de forma inmediata, sin irrumpir el orden sincrónico del programa. Pero vemos que el efecto sigue siendo igual que antes 👇. Para ello, debemos entender Call Stack y Event loop.


```JavaScript
console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 0)

console.log("Fin proceso")
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/08bba833-7b17-4b60-a498-bb26adeb7346)

--- 

## :computer: CALL STACK

##  DEFINICIÓN

Es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. Javascript es un lenguaje single threaded, o de un único hilo, lo que significa que tiene un único stack o pila de ejecución. De ahí que la ejecución es implícitamente sincrónica.

## CALL STACK 

¿Cómo es el proceso de Call Stack? 📞

Cuando se está a punto de ejecutar una función, ésta es añadida al stack. Si la función llama a la vez, a otra función, ésta es agregada sobre la anterior:


```JavaScript
function multiply (x, y) {    
    return x * y;
}

function printSquare (x) {    
    let s = multiply(x, x);    
    console.log(s);
}

printSquare(5);
```

## ESTADOS DE CALLSTACK 

Es una lista de tareas de JS a ejecutar durante el programa 📝. Cada nueva instrucción se agrega en el orden que corresponde al stack y el motor de JS resuelve una a una.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/58f13501-f75d-41d4-aade-c94425281dfa)



---

## :computer:  EVENT LOOP

Muchas funciones asincrónicas se ejecutan en un stack diferente. El Event Loop es la herramienta que permite la sincronización entre nuestro call stack con estas tareas asincrónicas que funcionan en un thread aparte.

Si el stack está vacío, el Event Loop envía la primera función que esté en la callback queue al call stack y comienza a ejecutarse.


## LOUPE 

Loupe es una visualización que nos ayuda a comprender cómo interactúan entre sí call stak, event loop y callback queue. Podemos escribir código sincrónico y asincrónico y ver cómo es el funcionamiento de estas piezas en conjunto 🧩:

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/2edb7421-01c0-4443-a16b-049ba64a7cbc)


##   EVENT LOOP

Así, entendemos cómo funciona de tal manera una instrucción como la siguiente 👉

Por más que hagamos el timeout con 0 milisegundos, éste se envía al stack de web apis primero, luego al callback queue, y finalmente el event loop lo incorpora al callstack para su ejecución, luego de los console.log anteriores 🧩


```JavaScript
console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 0)

console.log("Fin proceso")

// Inicia proceso
// Fin proceso
// Mitad de proceso  
```

## :computer: setInterval

Tiene la misma sintaxis que setTimeout, pero la unidad de tiempo es un intervalo para la repetición de la función asociada:


```JavaScript
setInterval(() => {
    console.log("Tic")
}, 1000)
```

Permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detención o se cierre la aplicación ⏱.

---

## :computer: clearInterval & clearTimeout

En caso de querer remover un Intervalo, utilizamos la función clearInterval(). También podemos detener la ejecución de un setTimeout invocando clearTimeout ().


Cuando llamamos un setInterval() éste retorna una referencia al intervalo generado, el cual podemos almacenar en una variable. Es esta referencia la que debemos pasar a la función clearInterval para que la limpieza tenga efecto:


```JavaScript
let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)
```

Funciona igual con los timeout. Si guardamos en una variable la referencia al timeout generado, podemos usarla para removerlo luego. En el siguiente caso, el timeout generado nunca llega a ejecutarse:


```JavaScript
console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin)
```

---

## :computer: PROMESAS

## DEFINICIÓN

Es un objeto de Javascript que representa un evento a futuro. Es una acción asincrónica que se puede completar en algún momento y producir un valor, y notificar cuando esto suceda.

Una promesa cuenta con tres estados posibles: pending, fulfilled y rejected. Las promesas pueden ser resueltas o rechazadas.

## PROMESAS 

Podemos crear promesas a través de su constructor new Promise. Su sintaxis es algo compleja, ya que recibe una función por parámetro que a su vez recibe por parámetro las funciones de resolve y reject 👇


```JavaScript
new Promise( (resolve, reject) => {
    //cuerpo de la promesa
})
```

---

## :computer: RESOLVE Y REJECT

En principio, una promesa se retorna con estado pending, entendiendo que el valor a generar aún no fue resuelto ⏳:

```JavaScript
const eventoFuturo = () => {
    return new Promise( (resolve, reject) => {
        //cuerpo de la promesa
    } )
}

console.log( eventoFuturo() ) // Promise { <pending> }
```

Esta función retorna una promesa que no se resuelve. Por lo tanto, veremos que el valor que genera es un objeto Promise con estado pendiente.

El valor de retorno de la promesa se define a través del llamado a las funciones de resolve o reject:

- Si el cuerpo de la promesa llama a resolve(), la promesa cambiará su estado a fulfilled, con el valor enviado a resolve().

- Si la promesa llama a reject(), cambiará su estado a rejected con el valor enviado al reject().

## RESOLVE Y REJECT: EJEMPLO

Aquí podemos ver cómo cambia de estado la promesa con distintos valores. Según el llamado de la función la promesa se verá resuelta o rechazada. Sin embargo, lo que vemos por consola es el objeto Promise que retorna la función, y con lo que nos interesa trabajar en realidad es con el valor de resolución de la promesa 👇

```JavaScript
const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}

console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }
```

## RESOLVE Y REJECT: EJEMPLO

Miremos el mismo caso agregando un delay con setTimeout:


```JavaScript
const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}

console.log( eventoFuturo(true) ) // Promise { <pending> }
console.log( eventoFuturo(false) ) // Promise { <pending> }
```

En este caso, el console.log es sincrónico y vemos que la promesa está en pending en ambos llamados (su resolución se generará dentro de 2s). Las promesas tienen un mecanismo para trabajar esta asincronía y poder ejecutar funciones cuando cambie su estado.


---

## :computer: THEN & CATCH

Al llamado de una función que retorne una promesa, podemos concatenar el método .then() o .catch(), los cuales reciben una función por parámetro con la cual se captura el valor de la promesa:

**.then()** : Si la promesa es resuelta ✅, su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.

**.catch()** : si la promesa es rechazada ❌, su valor se captura dentro de un .catch() siguiendo la misma lógica.

Lo que queramos ejecutar cuando la promesa se resuelva o rechace, debemos definirlo dentro de un .then() o .catch(), según el caso 🙌:

```JavaScript
eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })

eventoFuturo(false)
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })
```

Se aprecian los console.log tras 2 segundos de delay y lo que vemos es, precisamente, el valor que retornan el resolve o reject de la promesa.

Como una promesa puede tener varios estados posibles, se puede concatenar varios .then() o .catch() en un mismo llamado, y caeremos en el caso que corresponda según cómo se haya resuelto la promesa 🤔


```JavaScript
eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })
    .catch( (error) => {
        console.log(error)
    })

eventoFuturo(false)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })
```
## FUNCIÓN DE ESTA LIBRERÍA 

Para cada promesa podemos definir una estructura para trabajar los distintos casos posibles. Cada promesa sólo puede resolverse o rechazarse una única vez. Es un mecanismo de control claro y ordenado para trabajar la asincronía y los posibles valores a recibir 😄.


---

## :computer: FINALLY

##   DEFINICIÓN 

finally() es un método que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa:

```JavaScript
eventoFuturo(true)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })
// Promesa resuelta
// Fin del proceso
```

## SIMULANDO PETICIÓN DE DATOS

A raíz de lo visto de asincronía y promesas, podemos simular cómo es la petición de datos a algún servidor y generar alguna interacción con el resultado ¡Vamos a hacerlo! 🙋‍♀️

En el siguiente ejemplo, tenemos un array de productos vacíos. Al cargar la aplicación queremos simular un delay para la actualización de estos datos y lo haremos llamando una promesa que retorna el array de productos real. Cuando captemos su resolución, en el .then() actualizamos nuestro array y llamamos una función para generar la vista del resultado 👉

```JavaScript
// función que tras 3 segundo retorna un array de objetos

const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirProductos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    })
}
```


```JavaScript
// inicializamos con un array vacío
let productos = []

const renderProductos = (arr) => {
    // función que genere la vista de los productos
}

// asincrónicamente pedimos los datos y generamos la vista
pedirProductos()
    .then((res) => {
        productos = res
        renderProductos(productos)
    })

```

---
