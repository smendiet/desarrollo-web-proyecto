## Instalación

### Express

npm install --save express

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.


### Sequelize & MariaDB

npm install --save sequelize mariadb


Sequelize es un ORM de Node.js basado en promesas para Postgres, MySQL, MariaDB, SQLite y Microsoft SQL Server. Cuenta con un sólido soporte de transacciones, relaciones, carga ansiosa y perezosa, replicación de lectura y más.


## Investigación

### Helmet

Helmet es un paqute que ayuda a proteger aplicaciones Express configurando varios encabezados HTTP que usa Express de manera predeterminada. Contiene 15 middlewares, 11 de los cuales están habilitados de forma predeterminada.

Algunas de los encabezados son:
* Content security policy: permite definir en qué sitios y contenido debe confiar elbrowser.
* DNS Prefetch Control : no permite que se resuelvan los nombres de dominio a IPs antes de tiempo (haciendo prefetch a los enlaces de un sitio web)
Frameguard : indica al navegador que la página no debe ser utilizada dentro de un IFrame.
* HPKP - HTTP Public Pinning : se envia al browser la clave pública del certificado(HTTPS) para que el pueda evaluar si el certificado ha sido vulnerado.
HSTS - Strict Transport Security : le indica al browser que siempre utilice la versión HTTPS del sitio web, y nunca visite la versión HTTP (si existe)

link: https://helmetjs.github.io/ 

### Cors

CORS es un paquete que provee un middleware que habilita el uso de Cross-Origin Resource Sharing, que es un política a nivel de navegador web que se aplica para prevenir que el dominio A evite acceder a recursos del dominio B usando solicitudes del tipo AJAX como fetch() o XMLHttpRequest.

link: https://github.com/expressjs/cors

### Bcrypt

bcrypt es una paquete que nos ayuda cifrar contraseñas. Esta basado en la ![función de hash de contraseñas](https://en.wikipedia.org/wiki/Bcrypt) del mismo nombre.

link: https://github.com/kelektiv/node.bcrypt.js

### jsonwebtoken

jsonwebtoken es una paquete que contiene una implimentación del estandar ![JSON Web Token (JWT)](https://datatracker.ietf.org/doc/html/rfc7519), este permite la creación de token de acceso.

link: https://github.com/auth0/node-jsonwebtoken


### Instalación

npm i -D sequelize-cli

Crear las migraciones que son las encargadas de crear y actualizar las tablas.

./node_modules/.bin/sequelize migration:create --name CreateTableProducts
o
npx sequelize  migration:create --name CreateTableProducts

despues de generadas las migraciones se debe ejecutar.


