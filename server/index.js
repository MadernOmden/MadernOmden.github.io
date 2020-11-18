var WebSocket = require("ws");

var wss = new WebSocket.Server({port: 8082});

wss.on("connection", function(ws) {

console.log("Client connected");

ws.on("message", function(data) {

console.log(data);

});

ws.on("close", function() {

console.log("Client disconnected");

});

});