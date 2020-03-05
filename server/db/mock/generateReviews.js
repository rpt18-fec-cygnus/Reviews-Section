const generateReview = require('./generators/generateReview');
const express = require('express');
const app = express();
const db = require('../index');

const objectToSQL = function(object, index) {
  const insertStatement = `INSERT INTO reviews (id, restaurant_id, first_name, last_name, reviewer_loc,  reviewer_friends, reviewer_reviews, reviewer_photos, review_score, review_date, review_text) 
  VALUES 
  (${index}, ${object['restaurant_id']}, '${object['first_name']}', '${object['last_name']}', '${object['location']}', ${object['friendCount']}, ${object['reviewCount']}, ${object['photoCount']}, ${object['stars']}, '${object['date']}', '${object['text']}')`;
  return insertStatement;
};

const generateReviews = function(desiredReviews) {
  let results = [];
  for (var i = 0; i < desiredReviews; i++) {
    let reviewObject = generateReview();
    let reviewSQL = objectToSQL(reviewObject, i + 3);
    results.push(reviewSQL);
  }
  return results;
};

app.use('/', express.static('client'));

db.connect(function(err) {
  console.log('dbConnect');
  if (err) throw err;

  const mockReviews = generateReviews(1500);
  // console.log(mockReviews);
  for (var i = 0; i < mockReviews.length; i++) {
    db.query(mockReviews[i], function(err, result) {
      if (err) throw err;
    });
  }
});
