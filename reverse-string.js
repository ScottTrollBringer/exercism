export const reverseString = (endroit) => {
  return [...endroit].reduce((accu, current) => { return current += accu; }, '');
};
