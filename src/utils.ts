export function swap(a: any[], x: number, y: number): any[] {
  const temp = a[x];
  a[x] = a[y];
  a[y] = temp;
  return a;
}

export function random(i: number, j: number) {
  return Math.round(i + Math.random() * (j - i));
}

export function randomize(a: any[]) {
  a.forEach((_, i) => swap(a, i, random(0, a.length - 1)));
}
