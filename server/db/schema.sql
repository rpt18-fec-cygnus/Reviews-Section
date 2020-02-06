-- DROP DATABASE reviews;

-- CREATE DATABASE reviews;
USE reviews;

-- CREATE TABLE users (
--   id INT PRIMARY KEY,
--   first_name VARCHAR(20),
--   last_name VARCHAR(25),
--   reviewer_loc VARCHAR(25),
--   reviewer_photos INT,
--   reviewer_friends INT
-- )

-- CREATE TABLE reviewText (
--   id INT PRIMARY KEY,
--   restaurant_id INT,
--   review_score TINYINT,
--   review_date DATE,
--   review_text TEXT,
  
--   first_name VARCHAR(20),
--   last_name VARCHAR(25),
--   reviewer_loc VARCHAR(25),
--   reviewer_photos INT,
--   reviewer_friends INT
-- )

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

--  INSERT INTO reviewText (id, restaurant_id, review_score, review_date, review_text, first_name, last_name, reviewer_loc, reviewer_photos, reviewer_friends) 
--  VALUES 
--  (1, 1, 5, '2020-01-30', 'loved it', 'Mary', 'Weston', 'Chicago IL', 74, 421);