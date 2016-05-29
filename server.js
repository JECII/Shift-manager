var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var  api = require('./api');

var app = express();

app.use(bodyParser.json());
app.use(express.static('app'));
app.use('/api', api.router);

app.get('/', function (req, res) {
  res.sendFile(path.join(_dirname,'index.html'));
  
});

app.listen(8080)
