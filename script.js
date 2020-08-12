var app = require('express')();
var http = require('http').createServer(app); // GITHUB Commit
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(process.env.PORT || 8888, () => {
    console.log('listening on *:3000');
});