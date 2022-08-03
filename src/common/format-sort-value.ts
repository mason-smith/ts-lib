export function formatSortValue(value: string | number | Date | boolean) {
  const parseDate = Date.parse(value as string);

  if (Number(value)) {
    /**
     * Before we sort by a parsed date, we sort by number so that we don't end up with the following
     *
     * 1) 1
     * 2) 123
     * 3) 2
     * 4) 234
     * 5) 3
     * 6) 323
     *
     * for our Number value columns
     */
    return value;
  }

  if (parseDate) {
    /**
     * this block allows us to sort by the entire date instead of just the first numbers. So instead of
     *
     * 1) 01/01/22
     * 2) 02/01/22
     * 3) 03/01/21
     *
     * We get
     *
     * 1) 03/01/21
     * 2) 01/01/22
     * 3) 02/01/22
     *
     * Date.parse also works for Non-standard date strings, so user generated dates like
     * Jul 9, 2022 will also be sorted in the expected order
     */
    return parseDate;
  }

  return value.toString().trim().toLowerCase();
}
