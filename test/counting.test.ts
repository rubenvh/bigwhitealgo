import { assertSorted, randomArray } from './utils';
import { counting_sort } from '../src/counting';

describe('counting sort', () => {
  it('basic scenario works', () => {
    const k = 20;
    const a = randomArray(100, 20).map(_ => _ + 1);
    const sorted = counting_sort(a, k);
    assertSorted(sorted);
  });
});
