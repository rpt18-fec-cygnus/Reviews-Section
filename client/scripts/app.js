const React = require('react');
const dbToHTML = require('./dbToHTML');
const findExtension = require('./findExtension');
let extension = 1; //TODO: Get extension from URL
import $ from 'jquery';

class ReviewSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurant_id: 0
    };
  }

  componentDidMount() {
    $.ajax({
      url: `/data`,
      type: 'GET',
      success: results => {
        this.setState({
          restaurant_id: Number(findExtension(location.href))
        });

        let filteredById = results.filter(
          val => val.restaurant_id === this.state.restaurant_id
        );

        document.getElementById('allReviews').innerHTML = dbToHTML(
          filteredById
        );
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
