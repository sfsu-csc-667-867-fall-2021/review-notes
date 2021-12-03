const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 3004});

wss.on('connection', (ws) => {
  console.log('someone has connected');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log(data);

    if(data.type === 'login'){
      ws.username = data.username; // set username
    }else if(data.type === 'broadcast'){
      // send to a specific user
      broadcast(data.message, data.username);
    }
  });
});

const broadcast = (data, username) => {
  wss.clients.forEach((ws) => {
    if(ws.username !== username){
      return; // skip
    }
    ws.send(data);
  });
};