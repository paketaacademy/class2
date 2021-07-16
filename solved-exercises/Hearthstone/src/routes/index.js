

const express = require('express')
const Api = require('../3rd-rapid/api').default

app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/cards', async function(req, res) {

  const values = await Api.request(`/cards`, { method: 'GET' })

  console.log("value", Api)

  res.status(200)
    .send({
      type: 'xpto'
    })
})

// Exporting all routes to catch up in the server.js
module.exports = app