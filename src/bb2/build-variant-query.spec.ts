import { describe, expect, it } from 'vitest';

// local buildVariantQuery
import { buildVariantQuery } from './build-variant-query';

describe('formatSortValue', () => {
  it('should return an array', () => {
    expect(buildVariantQuery()).toEqual([]);
  });
});
