import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(): any {
        return 'findAll users funcionando';
    }
}
