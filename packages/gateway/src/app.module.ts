import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './gallery/gallery.module';
import { AuthenticationService } from './auth/authentication.service';
import { AuthorizationService } from './auth/authorization.service';
import { UserService } from './user/user.service';

@Module({
  imports: [GalleryModule],
  controllers: [AppController],
  providers: [AppService, AuthenticationService, AuthorizationService, UserService],
})
export class AppModule {}
