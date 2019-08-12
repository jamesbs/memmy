import { getResponseBody } from './http-response';
import { TypedResponse } from './typed-response';

describe('HttpResponse helpers', () => {
  it('getResponseBody returns body of HttpResponse', async () => {
    const mockEvent = { json: () => Promise.resolve('body') };
    const result = await getResponseBody(mockEvent as TypedResponse<string>);

    expect(result).toEqual('body');
  });
});
