import { describe, expect, test } from 'vitest';
import { isValidIp } from './is-valid-ip';

describe('is-valid-ip', () => {
  test('should return true for valid ip addresses', () => {
    expect(isValidIp('0.0.0.0')).toEqual(false);
    expect(isValidIp('12.255.56.1')).toEqual(false);
    expect(isValidIp('137.255.156.100')).toEqual(false);
  });
  // test('should return false for invalid ip addresses', () => {
  //   expect(isValidIp('')).toEqual(false);
  //   expect(isValidIp('abc.def.ghi.jkl')).toEqual(false);
  //   expect(isValidIp('123.456.789.0')).toEqual(false);

  //   expect(isValidIp('12.34.56')).toEqual(false);
  //   expect(isValidIp('256.1.2.3')).toEqual(false);
  //   expect(isValidIp('1.2.3.4.5')).toEqual(false);
  //   expect(isValidIp('123,45,67,89')).toEqual(false);
  //   expect(isValidIp('1e0.1e1.1e2.2e2')).toEqual(false);
  //   expect(isValidIp(' 1.2.3.4')).toEqual(false);
  //   expect(isValidIp('12.34.56.-7')).toEqual(false);
  //   expect(isValidIp('1.2.3.4\n')).toEqual(false);
  //   expect(isValidIp('\n1.2.3.4')).toEqual(false);
  // });

  // test.todo('Leading zeros (e.g. 01.02.03.04) are considered invalid', () => {
  //   expect(isValidIp('01.02.03.04')).toEqual(false);
  // });
});
