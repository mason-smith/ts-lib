import { test, describe, expect } from 'vitest';

import { breakCamelCase } from './break-camel-case';

describe('breakCamelCase', () => {
  test('should return whether or not a given value is higher than the average in a given array', () => {
    expect(breakCamelCase('camelCasing')).toEqual('camel Casing');
    expect(breakCamelCase('camelCasingTest')).toEqual('camel Casing Test');
    expect(breakCamelCase('identifier')).toEqual('identifier');
    expect(breakCamelCase('')).toEqual('');
    expect(breakCamelCase('camelCasing camelCasingTest')).toEqual('camel Casing camel Casing Test');
    expect(breakCamelCase('ABCD')).toEqual('ABCD');
    expect(breakCamelCase('TitleValue')).toEqual('Title Value');
    expect(breakCamelCase('eclipseRCPExt')).toEqual('eclipse RCP Ext');
  });
});
