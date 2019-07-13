import { getGenerated } from "./generated-data";

describe('GeneratedData', () => {
  describe('getGenerated', () => {
    it('returns the generated data', () => {
      expect(getGenerated({ generated: { id: 'some id' }})).toEqual({ id: 'some id'});
    });
  });
})