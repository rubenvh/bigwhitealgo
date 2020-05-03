import { sortedArray, assertSorted } from './utils';
import { k_way_merge } from '../src/k-way-merge';

describe('k-way-merge', () => {
  it('basic scenario works', () => {
    const arrays = Array.from(Array(10).keys()).map(_ => sortedArray(10));
    const merged = k_way_merge(arrays);
    assertSorted(merged);
  });
  it('large scenario works', () => {
    const arrays = Array.from(Array(1000).keys()).map(_ => sortedArray(1000));
    const merged = k_way_merge(arrays);
    assertSorted(merged);
  });
});
