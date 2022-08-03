import { trace } from '~/main';

/**
 * identify valid IPv4 addresses in dot-decimal format.
 * IPs should be considered valid if they consist of four octets,
 * with values between 0 and 255, inclusive.
 *
 * @param {String} ip
 * @returns {Boolean}
 */
export function isValidIp(ip: string): boolean {
  trace('ip')(ip);
  return false;
}
