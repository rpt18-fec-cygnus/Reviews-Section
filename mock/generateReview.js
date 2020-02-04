var genericReview = function(stars) {
  var random = Math.floor(Math.random() * 3);

  var fiveStar = ['Great restaurant!', 'I love this place!', 'Must come back!'];
  var fourStar = ['Good all around.', 'Very solid.', 'Nice place.'];
  var threeStar = ['Pretty good.', 'Ok, but not great.', '... meh ...'];

  var reviews = [threeStar, fourStar, fiveStar];
  var result = reviews[stars - 3][random];

  return result;
};

var serverReview = function(stars) {
  var random = Math.floor(Math.random() * 3);

  var fiveStar = [
    'Our server was really helpful!',
    'The service was amazing!',
    'Our waiter was awesome!'
  ];
  var fourStar = [
    'Our server was pretty good.',
    'Service was good.',
    'Our waiter was helpful.'
  ];
  var threeStar = [
    'Our server seemed a little frazzled.',
    'Service was solid, but not great.',
    'Our waiter was not very attentive.'
  ];

  var reviews = [threeStar, fourStar, fiveStar];
  var result = reviews[stars - 3][random];

  return result;
};

var tasteReview = function(stars) {
  var randomFood = Math.floor(Math.random() * 8);
  var foods = [
    'chicken',
    'pork',
    'tofu',
    'salad',
    'beef',
    'soup',
    'dessert',
    'food'
  ];
  var food = foods[randomFood];

  var randomWord = Math.floor(Math.random() * 6);

  var fiveStar = [
    'delicious',
    'gorgeous',
    'perfectly cooked',
    'superb',
    "the best I've ever tasted",
    'soooo good'
  ];
  var fourStar = [
    'good',
    'decent',
    'satisfactory',
    'competent',
    'better than expected',
    'fair'
  ];
  var threeStar = [
    'mediocre',
    'not that good',
    'unimpressive',
    'nothing to write home about',
    'weak',
    'middling'
  ];

  var reviews = [threeStar, fourStar, fiveStar];
  var adjective = reviews[stars - 3][randomWord];

  var result = `The ${food} was ${adjective}.`;
  return result;
};

var generateReview = function(stars) {
  var lineCount = 0;
  var mentionServer = Math.random();
  var mentionTaste = Math.random();
  var review = genericReview(stars);

  if (mentionServer < 0.65) {
    review += '\n';
    review += serverReview(stars);
    lineCount++;
  }

  if (mentionTaste < 0.8) {
    if (lineCount > 0) {
      review += ' ';
    } else {
      review += '\n';
    }
    review += tasteReview(stars);
  }

  return review;
};

var generateStars = function() {
  //Generates a rating between 3 and 5.
  var seed = Math.random() * 3;
  var result = Math.floor(seed) + 3;
  return result;
};

module.exports = generateReview;
