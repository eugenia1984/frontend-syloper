# :star: 30 - AJAX Y FETCH 

---

## :book: Temas:

- GLOSARIO

- AJAX: DEFINICIÓN 

- MODELO CLIENTE-SERVIDOR: COMUNICACIÓN CON EL SERVIDOR 

- PETICIONES HTTP

- ESTADOS DE PETICIÓN

- API

- FETCH

- RESPONSE

- ANALIZANDO RESPUESTAS

- ENVIANDO DATOS CON POST

- RUTAS RELATIVAS

- ASYNC - AWAIT

- MATERIAL EXTRA

---

## :computer: GLOSARIO

- **Programación sincrónica**: permite que múltiples cosas sucedan a la vez. Al comenzar una acción, nuestro programa sigue en ejecución; y cuando la acción termina nuestro programa es informado de ésto y tiene acceso al resultado.

- **setTimeout**: La función recibe dos parámetros: primero una función de callback, y segundo un valor numérico que representa milisegundos.

- El **Event Loop** es la herramienta que permite la sincronización entre nuestro callstack con estas tareas asincrónicas que funcionan en un thread aparte

- **Promesa**: una promesa es un objeto de Javascript que representa un evento a futuro. Es una acción asincrónica que se puede completar en algún momento y producir un valor, y notificar cuando esto suceda.

- **.then()**: Si la promesa es resuelta, es decir se llama al resolve() en ella, su valor de retorno se captura dentro del .then(), recibiendo por parámetro de su función ese valor.

- **.catch()**: si la promesa es rechazada, su valor se captura dentro de un .catch() siguiendo la misma lógica.

- **Finally**: Las promesas nos ofrecen también un método finally() que recibe una función la cual se ejecutará siempre al finalizar la secuencia, sin importar si se haya resuelto o no la promesa.

---

## :computer: AJAX

## DEFINICIÓN 

En los 2000, los/as desarrolladores/as web se encontraban ante el constante desafío de obtener o enviar información sin afectar el estado actual de la página (sin requerir una recarga completa refresco de la página).

Para dar respuesta a este problema, surgió AJAX (JavaScript Asíncrono y XML), un conjunto de técnicas de desarrollo que permiten que las aplicaciones web funcionen de forma asincrónica para procesar tareas en segundo plano.

En consecuencia, cualquier app o web que emplee AJAX puede enviar y recibir datos sin volver a cargar toda la página, evitando la interrupción de acciones realizadas por el usuario, añadiendo interactividad y dinamismo a nuestra aplicación. 

Esto hace a las características esenciales del software moderno.


---

## :computer: MODELO CLIENTE-SERVIDOR

## COMUNICACIÓN CON EL SERVIDOR 

Repasemos el funcionamiento de una aplicación web. 
Se accede a la misma mediante conexión a internet, empleando un navegador y referenciando la dirección web del sitio (también llamado dominio, por ejemplo [https://www.syloper.com/](https://www.syloper.com/) ).

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/57d8ee73-d30a-4eff-a87b-81729f40e3a4)

El dominio está asociado a un servidor, es decir, una computadora que tiene la aplicación web (el servidor aloja la aplicación web). Cuando carga el sitio, el usuario visualiza la parte frontal de la aplicación llamada front-end o lado del cliente, con la que puede interactuar.

Las apps modernas suelen generar experiencias de usuario enriquecidas gracias a su conexión a servicios de datos. 

Las apps consumen recursos provistos por algún servidor (back-end), o envía datos a éste para almacenarlos de forma persistente.

Es fundamental aprender a dominar los métodos para realizar este intercambio de información y comprender el protocolo implicado.


---

## :computer:  PETICIONES HTTP

El mecanismo por el cual se piden y proveen datos a través de internet es HTTP (Hypertext Transfer Protocol). 

Cuando emitimos una orden al navegador, hace una petición (o request) HTTP a algún servidor. Luego, la recibirá, procesará y nos devolverá una respuesta con información que utilizaremos en la aplicación.

Estas peticiones que debemos hacer están definidas por varias partes:

- Una URL o dirección.

- Un método (GET, POST, PUT, DELETE).

- Headers.

- Body.

- Parámetros (Query Params o URL Params).

## URL

Cuando nos comunicamos con un servidor para pedir información lo hacemos a través de una URL, ya que éste es un programa alojado en algún host y nos comunicamos con él a través de la dirección correcta. 

## MÉTODO

Cada petición que hacemos está acompañada por un verbo que indica al servidor cuál es nuestra intención.  

El servidor tiene la capacidad de escuchar distintas peticiones en la misma URL, decidir a cuál responder y cómo. Son 4 los verbos más utilizados, aunque hay muchos más: Get, Post, Put & Delete.

- **GET**: Para obtener información (o recurso) del servidor. Suelen ser las más utilizadas.

- **POST**: Para enviar información al servidor para crear algún recurso.

- **PUT**: Para crear o modificar algún recurso en el servidor.

- **DELETE**: Para eliminar algún recurso en el servidor.

Las peticiones de tipo **POST** y **PUT** van acompañadas de un **body** (cuerpo de la request) donde se definen los datos o información a enviar al servidor. **GET** o **DELETE**, por su parte, **no tienen body** ya que no necesitan enviar datos adjuntos.

## BODY

Es el espacio en la petición donde se definen los datos a enviar al servidor

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/05778d09-4d3e-4fa2-a4a6-3f2467792635)

## HEADERS

Las **cabeceras (headers) HTTP** permiten al cliente y servidor enviar información sobre la petición y la respuesta. Los headers incluyen información sobre la petición para establecer una transferencia segura y clara, y de ser necesario se pueden modificar para agregar datos adicionales.

No debemos confundir  información sobre la petición (headers) con los datos que la petición puede transferir (body).

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/fa1a3a5f-bb1e-4103-b6c6-be22e555392e)

## PARÁMETROS

Para especificar una petición, se puede enviar información adicional en la forma de parámetros a través de la URL. Tenemos dos formas de definir parámetros a través de la URL:

- Query params

- URL params

## QUERY PARAMS

Esta sintaxis permite adjuntar en la URL una serie de parámetros en la forma de pares clave-valor. Por ejemplo, si queremos buscar algo por google, debemos enviarle un valor de búsqueda por el parámetro q, a través de la url.

Se utiliza el símbolo **?** para indicar el final de la parte de la dirección de la url y el comienzo del query. A partir de allí, se escriben parámetros con la forma **clave=valor**, pudiendo definir varios separándolos con el signo ampersand (**&**).


## QUERY PARAMS

Ejemplo:  en la siguiente URL se hace una consulta a la PokeApi [https://pokeapi.co/docs/v2](https://pokeapi.co/docs/v2), pidiendo información al endpoint de /pokemon, y se envían los parámetros offset=0 y limit=20 :

[https://pokeapi.co/api/v2/pokemon?offset=0&limit=20](https://pokeapi.co/api/v2/pokemon?offset=0&limit=20)

Esto condiciona la búsqueda que queremos hacer en ese servidor.

## URL PARAMS

Esta sintaxis permite enviar parámetros directamente en la forma de segmentos de la URL, es decir separados por / . Por ejemplo, la PokeApi nos indica lo siguiente: 
``https://pokeapi.co/api/v2/pokemon/{id or name}/``

Significa que ese {id or name} es un parámetro, un valor dinámico que insertamos en la URL, en este caso para obtener información sobre un pokemon según su ID o nombre. Para obtener aquel con id = 1, haríamos una petición GET a la siguiente url: 

[https://pokeapi.co/api/v2/pokemon/1](https://pokeapi.co/api/v2/pokemon/1)


---

## :computer: ESTADOS DE PETICIÓN

En la pestaña Network de las herramientas de desarrollador podemos ver todas las peticiones realizadas por el navegador. 

Por ejemplo, al solicitar acceso a algún sitio web, el navegador realiza numerosas peticiones tipo GET para obtener recursos del servidor en cuestión.

Estas peticiones proporcionan todos los archivos necesarios para montar la página en el browser (html, css, scripts, imágenes, etc.) y con eso poder visualizar la aplicación correctamente.

Cada petición tiene un Status, un código que significa el estado de la petición:

- Los códigos de estado que comienzan en 2 (generalmente 200), significa que la petición fue exitosa.

- Los códigos que empiezan con 4 significan que hubo algún error con la petición. El famoso 404 indica que el recurso buscado no fue encontrado.

- Los códigos que empiezan con 5 significan que hubo un error con el servidor, por lo tanto no deviene de un error en la petición.

---

## :computer: API

Una API (Application Programming Interfaces) es una aplicación web construida en base a la arquitectura [API REST](https://es.wikipedia.org/wiki/Transferencia_de_Estado_Representacional), a la cual podemos solicitar y enviar información desde el cliente. Generalmente, nos comunicamos con aplicaciones de este tipo y es la tendencia actual de desarrollo.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/f8f15a4d-8403-44e7-9fa5-76123bcab42e)

Hay muchas APIs disponibles que podemos utilizar para acceder a distintos **recursos útiles** para nuestra aplicación.

>>> Servicios de contenido (CMS), Plataformas de pago, Servicios de e-mail, etcétera.
Incluso hay APIs creadas como bancos de información sobre series y videojuegos populares, como la PokeApi ([Documentation - PokéAPI](https://pokeapi.co/docs/v2) ) o Star Wars API ( [SWAPI](https://swapi.dev) ).

Si tomamos por ejemplo la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/), que sirve para hacer pruebas de peticiones, podremos notar que existen distintas rutas que podemos usar:

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/d358d95c-a850-4b57-b21c-7a24ffb0d618)

Una API suele tener una **URL base** (el dominio donde está alojada la aplicación) y luego puede tener varios **endpoints**, es decir, distintas secciones a las que podemos acceder. 
A la vez, se pueden hacer peticiones con distintos métodos al mismo endpoint y obtener distintos resultados.

Generalmente, similar a cuando queremos incorporar una librería, al momento de consumir una API **debemos revisar su documentación**. Allí se definen los distintos endpoints disponibles, los métodos a utilizar para hacer una petición y qué se nos ofrecerá en respuesta.

Por ejemplo, la Poke Api nos ofrece la opción de consultar sobre algún pokemon [https://pokeapi.co/docs/v2#pokemon](https://pokeapi.co/docs/v2#pokemon).


![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/2f12867a-a1ab-4642-b454-531253f95d16)

---

## :computer: FETCH

Javascript nos ofrece el **método fetch()** para hacer peticiones HTTP a algún servicio externo. Como estas peticiones son asincrónicas, convenientemente el método fetch() trabaja con **promesas**.

El método recibe un primer parámetro que es la URL a la cual hacer la petición, y un segundo parámetro opcional de configuración:

`fetch(url, config)`


Para los siguientes ejemplos utilizaremos la API de [JSON Placeholder](https://jsonplaceholder.typicode.com/guide/), diseñada para hacer pruebas de peticiones simulando un listado de posts.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/7b08c56a-36b3-4759-a46d-8e3b2e959301)


Por defecto el método fetch hace peticiones del tipo GET. Según la documentación, para obtener una lista de posts debemos hacer una petición del siguiente tipo.


Vayamos por parte para entender este proceso. Primero, llamemos al método con la URL correspondiente y veamos qué retorna:

```JavaScript
console.log( fetch('https://jsonplaceholder.typicode.com/posts') )
// Promise {<pending>}
```

Retorna una promesa pendiente. Para trabajar con la resolución de la petición, debemos hacerlo dentro del .then() correspondiente:

```JavaSCript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => console.log(resp) )
```

Haciendo console.log de la respuesta, no vemos el listado de posts que esperamos sino un objeto del tipo Response.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/f5de7243-a882-4500-839d-583daad7d564)


---

## :computer: RESPONSE

Llamar a **fetch()** retorna una promesa que resuelve en un objeto Response que contiene información sobre la respuesta del servidor, como su código de estado y headers.

Para acceder al contenido de la respuesta debemos dar un paso adicional, y por eso es que se ven dos **.then()** concatenados.

Generalmente, se transfieren datos en formato JSON. Por lo tanto, para obtener el contenido de la respuesta debemos aplicar el método .json() a ese objeto. Éste retorna a su vez una Promesa, por lo que capturamos su contenido (los datos enviados por la API) en un **segundo .then()**:

```JavaSCript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data)
    })
```

En el parámetro **data** tenemos el contenido de la respuesta de nuestra petición. En este caso, la API nos responde con un array de 100 elemento donde cada elemento es un post.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/d22cc72b-c3d6-48f1-a497-1f248dd4601c)


---

## :computer: ANALIZANDO RESPUESTAS

Trabajar con APIs nos ofrece un entorno claro sobre cómo comunicarnos y obtener respuestas con recursos. Sin embargo, cada API define qué responder, qué formato darle a los datos que envía y cómo estructurarlos. 

Por lo tanto, siempre debemos analizar las respuestas obtenidas para ver qué datos utilizar de ellas 

En este caso, veamos cómo son los objetos del array anterior.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/b28ecc1e-4e41-4ff5-b8dc-ce7f47c9e3ae)

## ANALIZANDO RESPUESTAS 

Cada elemento tiene propiedades body, id, title, userId. Estamos trabajando con el parámetro data definido que es un array de objetos. Por ello, podemos recorrerlo y acceder a sus objetos y propiedades.

```JavaSCript
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log( data[0].title )
        console.log( data[0].body )
    })
```

## ANALIZANDO RESPUESTAS 

Al obtener la respuesta de la API, recorremos el array obtenido y agregamos a la`` <ul>`` un elemento ``<li> ``con el contenido de cada post en el array. 
  
```JavaSCript
const lista = document.querySelector('#listado')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
        })
    })
```

Vemos en la página un listado de contenido obtenido desde un servicio externo.


---

## :computer: ENVIANDO DATOS CON POST

La API de JSON Placeholder también nos permite simular peticiones POST, es decir, podemos hacer una petición para enviar datos a la API. Al ser una simulación, no se crean recursos realmente en el servidor, pero sí obtenemos una respuesta aceptando el POST.

Dijimos que el segundo parámetro del método fetch es un objeto de configuración. En éste podemos definir el método, los headers y el body de la petición. Si bien fetch trae valores por defecto para esto (como el método que es GET), podemos modificarlo a discreción según sea necesario.

En este caso la documentación nos indica que para hacer un post debemos hacer un fetch con las siguientes características 

```JavaSCript
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: Syloper,
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
```

En el objeto de configuración tenemos varias propiedades a definir:

- method: ‘POST’. Significa que el método de la petición será POST.
Si no lo modificamos será de tipo GET por defecto.

- headers: En este caso se agrega una propiedad ‘Content-type’, con el valor que nos indica la documentación de la API. Si no se agrega la petición sería rechazada por el servidor.

- body: Aquí se adjuntan los datos a enviar al servidor. En este caso se envía un objeto con la forma { title, body, userId }. El body debe enviarse en formato JSON, por eso lo vemos envuelto en un JSON.stringify().

Por lo general, al hacer un POST obtenemos una respuesta que nos envía una copia del recurso creado en el servidor. La forma de trabajar la respuesta es la misma que la anterior.


---

## :computer: RUTAS RELATIVAS

Si la URL utilizada no contiene el prefijo ‘https:’, la ruta es relativa. Así, podemos hacer una petición a algún archivo local en formato JSON usando fetch.

Por ejemplo, creemos un archivo data.json que simule un array de productos:

```JSON
[
    {"nombre": "Producto 1", "precio": 1500, "id": 1},
    {"nombre": "Producto 2", "precio": 2500, "id": 2},
    {"nombre": "Producto 3", "precio": 3500, "id": 3},
    {"nombre": "Producto 4", "precio": 4500, "id": 4},
    {"nombre": "Producto 5", "precio": 5500, "id": 5}
]
```

Nótese que debe estar escrito con el formato json válido.

Ahora al momento de cargar la aplicación, podemos llamar a este archivo con fetch y generar una vista de forma asincrónica:


```JavaSCript
const lista = document.querySelector('#listado')

fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })
```

Al ser un archivo local la respuesta es casi inmediata, pero sigue siendo un proceso asincrónico.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/25c4ac1e-723c-4f40-b6e0-09143be42c1e)

---

## :computer: ASYNC - AWAIT

Trabajar con promesas facilita mucho el control de los procesos asincrónicos. Sin embargo, en procesos extensos se puede dificultar el trabajo escribiendo todo dentro de varios **.then()**.

Por suerte, los desarrolladores de JS ya pensaron en esto y nos ofrecen una herramienta que nos permite trabajar las promesas como si escribiéramos código sincrónico: **async await**.

El método fetch retorna una promesa. De forma sincrónica, si guardamos esta promesa en una variable veremos la promesa pendiente, porque esto sucede sincrónicamente:

```JavaSCript
const resp = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp) // Promise {<pending>}
```

Significa que el console.log() no espera a que se resuelva la promesa de la línea anterior para ejecutarse.

La **sentencia await** nos permite establecer un punto de espera en el código. Aplicado como prefijo a una promesa (en este caso, el return del fetch) se bloquea la ejecución de la siguiente instrucción hasta que la promesa se resuelva 😎.

Así, agregando esta sentencia podemos ver que ahora en la variable vemos el objeto Response, o sea la promesa resuelta:
 
```JavaSCript
const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp) // Response
```

Pero await sólo puede utilizarse dentro de una función asincrónica. Aquí es donde entra la sentencia async. Ésta palabra reservada sirve para declarar una función como asincrónica, y se agrega como prefijo a la función:

```JavaSCript
async function pedirPosts() { }
// o bien
const pedirPosts = async () => { }
```

Así, dentro de una función async podemos utilizar la sentencia await vista previamente. Esto nos permite esperar a que se resuelvan las promesas vistas para continuar con la instrucción siguiente. 

---

## :computer: MATERIAL EXTRA

✦  [Asincronismo | Los apuntes de Majo (Página 32)](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view)

✦  [AJAX | ¿Qué es AJAX?](https://developer.mozilla.org/es/docs/Web/Guide/AJAX/Primeros_Pasos)

✦  [Herramienta REST API |  REST API JSONPLACEHOLDER](https://jsonplaceholder.typicode.com/)

✦  [Plugin Visual Code | Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---
