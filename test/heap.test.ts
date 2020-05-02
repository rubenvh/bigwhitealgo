import { Heap, parentNode } from './../src/heap';

describe('heap', () => {
  const getRandomString = (length: number): string => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const result = new Array(length)
      .fill('')
      .map(() =>
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    return result.join('');
  };

  function assertHeapProperty<T>(items: T[]): void {
    expect(items.some((_x, i, a) => a[i] > a[parentNode(i)])).toBeFalsy();
  }

  describe('creation', () => {
    it('works', () => {
      const sortable = new Heap<number>(Array.from(Array(10).keys()));
      assertHeapProperty(sortable.items);
    });
    it('works for large collection', () => {
      const sortable = new Heap<number>(Array.from(Array(1000000).keys()));
      assertHeapProperty(sortable.items);
    });
    it('works for custom comparer', () => {
      const input = Array.from(Array(10).keys()).map(key => ({
        key,
        data: getRandomString(100),
      }));
      const sortable = new Heap<{ key: number; data: string }>(input, (a, b) =>
        a.key < b.key ? -1 : a.key > b.key ? 1 : 0
      );
      assertHeapProperty(sortable.items);
    });
  });

  describe('sorting', () => {
    it('works', () => {
      const input = Array.from(Array(100).keys()).map(() =>
        Math.floor(Math.random() * 100)
      );
      const output = Heap.heapsort<number>(input);
      expect(output.some((_x, i, a) => a[i] > a[i + 1])).toBeFalsy();
    });
  });

  describe('priorityqueue', () => {
    it('when adding element to empty heap', () => {
      const heap = new Heap<number>([]);
      heap.insert(1);
      expect(heap.heapSize).toEqual(1);
      expect(heap.max()).toEqual(1);
      assertHeapProperty(heap.items);
    });
    it('when adding element to non-empty heap', () => {
      const heap = new Heap<number>([1, 2, 3, 4]);
      heap.insert(10);
      expect(heap.heapSize).toEqual(5);
      expect(heap.max()).toEqual(10);
      assertHeapProperty(heap.items);
    });
    it('when extracting max element from non-empty heap', () => {
      const heap = new Heap<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(heap.extractMax()).toEqual(9);
      expect(heap.heapSize).toEqual(8);
      assertHeapProperty(heap.items);
    });
    it('when extracting all elements from non-empty heap', () => {
      const heap = new Heap<number>([1, 2, 3, 4]);
      expect(heap.extractMax()).toEqual(4);
      expect(heap.extractMax()).toEqual(3);
      expect(heap.extractMax()).toEqual(2);
      expect(heap.extractMax()).toEqual(1);
      expect(heap.heapSize).toEqual(0);
      expect(heap.items).toEqual([]);
    });
  });

  describe('increaseKey', () => {
    it('when increasing key at index 0', () => {
      const heap = new Heap<number>([1, 2, 3, 4]);
      heap.increaseKey(0, 10);
      assertHeapProperty(heap.items);
      expect(heap.max()).toBe(10);
    });
    it('when increasing key at last index ', () => {
      const heap = new Heap<number>([1, 2, 3, 4]);
      heap.increaseKey(3, 10);
      assertHeapProperty(heap.items);
      expect(heap.max()).toBe(10);
    });
  });

  describe('delete', () => {
    it('when deleting key of single element heap', () => {
      const heap = new Heap<number>([1]);
      heap.delete(0); // delete 1
      assertHeapProperty(heap.items);
      expect(heap.items).toStrictEqual([]);
    });
    it('when deleting key where replacement needs to bubble up', () => {
      const heap = new Heap<number>([33, 21, 8, 19, 11, 5, 1, 17, 9]);
      heap.delete(5); // delete 5
      assertHeapProperty(heap.items);
      expect(heap.items).toStrictEqual([33, 21, 9, 19, 11, 8, 1, 17]);
    });
    it('when deleting key where replacement needs to filter down', () => {
      const heap = new Heap<number>([33, 21, 8, 19, 11, 5, 1, 17, 9]);
      heap.delete(1); // delete 21
      assertHeapProperty(heap.items);
      expect(heap.items).toStrictEqual([33, 19, 8, 17, 11, 5, 1, 9]);
    });
  });
});
