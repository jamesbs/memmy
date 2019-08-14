import { Token, IAddGallery } from '@memmy/model';
import { AsHttpRequest } from '../http-request/as-http-request';
import { authorizeWith } from '../auth/with-authorizer';
import serverRouter, { ServerRouterProvider } from '../server-router/server-router';

export const addGalleryContainer = (serverRouter: ServerRouterProvider): AsHttpRequest<IAddGallery> => (token: Token, galleryName: string) => 
  serverRouter.addGallery(authorizeWith(token, { name: galleryName }));

export default addGalleryContainer(serverRouter);

export type AddGalleryProvider = ReturnType<typeof addGalleryContainer>;