import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import users from './users.entity';

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(users)
        private users: Repository<users>
        ){}

        findAll(){
            return this.users.find()
            
        }
    }
