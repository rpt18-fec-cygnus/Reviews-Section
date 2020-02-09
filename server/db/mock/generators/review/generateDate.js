const doubleDiggies = function(number) {
  let result = number;
  if (number < 10) {
    result = '0' + number;
  }
  return result;
};

const generateDate = function() {
  let month = Math.floor(Math.random() * 12) + 1;
  let maxDay = 31;
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    maxDay = 30;
  } else if (month === 2) {
    maxDay = 28;
  }
  month = doubleDiggies(month);
  let day = doubleDiggies(Math.floor(Math.random() * maxDay) + 1);
  let year = Math.floor(Math.random() * 15) + 2005;

  const dateString = `${year}-${month}-${day}`;
  return dateString;
};

module.exports = generateDate;
