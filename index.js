const express = require("express")
const app = express()

app.use(express.json())

app.post('/connect', (req, res) => {
  console.log('connected')
  res.send('connected!')

})

app.post('/disconnect', (req, res) => {
  console.log('disconnected')
  res.send('disconnected!')
})

app.post('/handle-event', (req, res) => {
  console.log('message :>> ', req.body)
  res.send("event default received!")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})