var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var api = require('./api');

// app.use(bodyParser.json());
// app.use(express.static('node_modules'));
// app.use(express.static('bower_components'));
app.use('/', express.static(__dirname + '/public'));
app.use('/api', api.router);

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html' ));
// });

app.listen(8080);
console.log("listening on http://localhost:8080");

