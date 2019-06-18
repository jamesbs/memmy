import { Injectable } from '@nestjs/common';
import { IGalleryService } from './gallery.interface';
import { User, Gallery } from '@memmy/model';

@Injectable()
export class GalleryService implements IGalleryService {
  getUserGalleries(user: User): Gallery[] {
    return [
      {
        id: 'f2bc5d3b-d513-4284-b3b5-97d841a89659',
        title: 'Christmas 2016',
        count: 6,
        thumbs: {
          full: 'Christmas%202016/20161224_194339.jpg',
        },
      },
      {
        id: 'f2bc5d3b-d513-4284-b3b5-97d841a89659',
        title: 'Japan 2016',
        count: 706,
        thumbs: {},
      },
      {
        id: 'bb2c2fdd-d97c-49ff-b8ad-21dc4b5afa86',
        title: 'China 2016',
        count: 80,
        thumbs: {},
      }
    ];
  }
}
