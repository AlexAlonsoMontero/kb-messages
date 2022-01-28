import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
    findAll():any{
        return 'findAll messages funciona';
    }
}
