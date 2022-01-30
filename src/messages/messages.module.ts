import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import messages from './messages.entity';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([messages]), UsersModule ],
    controllers: [MessagesController],
    providers: [MessagesService, UsersModule]
})
export class MessagesModule {}
