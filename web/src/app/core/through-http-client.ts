import { Observable } from 'rxjs';
import { HttpEvent, HttpSentEvent } from '@angular/common/http';

export type ThroughHttpClient<T extends (...params: any) => any> =
  (...params: Parameters<T>) => Observable<HttpEvent<ReturnType<T>>>;
