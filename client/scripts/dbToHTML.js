const reviewTemplate = require('./reviewTemplate');

const dbToHTML = function(reviewArray) {
  let html = '';
  console.log('reviewArray: ', reviewArray);
  for (var i = 0; i < reviewArray.length; i++) {
    console.log('i: ', i);
    console.log('reviewArray: ', reviewArray[i]);
    let name =
      reviewArray[i]['first_name'] + ' ' + reviewArray[i]['last_name'][0] + '.';
    let location = reviewArray[i]['reviewer_loc'];
    let friendCount = reviewArray[i]['reviewer_friends'];
    let reviewCount = reviewArray[i]['reviewer_reviews'];
    let photoCount = reviewArray[i]['reviewer_photos'];
    let date = reviewArray[i]['review_date'];
    let text = reviewArray[i]['review_text'];

    let singleReview = reviewTemplate(
      name,
      location,
      friendCount,
      reviewCount,
      photoCount,
      date,
      text
    );

    html += singleReview;
  }
  return html;
};

module.exports = dbToHTML;
