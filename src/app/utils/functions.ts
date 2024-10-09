export function skipEmptyFilters(filters: any): any {
  const newFilters: any = {};
  Object.keys(filters).forEach((key) => {
    // skip empty filters
    if (
      filters[key] !== null &&
      filters[key] !== 'null' &&
      filters[key] !== '' &&
      filters[key] !== 'all'
    ) {
      newFilters[key] = filters[key];
    }
  });
  return newFilters;
}
