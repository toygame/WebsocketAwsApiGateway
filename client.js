const WebSocket = require('ws')
const websocketUrl = process.env.WEB_SOCKET_URL
const ws = new WebSocket(websocketUrl)
ws.on('open', () => {
    const data = `{"action":"event1", "message":"easy"}`
    console.log('sending.. :>> ', data)
    ws.send(data)
})

ws.on('message', (websocket, data) => {
    console.log('receiving.. :>> ', data)
})