#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');


var htmlfile = "index.html";

app.get('/', function(request, response)
{
	var html = fs.readFileSync(htmlfile).toString();
	response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});


//var buffer = new Buffer('hello','utf-8');

/*

var buffer;

buffer = fs.readFile('index.html', function(err, data)
{
	if (err) throw err;
	//return data;

	app.get('/', function(request, response)
	{
        	response.send(data.toString());
        	//response.send('string');
	});


	var port = process.env.PORT || 8080;

	app.listen(port, function()
	{
        	console.log("Listening on " + port);
	});

});

*/






