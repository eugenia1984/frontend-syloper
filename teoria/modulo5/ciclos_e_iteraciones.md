# :Star: MODULO 5 - 20 - CICLOS E ITERACIONES

---

## :book: Temas

- GLOSARIO

- CICLOS EN JAVASCRIPT: TIPOS DE BUCLES / FOR / SENTENCIA BREAK / SENTENCIA CONTINUE / WHILE / DO WHILE / SWITCH

- MATERIAL AMPLIADO

- PRACTICA

---

## :star: GLOSARIO

- **Condicionales**: cuando en programación hablamos de condicionales, hablamos de una estructura sintáctica que sirve para tomar una decisión a partir de una condición.

- **Estructura IF**: es la más utilizada en la mayoría de los lenguajes. Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro de {...}. Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida en {...} y el programa continúa ejecutando el resto de instrucciones del script.

- **IF...ELSE**: en ocasiones, las decisiones que se deben realizar no son del tipo "si se cumple la condición, hazlo; si no se cumple, no hagas nada". Normalmente las condiciones suelen ser del tipo "si se cumple esta condición, hazlo; si no se cumple, haz esto otro".

---

## :star: CICLOS EN JAVASCRIPT: 

Los ciclos, también conocidos como bucles o iteraciones son un medio rápido y sencillo para hacer algo repetidamente.

Si tenemos que hacer alguna operación más de una vez en el programa, de forma consecutiva, usaremos las estructuras de bucles de JavaScript:  for, while o do...while.


### TIPOS DE BUCLES

- **CICLOS POR CONTEO**: Repiten un bloque de código un número de veces específica. Estructura **for**. 

- **CICLOS CONDICIONALES**: Repiten un bloque de código mientras la condición evaluada es verdadera. Estructuras **while** y **do...while**.


## :stars: FOR


![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/dd1270f8-6a83-418c-971e-bec63c8d0194)

El "desde" es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo.

El "hasta" es el único elemento que decide si se repite o se detiene el ciclo.

La "actualización" es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.

### EJEMPLO PRÁCTICO.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/be31877c-e2ab-40fc-897b-dae0dccd0d02)


### EJEMPLO APLICADO FOR (1): TABLAS.

Algoritmo para calcular la tabla de multiplicar de un número

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/52e45521-32dc-481f-87bf-87a0a6ee8526)


### EJEMPLO APLICADO FOR (2): TURNOS.

Algoritmo para dar turno del 1 al 20 a los nombres ingresados.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/53719f2f-093d-4c04-aa5e-a829ab283efc)


## :stars: SENTENCIA BREAK 

A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. Para eso se utiliza la sentencia break.

Al escribir esa línea dentro de un ciclo for, el mismo se interrumpirá como si hubiera finalizado.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/462d1318-d924-4055-9029-59b0f5784ce0)

## :stars: SENTENCIA CONTINUE

A veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición, el ciclo saltee esa repetición y siga con la próxima. Para eso se utiliza la sentencia continue

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/adf9f351-d0c3-4be3-9deb-47373a60cc52)


## :stars: WHILE

La estructura while permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
El funcionamiento del bucle while se resume en: mientras se cumpla la condición indicada, repite las instrucciones incluidas dentro del bucle.

Cuando usamos while, asumimos que en algún momento la repetición va a finalizar; si la comparación no se realiza adecuadamente podemos generar el llamado “bucle infinito”:

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/0a18bd9b-57d8-4c58-b933-5f5242a04d18)


###  EJEMPLO APLICADO WHILE: ESC 

Algoritmo que solicita una entrada al usuario hasta que ingresa “ESC”.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/dc8de366-ed3f-4478-9135-af2b3cf13037)


## :stars: DO WHILE


La estructura do...while permite crear bucles que se ejecutan una o más veces, dependiendo de la condición indicada.
A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque la condición se evalúa al final.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/dbeefb29-2ea2-4f7b-8d59-20354fb9c151)

### EJEMPLO APLICADO DO…WHILE: N°

Algoritmo que solicita una entrada y se detiene cuando NO es un número

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/36c21fd5-5e48-4f4b-9286-8a075f070128)



## :stars: SWITCH

La estructura switch  está especialmente diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable (técnicamente se podría resolver con un if, pero el uso de switch es más ordenado). 

Su definición formal puede parecer confusa, pero veamos un ejemplo para entender su simpleza.


![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/7035bff6-6b6a-422b-91b6-8247db93f520)


Cada condición se evalúa y, si se cumple, se ejecuta lo que esté indicado dentro de cada case.

Normalmente, después de las instrucciones de cada case se incluye la sentencia break para terminar la ejecución del switch, aunque no es obligatorio.

¿Qué sucede si ningún valor de la variable del switch coincide con los valores definidos en los case? 

En este caso, se utiliza el valor default para indicar las instrucciones que se ejecutan cuando ninguna condición anterior se cumplió.

###  EJEMPLO APLICADO WHILE  Y SWITCH: ENTRADAS

Algoritmo que hace la operación según la entrada, pero ignora la ejecución de bloque si la entrada es en “ESC”.

![image](https://github.com/eugenia1984/frontend-syloper/assets/72580574/18d9f2d6-661f-4d81-bf6d-d6477dc76d57)



---

## :star: MATERIAL AMPLIADO

- Bucles 

[Los apuntes de Majo (Página 17 a 19)](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view)

[Te lo explico con gatitos. Bucle FOR](https://teloexplicocongatitos.com/_next/image?url=https%3A%2F%2Fdoomvault.nyc3.digitaloceanspaces.com%2Ftlecg%2Fbig%2Fprog05.jpg&w=1200&q=75)

[Te lo explico con gatitos. Bucle WHILE](https://teloexplicocongatitos.com/_next/image?url=https%3A%2F%2Fdoomvault.nyc3.digitaloceanspaces.com%2Ftlecg%2Fbig%2Fprog06.jpg&w=1200&q=75)

- Funciones

[Los apuntes de Majo (Página 20)](https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view)

[Te lo explico con gatitos. Parte 1](https://teloexplicocongatitos.com/_next/image?url=https%3A%2F%2Fdoomvault.nyc3.digitaloceanspaces.com%2Ftlecg%2Fbig%2Fprog07.jpg&w=1200&q=75)

[Te lo explico con gatitos. Parte 2](https://teloexplicocongatitos.com/_next/image?url=https%3A%2F%2Fdoomvault.nyc3.digitaloceanspaces.com%2Ftlecg%2Fbig%2Fprog08.jpg&w=1200&q=75)

- Documentación 

[Documentación FOR](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for)

[Documentación WHILE](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/while)


---

## :star: PRACTICA

- **Consigna**: Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

- **Aspectos que deberías tener en cuenta**: Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta`` <script src="js/miarchivo.js"></script>``, que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.

- **Ejemplo**: Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado
Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”. Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.


---

