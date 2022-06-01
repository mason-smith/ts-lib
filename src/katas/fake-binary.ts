export function fakeBinary(string: string) {
  return string.split('').map(handleStringToBin).join('');
}

function handleStringToBin(value: string) {
  return parseInt(value, 10) < 5 ? '0' : '1';
}
