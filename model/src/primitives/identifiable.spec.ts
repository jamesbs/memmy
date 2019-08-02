import { id } from './identifiable';

describe('Identifiable', () => {
  describe('id', () => {
    it('gets the id', () => {
      expect(id({ id: 'identity'})).toBe('identity');
    });
  });
})