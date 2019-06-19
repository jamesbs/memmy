import { Injectable } from '@angular/core';
import { User, Gallery } from '@memmy/model';
import { ServerClientService } from './server-client.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGalleriesService {

  constructor(private serverClient: ServerClientService) { }

  getUserGalleries(user: User): Observable<HttpResponse<Gallery[]>> {
    return this.serverClient.serverCall<Gallery[]>(
      'getUserGalleries',
      { authorize: user }
    ) as Observable<HttpResponse<Gallery[]>>;
  }

}
