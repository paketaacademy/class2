import express from 'express'
import cors from 'cors'
import axios from 'axios';
const app = express()

app.use(cors())
app.use(express.json())


const market =()=>{
    return{
    method: 'GET',
    url: 'https://api.lunarcrush.com/v2?data=market&key=y7ze70q6n18xv9g0jlpjlo&limit=15',
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

export default app