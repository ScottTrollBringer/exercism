// Ian FRASER - November 2018
// Obj: Given a year, report if it is a leap year.
export const isLeap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};
