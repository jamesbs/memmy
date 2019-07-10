import { Controller, Post, Body } from '@nestjs/common';
import { LoginCredentials } from '@memmy/model';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) { }

  @Post()
  login(@Body() credentials: LoginCredentials) {
    return this.loginService.authenticateLogin(credentials);
  }
}
