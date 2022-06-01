import { test, describe, expect } from 'vitest';

import { basicOp } from './basic-op';

describe('basicOp', () => {
  test('should return the value of a basic arethmetic operation', () => {
    expect(basicOp('+', 4, 7)).toEqual(11);
    expect(basicOp('-', 15, 18)).toEqual(-3);
    expect(basicOp('*', 5, 5)).toEqual(25);
    expect(basicOp('/', 49, 7)).toEqual(7);
  });
});
