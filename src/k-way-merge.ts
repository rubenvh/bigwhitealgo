import { Heap } from './heap';

export function k_way_merge<T>(arrays: T[][]): T[] {
  const heap = new Heap<T[]>(
    arrays.filter(_ => _.length > 0),
    // take largest elements in arrays as key (maxHeap)
    (a1, a2) => (a1[a1.length - 1] >= a2[a2.length - 1] ? 1 : -1)
  );
  let result_index = arrays.reduce((p, a) => p + a.length, 0);
  const result: T[] = new Array<T>(result_index);
  while (heap.heapSize > 0) {
    // pop runs in O(1), the algorithm is shorter when we could do .shift()
    // but the latter has potential time complexity of O(n)
    const next = heap.max().pop();
    if (next != null) {
      result[--result_index] = next;
    }
    if (heap.max().length === 0 || next == null) {
      heap.extractMax();
    } else {
      heap.heapify(heap.items, 0);
    }
  }
  return result;
}
