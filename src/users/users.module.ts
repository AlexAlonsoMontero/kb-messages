import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import users from './users.entity';
import { AuthModule } from 'src/utilities/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([users]),UsersModule, AuthModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
