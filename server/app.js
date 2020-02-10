const express = require('express');
const app = express();
const db = require('./db/index.js');
const port = 3001;
const extension = 1; // TODO: Get extension from URL

app.use('/', express.static('client'));

db.connect(function(err) {
  if (err) throw err;

  db.query(`SELECT * FROM reviews WHERE restaurant_id = ${extension}`, function(
    err,
    result
  ) {
    if (err) throw err;
    // console.log('results: ', result);
    app.get('/1', (req, res) => res.send(result));
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
