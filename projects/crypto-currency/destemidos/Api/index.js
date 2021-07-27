const express = require('express')
const cors = require('cors')
const app = express()
const axios = require("axios").default

app.use(cors())
app.use(express.json())

const market =()=>{
    return{
    method: 'GET',
    url: 'https://api.lunarcrush.com/v2?data=market&key=y7ze70q6n18xv9g0jlpjlo',
    headers: {
      'Key': 'y7ze70q6n18xv9g0jlpjlo',
    }}
  };

app.get('/market', function(req, res){

    axios.request(market()).then(function (response) {
      let resp = response.data;
      res.json(resp)
      }).catch(function (error) {
          console.error(error);
      })
  })

  app.listen(3000)
  