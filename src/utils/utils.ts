export function reportErrors(...details: any) {
  // eslint-disable-next-line no-console
  console.error(details);
}

/** So that we get early notification with a nice error message when we mess up */
export function stringFrom<K extends keyof Data, Data>(
  data: Data | undefined,
  k: K | undefined
): string | undefined {
  if (data === undefined || k === undefined) return undefined;
  const result: any = data[k];

  if (result === undefined) reportErrors(`Could not retrieve value ${k}`, k);
  return result;
}
