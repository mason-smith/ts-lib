import { test, describe, expect } from 'vitest';

import { double } from './double';

describe('add', () => {
  test('should double the numbers', () => {
    expect(double(1)).toEqual(2);
    expect(double(2)).toEqual(4);
  });
});
