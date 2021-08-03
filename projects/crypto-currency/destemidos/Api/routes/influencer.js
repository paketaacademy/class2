import app from './configs/app.js'
import { config } from './configs/api-lunarcrush.js'
import axios from 'axios'

  app.get('/influencers', function(req, res){
    axios.request(config('influencers')).then(function (response) {
      let resp = response.data
      res.json(resp)
      }).catch(function (error) {
        console.error(error)
      })
  })

export default app