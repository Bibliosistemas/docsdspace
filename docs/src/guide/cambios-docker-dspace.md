# Cambios necesarios en los contenedores

 Para trabajar con proxy reverso es necesario hacer algunos cambios en los contenedores del api-rest y dspace-angular. 



Configurar los siguientes archivos 

docker/docker-compose.yml (en el arbol de dspace-angular)

```yml
 environment:
      DSPACE_UI_SSL: 'true'
      DSPACE_UI_HOST: 'cursodspace.bibliosistemas.com'
      #dspace-angular
      DSPACE_UI_PORT: '443'
      DSPACE_UI_NAMESPACE: /
      DSPACE_REST_SSL: 'true'
      DSPACE_REST_HOST: 'cursodspace.bibliosistemas.com'
      DSPACE_REST_PORT: '443'
      DSPACE_REST_NAMESPACE: /server
```


docker/docker-compose-rest.yml

```yml

  # Below syntax may look odd, but it is how to override dspace.cfg settings via env variables.
      # See https://github.com/DSpace/DSpace/blob/main/dspace/config/config-definition.xml
      # __P__ => "." (e.g. dspace__P__dir => dspace.dir)
      # __D__ => "-" (e.g. google__D__metadata => google-metadata)
      # dspace.dir, dspace.server.url, dspace.ui.url and dspace.name
      dspace__P__dir: /dspace
      dspace__P__server__P__url: https://cursodspace.bibliosistemas.com/server
      dspace__P__ui__P__url: https://cursodspace.bibliosistemas.com
      dspace__P__name: 'DSpace Bibliosistemas'
      # db.url: Ensure we are using the 'dspacedb' image for our database
      db__P__url: 'jdbc:postgresql://dspacedb:5432/dspace'
      # solr.server: Ensure we are using the 'dspacesolr' image for Solr
      solr__P__server: http://dspacesolr:8983/solr
      # proxies.trusted.ipranges: This setting is required for a REST API running in Docker to trust requests
      # from the host machine. This IP range MUST correspond to the 'dspacenet' subnet defined above. NO IMPORTA PORQUE USAN EL MISMO DOMINIO 
      proxies__P__trusted__P__ipranges: '170.187.154.0'
```

> De esta manera los contenedores quedan publicados con las variables de entorno que definen los dominios donde buscar la API-rest y donde publicarse. 

