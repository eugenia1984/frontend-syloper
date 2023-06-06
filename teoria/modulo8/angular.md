# :star: 31 - ANGULAR, CONCEPTOS BÁSICOS

---

## :book: Temas

- ⭐INTRODUCCIÓN: ANGULAR: DEFINICIÓN 

- ⭐ ANGULAR CLI (COMMAND LINE INTERFACE): ENTORNO DE DESARROLLO PARA EJECUTAR ANGULAR / CREACIÓN DEL PROYECTO / ABRIR Y COMPILAR LA APLICACIÓN 

- ⭐ COMPONENTE: DEFINICIÓN / CICLOS DE VIDA DE UN COMPONENTE / IMÁGENES DE UN COMPONENTE / BINDING EN EL TEMPLATE DE UN COMPONENTE / DIRECTIVAS BÁSICAS 

- ⭐ MÓDULO: DEFINICIÓN / IMÁGEN DE UN MÓDULO 

- ⭐ SERVICIOS: DEFINICIÓN / IMÁGENES DE UN SERVICIO Y SU USO 

- ⭐ ROUTING: DEFINICIÓN 

- ⭐ DOCUMENTACIÓN OFICIAL 

- ⭐ ENLACES ÚTILES DE LA PÁGINA OFICIAL 

- ⭐ LUXON 

---

## ⭐INTRODUCCIÓN: ANGULAR: DEFINICIÓN 

 Aprenderemos a utilizar ésta plataforma para desarrollar aplicaciones web de alta calidad. Con una combinación de teoría y práctica, vamos a repasar lo necesario para construir aplicaciones desde cero, utilizando buenas prácticas de desarrollo y patrones de diseño recomendados.

Veremos cómo trabajar con los diferentes componentes de Angular, incluyendo el enrutamiento, la interacción con servicios web, la integración de librerías externas, entre otros. También aprenderemos a utilizar herramientas esenciales como el CLI de Angular y el depurador de google chrome para facilitar el proceso de desarrollo y solucionar errores.

Página oficial: [https://angular.io/](https://angular.io/)

Su página oficial lo define como un framework de desarrollo de aplicaciones web creado y mantenido por Google. Una herramienta de software libre y de código abierto que se utiliza para construir aplicaciones web dinámicas y escalables, pero podemos decir que es una plataforma por el gran ecosistema que tiene alrededor, es mucho más que un framework.

Se basa en el lenguaje de programación TypeScript y utiliza el patrón de diseño de arquitectura MVC (Modelo-Vista-Controlador). Esto permite separar la lógica de negocio de la presentación, lo que hace que el código sea más fácil de mantener y actualizar.

Proporciona una serie de características y funcionalidades útiles como la gestión del enrutamiento de páginas, validación de formularios, comunicación con servidores a través de peticiones HTTP y mucho más.

También es conocido por su gran ecosistema de herramientas y librerías adicionales que facilitan el proceso de desarrollo y mejoran la calidad del código.

Su punto fuerte es la creación de aplicaciones web SPA. Web de una sola página.


---

## ⭐ ANGULAR CLI (COMMAND LINE INTERFACE)

 Es una herramienta de línea de comandos que facilita la creación, desarrollo y gestión de proyectos en Angular, automatiza muchas tareas comunes y permite crear aplicaciones de forma rápida y sencilla.
 
Entre sus características se encuentran la creación de nuevos proyectos, la generación de componentes, módulos, servicios y otras estructuras de archivos necesarias para el desarrollo de aplicaciones de Angular. 

Proporciona una serie de comandos útiles para la gestión de proyectos, como la ejecución de pruebas unitarias, la compilación y construcción de la aplicación para producción, entre otras.

También incluye un servidor de desarrollo integrado, lo que permite probar la aplicación en tiempo real a medida que se realiza el desarrollo e integra muy bien otras herramientas como TypeScript y Webpack, lo que facilita aún más la creación de aplicaciones con Angular.



## ENTORNO DE DESARROLLO PARA EJECUTAR ANGULAR 

Para la preparación  del entorno de desarrollo necesario para utilizar Angular, necesitaremos Node.js, npm y Angular CLI. 

Para instalar Node.js vamos a la página oficial [https://nodejs.org/](https://nodejs.org/) y descargamos la versión LTS. La instalación de Node.js incluye de forma predeterminada el gestor de paquetes npm.

Para instalar Angular CLI ejecutamos en nuestra terminal preferida el siguiente comando:  ``npm install -g @angular/cli``  y una vez finalice la instalación, podremos comprobar que haya instalado correctamente utilizando el siguiente comando: `` ng version ``     

Fuente: [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)


## CREACIÓN DEL PROYECTO 

Abrimos nuestra terminal preferida, en mi caso, usaré la terminal integrada de Visual Studio Code.

Vamos a abrir la carpeta en dónde queremos crear el proyecto y después abrimos la terminal integrada (Atajo: ctrl + j). Una vez ahí, ejecutamos el cmd:`` ng new example-app`` , podemos reemplazar “example-app” por el nombre que queremos darle a nuestra app. Nos preguntará si queremos utilizar el routing que nos provee Angular, le diremos que si. Después nos va a preguntar qué formato de estilos nos gustaría utilizar, en éste caso para seguir el hilo de los módulos anteriores, utilizaremos scss. Al terminar de seleccionar, comenzará a generarnos nuestro proyecto.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/a0a78536-911e-4caa-82ab-1e7e1af52c38)


## ABRIR Y COMPILAR LA APLICACIÓN 

Una vez creado el proyecto, accedemos a la carpeta con el comando ``cd example-app``  y ya podemos compilar la aplicación y abrirla en el navegador. Para eso, usaremos el cli de Angular con el comando ``ng serve -o``   , lo que comenzará a compilar nuestro proyecto en modo desarrollo y al finalizar, como le hemos indicado con el flag -o, nos abrirá la app en nuestro navegador predeterminado en la url localhost:4200. Acá podemos ver que el puerto por defecto que usa Angular para el modo desarrollo es el 4200.


![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/9f8669d0-700d-4824-a24f-258c94e1d7eb)

---

## ⭐ COMPONENTE: DEFINICIÓN 

Un componente en Angular es una pieza fundamental de una aplicación web que se encarga de manejar la lógica y la presentación de una parte específica de la interfaz de usuario. Cada componente está formado por una clase TypeScript con una plantilla HTML asociada y un archivo de estilo CSS opcional. 

Los componentes de Angular tienen un conjunto de propiedades y métodos que permiten la comunicación con otros componentes y la interacción con el usuario. Además, los componentes pueden ser anidados para construir jerarquías de elementos de interfaz de usuario más complejos.

La estructura y organización de los componentes es muy importante para el desarrollo de aplicaciones escalables y mantenibles. En resumen, los componentes de Angular permiten la modularidad y la reutilización de código, lo que hace que el proceso de desarrollo sea más eficiente y productivo.


## CICLOS DE VIDA DE UN COMPONENTE 

En Angular, los componentes tienen ciclos de vida que definen el comportamiento y las etapas por las que pasan desde que se crean hasta que se destruyen. Los ciclos de vida del componente son importantes porque permiten realizar operaciones específicas en diferentes etapas, como inicializar variables, cargar datos, realizar cambios en la vista, entre otros.

Los ciclos de vida del componente se dividen en ocho etapas diferentes:

- ngOnChanges: Se ejecuta cuando una propiedad de entrada (@Input) del componente cambia.

- ngOnInit: Se ejecuta una sola vez, justo después de que se crea el componente.
ngDoCheck: Se ejecuta cada vez que Angular detecta un cambio que podría afectar la vista del componente.

- ngAfterContentInit: Se ejecuta después de que el contenido del componente se ha inicializado.

- ngAfterContentChecked: Se ejecuta después de que Angular haya revisado el contenido del componente.

- ngAfterViewInit: Se ejecuta después de que la vista del componente se ha inicializado.

- ngAfterViewChecked: Se ejecuta después de que Angular haya revisado la vista del componente.

- ngOnDestroy: Se ejecuta justo antes de que se destruya el componente.

Cada una de estas etapas tiene un propósito específico y permite realizar diferentes operaciones. Por ejemplo, ngOnChanges se utiliza para realizar acciones cuando cambia una propiedad de entrada, mientras que ngOnInit se utiliza para inicializar variables.

## IMÁGENES DE UN COMPONENTE 

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/8df8deac-8951-4581-ac7a-7dc30480dbdd)

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/32d10a02-acca-4f00-be99-5ec5aa603125)


## BINDING EN EL TEMPLATE DE UN COMPONENTE 

Como vimos en la imagen anterior, podemos hacer uso de lo que conocemos como “binding” y hace referencia a un enlace de una propiedad que tengamos definida en la clase del componente.

El approach de binding se refiere a la manera en que se establece la conexión entre la vista y el modelo de datos de la aplicación. El binding en Angular puede ser bidireccional, lo que significa que los cambios realizados en el modelo de datos se reflejan automáticamente en la vista, y viceversa.

### Existen tres tipos de binding en Angular:

- **Interpolación**: Este tipo de binding se utiliza para mostrar valores de variables en la vista. Se denota con llaves dobles {{ }} y se utiliza para mostrar el valor de una propiedad o una expresión en la vista.

- **Property binding**: Este tipo de binding se utiliza para establecer el valor de una propiedad de un elemento HTML en la vista. Se utiliza el corchete cuadrado [ ] para indicar el binding de propiedad.

- **Event binding**: Este tipo de binding se utiliza para responder a eventos en la vista, como un click o un cambio en un input. Se denota con paréntesis () y se utiliza para escuchar eventos en la vista y ejecutar una función del controlador.

## BINDING EN EL TEMPLATE DE UN COMPONENTE 

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/f2a1b405-ba58-4231-a403-4c91ddad7f4e)


## DIRECTIVAS BÁSICAS 

Las directivas son etiquetas HTML especiales que se utilizan para extender la funcionalidad de la página web.

Entre las directivas más utilizadas en Angular se encuentran las directivas "if" y "for". La directiva "if" se utiliza para mostrar o ocultar elementos de la página en función de una condición booleana. Por ejemplo, si queremos mostrar un mensaje en la página solo si el usuario está conectado, podemos utilizar la directiva "if" de la siguiente manera:

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/ac47b8e2-a74f-43ce-a32e-efe517fd6f3b)

En este ejemplo, el método "isLoggedIn()" devuelve un valor booleano que indica si el usuario está conectado o no. Si el valor es verdadero, se muestra el mensaje de bienvenida en la página.


Por otro lado, la directiva "for" se utiliza para iterar sobre una lista de elementos y mostrarlos en la página. Por ejemplo, si tenemos una lista de tareas que queremos mostrar en la página, podemos utilizar la directiva "for" de la siguiente manera:

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/ecee32e4-c3f5-4bc5-a762-49744d76ee8d)

En este ejemplo, la lista de tareas se almacena en la variable "tareas" que es un array de tareas. La directiva "for" itera sobre el array y muestra cada tarea en un elemento de lista HTML.

---

## ⭐ MÓDULO: DEFINICIÓN 

Un módulo es un contenedor lógico que agrupa un conjunto de componentes, servicios y otros recursos relacionados. Los módulos se utilizan para organizar la aplicación en bloques funcionales y separar los diferentes aspectos de la misma en unidades lógicas y cohesivas.

Cada módulo de Angular se define como una clase TypeScript con un decorador @NgModule que especifica las dependencias y configuraciones necesarias. Entre las configuraciones que se pueden definir en un módulo de Angular se encuentran las rutas, los proveedores de servicios, los componentes que deben ser cargados y otros recursos necesarios para la funcionalidad del módulo.

Los módulos de Angular son esenciales para la modularidad y la reutilización de código. Permiten separar la aplicación en partes lógicas, lo que hace que el proceso de desarrollo sea más eficiente y productivo. Además, los módulos pueden ser importados y reutilizados en diferentes partes de la aplicación, lo que facilita el mantenimiento y la evolución de la misma.

## IMÁGEN DE UN MÓDULO 

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/a74ad47d-a437-4591-a615-54964735ea05)


---

## ⭐ SERVICIOS: DEFINICIÓN 

Un servicio es una clase que proporciona funcionalidad común y compartida entre componentes. Se utilizan para compartir datos y lógica entre diferentes partes de una aplicación en Angular.

Se utilizan para realizar tareas que no están directamente relacionadas con la interfaz de usuario, como la obtención de datos de un servidor. Por lo tanto, los servicios son un mecanismo eficaz para mantener separados los aspectos de la lógica de negocios de los aspectos relacionados con la interfaz de usuario.

Se pueden inyectar en los componentes para utilizar sus funciones y datos, y se pueden reutilizar en diferentes partes de la aplicación.

Son una instancia singleton por defecto en Angular, lo que significa que se utiliza la misma instancia de la clase en todos los componentes de la aplicación.


##  IMÁGENES DE UN SERVICIO Y SU USO 

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/3d759658-f1c3-4784-8a40-f63486f83092)

Para poder utilizar el service llamado HeroService, lo declaramos de la siguiente forma en el constructor del componente en el que lo queramos usar, podemos utilizar el mismo servicio en varios componentes al mismo tiempo y también se pueden declarar más servicios en el constructor al mismo tiempo.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/b5096bb4-68b3-476e-a59f-8e5cd6a68218)

---

##  ⭐ ROUTING: DEFINICIÓN 

El enrutamiento (routing en inglés) se refiere a la técnica utilizada para cargar diferentes componentes y vistas según la URL actual en la que se encuentra el usuario en la aplicación. Es una parte importante de cualquier aplicación web, ya que permite al usuario navegar entre diferentes páginas o secciones de la aplicación.

Se configura en el módulo de la aplicación utilizando un objeto de ruta. Este objeto de ruta define las rutas que la aplicación puede manejar y especifica qué componente se debe cargar para cada ruta. Además, el objeto de ruta también puede contener información adicional, como parámetros de consulta o fragmentos de URL.

La navegación en Angular se realiza mediante el servicio Router, que proporciona una serie de métodos para navegar entre diferentes rutas.

Es compatible con la carga perezosa (lazy loading en inglés), que es una técnica de optimización que consiste en cargar solo los módulos y componentes necesarios cuando se necesitan. Esto mejora el rendimiento de la aplicación al reducir el tiempo de carga inicial.


---

##  ⭐ DOCUMENTACIÓN OFICIAL 

Revisar siempre la documentación oficial es crucial para cualquier desarrollador, independientemente de su nivel de experiencia. Nos proporciona información detallada sobre las características, funcionalidades y componentes de una tecnología específica, incluyendo instrucciones paso a paso y ejemplos de código.

Es una fuente confiable y actualizada de información, ya que es creada por los propios creadores de la tecnología, que conocen a fondo su propio producto y lo actualizan constantemente. 

---

##  ⭐ ENLACES ÚTILES DE LA PÁGINA OFICIAL 

- [Componentes](https://angular.io/api/core/Component)

- [Ciclos de vida de un componente](https://angular.io/guide/lifecycle-hooks)

- [Introducción a módulos](https://angular.io/guide/architecture-modules)

- [@NgModules](https://angular.io/guide/ngmodules)

- [Introducción a servicios e inyección de dependencias](https://angular.io/guide/architecture-services)

- [Tareas de enrutamiento comunes](https://angular.io/guide/router)

- [Ejemplo de aplicaciones](https://angular.io/guide/example-apps-list)

- [Tutorial - Tour of Heroes](https://angular.io/tutorial/tour-of-heroes)

- [Tutorial - Construir formularios](https://angular.io/guide/forms)


---

##  ⭐ LUXON 

La perseverancia es clave.

No tengas miedo de experimentar y equivocarte, solo así podrás mejorar y alcanzar tus objetivos.

---

---
