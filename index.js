var request = require('request');

var cep = 14680000
request('http://www.viacep.com.br/ws/%27+ cep +'/json/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});