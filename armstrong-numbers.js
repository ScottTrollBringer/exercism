export const validate = (nombreParam) => {
  let stringParam = '';
  let isArmstrong = false;

  stringParam = nombreParam.toString();

  const calculArmstrong = [...stringParam].reduce((accu, current) => { return accu += Number(current) ** stringParam.length; }, 0);

  if (calculArmstrong === nombreParam) {
    isArmstrong = true;
  }
  return isArmstrong;
};
