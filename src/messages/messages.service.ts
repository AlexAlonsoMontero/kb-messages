import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    findAllNewMessages():any{
        return 'findAll messages funciona';
    }

    createMessage(){
        return "Crear mensaje";
    }
    findAllUSerMessages(){
        return "Todos los mensajes de un usuario";
    }
    


}
