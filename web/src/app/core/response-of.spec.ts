import { responseOf } from './response-of';
import { TypedResponse } from './typed-response';

describe('responseOf', () => {
  it('gives the response body', async () => {
    const body = 'body content';
    const result = await responseOf(Promise.resolve({ json: () =>  Promise.resolve(body) } as TypedResponse<typeof body>))

    expect(result).toEqual(body);
  });

  it('gives the response body', async () => {
    const body = { field1: 'a', field2: { field3: 'b' }};
    const result = await responseOf(Promise.resolve({ json: () => Promise.resolve(body) } as TypedResponse<typeof body>))

    expect(result).toEqual(body);
  })
});