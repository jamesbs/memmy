import { galleriesReducer, initialGalleriesState } from './galleries';
import { galleriesReceived } from '../../action/gallery/galleries-received';


fdescribe('Galleries reducer', () => {
  describe('on galleriesReceived', () => {
    it('matches the received galleries when given initial state', () => {
      const galleries = [
        { id: 'some id', title: 'gallery title', count: 50, thumbs: { full: 'some image.jpg' }}
      ];
      const result = galleriesReducer(initialGalleriesState, galleriesReceived.creator({ galleries }));
      expect(result).toEqual(galleries);
    });

    it('matches the received galleries when some defined state already exists', () => {
      const galleriesInitialState = [
        { id: 'gallery id 1', title: 'some title', count: 2341, thumbs: {} },
        { id: 'gallery id 2', title: 'test me', count: 0, thumbs: {} },
      ]
      const galleries = [
        { id: 'some id', title: 'gallery title', count: 50, thumbs: { full: 'some image.jpg' }},
        { id: 'abcdefg', title: 'mock title', count: 111, thumbs: { small: 'smal thumb.jpg'}},
      ];

      const result = galleriesReducer(galleriesInitialState, galleriesReceived.creator({ galleries }));
      expect(result).toEqual(galleries);
    })
  })

  // it('adds a new gallery', () => {

  // });
});