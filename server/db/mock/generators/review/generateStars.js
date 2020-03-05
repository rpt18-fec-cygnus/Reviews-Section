var generateStars = function() {
  //Generates a star rating between 3 and 5.
  var seed = Math.random() * 3;
  var result = Math.floor(seed) + 3;
  return result;
};

module.exports = generateStars;
