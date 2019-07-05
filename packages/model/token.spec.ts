import { isToken, asToken } from "./token";

describe('Token', () => {
  describe('isToken', () => {
    it('is a token', () => {
      expect(isToken({ token: 'token' })).toBe(true);
    });

    it('isn\'t a token if the token property is not a string', () => {
      expect(isToken({ token: { key: 'value' }})).toBe(false);
    });

    it('isn\'t a token if there is no token property', () => {
      expect(isToken({ auth: 'blah' })).toBe(false);
    });
  });

  describe('asToken', () => {
    it('only has token fields', () => {
      const credentials = { token: 'token', expires: new Date() };
      expect(Object.keys(asToken(credentials))).toEqual(['token']);
    });
    it('is identical when passed only a token', () => {
      const token = { token: 'token' };
      expect(asToken(token)).toEqual(token);
    });
  });
});