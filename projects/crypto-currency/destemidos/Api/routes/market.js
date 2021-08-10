import app from './configs/app.js'
import axios from 'axios'
import { config } from './configs/api-lunarcrush.js'

app.get('/markets', function(req, res){
  axios.request(config('market', 100)).then(function (response) {
    let resp = response.data
    res.json(resp)
    }).catch(function (error) {
      console.error(error)
    })
})

export default app