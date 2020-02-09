const hardCodedReviews = function() {
  var hardCode = `

DROP TABLE reviews

CREATE TABLE reviews (
  id INT PRIMARY KEY,
  restaurant_id INT,

  first_name VARCHAR(20),
  last_name VARCHAR(20),
  reviewer_loc VARCHAR(25),

  reviewer_friends INT,
  reviewer_reviews INT,
  reviewer_photos INT,

  review_score TINYINT,
  review_date DATE,
  review_text TEXT
)

INSERT INTO reviews (id, restaurant_id, first_name, last_name, reviewer_loc, reviewer_photos, reviewer_friends, reviewer_reviews, review_score, review_date, review_text) 
VALUES 
(1, 1, 'Mary', 'Wesson', 'Chiago, IL', 425, 18, 75, 5, '2020-01-30', "First time in LA, my pals that live there were like omg we have to go to Mendocino Farms. We drove 25 mins for lunch which is bizarre in Chicago but normal for LA I guess.")

INSERT INTO reviews (id, restaurant_id, first_name, last_name, reviewer_loc, reviewer_photos, reviewer_friends, reviewer_reviews, review_score, review_date, review_text) 
VALUES 
(2, 1, 'Kesha', 'Kar', 'Marina del Rey, CA', 8, 10, 14, 5, '2019-12-07', " love this location. The staff is so nice and I have difficult food requests that they always accommodate. Special nod to Anthony T front host and Apolo  the Manager who turned me on to build your own salads!!! The chipotle vinaigrette is EVERYTHING!!!!!!!!");

`;

  return hardCode;
};

module.exports = hardCodedReviews;
