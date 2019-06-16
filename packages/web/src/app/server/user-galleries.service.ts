import { Injectable } from '@angular/core';
import { User } from '@memmy/model';
import { ServerClientService } from './server-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserGalleriesService {

  constructor( private serverClient: ServerClientService) { }

  getUserGalleries(user: User) {
    return this.serverClient.serverCall(
      'getUserGalleries', 
      { authorize: user }
    );
  }

}
