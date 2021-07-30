import { config } from './configs_export/config.js'
import app from './configs_export/app_export.js'
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