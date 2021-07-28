import axios from 'axios';
import app from './config.js';

const coinOfTheDay = () =>{
    return{
    method: 'GET',
    url: 'https://api.lunarcrush.com/v2?data=coinoftheday&key=lu4pa7jv6xmw1ny7jux9q',
    headers: {
      'Key': 'lu4pa7jv6xmw1ny7jux9q',
    }}
  };

app.get('/coinoftheday', function(req, res){
  
    axios.request(coinOfTheDay('coinoftheday')).then(function (response) {
        let resp = response.data;
        res.json(resp)
        }).catch(function (error) {
            console.error(error);
        })
    })

export default app