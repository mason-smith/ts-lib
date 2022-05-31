import { test, describe, expect } from 'vitest';

import { addOne } from './add-one';

describe('add', () => {
  test('should add the numbers', () => {
    expect(addOne(1)).toEqual(2);
  });
});
