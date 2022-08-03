import { it, describe, expect } from 'vitest';
import { convertBooleanStringToBoolean } from './convert-boolean-string-to-boolean';

describe('convertBooleanStringToBoolean', () => {
  it('should convert the string "true" to the boolean true', () => {
    expect(convertBooleanStringToBoolean('true')).toEqual(true);
  });

  it('should convert the string "false" to the boolean false', () => {
    expect(convertBooleanStringToBoolean('false')).toEqual(false);
  });
});
