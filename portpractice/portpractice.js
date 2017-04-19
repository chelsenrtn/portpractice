var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

var Twitter = require("twitter")

var client = new Twitter({
  consumer_key: 'yKjAnoJH8bo2EP0tejRbpSO4s',
  consumer_secret: 'U77V7oXyF6BzFyV1fJmxTLtjo9oytNyJy4ORL12MPvI4DAnZn9',
  access_token_key: '835737986704670721-wwilA4nqOtmDgJjULuE5Y2yTMm9ft6x',
  access_token_secret: 'kDFn2zKV1tySqrEPrLLZquWjAFE0BApAyot7g7MAut4AZ'
});

client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});

function handleRequest(request, response) {
	response.end('Your Hair is Lovely!')

}

function handleRequest2(request, response) {
	response.end('You! Off My Planet!')
}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);


server1.listen(PORT, function() {
	console.log('runnin')
	console.log('Visit http://localhost:7000')

});

server2.listen(PORT2, function() {
	console.log('runnin')
	console.log('Visit http://localhost:7500')
});