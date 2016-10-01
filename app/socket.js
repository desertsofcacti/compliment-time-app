var socket = io();
socket.on('server event', function (data) {
  console.log(data);
  socket.emit('client event', { socket: 'io' });
});
