const generateRestaurantID = function() {
  //Generates a restaurant ID between 1 and 100, inclusive.
  const result = Math.floor(Math.random() * 100) + 1;
  return result;
};

module.exports = generateRestaurantID;
