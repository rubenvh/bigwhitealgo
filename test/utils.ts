import { parentNode } from '../src/heap';

export function assertHeapProperty<T>(items: T[]): void {
  expect(items.some((_x, i, a) => a[i] > a[parentNode(i)])).toBeFalsy();
}
