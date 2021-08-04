import { config } from './configs/api-lunarcrush.js'
import app from './configs/app.js'
import axios from 'axios'

app.get('/feeds', function (req, res) {

  axios.request(config('feeds')).then(function (response) {
    let resp = response.data
      res.json(resp)
    }).catch(function (error) {
      console.error(error)
    })
})

export default app