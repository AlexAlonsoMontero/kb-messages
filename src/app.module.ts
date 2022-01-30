import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forRoot(), 
    UsersModule,
    MessagesModule,
    AuthModule,
    ConfigModule.forRoot({
        isGlobal:true,
        cache: true
      })
    ],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
