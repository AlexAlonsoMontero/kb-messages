import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import messages from './messages.entity';
import { MessageDto } from './message.dto';
import internal from 'stream';
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
    async findAllUSerMessages(id_read_user: number) :Promise<object[] | string> {
        try{
            const listMessages = await this.messages.find()
            const result = listMessages.filter(mes=>
                {   
                    if(Number(mes.id_read_user) === Number(id_read_user)){
                        console.log(mes.notification)
                        return mes.notification}
                })
            return result.map(item =>{ return {messages:item.message, id_writer:item.id_write_user}});
        }catch(error){
            return this.userError(error)
        }
    }
    async checkNotifications(id_read_user: number):Promise<object[] | string>{
        try{
            const listMessages = await this.messages.find()
            const result = listMessages.filter(mes=>
                {   
                    if(Number(mes.id_read_user) === Number(id_read_user)){
                        console.log(mes.notification)
                        return mes.notification}
                })
            return result.map(item =>{ return {date:item.notification, id_writer:item.id_write_user}});
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
