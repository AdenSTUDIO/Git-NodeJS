var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/v', express.static('views'));

var http = require('http').createServer(app); // GITHUB Commit
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/views/admin.html');
});

io.on('connection', (socket) => {
  console.log(socket.id + ' connected');
  socket.on('disconnect', () => {
    console.log(socket.id + ' disconnected');
  });

  socket.on('send-Imsg', (data) => {
    io.sockets.emit('chat-Idata', data);
  });
  socket.on('send-Amsg', (data) => {
    io.sockets.emit('chat-Adata', data);
  });
});

http.listen(process.env.PORT || 8888);