import { Injectable } from '@nestjs/common';
import { User, id, IAddGallery, operationSucceeded, IGetGalleryById, IGetGalleriesByToken } from '@memmy/model';
import { galleryStub } from './gallery-stub';
import { galleryPropsStub } from './gallery-props-stub';
import { v1 } from 'uuid';

@Injectable()
export class GalleryService {  
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

  getUserGallery(user: User, galleryId: string): ReturnType<IGetGalleryById> {
    return galleryStub[id(user)][galleryId];
  }

  getUserGalleries(user: User): ReturnType<IGetGalleriesByToken> {
    return galleryPropsStub;
  }
}
