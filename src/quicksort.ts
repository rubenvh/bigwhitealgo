import { swap } from './utils';

export function quicksort<T>(
  a: T[],
  p: number = 0,
  r: number = a.length - 1
): void {
  if (p < r) {
    const q = partition(a, p, r);
    quicksort(a, p, q);
    quicksort(a, q + 1, r);
  }
}

function partition<T>(a: T[], p: number, r: number): number {
  const x = a[p];
  let i = p - 1;
  let j = r + 1;
  while (true) {
    do {
      j = j - 1;
    } while (a[j] > x);
    do {
      i = i + 1;
    } while (a[i] < x);
    if (i < j) {
      swap(a, i, j);
    } else {
      return j;
    }
  }
}
