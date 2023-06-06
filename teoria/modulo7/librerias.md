# :star: 28 - LIBRERIAS

---

## :book: Temas

- GLOSARIO

- LIBRERÍAS: DEFINICIÓN / LIBRERÍAS EN JAVASCRIPT / PROBLEMAS QUE PUEDEN RESOLVER 

- IMPLEMENTACIÓN: DESCARGA DE ARCHIVOS O CDN / ARCHIVOS MINIFICADOS 

- DOCUMENTACIÓN

- SWEET ALERT: INSTALACIÓN / ALGUNOS USOS DE SWEET ALERT / SWEET ALERT EN EVENTO CLICK ME / ALGUNOS USOS DE SWEET ALERT / DESAFÍO GENÉRICO 

- TOASTIFY: FUNCIÓN DE ESTA LIBRERÍA / MODO DE USO / ALGUNOS USOS DE TOASTIFY 

- LUXON: FUNCIÓN DE ESTA LIBRERÍA / USOS / ACCEDIENDO A LAS FECHAS / FORMATEAR LA FECHA / TRANSFORMACIÓN / LA CLASE DURATION /  INTERVAL 



---

## :stars: GLOSARIO

**Sugar Syntax**: Es el nombre que se le da a los operadores avanzados que funcionan como simplificaciones de tareas más complejas. El operador ++ es un ejemplo de esto.

**Operador ternario**: Es una simplificación de la estructura condicional if…else. Es un condicional que consta sí o sí de tres partes: la condición, el caso de ejecución en caso que se cumpla, y el caso else si no se cumple.

**Operador Lógico AND**: Es una reducción de un condicional, pero trata de ejecutar (o retornar) algo sólo si la condición es verdadera, reduce un if sencillo con un solo bloque de ejecución.

**Operador lógico OR ( || ) **:  OR es sintácticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condición explícita: operando1 || operando2. 

**Desestructuración**: Es una técnica que nos permite declarar variables donde guardar propiedades de un objeto de forma rápida y directa.

---

## :stars: LIBRERÍAS  EN JAVASCRIPT 

## DEFINICIÓN 

Son códigos pre-escritos que facilitan el desarrollo de aplicaciones. Podemos pensar las librerías como pequeños programas escritos por terceros que podemos incorporar a nuestra aplicación para resolver problemas determinados.

Funcionan como cajas de herramientas que resuelven problemas recurrentes de forma rápida y eficiente. Podemos incorporarlas y utilizarlas a discreción según nuestra demanda.

##  PROBLEMAS QUE PUEDEN RESOLVER 

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/0c8705be-13c2-4c76-bb94-d854273da45f)


---

## :stars: IMPLEMENTACIÓN

## DESCARGA DE ARCHIVOS O CDN 

Las librerías se incorporan al proyecto como archivos 📂. Se vinculan a nuestra aplicación en el HTML como cualquier otro script de Javascript. 
Puede ser con la descarga de los archivos de la librería: 


```JavaSCript
<script src="js/libreria.js"></script>
```

Y también puede ser a través de un CDN:

```JavaSCript
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js">
</script>
```

## ARCHIVOS MINIFICADOS 

Una práctica común consiste en cargarlas en formato minificado, o minified. 

### ¿Qué es un archivo minificado?

Son archivos JS cuyo contenido se encuentra escrito en una única línea y de corrido, sin saltos de línea ni espacios innecesarios para achicarlos

---

## :stars: DOCUMENTACIÓN

La documentación es el manual de instrucciones para la implementación y manejo de las librerías. Es muy importante trabajar con ella.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/d733bf64-c68a-423c-b350-a0654fd11cb3)

---

## :stars: SWEET ALERT

Permite crear alertas personalizadas atractivas, sencillas, customizables e interactivas. Reemplaza el típico alert() tradicional.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/03567f4a-36c7-4e78-8467-2804570ef61a)


## INSTALACIÓN 

1. Primero debemos implementarla como vimos anteriormente.

2. Luego, siguiendo la documentación, en el ítem installation tenemos las instrucciones de cómo proceder:

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
```

3. ¡Y listo! Una vez agregada, ya podemos utilizarla.

Ahora, podemos disparar alertas a través del método .fire del objeto global Swal:


El método recibe un objeto por parámetro. Puede recibir distintas propiedades y valores, generando distintos resultados. Esto nos permite customizar la alerta.

```JavaScript
Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue?',
    icon: 'error',
    confirmButtonText: 'Cool'
})
```

## ALGUNOS USOS DE SWEET ALERT 

- Sweet Alert viene estilado con bootstrap, por lo que se recomienda tenerlo integrado para lograr un mejor resultado visual..

- En la documentación se listan todas las propiedades y valores posibles que se pueden definir para configurar el alert. Y en su sección “Recipe Gallery” hay muchos ejemplos.

- Es importante definir siempre: los eventos y el comportamiento esperado en nuestro script.


## SWEET ALERT EN EVENTO CLICK ME 

Generalmente, las alertas están vinculadas a determinados eventos. Veamos, por ejemplo, Sweet Alert aplicado al evento de un click.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/753da7e3-9fab-4433-be69-206e7b752474)

- HTML
```HTML
<body>
   
    <button id="myBtn">Click me</button>

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="app.js"></script>
</body>
```

- JS

```JavaScript
const btn = document.querySelector('#myBtn')
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Genial!',
        text: 'Has clickeado el botón!',
        icon: 'success',
        confirmButtonText: 'Cool'
})
})
```

## ALGUNOS USOS DE SWEET ALERT 

El alert generado tiene: ícono (success), título, texto y botón de confirmación. Podemos generar distintos alert modificando estas características:

```JavaSCript
btn.addEventListener('click', () => {

    Swal.fire({
        title: 'Error!',
        text: 'Error inesperado',
        icon: 'error',
        confirmButtonText: ' =( '
    })
})
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/05422cae-83f3-4909-ab4c-6961122895ab)

Es posible modificar la estructura por default del alert. Podemos cambiar la posición, agregar un timer, o eliminar el botón con showConfirmButton, entre otras propiedades.

```JavaScript
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
})
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/7cfd7640-0a80-483c-a16e-fe162267b75d)

¡Modificar el background y el fondo también es una opción!

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/3546df55-8218-490e-88c1-05f7eae39ac4)

## SWEET ALERT EN EVENTO CLICK ME 

Otra posibilidad es refinar la interacción con botones de confirmación y cancelación, controlando qué se hace luego en cada caso:

```JavaScript
btn.addEventListener('click', () => {
   
    Swal.fire({
        title: 'Está seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El archivo ha sido borrado'
            })
        }
    })
})
```

## ALGUNOS USOS DE SWEET ALERT

Luego del primer .fire() se puede concatenar un método .then() siguiendo la sintaxis del ejemplo, que recibe por parámetro el result del modal anterior. 
Así, evaluamos el estado de ese resultado y con eso podemos definir qué hacer en el caso de que se haya apretado el botón de confirmación o de cancelación.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/66bf8c57-4f90-4ab4-9b68-712f6b5d9c54)


##  DESAFÍO GENÉRICO 

Veamos el uso de Sweet Alert en diversos contextos. 
Para eso, te proponemos integrar Sweet Alert a tu proyecto y disparar un modal frente a un evento relevante de tu app.



---

## :stars: TOASTIFY

## FUNCIÓN DE ESTA LIBRERÍA 

Permite mostrar mensajes de notificación personalizados.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/2f83b617-8df8-48b3-9aab-0fc5a3a7f5d8)


##  MODO DE USO 

1. Hacer un llamado a Toastify() con un objeto de configuración.

2. Otro llamado al método .showToast() concatenado para dispararlo asignando:

a-Propiedad text con el mensaje a mostrar, y

b-Propiedad duration en milisegundos para el fadeout.


```JavaScript
btn.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000
    }).showToast();
})
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/46d01677-3d9a-4db2-b3ff-421a993f9c8c)


## ALGUNOS USOS DE TOASTIFY 

Algunos tips:

La [documentación](https://github.com/apvarun/toastify-js/blob/master/README.md) de Toastify es más sencilla que la de Sweet Alert.

El llamado siempre es el mismo, pero el resultado varía según la cantidad de propiedades y valores que definamos.

A través de las propiedades gravity y position podemos modificar la ubicación del Toast:

```JavaScript
btn.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        gravity: 'bottom',
        position: 'left'
    }).showToast();
})
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/d98324eb-5dc4-42ea-b344-de13d623354a)

La propiedad style del objeto de configuración, nos permite modificar el brackground del Toast

```JavaScript
Toastify({
        text: "Probando toast!",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c92d)'
        }
    }).showToast();
```

Y también podemos estilar el Toast a nuestro gusto, definiendo clases a través de la propiedad className.


```JavaScript
Toastify({
    text: "Probando toast!",
    duration: 3000,
    gravity: 'bottom',
    position: 'left',
    className: 'notificacion my-toast'
}).showToast();
```

Por otra parte, con la propiedad onClick podemos definir una función de callback que se ejecuta al clickear el toast, generando interacciones interesantes:


```JavaScript
btn.addEventListener('click', () => {
   
    Toastify({
        text: "Probando toast!",
        duration: 3000,
        onClick: () => {
           
            Toastify({
                text: 'Clickeaste un Toast!',
                duration: 1500,
                position: 'left'
            }).showToast()
        }
    }).showToast();
})
```

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/f4547d0f-6077-4ff8-a989-f3221e0a3656)

La propiedad destination permite definir URLs de destino al clickear el Toast. Es útil para direccionar el usuario a páginas de interés acordes al mensaje mostrado:

```JavaScript
btn.addEventListener('click', () => {
   
    Toastify({
        text: "Click aquí para ir a Syloper!",
        duration: 3000,
        destination: 'https://www.syloper.com'
    }).showToast();

})
```


---

## :stars: LUXON

## FUNCIÓN DE ESTA LIBRERÍA 

Permite trabajar con fechas y horas de una forma sencilla. Con Luxon podés formatear, parsear, sumar y restar fechas, entre otras funciones.

## ¿Cómo instalarla?

Puedes agregarlo a tu proyecto siguiendo las instrucciones de la documentación, descargando el script correspondiente y vinculandolo al html.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/5835014e-1d86-4bd4-b434-dca18244c210)

O bien utilizando el CDN:

```JavaScript
<script src="https://cdn.jsdelivr.net/npm/luxon@2.3.0/build/global/luxon.min.js"></script>
```

Esto nos provee la variable global luxon de la cual podemos acceder a todos los métodos necesarios.



## USOS 

La clase principal en luxon es DateTime. Para ser más eficientes/ordenados, podemos referenciarla en una variable global para facilitar su acceso:


```JavaScript
const DateTime = luxon.DateTime
```

Un DateTime representa un milisegundo específico en el tiempo, junto con una zona horaria. 

Podemos crear nuestro primer DateTime con el método .local(), que recibe argumentos desde el año hasta los milisegundos. 

En principio es similar al objeto Date de JS, pero trae diversos métodos útiles:


```JavaScript
const dt = DateTime.local(2022, 1, 25, 12, 10)
// 25 / 01 / 2022 - 12:10hs
```

Podemos crear un objeto de fecha con la fecha actual a través de DateTime.now(), que es equivalente a llamar a DateTime.local() sin argumentos.
	
También podemos crear fechas a través de un objeto, pasando las distintas características por propiedades y valores:


```JavaSCript
const dt = DateTime.fromObject(
     { day: 22, hour: 12, month: 2 },
     { zone: 'America/Buenos_Aires', numberingSystem: 'beng' }
  )

console.log( dt.toString() )
// 2022-02-22T12:00:00.000-03:00
```

El método fromObject recibe dos objetos por parámetro. 

El primero donde definimos numéricamente la fecha y hora, y el segundo donde aclaramos la zona horaria y el tipo de numeración.

También podemos crear fechas a partir de un string siguiendo la norma ISO, con el método fromISO:


```JavaScript
DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30
```

## ACCEDIENDO A LAS FECHAS

Si hicimos console.log de los ejemplos anteriores notamos que no obtenemos una presentación clara, útil, de las fechas creadas. 

Para poder recuperar los valores en un formato legible debemos aplicar algunos métodos específicos para esto. 

Algo que sí queremos es recuperar la fecha como string, y para eso aplicamos el método .toString() al objeto creado:


```JavaScript
const now = DateTime.now()
console.log( now.toString() )
// 2022-01-25T12:31:00.775-03:00
```

Podemos acceder a los distintos componentes de la fecha creada a través de propiedades específicas:

```JavaScript
const dt = DateTime.now();
dt.year    //=> 2022
dt.month   //=> 1
dt.day     //=> 25
dt.second  //=> 22
dt.weekday //=> 2
```

Y hay otros accesos posibles y útiles. 

La totalidad de ellos se puede revisar en la documentación de Luxon para decidir cuál es el que necesitas:


```JavaScript
const dt = DateTime.now();

console.log( dt.zoneName ) // America/Buenos_Aires
console.log( dt.daysInMonth ) // 31
```

## FORMATEAR LA FECHA 

En general vamos a querer mostrar nuestra fecha en un formato legible acorde a nuestra necesidad. 

Para esto, el más común es el método .toLocaleString() que ajusta la fecha a un formato sencillo y genérico. 

Sin embargo, Luxon posee una lista de presets con distintos formatos posibles, el cual podemos elegir y enviar por parámetro al método .toLocaleString(). 

Adicionalmente, puedes concatenar previamente el método .setLocale para cambiar el idioma de presentación.

Les presentamos un ejemplo tomando al día Viernes 14 de Octubre de 1983:

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/75c14130-170a-4766-a5da-2f523a9f05ed)


```JavaScript
const dt = DateTime.now();

dt.toLocaleString()  // 25/10/2022
dt.toLocaleString(DateTime.DATE_FULL)  // 25 de octubre de 2022
dt.toLocaleString(DateTime.TIME_SIMPLE)  // 12:51

dt.setLocale('en').toLocaleString(DateTime.DATE_FULL)  
// October 25, 2022
```

Puedes acceder al listado de presets acá: [https://moment.github.io/luxon/#/formatting?id=presets](https://moment.github.io/luxon/#/formatting?id=presets)


## TRANSFORMACIÓN

Los objetos de Luxon son inmutables.

Esto significa que los métodos de transformación no modifican la variable sobre la cual los aplicamos, sino que retornan nuevas instancias alteradas de ellos.

Con los métodos plus y minus podemos obtener cálculos sobre las fechas de forma sencilla. 

Pasamos un objeto con la cantidad de días, meses, horas, minutos, etc., que queramos sumar o restar a la fecha de referencia:

```JavaScript
const dt = DateTime.now();

const dt = DateTime.now();

console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
// 25/10/2022 14:21

const suma = dt.plus({ hours: 5, minutes: 15 })
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// 25/10/2022 19:36

const resta = dt.minus({ month: 2, days: 10 })
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 15/08/2021 14:21
```

Se pueden crear nuevas instancias reemplazando propiedades específicas:

```JavaScript
const dt = DateTime.now()
dt.set({hour: 3}).hour   //=> 3
```

##  LA CLASE DURATION 

La clase Duration representa una cantidad de tiempo, como puede ser “3 horas y 15 minutos”. 

Se crea a través del método .fromObject enviando un objeto con las características deseadas. 

Se puede sumar o restar a un objeto DateTime, y también tiene sus propios getters:


```JavaScript
const Duration = luxon.Duration

const dt = DateTime.now();
const dur = Duration.fromObject({ hours: 3, minutes: 15 });

console.log( dur.hours ) // 3
console.log( dur.minutes ) // 15
console.log( dur.seconds ) // 0

console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )
//  25/10/2022 14:35

const suma = dt.plus(dur)
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// 25/10/2022 17:50

const resta = dt.minus(dur)
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// 25/10/2022 11:20
```


##  INTERVAL 

De forma similar podemos trabajar la clase Interval, que con su constructor podemos enviar dos fechas y nos devuelve el intervalo entre ellas, pudiendo acceder para realizar los cálculos que necesitemos.


```JavaScript
const Interval = luxon.Interval

const now = DateTime.now()
const later = DateTime.local(2022, 10, 26)
const i = Interval.fromDateTimes(now, later)

console.log( i.length('days') ) // 0.3905736111111111
console.log( i.length('hours') ) // 9.373766666666667
console.log( i.length('minutes') ) // 562.426
```


---
