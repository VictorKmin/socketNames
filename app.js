const express = require('express');

const app = express();
const server = require('http').Server(app);

const io = require('socket.io').listen(server);

app.io = io;


const notification = io.of('/notification');
const notifyHandler = require('./notification');

notification.on('connection', notifyHandler);


server.listen(3000, () => {
    console.log(`listening on *:3000`);
});
