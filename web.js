//var express = require('express');

//var app = express.createServer(express.logger());

fs = require('fs');
fs.readFile('/home/ubuntu/bitstarter/index.html', 'utf8', function(err, data))
{
	if(err)
	{
		return console.log(err);
	}
	console.log(data);
}



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
