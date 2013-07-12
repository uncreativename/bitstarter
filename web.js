#!/usr/bin/env node
//

var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = new Buffer('hello','utf-8');

buffer = fs.readFile('index.html', 'utf-8', function(error, data)
{
	if (err) throw err;
	return data;

});


app.get('/', function(request, response)
{
	response.send( buffer.toString() );
	//response.send('string');
});


var port = process.env.PORT || 5000;


app.listen(port, function()
{
	console.log("Listening on " + port);
});


