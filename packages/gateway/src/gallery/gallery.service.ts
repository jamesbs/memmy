import { Injectable } from '@nestjs/common';
import { GetUserGalleries } from '@memmy/model';

@Injectable()
export class GalleryService {
  getUserGalleries: GetUserGalleries = userId => {
    return [
      {
        id: `blah+${userId}`,
        title: 'blah',
        subtitle: 'blah',
        count: 0,
        thumbs: {},
      },
    ]
  }
}
