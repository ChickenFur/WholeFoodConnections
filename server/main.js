var express = require('express');
var app = express();
var http = require('http');

exports.app = app.listen(8080);

app.get('/vendors', function (req, res) {
  res.send(200);
});

app.get('/foods', function (req, res) {
  res.send(200)
});
