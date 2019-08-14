import { createAction } from '../../core/create-action';
import { props } from '../../core/props';
import { GalleryProps } from '@memmy/model';

export const galleryAdded = createAction(
  '[Dashboard] Gallery Added',
  props<{ gallery: GalleryProps }>(),
);