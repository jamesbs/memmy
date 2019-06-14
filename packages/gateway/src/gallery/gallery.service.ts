import { Injectable } from '@nestjs/common';
import { IGalleryService } from './gallery.interface';
import { id } from '@memmy/model';

@Injectable()
export class GalleryService implements IGalleryService {
  getUserGalleries = user => {
    return [
      {
        id: `blah+${id(user)}`,
        title: 'Christmas 2016',
        count: 6,
        thumbs: {
          full: 'file:///Users/james-salas/pictures/Christmas%202016/20161224_194339.jpg',
        },
      },
    ];
  }
}
