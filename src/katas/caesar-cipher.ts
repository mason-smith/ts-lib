/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet
 * ROT13 is an example of the Caesar cipher
 */
export function caesarCipher(string: string) {
  return string.split('').map(offsetLetter).join('');
}

function offsetLetter(string: string) {
  const alphabet = alphabetMap();
  if (isUpperCase(string)) {
    return alphabet.get(string.toLowerCase())?.toUpperCase();
  }
  if (isNotAlphabet(string)) {
    return string;
  }
  return alphabet.get(string);
}

function alphabetMap() {
  const alpha = generateAlphabetArray();
  const alphabet = new Map<string, string>();
  alpha.forEach((letter, i) => {
    alphabet.set(letter, alpha[i + 13] || alpha[i - 13]);
  });
  return alphabet;
}

function generateAlphabetArray() {
  const alpha = Array.from(Array(26)).map((_val, index) => index + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  return alphabet;
}

function isUpperCase(string: string) {
  return string.match(/[A-Z]+/g);
}

function isNotAlphabet(string: string) {
  return !string.match(/[a-zA-Z]+/g);
}
