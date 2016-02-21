var express = require('express');
var dev = (process.env.NODE_ENV == 'dev' || true);
var swig = require('swig');
var app = express();

// configure swig engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/templates');
app.set('view cache', !dev);
swig.setDefaults({ cache: !dev });

app.use('/static', express.static('dest'));
app.use('/static/css', express.static('dest/css'));
app.use('/static/js', express.static('dest/js'));

// middleware
app.use(function(req, res, next){
	console.log('A simples request was made using '+req.method+ ' method');
	res.type('.html');
	next();
});

// index
app.get('/', function(req, res){
	res.render('index');
});

app.post('/contact', function(req, res){
	res.type('json');
	res.sendStatus(200);
});

// The 404 Route
app.use('*', function(req, res){
	res.render('404');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8000);

console.log('Server running at http://127.0.0.1:8000');