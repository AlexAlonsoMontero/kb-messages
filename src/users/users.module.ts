import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import users from './users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([users]), ],
    controllers: [UsersController],
    providers: [UsersService,],
    exports: [UsersService, ]
})
export class UsersModule {}
