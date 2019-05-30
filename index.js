var request = require('request');

var cep = 14680000
request('http://www.viacep.com.br/ws/' + cep +'/json/', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});