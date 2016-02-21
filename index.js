var express = require('express');
var swig = require('swig');
var app = express();

app.use('/static', express.static(__dirname + 'dest'));

app.get('/', function(request, response){
	response.send("olá mundo em node 2");
});

app.listen(8000);

console.log('Server running at http://127.0.0.1:8000');