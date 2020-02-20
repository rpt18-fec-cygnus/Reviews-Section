const ratingToStars = function(rating) {
  let stars = '';
  let noStar = `<img class='star' src='http://localhost:3001/img/nostarIcon.png' />`;
  let star = `<img class='star' src='http://localhost:3001/img/starIcon.png' />`;
  for (let i = 0; i < rating; i++) {
    stars += star;
  }
  for (let j = rating; j < 5; j++) {
    stars += noStar;
  }
  return stars;
};

module.exports = ratingToStars;
