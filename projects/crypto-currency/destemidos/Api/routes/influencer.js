import express from 'express'
import cors from 'cors'
import axios from 'axios';
const app = express()


app.use(cors())
app.use(express.json())


const influencers =()=>{
    return{
    method: 'GET',
    url: 'https://api.lunarcrush.com/v2?data=influencers&key=y7ze70q6n18xv9g0jlpjlo',
    headers: {
      'Key': 'y7ze70q6n18xv9g0jlpjlo',
    }}
  };

  app.get('/influencers', function(req, res){

    axios.request(influencers()).then(function (response) {
      let resp = response.data;
      res.json(resp)
      }).catch(function (error) {
          console.error(error);
      })
  })

export default app