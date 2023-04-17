## :star: 3 - BUENAS PRÁCTICAS DE GIT Y GITHUB :star:

---

La diferencia entre Git y Github parte de entender quién controla y dónde se controla.

**Git** es un sistema a base de comandos que te permite controlar las versiones generadas en un proyecto.

**Github** es el servidor donde podés hospedar tu proyecto y a través de una interfaz web administrar las versiones generadas por git.

Las **buenas prácticas** te darán una manera ordenada de trabajar y lograrás evitar futuros problemas con el manejo de ramas o con implementaciones.

---

## BUENAS PRÁCTICAS

1. **Elegí un flujo de trabajo**: Es importante que conozcas o elijas un flujo de trabajo / workflow tanto  si colaborás en equipo como si lo haces solo.  Para eso es importante que identifiques las fases más importantes que ocurren mientras desarrollás, que analices el procedimiento a ejecutar cuando se necesita hacer cambios de emergencia contra bugs y muy importante que entiendas de qué forma es más fácil identificar los cambios del proyecto.

Existen numerosos flujos de trabajo que se adaptan a cada necesidad, estos son algunos:

✦ **Git Feature Branch Workflow**:  Todos los features deben tener una rama dedicada en lugar de concentrar todo en master.

✦ **Gitflow Workflow**:  Es similar al anterior solo que la estructura de ramas está diseñada alrededor de las entregas del proyecto.

✦ **Forking Workflow**:  En lugar de usar un solo repositorio centralizado, le da la opción a cada colaborador de tener uno propio.

2. **Utilizá una buena estructura en los mensajes de commits**: Se recomienda que tus commits tengan una estructura que permita identificar el trabajo que realizaste en el proyecto. Cuanto más descriptivos sean tus mensajes mucho mejor.

Podés emplear algunos sufijos, tales como:

✦ **feat**: describe si trabajaste en un nuevo feature.

✦ **fix**: describe si solucionaste un bug.

✦ **docs**: informa si hiciste algún cambio en la documentación.

✦ **test**: indica si añadiste un test.

✦ **refactor**: nos muestra que se ejecutó algún refactor en el código

De esta forma se puede tener mejor organizado todo el control de cambios, sumado a que lo hace mucho más fácil de entender.

3. **Enviá tus cambios en pull-request**: Un pull-request es una solicitud que hacemos al repositorio cuando enviamos código con cambios. Idealmente el propietario del repositorio revisa el código y decide si es apto para ser integrado. Tener una revisión previa del código antes de ser integrado es muy saludable. No importa si estás en un equipo grande o pequeño; enviar cambios sin aprobación puede provocar inconsistencias en el código.

4. **Añadí solo los archivos en los que estuviste trabajando**: Usar git add definitivamente no es la mejor práctica. Lo mejor en estos casos es añadir solo los archivos en los que estuviste trabajando. Esto evita que se ingresen muchos archivos “trash” que pueden traer una repercusión grave en la dimensión del repositorio.

Añadir los archivos individualmente es lo mejor para cuidar el hogar (hosting de control de cambios) de nuestro repositorio. `git add src/model/User.java`

5. **Usá una herramienta de integración continua**: Cuando la buena práctica de usar pull-request en el equipo es parte de tu cultura, es importante pensar en formas de automatizar y tener más control sobre las revisiones.

El flujo de trabajo de un desarrollador sería este:

1- El desarrollador toma una tarea y trabaja en ella.

2- Implementa sus propios test unitarios.

3- Actualiza constantemente su repositorio local con git pull.

4- Publica la tarea / feature.

5- Se asegura de que sus pruebas unitarias y todas las pruebas de regresión pasen al servidor de compilación.

6. Envía un pull-request.

7. Se revisa si el código contenido en el pull-request es apto para integración y que todos los test pasen correctamente. Si todo está bien, se integra automáticamente al servidor.

8. El administrador fusiona el pull-request que se crea y se implementa en la preparación para QA y UAT.

9. El servidor de compilación elimina la función remota.

10. El desarrollador borra la función local.

Existen herramientas de Integración Continua que facilitan esto. Estas son algunas:


- Jenkins

- GitLab CI 

- CircleCI

- Bamboo

- TeamCity


---