export function breakCamelCase(string: string) {
  return (
    string
      // split string  anywhere an uppercase letter immediately follows a lowercase letter
      .replace(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g, '!$&')
      // split it by the separator
      .split('!')
      .join(' ')
      .trim()
  );
}
