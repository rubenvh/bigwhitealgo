import { parentNode } from '../src/heap';

export function assertHeapProperty<T>(items: T[]): void {
  expect(items.some((_x, i, a) => a[i] > a[parentNode(i)])).toBeFalsy();
}

export function assertSorted<T>(items: T[]): void {
  expect(items.some((_x, i, a) => i < a.length && a[i] > a[i + 1])).toBeFalsy();
}

export function sortedArray(size: number): number[] {
  return new Array<number>(size).fill(0).reduce((p, _v, i) => {
    const base = i > 0 ? p[i - 1] : 0;
    p.push(base + Math.ceil(Math.random() * size * 10));
    return p;
  }, [] as number[]);
}

export function randomArray(size: number): number[] {
  return Array.from(Array(size).keys()).map(() =>
    Math.floor(Math.random() * size)
  );
}
