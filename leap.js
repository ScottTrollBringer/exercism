// Ian FRASER - November 2018
// Obj: Given a year, report if it is a leap year.
export const isLeap = (year) => {
  let biss = false;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        biss = true;
      } else {
        biss = false;
      }
    } else {
      biss = true;
    }
  }

  return biss;
};
