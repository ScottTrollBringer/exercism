export const validate = (nombreParam) => {
  const stringParam = nombreParam.toString();

  const calculArmstrong = [...stringParam].reduce((accu, current) => {
    accu += Number(current) ** stringParam.length; // eslint-disable-line no-param-reassign
    return accu;
  }, 0);

  if (calculArmstrong === nombreParam) {
    return true;
  }
  return false;
};
