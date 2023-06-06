# :star: EVENTOS

---

## :book: Temas:

- GLOSARIO

- EVENTOS EN JS: ¿QUÉ ES UN EVENTO? / ¿CÓMO FUNCIONA? 

- ¿CÓMO DEFINIR EVENTOS EN JS?: OPCIÓN UNO / OPCIÓN DOS / OPCIÓN TRES: SINTAXIS /  ¿CÚAL CONVIENE USAR?

- EVENTOS MÁS COMUNES: EVENTOS DEL MOUSE / EVENTOS DEL TECLADO /  EVENTO CHANGE / EVENTO INPUT / EVENTO SUBMIT / OTROS EVENTOS 

- INFORMACIÓN DEL EVENTO: 

-  MATERIAL AMPLIADO

- PRACTICA

---

## :computer: GLOSARIO

- **DOM o Modelo de Objetos del Documento**: es lo que permite interactuar a JS con los diferentes elementos HTML de una web, como también poder operar sobre ellos y modificarlos.

---

## :computer: EVENTOS EN JS: 

## ¿QUÉ ES UN EVENTO? 

Los eventos son la manera que tenemos en Javascript de controlar las acciones de los usuarios, y definir un comportamiento de la página o aplicación cuando se produzcan.

Con Javascript es posible definir qué sucede cuando se produce un evento, por ejemplo, cuando se realiza un clic en cierto elemento o se inserta un texto en un determinado campo.


## ¿CÓMO FUNCIONA? 

JavaScript permite asignar una función a cada uno de los eventos. 

Reciben el nombre de event handlers o manejadores de eventos.

Así, ante cada evento, JavaScript asigna y ejecuta la función asociada al mismo.

Hay que entender que los eventos suceden constantemente en el navegador.

JavaScript lo que nos permite hacer es escuchar eventos sobre elementos seleccionados. 

Cuando escuchamos el evento que esperamos, se ejecuta la función que definimos en respuesta.

A esta escucha se la llama event listener.

---

## :computer: ¿CÓMO DEFINIR EVENTOS EN JS?

## OPCIÓN UNO 

El método addEventListener() permite definir qué evento escuchar sobre cualquier elemento seleccionado.

El primer parámetro corresponde al nombre del evento y el segundo a la función de respuesta.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Syloper</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.addEventListener("click", respuestaClick)
      function respuestaClick(){
        console.log("Respuesta evento");
      }
    </script>
  </body>
</html>
```


## OPCIÓN DOS 

Emplear una propiedad del nodo para definir la respuesta al evento. 

Las propiedades se identifican con el nombre del evento y el prefijo on.

También es posible emplear funciones anónimas para definir los manejadores de eventos.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer App</title>
  </head>
  <body>
    <h2>Syloper</h2>
    <button id="btnPrincipal">CLICK</button>
    <script>
      let boton = document.getElementById("btnPrincipal")
      boton.onclick = () =>{console.log("Respuesta 2")}
    </script>
  </body>
</html>
```

## OPCIÓN TRES: SINTAXIS 

Determinar el evento especificando el manejador de evento en el atributo de una etiqueta HTML. 

La denominación del atributo es idéntica al de la propiedad de la opción dos (prefijo on).

```JavaScript
<input type="button" value="CLICK2" onclick="alert('Respuesta 3');" />
```

La función puede declararse entre la comillas o bien tomarse una referencia existente en el script.

##  ¿CÚAL CONVIENE USAR?

Las opciones 1 y 2 son las recomendadas.

Si bien se pueden presentar casos de aplicación específicos (por ejemplo, en la opción 1 el nombre del evento puede venir de una variable al usar la propiedad, y esto no puede hacerse en la 2), se identifican como formas de definición de eventos equivalentes.

La opción 3, aunque es de fácil implementación, no es recomendada para proyectos en producción.

No se considera buena práctica declarar funciones y código JavaScript dentro del HTML.

---

## :computer: EVENTOS MÁS COMUNES

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/81e6a2b4-3f81-4bcb-a407-12df2e105b49)

## EVENTOS DEL MOUSE 

Se producen por la interacción del usuario con el mouse.

Entre ellos se destacarán los que se encuentran a continuación.


## EVENTOS DEL TECLADO 

Se producen por la interacción del usuario con el teclado.

Entre ellos se destacarán los que se encuentran a continuación.

- keydown: Cuando se presiona.

- keyup: Cuando se suelta una tecla.

- CODIGO HTML DE REFERENCIA
```HTML
<input id = "nombre" type="text">
<input id = "edad"   type="number">
```

- CODIGO JS
```JavaScript
let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => {console.log("keyUp")}
input2.onkeydown = () => {console.log("keyDown")}
```

##  EVENTO CHANGE 

El evento change se activa cuando se detecta un cambio en el valor del elemento.

 Por ejemplo, mientras se escribe en un input de tipo texto no hay evento change, pero cuando se pasa a otra sección de la aplicación entonces sí ocurre.

- CODIGO HTML DE REFERENCIA
```HTML
<input id = "nombre" type="text">
<input id = "edad"   type="number">
```

- CODIGO JS
```JavaScript
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")};
```

## EVENTO INPUT 

i queremos ejecutar una función cada vez que se tipea sobre el campo, conviene trabajar directamente con el evento input.

- CODIGO HTML DE REFERENCIA
```HTML
<input id = "nombre" type="text">
```

- CODIGO JS
```JavaScript
let input1  = document.getElementById("nombre")
input1.addEventListener(‘input’, () => {
     console.log(input1.value)
})
```

## EVENTO SUBMIT 

El evento submit se activa cuando el formulario es enviado. Normalmente se utiliza para validar el formulario antes de ser enviado al servidor o bien para abortar el envío y procesarlo con JavaScript.

-CODIGO HTML DE REFERENCIA
 ```HTML
 <form id="formulario">
      <input type="text">
      <input type="number">
      <input type="submit" value="Enviar">
 </form>
```

- CODIGO JS
```JavaSCript
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
```

## OTROS EVENTOS 

Existen otros eventos que podemos utilizar.

Algunos son eventos estándar definidos en las especificaciones oficiales, mientras que otros son eventos usados internamente por navegadores específicos.

La forma de declararlos es similar a lo abordado en esta clase, lo que necesitamos aprender es bajo qué condición se disparan los eventos que buscamos implementar.

Para conocer más eventos se recomienda verificar la [referencia de eventos](https://developer.mozilla.org/es/docs/Web/Events#eventos_est%C3%A1ndar) en la documentación.

---

## :computer: INFORMACIÓN DEL EVENTO

En algunos casos, necesitamos obtener información contextual del evento para poder realizar acciones.

Por ejemplo, ante el evento submit necesitamos prevenir el comportamiento por defecto para operar correctamente.

Para esto existe en JavaScript el objeto event.

En todos los navegadores modernos se crea de forma automática un parámetro que se pasa a la función manejadora, por lo que no es necesario incluirlo en la llamada.

Ese parámetro puede o no usarse en el handler, pero siempre estará disponible en la llamada.

## EJEMPLO APLICADO: Datos del formulario usando event

- CODIGO HTML DE REFERENCIA

```HTML
 <form id="formulario">
      <input type="text">
      <input type="number">
      <input type="submit" value="Enviar">
    </form>
```

- CODIGO JS

```JavaScript
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);  
}
```

---

## :computer: MATERIAL AMPLIADO

✦  [Introducción a eventos del navegador | Ejemplos interactivos: Eventos](https://es.javascript.info/introduction-browser-events)

✦  [Acciones predeterminadas del navegador |  Ejemplos interactivos: Eventos](https://es.javascript.info/default-browser-action)

✦  [Eventos change, input, cut, copy, paste | Ejemplos interactivos: Eventos](https://es.javascript.info/events-change-input)

✦  [Formularios: evento y método submit |  Ejemplos interactivos: Eventos](https://es.javascript.info/forms-submit)

✦  [Documentación Eventos |  Documentación](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Eventos)

✦  [Referencia de Eventos |  Documentación](https://developer.mozilla.org/es/docs/Web/Events)

---

## :computer: PRACTICA


**Consigna**:  Con lo que vimos sobre DOM, ahora puedes sumarlo a tu proyecto, para interactuar entre los elementos HTML y JS. Es decir, asociar eventos que buscamos controlar sobre los elementos  de la interfaz de nuestro proyecto

**Sugerencia**:  Es posible asociar más de un evento a un elemento y se pueden emplear función comunes, anónimas y arrow para los manejadores de eventos.

---
