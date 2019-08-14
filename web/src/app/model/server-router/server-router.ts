import gateway, { GatewayProvider } from '../gateway';
import { send } from '../http-request/send';
import join from 'url-join';
import { LoginCredentials, Identifiable, Token } from '@memmy/model';
import { withAuthorization } from '../auth/with-authorization';

export const serverRouterContainer = (gateway: GatewayProvider) => ({
  login: 
    send((body: LoginCredentials) => ({ 
      url: join(gateway, 'login'),
      options: {
        method: 'post',
        body: JSON.stringify(body), 
      },
    }))

, logout:
    send((body: Token) => ({
      url: join(gateway, 'logout'),
      options: {
        method: 'post',
        body: JSON.stringify(body),
      },
    }))

, getUserGalleries:
    send(
      withAuthorization(() => ({ 
        url: join(gateway, 'galleries') 
      })),
    )

, getGallery:
    send(
      withAuthorization(({ id: galleryId }: Identifiable) => ({
        url: join(gateway, 'galleries', galleryId),
      })),
    )

, addGallery:
    send(
      withAuthorization((body: { name: string }) => ({
        url: join(gateway, 'galleries', 'add'),
        options: {
          method: 'post',
          body: JSON.stringify(body),
        }
      })),
    ),
})

export type ServerRouter = ReturnType<typeof serverRouterContainer>
export type ServerRouterProvider = ServerRouter

export default serverRouterContainer(gateway);