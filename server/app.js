const express = require('express');
const app = express();
const db = require('./db/index.js');
const port = 3001;
const extension = 1; // TODO: Get extension from URL
const cors = require('cors');
const createNewReview = require('./db/mock/generators/createNewReview.js')
const saveNewReview = require('./db/mock/saveNewReview.js')

app.use(cors());

app.use('/', express.static('client'));

db.connect(function(err) {
  if (err) throw err;

  db.query(`SELECT * FROM reviews`, function(err, result) {
    if (err) throw err;
    app.get('/data', (req, res) => res.send(result));
  });
});

app.post('/api/postReview', (req, res) => {
  //get number of rows in review table for new index
  db.query(`SELECT COUNT(*) AS lastIndex FROM reviews`, (err, result) => {
    if (err) throw err;
    console.log(result);
    var index = result[0].lastIndex + 1;
    // res.send(`index number is ${index}`);
    var review = createNewReview(101);
    saveNewReview(review, index + 1, (result) => res.send(result));
    // res.send(result);
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
