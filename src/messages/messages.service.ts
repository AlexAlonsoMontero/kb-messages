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

    async createMessage(id_write_user:  number, message_data: any): Promise<string>{
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
        
    }
    async findAllUSerMessages(id_read_user: number) : Promise<messages[] |undefined |string>{
        try{
            const listMessages = await this.messages.find()
            console.log(id_read_user)
            const result = listMessages.filter(mes=>
                {   console.log(mes.id_read_user,id_read_user)
                    if(mes.id_read_user===Number(id_read_user)){return mes}})
            return result;
        }catch(error){
            return this.userError(error)
        }
    }
    
    private  userError(error: any){
        console.error(error) 
        return `Error en la gestión del mensaje 
        \n codigo de error: ${error.code}
        \n detalle: ${error.detail}`
    }

}
