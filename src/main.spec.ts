import { test, describe, expect } from 'vitest';

import { doStuff, doStuffBetter } from './main';

describe('doStuff', () => {
  test('should doStuff to the numbers', () => {
    expect(doStuff(20)).toEqual(42);
  });
});

describe('doStuffBetter', () => {
  test('should doStuffBetter to the numbers', () => {
    expect(doStuffBetter(20)).toEqual(42);
  });
});
