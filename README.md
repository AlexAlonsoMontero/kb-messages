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
    unique (email)
);  
create table messages (
	id_message serial primary key,
	message varchar(255),
	id_write_user int REFERENCES users ON DELETE RESTRICT,
	id_read_user int REFERENCES users ON DELETE CASCADE, 
	read boolean
);	

```
* Dar permisos a usuario
```
GRANT ALL PRIVILEGES ON DATABASE kubidebd to <username>
```

