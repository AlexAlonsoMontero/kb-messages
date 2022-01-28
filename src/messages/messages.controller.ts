import { Controller, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor (private messageServide: MessagesService){}
    @Get()
    findAll(){
        return this.messageServide.findAll()
    }

}
