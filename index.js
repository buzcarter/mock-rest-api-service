/* jshint esnext:true */
var express = require('express');

const SERVER_PORT = 3080;
// will hang response 100, 101,
const VALID_CODES = [ 200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 306, 307, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 500, 501, 502, 503, 504, 505];

function apiHandler(req, res) {
  console.log('Request => (Response Code: ' + req.params.code + ', Delay: ' + req.params.delay + ' seconds)');

  var code = parseInt(req.params.code, 10);
  if (VALID_CODES.indexOf(code) < 0) {
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
    res.sendStatus(code);
  }, delay * 1000);
}

var app = express();

app.get('/api/:code(\\d{3})/:delay(\\d*)', apiHandler);

app.listen(SERVER_PORT, function () {
  console.log('Listening on port ' + SERVER_PORT);
});
