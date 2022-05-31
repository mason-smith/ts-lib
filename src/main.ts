export const g = (n: number) => n + 1;

export const f = (n: number) => n * 2;

export const doStuff = (x: number) => {
  const afterG = g(x);

  const afterF = f(afterG);

  return afterF;
};
