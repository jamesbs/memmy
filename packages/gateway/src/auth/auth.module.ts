import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from './authentication.service';
import { AuthorizationService } from './authorization.service';
import { BearerStrategy } from './bearer-strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  providers: [
    AuthenticationService,
    AuthorizationService,
    BearerStrategy,
  ],
  exports: [
    PassportModule,
    AuthenticationService,
    AuthorizationService,
  ],
})
export class AuthModule { }
