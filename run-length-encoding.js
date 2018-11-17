export const encode = (phraseTest) => {
  let phraseEncodee = '';
  const tableau = [];

  // Je manipule un array plutot qu'une string car la string d'origine est immutable
  for (let i = 0; i < phraseTest.length; i += 1) {
    tableau.push(phraseTest[i]);
  }

  // Je parcours le tableau en supprimant la valeur de la premiere case a chaque fois que je la stocke dans la string de sortie
  // La variable J indique les répétitions de caractères, enCours est la lettre en cours d'évaluation
  while (typeof tableau[0] === 'string') {
    let j = 1;
    const enCours = tableau[0];
    while (tableau[0] === tableau[1] && tableau.length > 0) {
      j += 1;
      tableau.shift();
    }
    if (j > 1) {
      phraseEncodee += j + enCours;
      tableau.shift();
    } else {
      phraseEncodee += enCours;
      tableau.shift();
    }
  }
  return phraseEncodee;
};


export const decode = (phraseTest) => {
  let phraseDecodee = '';
  const tableau = [];

  for (let i = 0; i < phraseTest.length; i += 1) {
    tableau.push(phraseTest[i]);
  }

  while (tableau[0] !== undefined) {
    let k = 0;
    let compteur = '';

    while (isNaN(tableau[k]) === false && tableau[k] !== ' ') {
      compteur += tableau[k];
      k += 1;
    }

    let compteurNum = Number(compteur);
    if (compteurNum === 0) {
      compteurNum = 1;
    }

    for (let j = 0; j < compteurNum; j += 1) {
      phraseDecodee += tableau[k];
    }

    for (let j = 0; j < k + 1; j += 1) {
      tableau.shift();
    }
  }
  return phraseDecodee;
};
