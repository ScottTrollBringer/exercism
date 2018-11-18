export const toRoman = (chiffreArabe) => {
  const valeursArabes = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const chiffresRomains = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let resultatRomain = '';
  let travail = chiffreArabe;

  valeursArabes.forEach((valArabe) => {
    const diviseur = travail / valArabe;
    if (diviseur >= 1) {
      for (let i = 0; i < Math.floor(diviseur); i += 1) {
        resultatRomain += chiffresRomains[valeursArabes
          .findIndex(indexArabe => indexArabe === valArabe)];
      }
      travail -= Math.floor(diviseur) * valArabe;
    }
  });

  return resultatRomain;
};
