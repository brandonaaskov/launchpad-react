var express = require('express')
var path = require('path')

var app = express()
app.set('views', path.join(__dirname))
app.set('view engine', 'jade')

// console.log(path.join(__dirname, 'public')) // /Users/brandonaaskov/dev/launchpad-react/server/public
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res) {
  res.render('index')
})

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), function () {
  console.info('server listening on port ' + this.address().port)
})
