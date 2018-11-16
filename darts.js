export const solve = (x, y) => {
  let expected = 0;
  const distance = Math.sqrt(x * x + y * y);

  if (typeof x !== 'number' || typeof y !== 'number') {
    expected = null;
  } else if (distance <= 1) {
    expected = 10;
  } else if (distance <= 5) {
    expected = 5;
  } else if (distance <= 10) {
    expected = 1;
  } else {
    expected = 0;
  }

  return expected;
};
