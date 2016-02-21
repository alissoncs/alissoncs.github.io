var express = require('express');
var dev = (process.env.NODE_ENV != 'dev' || true);
var swig = require('swig');
var app = express();

// configure swig engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.set('view cache', !dev);
swig.setDefaults({ cache: !dev });

app.use('/static', express.static(__dirname + 'dest'));

app.use('/', function(req, res){
	res.render('index');
});

app.listen(8000);

console.log('Server running at http://127.0.0.1:8000');