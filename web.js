var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = require('buffer');

var buffer = new Buffer;



fs.readFile("index.html", "utf8", function(error, data)
{
	if (err) throw err;
	var buffer = data;

});





app.get('/', function(request, response)
{
	response.send(buffer.toString('utf-8'));
});


var port = process.env.PORT || 5000;


app.listen(port, function()
{
	console.log("Listening on " + port);
});


