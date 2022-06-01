const opMap = new Map<Operators, (a: number, b: number) => number>([
  ['+', (a: number, b: number) => a + b],
  ['-', (a: number, b: number) => a - b],
  ['*', (a: number, b: number) => a * b],
  ['/', (a: number, b: number) => a / b],
]);

type Operators = '+' | '-' | '*' | '/';

/**
 * Can do basic arethmetic, including and limited to
 * '+', '-', '*', and '/'
 * @param { Operators } operation "+" | "-" | "*" | "/"
 * @param { Number } value1 number
 * @param { Number } value2 number
 * @returns  number
 */
export function basicOp(operation: Operators, value1: number, value2: number) {
  const op = opMap.get(operation);
  return (op as (a: number, b: number) => number)(value1, value2);
}
