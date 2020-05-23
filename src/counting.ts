export function counting_sort<T>(
  a: T[],
  k: number,
  keyOf: (_: T) => number = _ => (_ as any) as number
): T[] {
  const result = new Array<T>(a.length);
  const counts = new Array<number>(k + 1).fill(0);
  a.forEach(_ => (counts[keyOf(_)] += 1));
  counts.forEach((_, i) => (counts[i] += counts[i - 1] || 0));

  for (let j = a.length; j > 0; j--) {
    result[counts[keyOf(a[j - 1])] - 1] = a[j - 1];
    counts[keyOf(a[j - 1])] -= 1;
  }
  return result;
}
