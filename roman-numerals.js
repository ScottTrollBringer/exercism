export const toRoman = (chiffreArabe) => {
  const valeursRomaines = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const chiffresRomains = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let resultatRomain = '';
  let travail = chiffreArabe;

  for (let j = 0; j < valeursRomaines.length; j += 1) {
    const diviseur = travail / valeursRomaines[j];
    if (diviseur >= 1) {
      for (let i = 0; i < Math.floor(diviseur); i += 1) {
        resultatRomain += chiffresRomains[j];
      }
      travail -= Math.floor(diviseur) * valeursRomaines[j];
    }
  }
  return resultatRomain;
};
