import { props } from '../../core/props';
import { GalleryProps } from '@memmy/model';
import { createAction } from '../../core/create-action';

export const galleriesReceived = createAction(
  '[Dashboard] Received Galleries',
  props<{ galleries: GalleryProps[] }>(),
);