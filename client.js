const WebSocket = require('ws')
require('dotenv').config()
const websocketUrl = process.env.WEB_SOCKET_URL
const ws = new WebSocket(websocketUrl)
let count = 0
ws.on('open', () => {
    const data = `{"action":"joinroom", "message":"connected"}`
    console.log('sending :>> ', data)
    ws.send(data)
})

ws.on('message', (data) => {
    console.log('response :>> ', data)
})

setInterval(() => {
    const data = `{"action":"chat", "message":"Hello world! message ${count++}"}`
    console.log('sending :>> ', data)
    ws.send(data)
}, 5000)