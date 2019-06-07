import { Injectable } from '@nestjs/common';
import { IGalleryService } from './gallery.interface';

@Injectable()
export class GalleryService implements IGalleryService {
  getUserGalleries = userId => {
    return [
      {
        id: `blah+${userId}`,
        title: 'Christmas 2016',
        count: 6,
        thumbs: {
          full: 'file:///Users/james-salas/pictures/Christmas%202016/20161224_194339.jpg',
        },
      },
    ];
  }
}
