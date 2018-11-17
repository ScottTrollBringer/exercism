export const translate = (codons) => {
  const codonsTableau = [];
  let tampon = '';

  if (!codons) { return []; }
  const MyError = () => { throw new Error('Invalid codon'); };

  let i = 0;
  while (typeof codons[i] === 'string') {
    tampon += codons[i];
    if ((i + 1) % 3 === 0) {
      let prot = '';
      switch (tampon) {
        case 'AUG':
          prot = 'Methionine';
          break;
        case 'UUU':
        case 'UUC':
          prot = 'Phenylalanine';
          break;
        case 'UUA':
        case 'UUG':
          prot = 'Leucine';
          break;
        case 'UCU':
        case 'UCC':
        case 'UCA':
        case 'UCG':
          prot = 'Serine';
          break;
        case 'UAU':
        case 'UAC':
          prot = 'Tyrosine';
          break;
        case 'UGU':
        case 'UGC':
          prot = 'Cysteine';
          break;
        case 'UGG':
          prot = 'Tryptophan';
          break;
        case 'UAA':
        case 'UAG':
        case 'UGA':
          return codonsTableau;
        default:
          throw new MyError();
      }
      codonsTableau.push(prot);
      tampon = '';
    }
    i += 1;
  }
  return codonsTableau;
};
