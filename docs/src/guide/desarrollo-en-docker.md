# Desarrollo usando docker 

Para acelerar el desarrollo es posible arrancar un contenedor docker para realizar la instalación de paquetes y arrancar el servidor de desarrollo. 
Se usa la misma imagen base de DSpace (node:14-alpine) la cual es muy pequeña y tiene todo lo necesario para desarrollar. 

Primero y por única vez se debe correr el yarn install 
```bash
docker run --rm  -it --name dsbs -v /datos/ng/dspace-angular:/app -w "/app"  -p 4000:4000 node:14-alpine yarn install
```

Luego cada vez que necesitemos correr el servidor de desarrollo (con hotreloading ) podemos usar el siguiente script. 


```bash
docker run --rm  -it --name dsbs -v /datos/ng/dspace-angular:/app -w "/app"  -p 4000:4000 node:14-alpine yarn serve --host 0.0.0.0
```

## Explicación de parámetros  
-  --rm  borra la maquina al terminar
- -it deja la terminal abierta. (con ctrl+c) la parás.
- --name (nombre del docker)  desde otra terminar podes pararlo o ver el log si querés con docker logs -f dsbs
- -v (monta el volumen, en mi caso es la ruta donde hice git clone ...)
- -w el working directory (igual a cd /app )
- -p 4000:4000 expone el puerto interno 4000 en el externo 4000
node:14:alpine   es la imagen que utilizal, podría usar una 18 creo sin problemas.

## Arrancar el server de desarrollo
> en este caso debe ser 0.0.0.0 para poder exponer correctamente el puerto por default (4000)


```bash
yarn serve --host 0.0.0.0 --port 4000   
```
