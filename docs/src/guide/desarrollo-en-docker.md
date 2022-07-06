# Desarrollo usando docker 

Para acelerar el desarrollo es posible utilizar un contenedor docker para realizar la instalación de paquetes y arrancar el servidor de desarrollo. 
Se usa la misma imagen base de DSpace (node:14-alpine) la cual es muy pequeña y tiene todo lo necesario para dtra. 

Como primera medida necesitamos descargar el código de dspace-angular del repositorio oficial

[Repositorio dspace-angular](https://github.com/DSpace/dspace-angular)

Una vez descargado mediante un "git clone" o por descarga directa de un zip y copiado al disco local podemos hacer el primer proceso de instalación de las dependencias. 

Primero y por única vez se debe correr el yarn install 
> esta primera vez puede demorarse un poco ya que tiene que bajar el contenedor y todas las librerías necesarias. 

```bash
docker run --rm  -it --name dsbs -v /datos/ng/dspace-angular:/app -w "/app"  -p 4000:4000 node:14-alpine yarn install
```

Luego de unos minutos deberíamos tener el directorio node_modules completo y todas las librerías instaladas. 

Cada vez que necesitemos correr el servidor de desarrollo (con hotreloading ) podemos usar el siguiente script. 


```bash
docker run --rm  -it --name dsbs -v /datos/ng/dspace-angular:/app -w "/app"  -p 4000:4000 node:14-alpine yarn serve --host 0.0.0.0 --port 4000
```

## Explicación de parámetros  
-  --rm  borra la maquina al terminar
- -it deja la terminal abierta. (con ctrl+c) la parás.
- --name (nombre del docker)  desde otra terminar podes pararlo o ver el log si querés con docker logs -f dsbs
- -v (monta el volumen, en mi caso es la ruta donde hice git clone ...)
- -w el working directory (igual a cd /app )
- -p 4000:4000 expone el puerto interno 4000 en el externo 4000
node:14:alpine   es la imagen que utilizal, podría usar una 18 creo sin problemas.

> Ahora cualquier cambio que realicemos en el código producirá 