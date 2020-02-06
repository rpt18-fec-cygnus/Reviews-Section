var reviewTemplate = {
  render: _.template(`
    <div class="review">
      <div class="stars">
        <img class="star" src="client/img/starIcon.png" />
        <img class="star" src="client/img/starIcon.png" />
        <img class="star" src="client/img/starIcon.png" />
        <img class="star" src="client/img/starIcon.png" />
        <img class="star" src="client/img/noStarIcon.png" />
      </div>

      <div class="date">09/29/2019</div>
      <br />

      <div class="reviewText">
        Loved It! Like, Super-duper good. All the foods just
        nomnomnomnomnomnomnomnom. Loved how they had vegan options, which is not
        super common in restaurants in Kato.
      </div>
    </div>
  `)
};
