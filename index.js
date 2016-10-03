/* jshint esnext:true */
var express = require('express');

const SERVER_PORT = 3080;

function apiHandler(req, res) {
  console.log('Request => (Response Code: ' + req.params.code + ', Delay: ' + req.params.delay + ' seconds)');
  var code = parseInt(req.params.code, 10);

  if (code < 100 || code > 599) {
    return res.send('Invalid Code: ' + code);
  }

  var delay = parseInt(req.params.delay, 10);
  if (delay < 0 || delay > 120) {
    return res.send('Invalid Delay: ' + delay + ', must be between 0 and 120 seconds');
  }

  if (delay < 1) {
    return res.sendStatus(code);
  }

  setTimeout(function () {
    return res.sendStatus(code);
  }, delay * 1000);
}

var app = express();

app.get('/api/:code(\\d{3})/:delay(\\d*)', apiHandler);

app.listen(SERVER_PORT, function () {
  console.log('Listening on port ' + SERVER_PORT);
});
