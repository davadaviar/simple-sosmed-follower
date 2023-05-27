import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});