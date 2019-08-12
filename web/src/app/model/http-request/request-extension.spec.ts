import { requestExtensionKey, extension, withoutExtension } from "./request-extension";

describe('Request extension', () => {
  it('extension gets the extension value', () => {
    const extensionData = { value: 'test' };

    expect(extension({ [requestExtensionKey]: extensionData })).toEqual(extensionData);
  });

  it('withoutExtension removes the extension value', () => {
    const mockData = {
      body: {
        name: 'memmy user',
      },
      [requestExtensionKey]: {
        value: 'text' 
      }
    };
    expect(withoutExtension(mockData)).toEqual({ body: { name: 'memmy user' }});
  })
});