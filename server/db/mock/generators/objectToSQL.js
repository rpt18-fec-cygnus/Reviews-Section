const objectToSQL = function(object, index) {
  const insertStatement = `INSERT INTO reviews (id, restaurant_id, first_name, last_name, reviewer_loc,  reviewer_friends, reviewer_reviews, reviewer_photos, review_score, review_date, review_text) 
  VALUES 
  (${index}, ${object['restaurant_id']}, '${object['first_name']}', '${object['last_name']}', '${object['location']}', ${object['friendCount']}, ${object['reviewCount']}, ${object['photoCount']}, ${object['stars']}, '${object['date']}', '${object['text']}')`;
  return insertStatement;
};

module.export = objectToSQL;
