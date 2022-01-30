import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import messages from './messages.entity';
import { MessageDto } from './message.dto';
@Injectable()
export class MessagesService {
    constructor(
        private userService: UsersService,
        @InjectRepository(messages)
        private messages: Repository<messages>,
    ){}
    findAllNewMessages():any{
        return 'findAll messages funciona';
    }

    async createMessage(id_write_user:  number, message_data: any){
        try{
            const readUser = await this.userService.findUserMail(message_data.mail_read_user);
            if(readUser && readUser.active === true){
                const mes : MessageDto = new MessageDto(message_data.message, Number(id_write_user),readUser.id_user) 
                const newMessage = await this.messages.create(mes);
                await this.messages.save(newMessage)
                return ("Mensage enviado con éxito")
            }
            else{
                throw new Error('El destinatario no está activo')
            }
        }catch(error){
            return this.userError(error)
        }
        // async createUser(newUser: UserDto){
        //     try{
        //         let addedUser =  this.users.create(newUser);
        //         addedUser.password = await bcrypt.hash(newUser.password, Number(process.env.BCRYPT_SALT_ROUNDS))
        //         addedUser = this.users.create(addedUser)
        //         await this.users.save(addedUser);
        //         return `Usuario añadido correctamente: ${addedUser.username} - ${addedUser.email}`;
        //     }catch(error){
        //         return this.userError(error)
        //     }
            
        // }
    }
    findAllUSerMessages(){
        return "Todos los mensajes de un usuario";
    }
    
    private  userError(error: any){
        console.error(error) 
        return `Error en la gestión del mensaje 
        \n codigo de error: ${error.code}
        \n detalle: ${error.detail}`
    }

}
