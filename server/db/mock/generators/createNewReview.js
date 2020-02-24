// Reviewer Info Genereators
const generateName = require('./reviewer/generateName');
const generateLocation = require('./reviewer/generateLocation');
const generateReviewCount = require('./reviewer/generateReviewCount');
const generatePhotoCount = require('./reviewer/generatePhotoCount');
const generateFriendCount = require('./reviewer/generateFriendCount');

// Review Body Info Generators
// const generateID = require('./review/generateRestaurantID');
const generateStars = require('./review/generateStars');
// const generateDate = require('./review/generateDate');
const generateText = require('./review/generateText');

var today = new Date;
var generateDate = `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`

const createNewReview = function(uid) {
  // let id = generateID();
  let name = generateName();
  let location = generateLocation(name);
  let friendCount = generateFriendCount(name);
  let reviewCount = generateReviewCount(name);
  let photoCount = generatePhotoCount(name);

  let stars = generateStars();
  let date = generateDate;
  let text = generateText(stars);

  let reviewData = {
    restaurant_id: uid,
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

// console.log(createNewReview(101));
module.exports = createNewReview;
