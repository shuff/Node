var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
server.listen(1331);


app.get('/socket.html', function (req, res) {
  res.sendfile(__dirname + '/socket.html');
});
app.get('/node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js', function (req, res) {
  res.sendfile(__dirname + '/node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js');
});
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});







/*
var app = require('http').createServer(handler)
var events = require('events')
var io = require('socket.io').listen(app)
app.1331,'50.56.236.40'
var eventEmitter = new events.EventEmitter()
console.log('Starting Sockets...listining on port 1331')

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/socket.html');
});


io.sockets.on('connection', function (socket) {
  socket.on('message', function () { 
		socket.broadcast.emit('user connected');
  	});
  socket.on('disconnect', function () { });

});





//eventEmitter.emit('start_node')
eventEmitter.on('start_socket', function(){
eventEmitter.emit('start_socket')
});

/*
 eventEmitter.on('start_node', function(){
	console.log('Starting Node...')
	http.createServer(function (req, res) {
  		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Hello World\n');
  	}).listen(1331, '50.56.236.40');
   console.log('Server running at http://50.56.236.40:1331/');
});
function purge_old_node_processes(){
	var sys = require('util');
        var exec = require('child_process').exec;
        var doit = exec("killall -9 node");
        console.log('Killed Node instances...')
	eventEmitter.emit('node_reset_finished','Starting Node...')
};
 */