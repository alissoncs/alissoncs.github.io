var express = require('express');
var dev = (process.env.NODE_ENV == 'dev' || true);
var swig = require('swig');
var app = express();
// var i18n = require('i18n');
var config = require('./app/config.js');

// configure swig engine
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/templates');
app.set('view cache', !dev);
swig.setDefaults({ cache: !dev });

app.use('/static', express.static('dest'));
app.use('/static/css', express.static('dest/css'));
app.use('/static/js', express.static('dest/js'));

console.log('config', config.json());

// i18n
// i18n.configure({
// 	locales: ['pt', 'en'],
// 	directory: __dirname + '/app/lang/'
// });
// console.log(i18n.__('Hello'));

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
  res.status(500).send('Something broke!');
});
app.set('port', process.env.PORT || 3000);
console.log('Started at ' + app.get('port'));
app.listen(app.get('port'));
