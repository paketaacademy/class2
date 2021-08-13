import app from './configs/app.js'
import axios from 'axios'
import { config } from './configs/api-lunarcrush.js'

app.get('/datacoin/:symbol', function(req, res){
  const { symbol } = req.params
  
  axios.request(config('market-pairs', 1, 0, symbol)).then(function (response) {
    let resp = response.data
    res.json(resp)
    }).catch(function (error) {
      console.error(error)
    })  
})

export default app