import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import users from './users.entity';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(users)
        private users: Repository<users>
        ){}

        async findAll (){
            return await this.users.find()
            
        }
        async createUser(newUser: UserDto){
            try{
                const addedUser =  this.users.create(newUser);
                const result = await this.users.save(addedUser);
                return `Usuario añadido correctamente: ${addedUser.username} - ${addedUser.email}`;
            }catch(error){
                console.error(error) 
                return `No se ha podido añadir a la base de datos 
                \n codigo de error: ${error.code}
                \n detalle: ${error.detail}`

            }
            
        }
        login(){
            return "Login user";
        }
        updateUser(){
            return "actualizar datos de usuario";
        }
        findActiveUsers(){
            this.login();
        }
        activateUser(){
            return "Activando usuario";
        }
    }
