var express = require('express');

var app = express.createServer(express.logger());

var data, err;

fs.readFile('/home/ubuntu/bitstarter/index.html', function(err,data) ) 
{
	if (err) throw err;
	console.log(data);
});

var buffer = new Buffer("testing2", "utf-8");

app.get('/', function(request, response)
{
	response.send("data");
});

var port = process.env.PORT || 5000;

app.listen(port, function()
{
	console.log("Listening on " + port);
});
