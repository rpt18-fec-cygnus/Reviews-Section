const reviewTemplate = function(
  name,
  location,
  friendCount,
  reviewCount,
  photoCount,
  date,
  text
) {
  let template = `
  <div class='reviewBlock'>
    <div class='reviewer'>
      <img src='img/profile.png' class='profPic' />

      <div class='profileText'>
        <div class='profileInfo'>
          <div class='name'>${name}</div>
          <br />
          <div class='location'>${location}</div>
        </div>

        <div class='friends counterBox'>
          <img class='friendIcon icon' src='img/friendIcon.png' />
          <div class='friendCount count'>${friendCount}</div>
          <div class='friendWord word'>friends</div>
        </div>
        <br />

        <div class='reviews counterBox'>
          <img class='reviewIcon icon' src='img/reviewIcon.png' />
          <div class='reviewCount count'>${reviewCount}</div>
          <div class='reviewWord word'>reviews</div>
        </div>
        <br />

        <div class='photos counterBox'>
          <img class='photoIcon icon' src='img/photoIcon.png' />
          <div class='photoCount count'>${photoCount}</div>
          <div class='photoWord word'>photos</div>
        </div>
      </div>
    </div>

    <div class='reviewContent'>
      <div class='stars'>
        <img class='star' src='img/nostarIcon.png' />
        <img class='star' src='img/nostarIcon.png' />
        <img class='star' src='img/nostarIcon.png' />
        <img class='star' src='img/nostarIcon.png' />
        <img class='star' src='img/noStarIcon.png' />
      </div>

      <div class='date'>${date}</div>
      <br />

      <div class='reviewText'>${text}</div>
    </div>
  </div>
  `;
  return template;
};

module.exports = reviewTemplate;
