import { assertSorted, randomArray, sortedArray } from './utils';
import { quicksort, randomizedQuickSort } from '../src/quicksort';

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
  it('array with identical elements can be sorted', () => {
    const a = Array(10).fill(1);
    quicksort(a);
    assertSorted(a);
  });
});

describe('randomized quicksort', () => {
  it('basic scenario works', () => {
    const a = sortedArray(20);
    randomizedQuickSort(a);
    assertSorted(a);
  });
});
