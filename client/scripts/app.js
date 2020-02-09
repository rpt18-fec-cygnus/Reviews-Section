const React = require('react');
import $ from 'jquery';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant_id: 0,
      name: 'Reviewer Name',
      location: 'City, ST',
      friendCount: 0,
      reviewCount: 0,
      photoCount: 0,
      stars: 0,
      date: '01/01/1900',
      text: 'Review Text Goes Here \n Lorum Ipsum amirite?'
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/1',
      type: 'GET',
      success: results => {
        console.log('results: ', results);
        this.setState({
          restaurant_id: results[0].restauraunt_id,
          name: results[0].first_name + ' ' + results[0].last_name[0] + '.',
          location: results[0].reviewer_loc,
          friendCount: results[0].reviewer_friends,
          reviewCount: results[0].reviewer_photos,
          photoCount: results[0].reviewer_photos,
          stars: results[0].review_score,
          date: results[0].review_date,
          text: results[0].review_text
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  render() {
    return (
      <div className='allReviews'>
        <div className='reviewer'>
          <img src='img/profile.png' className='profPic' />

          <div className='profileText'>
            <div className='profileInfo'>
              <div className='name'>{this.state.name}</div>
              <br />
              <div className='location'>{this.state.location}</div>
            </div>

            <div className='friends counterBox'>
              <img className='friendIcon icon' src='img/friendIcon.png' />
              <div className='friendCount count'>{this.state.friendCount}</div>
              <div className='friendWord word'>friends</div>
            </div>
            <br />

            <div className='reviews counterBox'>
              <img className='reviewIcon icon' src='img/reviewIcon.png' />
              <div className='reviewCount count'>{this.state.reviewCount}</div>
              <div className='reviewWord word'>reviews</div>
            </div>
            <br />

            <div className='photos counterBox'>
              <img className='photoIcon icon' src='img/photoIcon.png' />
              <div className='photoCount count'>{this.state.photoCount}</div>
              <div className='photoWord word'>photos</div>
            </div>
          </div>
        </div>

        <div className='review'>
          <div className='stars'>
            <img className='star' src='img/nostarIcon.png' />
            <img className='star' src='img/nostarIcon.png' />
            <img className='star' src='img/nostarIcon.png' />
            <img className='star' src='img/nostarIcon.png' />
            <img className='star' src='img/noStarIcon.png' />
          </div>

          <div className='date'>{this.state.date}</div>
          <br />

          <div className='reviewText'>{this.state.text}</div>
        </div>
      </div>
    );
  }
}

export default ReviewSection;
