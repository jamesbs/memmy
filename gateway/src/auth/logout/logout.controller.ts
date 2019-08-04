import { Controller, Post, Body } from '@nestjs/common';
import { Token } from '@memmy/model';
import { LogoutService } from './logout.service';

@Controller('logout')
export class LogoutController {
  constructor(private logoutService: LogoutService) { }

  @Post()
  logout(@Body() credentials: Token) {
    return this.logoutService.logout(credentials);
  }
}
