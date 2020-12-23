let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});



http.listen(3000, () => {
    console.log('OK port : 3000');
});

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
});