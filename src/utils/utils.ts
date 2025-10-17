export function capitalizeFirstLetter(str:string) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Handle non-string or empty input
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}