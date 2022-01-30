import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MessagesService } from './messages.service';
import { Request } from '@nestjs/common';
import { request } from 'http';
@Controller('messages')
export class MessagesController {
    constructor (private messageService: MessagesService){}
    @UseGuards(JwtAuthGuard)
    @Get(':id_read_user')
    findAllUserMessages(
        @Param('id_read_user') id_read_user: number,
    ){
        return this.messageService.findAllUSerMessages(id_read_user);
    }



    @UseGuards(JwtAuthGuard)
    @Post(':id_write_user')
    createMessage(
        @Param('id_write_user') id_write_user: number,
        @Req() request: Request
        ){
        return this.messageService.createMessage(id_write_user,request.body)
    }
    

    

}
