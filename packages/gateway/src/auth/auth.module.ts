import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './authentication.service';
import { AuthorizationService } from './authorization.service';
import { BearerStrategy } from './bearer-strategy';
import { LoginService } from './login/login.service';
import { LogoutService } from './logout/logout.service';
import { LogoutController } from './logout/logout.controller';
import { LoginController } from './login/login.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [
    LoginController,
    LogoutController,
  ],
  providers: [
    AuthenticationService,
    AuthorizationService,
    BearerStrategy,
    LoginService,
    LogoutService,
  ],
  exports: [
    PassportModule,
    AuthenticationService,
    AuthorizationService,
  ],
})
export class AuthModule { }
