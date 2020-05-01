import { Heap, parentNode } from './../src/heap';


describe('heap', () => {
  const getRandomString = (length: number): string => {
    const characters         = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const result = new Array(length).fill('').map(() => characters.charAt(Math.floor(Math.random() * charactersLength)));      
    return result.join('');
  };  

  describe('creation', () => {
    it('works', () => {
      const sortable = new Heap<number>(Array.from(Array(10).keys()));
      expect(sortable.items.some((_x, i, a) => a[i] > a[parentNode(i)])).toBeFalsy();
    });
    it('works for large collection', () => {
      const sortable = new Heap<number>(Array.from(Array(1000000).keys()));    
      expect(sortable.items.some((_x, i, a) => a[i] > a[parentNode(i)])).toBeFalsy();
    });
    it('works for custom comparer', () => {
      const input = Array.from(Array(10).keys()).map(key => ({ key, data: getRandomString(100)}));
      const sortable = new Heap<{key:number, data:string}>(input, (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0);
      expect(sortable.items.some((_x, i, a) => a[i].key > a[parentNode(i)].key)).toBeFalsy();
    });
  });

  describe('sorting', () => {
    it('works', () => {
      const input = Array.from(Array(100).keys()).map(() => Math.floor(Math.random() * 100));
      const output = Heap.heapsort<number>(input);
      expect(output.some((_x, i, a) => a[i] > a[i+1])).toBeFalsy();
    });
  });

  describe('priorityqueue', () => {
    it('when adding element to empty heap', () => {
      const heap = new Heap<number>([]);
      heap.insert(1);
      expect(heap.heapSize).toEqual(1);
      expect(heap.max()).toEqual(1);
    });
    it('when adding element to empty heap', () => {
      const heap = new Heap<number>([1, 2, 3, 4]);
      heap.insert(10);
      expect(heap.heapSize).toEqual(5);
      expect(heap.max()).toEqual(10);
    });
  });
  

  
});