var express = require('express');
var bodyParser =require("body-parser")

var app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.post('/mqtt/auth', function (req, res) {
  print(req);
  res.send('ok');
})

app.post('/mqtt/superuser', function (req, res) {
  print(req);

  res.send('ok');
})

app.get('/mqtt/acl', function (req, res) {
  print(req);
  res.send('ok');
})

var server = app.listen(8991, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("The server started http://%s:%s", host, port) 
})

//--------------------------------- Intenal Funcs

function print(req) {
  console.log(`* The ${req.path} has received:`);
  console.log(`  - method: ${req.method}`);
  console.log(`  - content-type: ${req.headers['content-type']}`);
  console.log(`  - querystring: ${JSON.stringify(req.query)}`);
  console.log(`  - body: ${JSON.stringify(req.body)}`);
  console.log(``);
}
