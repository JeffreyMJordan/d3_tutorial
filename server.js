const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('public/'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/chart_script.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/chart_script.js'));
});

app.get('/letter_frequency.tsv', (req, res) => {
  res.sendFile(path.join(__dirname + '/letter_frequency.tsv'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))