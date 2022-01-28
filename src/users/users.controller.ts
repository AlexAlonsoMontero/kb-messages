import { Controller, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Post()
    createUser(){
        return this.userService.createUser();
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
