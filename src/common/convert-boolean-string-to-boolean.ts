/**
 * @description this covers a highly specific use case here. If a user
 * uses `ctrl + c & ctrl + v` to copy/paste a boolean checkbox value into
 * another checkbox, handsontable casts that boolean value to a string.
 * Before we update the server, we ahave to cast that string to a boolean
 *
 * @param { String } value "false" | "true"
 * @returns boolean
 */
export function convertBooleanStringToBoolean(value: 'false' | 'true') {
  const boolValues = { false: false, true: true };
  return boolValues[value];
}
