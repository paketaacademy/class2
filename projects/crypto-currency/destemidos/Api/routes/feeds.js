import app from './configs/app.js'
import { config2 } from './configs/api-lunarcrush2.js'
import axios from 'axios'

app.get('/feeds', function(req, res){
  axios.request(config2('feeds')).then(function (response) {
    let resp = response.data
    res.json(resp)
    }).catch(function (error) {
      console.error(error)
    })
})

export default app