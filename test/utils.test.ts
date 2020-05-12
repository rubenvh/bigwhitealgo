import { randomize } from '../src/utils';

describe('utils', () => {
  it('randomize works', () => {
    const a = Array.from(Array(10).keys());
    const sum = a.reduce((s, v) => s + v, 0);
    randomize(a);
    expect(a.reduce((s, v) => s + v, 0)).toBe(sum);
  });
});
