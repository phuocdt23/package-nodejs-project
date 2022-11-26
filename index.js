const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('route /');
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Example app listening on port 3000!');
});
