export const reverseString = (endroit) => {
  const verlan = [];
  let expected = '';

  [...endroit].forEach((lettre) => { verlan.unshift(lettre); });
  verlan.forEach((lettre) => { expected += lettre; });

  return expected;
};
