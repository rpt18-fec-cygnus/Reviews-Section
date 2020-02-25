// const createNewReview = require('./generators/createNewReview');
// const express = require('express');
// const app = express();
const db = require('../index');

const saveNewReview = function(object, index, callback) {
  const query = `INSERT INTO reviews (id, restaurant_id, first_name, last_name, reviewer_loc,  reviewer_friends, reviewer_reviews, reviewer_photos, review_score, review_date, review_text) 
  VALUES 
  (${index}, ${object['restaurant_id']}, '${object['first_name']}', '${object['last_name']}', '${object['location']}', ${object['friendCount']}, ${object['reviewCount']}, ${object['photoCount']}, ${object['stars']}, '${object['date']}', '${object['text']}')`;
  console.log(query);
  // callback(index);

  db.query(query, function(err, result){
    if (err) throw err;
    callback(result);
    console.log('New Review Created');
  });
  
  // db.connect((err) => {
  //   if (err) throw err;

  //   db.query(query, function(err, result){
  //     if (err) throw err;
  //     callback(result);
  //     console.log('New Review Created')
  //   });
  // })
};

module.exports = saveNewReview;