export const translate = (codons) => {
  const tabCodons = ['AUG', 'UUU', 'UUC', 'UUA', 'UUG', 'UCU', 'UCC', 'UCA', 'UCG', 'UAU', 'UAC', 'UGU', 'UGC', 'UGG'];
  const tabProt = ['Methionine', 'Phenylalanine', 'Phenylalanine', 'Leucine', 'Leucine', 'Serine', 'Serine', 'Serine', 'Serine', 'Tyrosine', 'Tyrosine', 'Cysteine', 'Cysteine', 'Tryptophan'];
  const tabStoppeurs = ['UAA', 'UAG', 'UGA'];
  const codonsTableau = [];
  const chaineProt = [];
  const listeProt = [];

  if (!codons) {
    return [];
  }

  const MyError = () => { throw new Error('Invalid codon'); };

  // Transforme la chaine de caractères initiale en 1 tableau de strings de 3 caractères
  [...codons].reduce((accu, current) => {
    accu += current;
    if (accu.length === 3) {
      codonsTableau.push(accu);
      accu = '';
      return accu;
    }
    return accu;
  }, '');

  // Crée un nouveau tableau amputé de tout ce qui se trouve après les stoppeurs
  codonsTableau.some((codon) => {
    listeProt.push(codon);
    return tabStoppeurs.findIndex(element => element === codon) >= 0;
  });

  // Si la valeur initiale d'entrée du programme ne correspond à aucun type de codon, exception
  codonsTableau.forEach((codon) => {
    const indexCodon = tabCodons.findIndex(element => element === codon);
    const indexStop = tabStoppeurs.findIndex(element => element === codon);
    if (indexCodon < 0 && indexStop < 0) {
      throw new MyError();
    }
  });

  // Crée un nouveau tableau avec les correspondances codon => proteines
  listeProt.forEach((codon) => {
    const position = tabCodons.findIndex(element => element === codon);
    if (position >= 0) {
      chaineProt.push(tabProt[position]);
    }
  });

  return chaineProt;
};
