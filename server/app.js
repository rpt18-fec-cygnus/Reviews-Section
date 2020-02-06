const express = require('express');
const app = express();
const port = 3000;

// Set what we are listening on.
app.set('port', 3000);

app.use('/', express.static('client'));

app.get('/', (req, res) => res.send(''));

app.listen(port, () => console.log(`Listening on port ${port}`));
