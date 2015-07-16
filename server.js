var http = require('http');
var url = require('url');
var port = 3000;

function startServer(route, handle) {

  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request for ' + pathName + ' received');
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write('{"message": "You Made It!"}');
    response.end();
  }

  http.createServer(onRequest).listen(port);
  console.log('Server Started on Port 3000');
}

exports.startServer = startServer;


