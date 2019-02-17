var request = require('request');
var url = 'http://httpbin.org/ip';

request(
  {
    method: 'GET',
    url: 'http://api.scraperapi.com/?key=b343a8ea86f2575d9226cc8ed5941c23&url=' + url,
    headers: {
      Accept: 'application/json',
    },
  },
  function(error, response, body) {
    console.log('Status:', response.statusCode);
    console.log('Response:', body);
  }
);