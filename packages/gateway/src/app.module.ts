import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './gallery/gallery.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GalleryModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
