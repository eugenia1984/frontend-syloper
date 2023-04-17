# :star: 1 - GIT :star:

---

##  ¿Qué es GIT?

Git es un sistema de control de versiones gratuito y de código abierto, diseñado para manejar desde pequeños a grandes proyectos de manera rápida y eficaz. Se entiende como control de versiones a todas las herramientas que nos permiten hacer modificaciones en nuestro proyecto. Este sistema registra los cambios realizados sobre un archivo o conjunto de archivos a lo largo del tiempo.


Con GIT, podemos ir a versiones anteriores.


```
 version1  -> version2 -> version3
           <-          <-
```

Es muy útil para corregir errores, y para la organización en general.

## LOS 3 ESTADOS DE GIT

- **1° estado (el que trabajamos)**: **WORKING DIRECTORY** “preparamos las cajas”.

- **2° estado (archivos listos)**: **STAGING AREA** “agregamos las cajas listas”

- **3° estado (registro de todos los archivos)**: **RPOSITORY**  “lote listo”.

```
WORKING   -> git add -> STAGING -> git commit -> REPOSITORY
DIRECTORY               AREA

```

---

## GIT - GITHUB

Git es uno de los sistemas de control de versiones más populares entre los desarrolladores. 

Y parte de su popularidad se la debe a GitHub, un excelente servicio de alojamiento de repositorios de software con este sistema.

---

## INSTALACIÓN Y CONFIGURACIÓN DE GIT 


- En primer lugar, tenés que instalarlo.

Podés obtenerlo de varias maneras, las dos principales son:

✱ instalarlo desde código fuente.

✱ instalar un paquete existente para tu plataforma.

PASOS PARA WINDOWS: 

1. Andá a https://git-scm.com/ y descargá el paquete de instalación “download (n° versión) for Windows” (o si tenés otro sistema operativo, dirá Mac o Linux).

2. Ahora tenés que ejecutar el archivo descargado, y elegir la carpeta donde ubicar los archivos de Git.

3. Asegurate de tener seleccionada git bash, que es la herramienta principal con la que trabajaremos. Con esto se terminará la instalación.

4. Continuá haciendo clic en “next”.

5. En esta pantalla, elegí de la lista “use visual studio code as Git’s default editor”.

6. Hacé click en “next” hasta finalizar la instalación, dejando las configuraciones por defecto.

7. Finalmente aparece el botón “install”.

8.  Instalación finalizada.

-> Ahora tendrás disponible Git Bash desde tu lista de programas. Aquí es donde trabajaremos con Git.

Alternativa: Git GUI, para tener una interfaz más amigable.

PASOS PARA MAC:

1. Andá a https://git-scm.com/ y descargá el paquete de instalación “download (nro versión) for Mac” (o si tienes otro sistema operativo, dirá Windows o Linux).


2. Posiblemente te salga este cartel de seguridad al intentar ejecutar el archivo descargado.

3. Andá a “preferencias de sistema” → “seguridad” y encontrarás lo siguiente. Hacé clic en “abrir de todos modos”.


4. En el próximo cartel hacé clic en “abrir”.

5. ¡Instalado! Hacé clic en continuar hasta que diga “la instalación se completó”. 

---

## Empezando con GIT

Buscá en su menú el Git Bash para abrir la terminal e iniciar con los comandos.

## Verificando version de git

`git --version`

## Configurando git por primera vez

- **Tu identidad**: Lo primero que deberías hacer cuando instalás Git es establecer tu nombre de usuario y dirección de correo electrónico. 

Esto es importante porque las confirmaciones de cambios (commits) en Git usan esta información, y es introducida de manera inmutable en los commits que enviás.

1. Elegí un nombre de usuario que recuerdes fácilmente, y el email que en la próxima clase usarás en Github.

2. Establecé el nombre con el comando: ``git config --global user.name "Nombre Apellido"``.

3. Establecé el correo a usar con el comando.  ``git config --global user.email johndoe@example.com``

---

## :stars: PRACTICANDO LO APRENDIDO…

## Comprobando tu configuración

Vamos a comprobar si guardamos bien el usuario usando el comando: ``git config --list``.

También podés comprobar qué valor tiene la clave nombre en Git ejecutando: ``git config user.name``

## Obteniendo ayuda

Si alguna vez necesitás ayuda usando Git, hay tres formas de ver la página del manual (manpage) para cualquier comando de Git:

```
git help config
git config --help
man git-config
```

---

## Resumen

A esta altura del curso, deberías tener un conocimiento básico de qué es Git. También deberías tener funcionando en tu sistema una versión de Git configurada con tu identidad. 

Es el momento de aprender algunos fundamentos de Git.

---

## COMANDOS BÁSICOS DE LA TERMINAL

- **¿Cómo abrir la terminal?**

Para abrir la línea de comandos de Windows o símbolo del sistema, tan sólo tenés que ir a ``Inicio > Ejecutar o Buscar > CMD.exe`` y se abrirá una pequeña ventana que te recordará al antiguo MS-DOS, o a ``Inicio > Git > Git Bash``. 

Para abrir la terminal de Mac OS hacé clic en el icono ``"Finder"`` situado en el Dock, luego seleccioná ``"Aplicaciones > Utilidades"``, y finalmente dale doble clic al icono ``"Terminal"``.

-  ``/?``: si querés saber más de un comando, añadí /? para ver la ayuda relacionada. Te va a ser muy útil para ver todas las opciones de cada comando.


- ``help``: te mostrará una lista de comandos disponibles.

- ``dir``: es el comando más conocido de DOS y sirve para ver el contenido de una carpeta (en MAC-OS usar LS).

- ``cd``: sirve para entrar en una carpeta o salir de ella (CD…).

- ``clear``:  limpia la consola.

- ``mkdir``: con este comando crearás una carpeta nueva. Con RMDIR podrás eliminarla.

- ``move`` y ``copy``: son los comandos para mover y copiar archivos respectivamente. Deberás indicar el nombre del archivo con su ruta (si está en otra carpeta en la que te encuentras) y la ruta de destino.

- ``rename``: sirve para renombrar un archivo o carpeta. Hay que indicar el nombre original y el definitivo.

- ``del``: es el comando para eliminar un archivo. Recuerda que no irá a la Papelera, así que piensa muy bien antes de borrar algo. Y para eliminar carpeta usa el comando RD (en MAC-OS usar RM para archivos / para eliminar carpetas RM -RF).

- ``exit``: cierra la ventana de la línea de comandos o símbolo del sistema.

- ``copy``: crear archivos (en MAC-OS usar TOUCH).

## CREANDO REPOSITORIOS

#### ¿Que es un repositorio?

Un repositorio es un espacio centralizado donde se almacena, organiza, mantiene y difunde información. 

Será “la carpeta” o espacio donde guardarás tu proyecto, para más adelante compartirlo con el equipo a través de un repositorio en la nube (en Internet, por ejemplo en Github).

#### git init

Este comando se usa para crear un nuevo repositorio en Git. 
Nos crea un repositorio de manera local y lo hará en la carpeta donde estamos posicionados. 

También se le puede pasar [nombre_de_la_carpeta] y creará una con ese nombre.

---

## ¡A PRACTICAR!

Ya vimos cómo inicializar un repositorio localmente utilizando git init. 
Ahora nos toca crear los archivos que vamos a usar en este repositorio.

1. Vamos a Sublime Text. Buscamos el repositorio creado.

2. Creamos un archivo index.html que se guardará en el repositorio.

3. Vamos a la terminal y con git status chequeamos el estado de nuestro repositorio.

## GIT ADD

Ahora se necesita agregar el o los archivos al Staging Area. 
En nuestro caso, para el index.html vamos a usar el comando git add + el nombre del archivo, lo cual permite adherir el archivo para subirlo luego al repositorio. También se puede usar git add que adhiere todos los archivos nuevos.

Para verificar si funcionó, nuevamente utilizamos git status.

## GIT COMMIT 

Una vez que nuestros archivos están en el Staging Area debemos pasarlos a nuestro repositorio local y para eso debemos usar el git commit, que es el comando que nos va a permitir comprometer nuestros archivos.

Es decir, que lo subirá al repositorio que se ha creado. 
El comando es el siguiente: 

`git commit -m “Comentario de qué se trata el commit que se está realizando”`

## GIT LOG

La documentación de git log es extensa, y podés revisarla en su totalidad desde acá:
https://git-scm.com/book/es/v1/Fundamentos-de-Git-Viendo-el-hist%C3%B3rico-de-confirmaciones 

## RAMAS

Cuando querés añadir una nueva función o solucionar un error (sin importar su tamaño), generás una nueva rama para alojar estos cambios. 

Esto te da la oportunidad de organizarte mejor con los cambios o correcciones experimentales.

Podemos crear una rama escribiendo: ``“git branch mi-rama”``.


---

## GIT CHECKOUT: LISTAR COMMITS


Así como nos movemos entre ramas, nos podemos mover entre commits. Recordá que al hacer cambios, adherirlos y comitearlos, se crea un historial de dichos cambios, los logs.

La posibilidad de volver a un commit en específico es una ventaja de los controladores de versiones, que permiten volver a un estado anterior si se presenta un problema, error o cambio inesperado.

1. Creá una rama con ``git branch nueva_rama``

2. Cambiá de rama con ``git checkout nueva_rama``

3. Verificá que cambiaste de rama con ``git branch -l``

4. Agregá al index.html un texto nuevo.

5. Verificá que hubo un cambio en el index.html con ``git status``

6. Adherí el cambio con ``Git Add``.

7. Comiteá el cambio con `` git commit -m “Agregando texto al html”``

8. Agregá un título al index.html y repetí los pasos para poder comitear el cambio

---

## LISTAR COMMITS

``git log --oneline`` para verlos en una sola linea

---

## :star: GIT MERGE

Una vez que tenemos una rama (o más), podemos experimentar características nuevas, y luego fusionarlas con la rama MASTER.

---

## RESUMEN


✱ git init: para indicarle que ese directorio, donde ejecutamos este comando, será usado con GIT.

✱ git add: para agregar todos los archivos creados, modificados, eliminados al estado 2 (stage).

✱ git commit -m “Mensaje”: mensaje obligatorio para indicar que hemos cambiado por ejemplo, al estado 3.

✱ git log --online: para conocer los códigos de los commits realizados.

✱ git checkout rama: para cambiar de rama o ir a un commit específico (debemos conocer su código anteriormente).

✱ git merge rama: para fusionar (debemos estar en MASTER).

✱ git branch rama: creación de una rama (si queremos eliminar una rama ponemos git branch -D nombre-rama).

---

## CLIENTES GRAFICOS PARA GIT

★ Git-gui 

★ GitHub Desktop

★ GitKraken

★ SmartGit

★ SourceTree

---
