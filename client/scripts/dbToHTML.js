const reviewTemplate = require('./reviewTemplate');

const dbToHTML = function(reviewArray) {
  let html = '';
  let byDate = reviewArray.sort(function(a, b) {
    return Date.parse(b.review_date) - Date.parse(a.review_date);
  });

  for (var i = 0; i < byDate.length; i++) {
    let name = byDate[i]['first_name'] + ' ' + byDate[i]['last_name'][0] + '.';

    let location = byDate[i]['reviewer_loc'];

    let friendCount = byDate[i]['reviewer_friends'];
    let reviewCount = byDate[i]['reviewer_reviews'];
    let photoCount = byDate[i]['reviewer_photos'];

    let rating = byDate[i]['review_score'];
    let unparsedDate = byDate[i]['review_date'];
    let date = `${unparsedDate[5]}${unparsedDate[6]}/${unparsedDate[8]}${unparsedDate[9]}/${unparsedDate[0]}${unparsedDate[1]}${unparsedDate[2]}${unparsedDate[3]}`;
    let text = byDate[i]['review_text'];

    let singleReview = reviewTemplate(
      name,
      location,
      friendCount,
      reviewCount,
      photoCount,
      rating,
      date,
      text
    );

    html += singleReview;
  }

  return html;
};

module.exports = dbToHTML;
