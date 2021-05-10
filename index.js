const express = require("express")
const app = express()
const AWS = require('aws-sdk')
require('dotenv').config()

const awsAccessKey = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const region = process.env.AWS_REGION
const responseMessageUrl = process.env.RESPONSE_MESSAGE_URL
const apiGateway = new AWS.ApiGatewayManagementApi({
  accessKeyId: awsAccessKey,
  secretAccessKey: secretAccessKey,
  region: region,
  endpoint: responseMessageUrl,
  apiVersion: '2018-11-29'
})

const connectionClient = []

app.use(express.json())

app.post('/connect', (req, res) => {
  /**
   * Store connection_id in cache or database,
   * Implement your code below
   */ 
  const connectionId = req.body.connection_id
  connectionClient.push(connectionId)
  
  console.log('connectionId connected :>> ', connectionId);
  res.status(200).end()
})

app.post('/disconnect', (req, res) => {
  /**
   * Remove connection_id from cache or database,
   * Implement your code below.
   */
  const connectionId = req.body.connection_id
  removeConnectionId(connectionId)

  console.log('connectionId disconnected :>> ', connectionId);
  res.status(200).end()
})

app.post('/handle-event', async (req, res) => {
  console.log('message :>> ', req.body)
  const connectionId = req.body.connection_id
  const responseBody = {
    body: req.body.body.message,
  }
  const promises = []
  for (const id of connectionClient) {
    const params = {
      ConnectionId: id,
      Data: JSON.stringify(responseBody)
    }
    const apiGatewayPost = apiGateway.postToConnection(params).promise()
    promises.push(apiGatewayPost)
  }
  await Promise.all(promises)
  res.status(200).send('received!')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

function removeConnectionId(id) {
  const index = connectionClient.indexOf(id)
  if (index !== -1) {
    connectionClient.splice(index, 1)
  }
}