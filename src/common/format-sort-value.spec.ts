import { describe, expect, it } from 'vitest';

// local dependencies
import { formatSortValue } from './format-sort-value';

describe('formatSortValue', () => {
  it('should remove white space around a string', () => {
    expect(formatSortValue('   extra space    ')).toEqual('extra space');
    expect(formatSortValue('   extra space')).toEqual('extra space');
    expect(formatSortValue('extra space    ')).toEqual('extra space');
  });

  it('should return numbers as numbers', () => {
    expect(formatSortValue(123)).toEqual(123);
    expect(formatSortValue(1.2)).toEqual(1.2);
    expect(formatSortValue(1_123_456)).toEqual(1_123_456);
  });

  it('should convert capital letters to lower case', () => {
    expect(formatSortValue('tEsT')).toEqual('test');
    expect(formatSortValue('TEST')).toEqual('test');
    expect(formatSortValue('test')).toEqual('test');
    expect(formatSortValue('tE+St')).toEqual('te+st');
  });

  it.skip('should return parsed date values', () => {
    expect(formatSortValue('June 9, 2022')).toEqual(1654754400000);
    expect(formatSortValue('6-9-2022')).toEqual(1654754400000);
    expect(formatSortValue('6/9/2022')).toEqual(1654754400000);
  });
});
