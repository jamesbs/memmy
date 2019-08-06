import { HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';

export function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
  return event.type === HttpEventType.Response;
}

export function getResponseBody<T>(response: HttpResponse<T>) {
  return response.body;
}
