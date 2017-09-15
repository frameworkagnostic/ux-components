
import cssObjectLoader from '../index';

test('#unit:cssObjectLoader should expose object', () => {
  expect(cssObjectLoader).toEqual(jasmine.any(Function));
});
