import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import users from './users.entity';
import { UserDto } from './user.dto';
import  * as bcrypt from 'bcrypt';
import { find } from 'rxjs';

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(users)
        private users: Repository<users>,
        ){}

        async findAll (): Promise<users[]>{
            return await this.users.find()
            
        }
        async createUser(newUser: UserDto){
            try{
                let addedUser =  this.users.create(newUser);
                addedUser.password = await bcrypt.hash(newUser.password, Number(process.env.BCRYPT_SALT_ROUNDS))
                addedUser = this.users.create(addedUser)
                await this.users.save(addedUser);
                return `Usuario añadido correctamente: ${addedUser.username} - ${addedUser.email}`;
            }catch(error){
                return this.userError(error)
            }
            
        }
        

        async findUser(user_id:number) : Promise<users | undefined | string>{
            try{
                return await this.users.findOne(user_id);
            }catch(error){
                return this.userError(error)
            }
        }
        
        async updateUser(id_user: number, userRequest: any){
            try{
                userRequest.password = await bcrypt.hash(userRequest.password, Number(process.env.BCRYPT_SALT_ROUNDS))
                await this.users.update(id_user, userRequest)
                const user = await this.users.findOne(id_user)
                return `El usuario ${user.username} - ${user.email} ha sido actualizado`
            }catch(error){
                console.log(error)
                return this.userError(error)
            }
        }
        
        activateUser(){
            return "Activando usuario";
        }
        async findUserMail(email: string) {
            const listUsers = await this.users.find()
            return listUsers.find(user => user.email === email);
        }
        private  userError(error: any){
            console.error(error) 
            return `Error en la gestión de usuario 
            \n codigo de error: ${error.code}
            \n detalle: ${error.detail}`
        }
        async  getActiveUsers() {
            try{
            console.log("pp")    
            const listUsers = await this.users.find()
            return listUsers.filter(user=> user.active=== true)
            }catch(error){
                return this.userError(error)
            }
            
        }

        async changeUserState(id: number,state: boolean){
            try{
                let user: any  = await this.findUser(Number(id))
                user.active = state;
                await this.updateUser(id,user);
                return `Estado de usuario ${state}`
            }catch(error){
                return this.userError(error)
            }
        }
    }
