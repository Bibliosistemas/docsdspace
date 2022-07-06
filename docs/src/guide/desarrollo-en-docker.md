# Desarrollo usando docker 

Para acelerar el desarrollo es posible utilizar un contenedor docker para realizar la instalación de paquetes y arrancar el servidor de desarrollo. 
Se usa la misma imagen base de DSpace (node:14-alpine) la cual es muy pequeña y tiene todo lo necesario para dtra. 

Como primera medida necesitamos descargar el código de dspace-angular del repositorio oficial

[Repositorio dspace-angular](https://github.com/DSpace/dspace-angular)

Una vez descargado mediante un "git clone" o por descarga directa de un zip y copiado al disco local podemos hacer el primer proceso de instalación de las dependencias. 
## El contenedor Docker de desarrollo

Testeo del contenedor, ver la vesión de yarn instalada.

```bash
docker run --rm  -it --name dsbs -v $(pwd):/app -w "/app"  -p 4000:4000 node:14-alpine yarn -v
```
Debe devolvernos la versión de yarn "1.22.19"  o similar.

> esta primera vez puede demorarse un poco ya que tiene que bajar el contenedor

## Explicación de parámetros 
Vamos a explicar todos los parámetros del arranque del contenedor.
::: details ver parámetros 
-  --rm  borra la maquina al terminar
- -it deja la terminal abierta. (con ctrl+c) se detiene.
- --name (nombre del docker)  desde otra terminal se puede o ver el log con  el comando *docker logs -f dsbs*
- -v (monta el volumen, en mi caso es la ruta donde hice git clone , directorio local) dentro de la carpeta /app del contenedor 
- -w el working directory (igual a hacer un cd /app al inicio del contenedor)
- -p 4000:4000 expone el puerto interno 4000 en el externo 4000
node:14:alpine   es la imagen que utilizal, podría usar una 18 creo sin problemas.
:::

Primero y por única vez se debe correr el yarn install 
> esta primera vez puede demorarse un poco ya que tiene que bajar  todas las librerías necesarias. 

```bash
docker run --rm  -it --name dsbs -v /datos/ng/dspace-angular:/app -w "/app"  -p 4000:4000 node:14-alpine yarn install
```

Luego de unos minutos deberíamos tener el directorio node_modules completo y todas las librerías instaladas. Esto debe aparecer en nuestra carpeta ya que la conectamos al contenedor con el parámetro "-v" 

Cada vez que necesitemos correr el servidor de desarrollo (con hotreloading ) podemos usar el siguiente script. 


```bash
docker run --rm  -it --name dsbs -v /datos/ng/dspace-angular:/app -w "/app"  -p 4000:4000 node:14-alpine yarn serve --host 0.0.0.0 --port 4000
```
Una vez que termine el armado de la aplicación se expondrá en  http://localhost:4000 (en el host) la interfaz angular. 

> Ahora cualquier cambio que realicemos en el código recargarà automáticamente nuestro navegador. 