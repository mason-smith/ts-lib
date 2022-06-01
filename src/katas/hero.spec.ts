import { test, describe, expect } from 'vitest';

import { hero } from '~/katas/hero';

describe('hero', () => {
  test('should return whether or not the first value is greater than double the second value', () => {
    expect(hero(10, 5)).toEqual(true);
    expect(hero(7, 4)).toEqual(false);
    expect(hero(4, 5)).toEqual(false);
    expect(hero(100, 40)).toEqual(true);
    expect(hero(1500, 751)).toEqual(false);
    expect(hero(0, 1)).toEqual(false);
  });
});
