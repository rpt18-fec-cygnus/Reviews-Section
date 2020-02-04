-- DROP DATABASE reviews;

-- CREATE DATABASE reviews;
USE reviews;

CREATE TABLE users (
  id INT PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(25),
  reviewer_loc VARCHAR(25),
  reviewer_photos INT,
  reviewer_friends INT
)

CREATE TABLE reviewText (
  id INT PRIMARY KEY,
  restaurant_id INT,
  FOREIGN KEY (reviewer_id)
    REFERENCES users(id),
  review_score TINYINT,
  review_date DATE,
  review_text TEXT
)

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/