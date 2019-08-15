import { GalleryProps } from '@memmy/model';
import { createReducer, on } from '../../core';
import { galleriesReceived } from '../../action/gallery/galleries-received';
import { galleryAdded } from '../../action/gallery/gallery-added';

export const initialGalleriesState: GalleryProps[] = [];

export const galleriesReducer = createReducer(
  initialGalleriesState,
  on(galleriesReceived, (_, { galleries }) => galleries),
  on(galleryAdded, (galleries, { gallery }) => [...galleries, gallery ]),
);