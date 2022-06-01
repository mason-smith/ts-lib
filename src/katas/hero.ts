import { double } from '~/common/double';

export function hero(bullets: number, dragons: number) {
  return double(dragons) <= bullets;
}
