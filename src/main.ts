import { addOne } from './common/add-one';
import { double } from './common/double';

export const doStuff = (x: number) => {
  const afterG = addOne(x);
  const afterF = double(afterG);
  return afterF;
};
