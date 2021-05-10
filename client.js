const WebSocket = require('ws')
require('dotenv').config()
const websocketUrl = process.env.WEB_SOCKET_URL
const ws = new WebSocket(websocketUrl)
ws.on('open', () => {
    const data = `{"action":"event1", "message":"Toy"}`
    console.log('sending... :>> ', data)
    ws.send(data)
})

ws.on('message', (data) => {
    console.log('data :>> ', data)
})