import { Controller, Get, Param } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { Gallery } from '@memmy/model';

@Controller('gallery')
export class GalleryController {
  constructor(
    private galleryService: GalleryService,
  ) {}

  @Get()
  galleries() {
    return this.galleryService.getUserGalleries('some id');
  }
}
