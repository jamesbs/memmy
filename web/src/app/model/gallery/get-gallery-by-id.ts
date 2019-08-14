import { Token, IGetGalleryById } from '@memmy/model';
import { AsHttpRequest } from '../http-request/as-http-request';
import { authorizeWith } from '../auth/with-authorizer';
import serverRouter, { ServerRouterProvider } from '../server-router/server-router';


export const getGalleryByIdContainer = (serverRouter: ServerRouterProvider): AsHttpRequest<IGetGalleryById> => 
  (token: Token, galleryId: string) => serverRouter.getGallery(authorizeWith(token, { id: galleryId }));

export type GetGalleryByIdProvider = ReturnType<typeof getGalleryByIdContainer>

export default getGalleryByIdContainer(serverRouter);