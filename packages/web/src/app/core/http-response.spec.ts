import is from 'ramda/es/is';
import { HttpEventType, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { isHttpResponse, getResponseBody } from './http-response';

describe('HttpResponse helpers', () => {
  describe('isHttpResponse', () => {
    it('isHttpResponse is true when event is HttpResponse', () => {
      const mockEvent = new HttpResponse();

      expect(isHttpResponse(mockEvent)).toBe(true);
    });

    it('isHttpResponse is false when event is HttpSentEvent', () => {
      const mockEvent: HttpEvent<unknown> = { type: HttpEventType.Sent };

      expect(isHttpResponse(mockEvent)).toBe(false);
    });
  });

  describe('getResponseBody returns body of HttpResponse', () => {
    const mockEvent = new HttpResponse({
      body: 'body',
    });

    expect(getResponseBody(mockEvent)).toEqual('body');
  });
});
