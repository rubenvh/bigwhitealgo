import { assertSorted } from './utils';
import { merge_sort } from '../src/merge';

describe('merge sort', () => {
  it('basic scenario works', () => {
    const a = [5, 2, 4, 6, 1, 3, 2, 6]; //randomArray(100).map(_ => _ + 1);
    merge_sort(a);
    assertSorted(a);
  });
});
