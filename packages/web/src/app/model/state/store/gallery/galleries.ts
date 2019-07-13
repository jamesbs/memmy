import { GalleryProps } from '@memmy/model';
import { createReducer, on } from '@ngrx/store';
import { receivedGalleries } from '../../action/gallery/received-galleries';
import { galleryAdded } from '../../action/gallery/gallery-added';

export const initialGalleriesState: GalleryProps[] = [];

export const galleriesReducer = createReducer(
  initialGalleriesState,
  on(receivedGalleries, (_, { galleries }) => galleries),
  on(galleryAdded, (galleries, { gallery }) => [...galleries, gallery ]),
);