var express = require( 'express' )

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname + '/site/views')
app.use('/css', express.static(__dirname + '/site/css'))
app.use('/js', express.static(__dirname + '/site/js'))
app.use('/img', express.static(__dirname + '/site/img'))

app.get('*', (req,res,next) => {

  res.render('index.pug')

})

app.listen(9010, () => {
    console.log('Listening at 80')
})
