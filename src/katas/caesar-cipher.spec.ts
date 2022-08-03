import { test, describe, expect } from 'vitest';

import { caesarCipher } from './caesar-cipher';

describe('caesarCipher', () => {
  test('should return a string ciphered with Rot13', () => {
    expect(caesarCipher('test')).toEqual('grfg');
    expect(caesarCipher('Test')).toEqual('Grfg');
    expect(caesarCipher('Test mEssage')).toEqual('Grfg zRffntr');
    expect(caesarCipher('Ruby is cool!')).toEqual('Ehol vf pbby!');
    expect(caesarCipher('"bI~Uf]R+')).toEqual('"oV~Hs]E+');
  });
});
