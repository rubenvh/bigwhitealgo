export function merge_sort<T>(
  a: T[],
  comparer: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0)
) {
  const merge = (p: number, q: number, r: number) => {
    const left = a.slice(p, q + 1);
    const right = a.slice(q + 1, r + 1);

    for (let i = r; i >= p; i--) {
      if (left.length === 0) {
        a[i] = right.pop() as T;
      } else if (right.length === 0) {
        a[i] = left.pop() as T;
      } else {
        a[i] = (comparer(left[left.length - 1], right[right.length - 1]) > 0
          ? left.pop()
          : right.pop()) as T;
      }
    }
  };

  const aux = (p: number, r: number) => {
    if (p < r) {
      const q = Math.floor((p + r) / 2);
      aux(p, q);
      aux(q + 1, r);
      merge(p, q, r);
    }
  };

  aux(0, a.length - 1);
}
