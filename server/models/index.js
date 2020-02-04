var db = require('../db');

module.exports = {
  reviews: {
    get: function(callback) {
      var queryString =
        'SELECT reviewText.reviewer_id AS reviewer, reviewText.review_score AS score, \
        reviewText.review_text AS text, reviewText.review_date AS date FROM reviewText' +
        'INNER JOIN restaurant_id =???';
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, results) {
        // console.log('results: ', results);
        callback(results);
      });
    },
    post: function(params, callback) {
      // if you wanna insert a review
    }
  },

  user: {
    // a function which produces all the messages
    get: function(callback) {
      db.connect();
      var queryString =
        //INSERT QUERY HERE
        '';
      ('INNER JOIN user_id =');
      var queryArgs = [];
      db.query(queryString, queryArgs, function(err, results) {
        console.log('results: ', results);
        callback(results);
      });
    },
    post: function() {
      // if you wanna insert a user
    }
  }
};
