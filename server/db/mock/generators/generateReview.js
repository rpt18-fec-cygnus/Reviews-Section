// Reviewer Info Genereators
const generateName = require('./reviewer/generateName');
const generateLocation = require('./reviewer/generateLocation');
const generateReviewCount = require('./reviewer/generateReviewCount');
const generatePhotoCount = require('./reviewer/generatePhotoCount');
const generateFriendCount = require('./reviewer/generateFriendCount');

// Review Body Info Generators
const generateID = require('./review/generateRestaurantID');
const generateStars = require('./review/generateStars');
const generateDate = require('./review/generateDate');
const generateText = require('./review/generateText');

const generateReview = function() {
  let id = generateID();
  let name = generateName();
  let location = generateLocation(name);
  let friendCount = generateFriendCount(name);
  let reviewCount = generateReviewCount(name);
  let photoCount = generatePhotoCount(name);

  let stars = generateStars();
  let date = generateDate();
  let text = generateText(stars);

  let reviewData = {
    restaurant_id: id,
    first_name: name.first,
    last_name: name.last,
    location: location,
    friendCount: friendCount,
    reviewCount: reviewCount,
    photoCount: photoCount,
    stars: stars,
    date: date,
    text: text
  };

  return reviewData;
};

module.exports = generateReview;
