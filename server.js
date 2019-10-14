var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var passport   = require('passport')
var session    = require('express-session')
//var exphbs = require('express-handlebars')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)



var User = require('./routes/Users')
var Region = require('./routes/Regiones')
var Muestra = require('./routes/Muestras')

app.use('/users', User)
app.use('/regiones', Region)
app.use('/muestras', Muestra)

app.listen(port, function() {
  console.log('Servidor en el puerto: ' + port)
})
