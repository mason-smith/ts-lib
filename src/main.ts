import { pipe } from 'ramda';

// local depeendencies
import { addOne } from './common/add-one';
import { double } from './common/double';
import { trace } from './utils/trace';

export { trace } from '~/utils/trace';

export const doStuff = (x: number) => {
  const afterG = addOne(x);
  const afterF = double(afterG);
  return afterF;
};

export const doStuffBetter = pipe(addOne, trace('after double'), double, trace('after addOne'));
