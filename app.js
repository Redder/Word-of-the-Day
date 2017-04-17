var express = require('express');
var mongo = require('mongojs');
var app = express();
var mongojs = require('mongojs');
//var db = mongojs('127.0.0.1:27017/contactApp', ['contactApp']);
var bodyParser = require('body-parser');
var server = app.listen(3000);

//var io = require('socket.io').listen(server);


app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render('public/index.html');
});

/*
io.on('connection', function(socket){
  console.log('User connected');

  socket.emit('message', { name: 'Lisander', message: 'Example' });
  socket.on('disconnect', function() {
  	console.log('User disconnected');
  });
});
*/
app.get('/socket', function(req, res) {
	res.send(socket);
});

console.log('Server running in port 3000');