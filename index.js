/* jshint esnext:true */
var express = require('express');

const SERVER_PORT = 3080;
const UNAVAILABLE_CODES = [100, 101];
const VALID_CODES = [200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 306, 307, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 500, 501, 502, 503, 504, 505];
const MAX_DELAY = 600;

function apiSend(code, delay, req, res) {
  if (UNAVAILABLE_CODES.indexOf(code) > -1) {
    return res.send('Sorry, that\'s a valid code, but this server cannot respond with ' + code);
  }
  if (VALID_CODES.indexOf(code) < 0) {
    return res.send('Invalid Code: ' + code);
  }

  if (delay < 0 || delay > MAX_DELAY) {
    return res.send('Invalid Delay: ' + delay + ', must be between 0 and ' + MAX_DELAY + ' seconds');
  }

  if (delay < 1) {
    return res.sendStatus(code);
  }

  setTimeout(function () {
    res.sendStatus(code);
  }, delay * 1000);
}

function listHandler(req, res) {
  console.log('List');
  res.send({
    allowedCodes: VALID_CODES
  });
}

function statusHandler(req, res) {
  var code = parseInt(req.params.code, 10);
  var delay = req.params.delay ? parseInt(req.params.delay, 10) : 0;
  console.log('Get Status => (Response Code: ' + code + ', Delay: ' + delay + ' seconds)');
  apiSend(code, delay, req, res);
}

function randomHandler(req, res) {
  var code = VALID_CODES[Math.round(Math.random() * VALID_CODES.length)];
  var delay = req.params.delay ? parseInt(req.params.delay, 10) : 0;
  console.log('Random => (Response Code: ' + code + ', Delay: ' + delay + ' seconds)');
  apiSend(code, delay, req, res);
}

function defaultHandler(req, res) {
  console.log('Default');
  res.send('Unrecognized URL.\nUsage:\n /list\n /random\n/status/{code}');
}

var app = express();

app.get('/list', listHandler);
app.get('/random/:delay(\\d*)?', randomHandler);
app.get('/status/:code(\\d{3})/:delay(\\d*)?', statusHandler);
app.use(defaultHandler);

app.listen(SERVER_PORT, function () {
  console.log('Listening on port ' + SERVER_PORT);
});
