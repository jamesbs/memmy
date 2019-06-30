
import { filter, first, map } from 'rxjs/operators';
import { isHttpResponse, getResponseBody } from './http-response';
import { HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export function responseOf<T>(event: Observable<HttpEvent<T>>) {
  return event
    .pipe(
      filter(isHttpResponse),
      first(),
      map(getResponseBody),
    );
}
