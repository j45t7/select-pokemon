export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const lowercaseFirstLetter = (string: string) => {
  if (string.length === 0) return string;
  return string.charAt(0).toLowerCase() + string.slice(1);
};