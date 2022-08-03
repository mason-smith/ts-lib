import { it, describe, expect } from 'vitest';

import { addOne } from './add-one';

describe('add', () => {
  it('should add the numbers', () => {
    expect(addOne(1)).toEqual(2);
  });
});
