import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedRequest } from '../auth/authenticated-request';

@Controller('galleries')
export class GalleryController {
  constructor(
    private galleryService: GalleryService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  galleries(@Req() { user }: AuthenticatedRequest) {
    return this.galleryService.getUserGalleries(user);
  }

  @Get(':galleryId')
  @UseGuards(AuthGuard())
  gallery(@Param('galleryId') galleryId: string, @Req() { user }: AuthenticatedRequest) {
    return this.galleryService.getUserGallery(user, galleryId);
  }
}
