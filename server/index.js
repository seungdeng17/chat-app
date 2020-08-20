const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
    socket.on('join', ({ name, channel }, callback) => {
        console.log(name, channel);
    });
});


server.listen(PORT, () => console.log('Server has started'));
