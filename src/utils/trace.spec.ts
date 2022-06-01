import { test, describe, expect } from 'vitest';

// local dependencies
import { trace } from './trace';

describe('trace', () => {
  test('should trace some information', () => {
    expect(trace('test trace')('some value')).toEqual('some value');
  });
});
