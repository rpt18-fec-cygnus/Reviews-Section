const ratingToStars = function(rating) {
  let stars = '';
  let noStar = `<img class='star' src='https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/Reviews/public/img/noStarIcon.png' />`;
  let star = `<img class='star' src='https://taktaktaka-rpt18-fec-cygnus.s3-us-west-1.amazonaws.com/Reviews/public/img/starIcon.png' />`;
  for (let i = 0; i < rating; i++) {
    stars += star;
  }
  for (let j = rating; j < 5; j++) {
    stars += noStar;
  }
  return stars;
};

module.exports = ratingToStars;
