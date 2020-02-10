const React = require('react');
const dbToHTML = require('./dbToHTML');
let extension = 1; //TODO: Get extension from URL
import $ from 'jquery';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant_id: 0,
      reviews: ''
    };
  }

  componentDidMount() {
    $.ajax({
      url: `/${extension}`,
      type: 'GET',
      success: results => {
        console.log('results: ', results);
        this.setState({
          restaurant_id: extension
        });
        document.getElementById('allReviews').innerHTML = dbToHTML(results);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  render() {
    return <div id='allReviews'></div>;
  }
}

export default ReviewSection;
