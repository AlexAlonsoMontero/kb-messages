# kb messages
## METODOLOGÍA DE TRABAJO
* Creare issuees dividiendo el trabajo en tareas, cada issue tendrdá su merge request correspondiente con la rama master

## BASE DE DATOS POSTGRESQL
* Creamos usuarios tablas y damos permisos
```
CREATE USER kubide PASSWORD 'kubide';
GRANT ALL PRIVILEGES ON DATABASE kubidebd TO kubide;
```
* SCRIPT PARA CREACIÓN DE TABLAS
```
CREATE TABLE users (
    id_user serial primary key,
    username VARCHAR (255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    unique (email) DEFAULT true
);  
create table messages (
	id_message serial primary key,
	message varchar(255),
	id_write_user int REFERENCES users ON DELETE RESTRICT,
	id_read_user int REFERENCES users ON DELETE CASCADE, 
	read boolean DEFAULT false,
    notification timestamp default now()
);	

```
* Dar permisos a usuario
```
GRANT ALL PRIVILEGES ON DATABASE kubidebd to <username>
```

## DESPLIEGUE DE PROYECTO:
* Se utilizan los siguientes dependencias:
```
"dependencies": {
    "@nestjs/common": "^8.0.0",
    "@nestjs/config": "^1.1.6",
    "@nestjs/core": "^8.0.0",
    "@nestjs/jwt": "^8.0.0",
    "@nestjs/passport": "^8.1.0",
    "@nestjs/platform-express": "^8.0.0",
    "@nestjs/typeorm": "^8.0.3",
    "bcrypt": "^5.0.1",
    "dotenv": "^14.3.2",
    "jwt-decode": "^3.1.2",
    "passport": "^0.5.2",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "pg": "^8.7.1",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0",
    "typeorm": "^0.2.41"
```
* En el entorno de desarrollo las dependencias utilizadas son:
```
"devDependencies": {
    "@nestjs/cli": "^8.0.0",
    "@nestjs/schematics": "^8.0.0",
    "@nestjs/testing": "^8.0.0",
    "@types/bcrypt": "^5.0.0",
    "@types/express": "^4.17.13",
    "@types/jest": "27.0.2",
    "@types/node": "^16.0.0",
    "@types/passport-jwt": "^3.0.6",
    "@types/passport-local": "^1.0.34",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "^27.2.5",
    "prettier": "^2.3.2",
    "source-map-support": "^0.5.20",
    "supertest": "^6.1.3",
    "ts-jest": "^27.0.3",
    "ts-loader": "^9.2.3",
    "ts-node": "^10.0.0",
    "tsconfig-paths": "^3.10.1",
    "typescript": "^4.3.5"
```

* En la carpeta Postman, esta la batería de pruebas tanto con las rutas como con as variables:


## Instrucciones para despliegue:

* Clonar repositorio
* Instalar nodejs en caso de que no este instalado.
[] https://docs.npmjs.com/getting-started
* Una vez instalado node ejecutamos
```
npm install
```
