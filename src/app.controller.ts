import { Controller, Request, Post,  Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/auth.locals';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
    ) { }

  @Get()
  welcome(){
    return "Bienvenido la api, esta api se la debemosa Marty McFly"
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user)
  }
}
