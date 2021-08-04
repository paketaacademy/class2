import axios from 'axios'
import express from 'express'
import cors from 'cors'
import { configuration } from './config.js'

const app = express()
app.use(cors())

app.get('/feed', async (req, res) => {

  await axios.request(configuration("feeds"))
    .then((response) => {
      const { data } = response
      console.log(data)
      return res.json(data)
    })
    .catch((error) => {
      console.log(error)
    })
})

export default app