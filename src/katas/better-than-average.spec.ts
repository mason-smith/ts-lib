import { test, describe, expect } from 'vitest';

import { betterThanAverage } from './better-than-average';

describe('betterThanAverage', () => {
  test('should return whether or not a given value is higher than the average in a given array', () => {
    expect(betterThanAverage({ scores: [2, 3], score: 5 })).toEqual(true);
    expect(betterThanAverage({ scores: [100, 40, 34, 57, 29, 72, 57, 88], score: 75 })).toEqual(true);
    expect(betterThanAverage({ scores: [12, 23, 34, 45, 56, 67, 78, 89, 90], score: 9 })).toEqual(false);
    expect(betterThanAverage({ scores: [41, 75, 72, 56, 80, 82, 81, 33], score: 50 })).toEqual(false);
    expect(betterThanAverage({ scores: [29, 55, 74, 60, 11, 90, 67, 28], score: 21 })).toEqual(false);
  });
});
