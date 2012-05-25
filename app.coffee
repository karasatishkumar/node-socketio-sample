fs = require 'fs'
http = require 'http'
socketio = require 'socket.io'

server = http.createServer (req, res) ->
    res.writeHead 200, 'Content-Type': 'text/html'
    res.end fs.readFileSync "#{__dirname}/index.html"

server.listen '8080', ->
    console.log 'Listening at: http://localhost:8080'


socketio.listen(server).on 'connection', (socket) ->
    socket.on 'message', (msg) ->
        console.log "Message received: #{msg}"
        socket.broadcast.emit 'message', msg
