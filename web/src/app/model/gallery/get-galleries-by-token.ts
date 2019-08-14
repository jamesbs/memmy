import { IGetGalleriesByToken } from '@memmy/model';
import { AsHttpRequest } from '../http-request/as-http-request';
import { authorizeWith } from '../auth/with-authorizer';
import serverRouter, { ServerRouterProvider } from '../server-router/server-router';

export const getGalleriesByTokenContainer = (serverRouter: ServerRouterProvider): AsHttpRequest<IGetGalleriesByToken> => 
  token => serverRouter.getUserGalleries(authorizeWith(token));

export type GetGalleriesByTokenProvider = ReturnType<typeof getGalleriesByTokenContainer>

export default getGalleriesByTokenContainer(serverRouter)