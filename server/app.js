const express = require('express');
const app = express();
const db = require('./db/index.js');
const port = 3001;
const extension = 1; // TODO: Get extension from URL
const cors = require('cors');
const createNewReview = require('./db/mock/generators/createNewReview.js')
const saveNewReview = require('./db/mock/saveNewReview.js')

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());

app.use('/', express.static('client'));

db.connect();

app.get('/data', (req, res) => {
  db.query(`SELECT * FROM reviews`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.get('/api/getScore', (req, res) => {
  var uid = req.query.uid;
  db.query(`SELECT COUNT(*) AS reviewCount, AVG(review_score) AS avgScore FROM Reviews WHERE restaurant_id = ${uid};`, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

app.post('/api/postReview', (req, res) => {
  //get number of rows in review table for new index
  var uid = req.body.uid;
  db.query(`SELECT COUNT(*) AS lastIndex FROM reviews`, (err, result) => {
    if (err) throw err;
    var index = result[0].lastIndex + 1;
    var review = createNewReview(uid);
    saveNewReview(review, index + 1, (result) => res.send(result));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
