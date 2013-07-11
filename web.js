var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = new Buffer(data, 'utf-8');


fs.readFileSync("/home/ubuntu/bitstarter/index.html", "utf8", app.get('/', function(request, response) 
{
	{
		response.send(data);
	});


}); //end of readFileSync





//app.get('/', function(request, response)
//{
//	response.send(buffer.toString('utf8', 0, num) );
//});


var port = process.env.PORT || 5000;


app.listen(port, function()
{
	console.log("Listening on " + port);
});


