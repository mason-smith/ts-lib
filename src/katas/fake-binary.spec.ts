import { test, describe, expect } from 'vitest';

import { fakeBinary } from '~/katas/fake-binary';

describe('fakeBinary', () => {
  test('should replace any digit below 5 with "0" and any digit 5 and above with "1"', () => {
    expect(fakeBinary('45385593107843568')).toEqual('01011110001100111');
    expect(fakeBinary('509321967506747')).toEqual('101000111101101');
    expect(fakeBinary('366058562030849490134388085')).toEqual('011011110000101010000011011');
    expect(fakeBinary('366058562030849490134388085')).toEqual('011011110000101010000011011');
  });
});
