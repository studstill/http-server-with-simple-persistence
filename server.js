var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, '{ application/json');
  response.write('SOMETHING HAPPENED');
});

server.listen(3000, function() {
  console.log('server started');
});
