const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on('connection', (socket) => {
    clients.push(socket);
    console.log('New client connected');

    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Broadcast the message to all clients
        clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        clients = clients.filter((client) => client !== socket);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');