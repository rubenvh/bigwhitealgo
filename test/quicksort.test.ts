import { assertSorted, randomArray } from './utils';
import { quicksort } from '../src/quicksort';

describe('quicksort', () => {
  it('basic scenario works', () => {
    const a = randomArray(20);
    quicksort(a);
    assertSorted(a);
  });
  it('large scenario works', () => {
    const a = randomArray(1000000);
    quicksort(a);
    assertSorted(a);
  });
});
