import { Injectable } from '@nestjs/common';
import { IGalleryService } from './gallery.interface';
import { User, Gallery, id, GalleryProps, IAddGallery, operationSucceeded } from '@memmy/model';
import { galleryStub } from './gallery-stub';
import { galleryPropsStub } from './gallery-props-stub';
import { v1 } from 'uuid';

@Injectable()
export class GalleryService implements IGalleryService {  
  addGallery(user: User, galleryName: string): ReturnType<IAddGallery> {
    const galleryId = v1();
    const galleryProps = {
      id: galleryId,
      title: galleryName,
      count: 0,
      thumbs: {},
    };
    galleryPropsStub.push(galleryProps);

    const userId = id(user);

    if(galleryStub[userId] === undefined) {
      galleryStub[userId] = {};
    }

    galleryStub[userId][galleryId] = { ...galleryProps, images: [] }

    return {
      status: operationSucceeded,
      generated: galleryProps,
    };
  }

  getUserGallery(user: User, galleryId: string): Gallery {
    return galleryStub[id(user)][galleryId];
  }

  getUserGalleries(user: User): GalleryProps[] {
    return galleryPropsStub;
  }
}
