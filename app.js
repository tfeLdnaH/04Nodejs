const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

//in order to debug line 16 has a misspeling
/*var http = require("http");
function process_request(req, res) {
var body = 'Thanks for calling!\n';
var content_length = body.lenggth ;
res.writeHead(200, {
'Content-Length': content_length,
'Content-Type': 'text/plain'
});
res.end(body);
}
var s = http.createServer(process_request);
s.listen(8080);*/