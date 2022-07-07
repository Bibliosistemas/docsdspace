# Instalación de Dspace detrás de un proxy reverso

Los contenedores Dspace-angular y DSpace-api-rest deben accederse (idealmente) desde el mismo dominio para evitar configuraciones complejas de CORS. 
Al correr debajo del mismo dominio nos aseguramos que las peticiones desde el navegador a la API no produzcan errores de cross site scripting. 
Ejemplo de instalacion de dspace en subdominio

![subdominio](img/defproxy.png)


![api ](img/defapi.png)

![](img/defssl.png)