import { responseOf } from "./response-of";
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

describe('responseOf', () => {
  it('ignores http events that aren\'t responses', () => {
    let result;

    responseOf(of({ type: HttpEventType.Sent }))
      .subscribe(emitted => result = emitted);

    expect(result).toBe(undefined);
  });
  
  it('gives the response body', () => {
    let result;
    let body = 'body content';

    responseOf(of(new HttpResponse({ body })))
      .subscribe(emitted => result = emitted);

    expect(result).toEqual(body);
  });

  it('gives the response body', () => {
    let result;
    let body = { field1: 'a', field2: { field3: 'b' }};
    
    responseOf(of(new HttpResponse({ body })))
      .subscribe(emitted => result = emitted);

    expect(result).toEqual(body);
  })
});