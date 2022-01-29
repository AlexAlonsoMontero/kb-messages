import { Controller, Get, Post, Put, Body } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get()
    findAll(){
        return this.userService.findAll();
    }
    //@UseGuards(AuthGuard('jwt'))
    @Post()
    createUser(@Body() newUser:UserDto){
        return this.userService.createUser(newUser);
    }
    @Put()
    activateUser(){
        return this.userService.activateUser();
    }
    
    @Post()
    login(){
        return this.userService.login();
    }
    @Put()
    updateUser(){
        return this.userService.updateUser();
    }
    @Get()
    findActiveUsers(){
        return this.findActiveUsers();
    }
}
