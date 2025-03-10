export function initializeTimes(date: string) {
  if (date.length < 10) return [];

  const result = fetchAPI(new Date(date));

  return result;
}
