var express = require('express'),
	app     = express(),
	random = require('./random');

// function that uses Math.random() to generate a random 'thing'
function randomThings(){
	var randomNumber = Math.floor(Math.random() * random.randomArray.length);
	return random.randomArray[randomNumber];
}

app.get('/api/whatev', function(req, res) {
	res.send(randomThings());
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static(__dirname + '/public'));