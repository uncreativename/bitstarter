var express = require('express');

var app = express.createServer(express.logger());

fs.readFile('/home/ubuntu/bitstarter/index.html', function(err,data) ) 
{
	if (err) throw err;
	console.log(data);
});

var buffer = new Buffer(data, "utf-8");

app.get('/', function(request, response) {
  response.send(buffer.toString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
