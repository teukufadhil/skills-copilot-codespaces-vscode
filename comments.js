// create web server
var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments.js');

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync('index.html');
    res.end(html);
});

app.get('/comments', function(req, res){
    res.json(comments.getComments());
});

app.post('/comments', function(req, res){
    var comment = req.body;
    comments.addComment(comment);
    res.json(comment);
});

app.listen(3000, function(){
    console.log('Server is running on port 3000');
});