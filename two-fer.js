export const twoFer = (prenom) => {
  let sortie = 'you';

  if (prenom !== '') {
    sortie = prenom;
  }
  return `One for ${sortie}, one for me.`;
};
