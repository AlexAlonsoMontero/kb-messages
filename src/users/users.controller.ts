import { Controller, Get, Post, Put, Body, Param, Req } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/auth.locals';
import { Request } from 'express';
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post()
    createUser(@Body() newUser:UserDto){
        return this.userService.createUser(newUser);
    }
    @Put()
    activateUser(){
        return this.userService.activateUser();
    }
    @UseGuards(JwtAuthGuard)
    @Get('active-users')
    findActiveUsers(){
        return this.userService.getActiveUsers();
    }
    

    @UseGuards(JwtAuthGuard)
    @Get(':user_id')
    findUserByID(@Param('user_id') user_id:number){
        return this.userService.findUser(user_id)
    }
    
    @UseGuards(JwtAuthGuard)
    @Put(':user_id')
    updateUser(@Param('user_id') user_id:number, @Req()request: Request){
        return this.userService.updateUser(user_id, request.body);
    }

    @Put(':id/:state')
    changeUserState(
        @Param('id') id: number ,
        @Param('state')state:boolean
        ){
        console.log(id,state)
        return this.userService.changeUserState(id,state);
    }
    
}
