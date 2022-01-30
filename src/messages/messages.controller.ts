import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MessagesService } from './messages.service';
import { Request } from '@nestjs/common';
@Controller('messages')
export class MessagesController {
    constructor (private messageService: MessagesService){}
    @Get()
    findAll (){
        return this.messageService.findAllNewMessages()
    }
    @UseGuards(JwtAuthGuard)
    @Post(':id_write_user')
    createMessage(
        @Param('id_write_user') id_write_user: number,
        @Req() request: Request
        ){
        return this.messageService.createMessage(id_write_user,request.body)
    }
    @Get()
    findAllUserMessages(){
        return this.messageService.findAllUSerMessages();
    }

    

}
