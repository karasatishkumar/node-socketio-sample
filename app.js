var fs = require('fs');
var http = require('http');
var socketio = require('socket.io');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(8080, function() {
    console.log('Listening at: http://localhost:8080');
});

socketio.listen(server).on('connection', function(socket) {
    socket.on('message', function(msg) {
        console.log('Message received: ' + msg);
        socket.broadcast.emit('message', msg);
    });
});