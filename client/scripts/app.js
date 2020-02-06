const React = require('react');

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className='allReviews'>
        <div className='reviewer'>
          <img src='img/profile.png' className='profPic' />

          <div className='profileText'>
            <div className='profileInfo'>
              <div className='name'>Zulema Z.</div>
              <br />
              <div className='location'>Yoder, WY</div>
            </div>

            <div className='friends counterBox'>
              <img className='friendIcon icon' src='img/friendIcon.png' />
              <div className='friendCount count'>123</div>
              <div className='friendWord word'>friends</div>
            </div>
            <br />

            <div className='reviews counterBox'>
              <img className='reviewIcon icon' src='img/reviewIcon.png' />
              <div className='reviewCount count'>456</div>
              <div className='reviewWord word'>reviews</div>
            </div>
            <br />

            <div className='photos counterBox'>
              <img className='photoIcon icon' src='img/photoIcon.png' />
              <div className='photoCount count'>789</div>
              <div className='photoWord word'>photos</div>
            </div>
          </div>
        </div>

        <div className='review'>
          <div className='stars'>
            <img className='star' src='img/starIcon.png' />
            <img className='star' src='img/starIcon.png' />
            <img className='star' src='img/starIcon.png' />
            <img className='star' src='img/starIcon.png' />
            <img className='star' src='img/noStarIcon.png' />
          </div>

          <div className='date'>31/12/2020</div>
          <br />

          <div className='reviewText'>
            Loved It! Like, Super-duper good. All the foods just
            nomnomnomnomnomnomnomnom. Loved how they had vegan options, which is
            not super common in restaurants in Kato.
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewSection;
