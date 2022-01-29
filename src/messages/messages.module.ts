import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import messages from './messages.entity';

import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';

@Module({
    imports: [TypeOrmModule.forFeature([messages]), ],
    controllers: [MessagesController],
    providers: [MessagesService]
})
export class MessagesModule {}
