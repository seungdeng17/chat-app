const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInChannel } = require('./users');
const { addChannel, removeChannel, getChannels } = require('./channels');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
    socket.on('join', ({ name, channel }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, channel });

        if (error) return callback(error);

        socket.join(user.channel);

        socket.emit('message', { user: `Admin`, text: `${user.name}님 환영합니다.` });
        socket.broadcast.to(user.channel).emit('message', { user: `Admin`, text: `${user.name}님이 대화에 참여했습니다.` });

        io.to(user.channel).emit('channelData', { channel: user.channel, users: getUsersInChannel(user.channel) });

        addChannel(channel, io.sockets.adapter.rooms[channel]);
        const channels = getChannels();
        io.emit('channelList', [...channels]);
    });

    socket.on('channel', () => {
        const channels = getChannels();
        io.emit('channelList', [...channels]);
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.channel).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnecting', ({ channel }) => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.channel).emit('message', { user: `Admin`, text: `${user.name}님이 퇴장했습니다.` });
            io.to(user.channel).emit('channelData', { channel: user.channel, users: getUsersInChannel(user.channel) });
        }

        socket.leave(channel);

        removeChannel(channel, io.sockets.adapter.rooms[channel]);
        const channels = getChannels();
        io.emit('channelList', [...channels]);
    })
});

server.listen(PORT, () => console.log('Server has started'));
