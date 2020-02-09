var generateText = function(stars) {
  var genericReview = function(stars) {
    var random = Math.floor(Math.random() * 3);

    var fiveStar = [
      'Great restaurant!',
      'I love this place!',
      'Must come back!'
    ];
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
      'Service was solid, I guess...',
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
      'the best I have ever tasted',
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

  var compileReview = function(stars) {
    var mentionServer = Math.random();
    var mentionTaste = Math.random();
    var review = genericReview(stars);

    if (mentionServer < 0.65) {
      review += ' ';
      review += serverReview(stars);
    }

    if (mentionTaste < 0.8) {
      review += ' ';
      review += tasteReview(stars);
    }

    return review;
  };
  var result = compileReview(stars);
  return result;
};

module.exports = generateText;
