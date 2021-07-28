import app from './app_export.js'
import axios from 'axios';



const market =()=>{
    return{
    method: 'GET',
    url: 'https://api.lunarcrush.com/v2?data=market&key=y7ze70q6n18xv9g0jlpjlo&limit=15',
    headers: {
      'Key': 'y7ze70q6n18xv9g0jlpjlo',
    }}
  };


app.get('/market', function(req, res){
  
    axios.request(market('market')).then(function (response) {
        let resp = response.data;
        res.json(resp)
        }).catch(function (error) {
            console.error(error);
        })
    })

export default app