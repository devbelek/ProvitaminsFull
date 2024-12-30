type SearchParams =
  | {
      [key: string]: string | string[] | undefined;
    }
  | undefined;

export function convertObjectToSearchParams<T extends SearchParams>(
  obj: T
): URLSearchParams {
  const params = new URLSearchParams();
  if (!obj) return params;
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          params.append(key, item);
        });
      } else {
        params.set(key, value);
      }
    }
  }

  return params;
}
