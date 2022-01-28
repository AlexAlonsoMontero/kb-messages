import { Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor (private messageService: MessagesService){}
    @Get()
    findAll (){
        return this.messageService.findAllNewMessages()
    }
    @Post()
    createMessage(){
        return this.messageService.createMessage()
    }
    @Get()
    findAllUserMessages(){
        return this.messageService.findAllUSerMessages();
    }

}
