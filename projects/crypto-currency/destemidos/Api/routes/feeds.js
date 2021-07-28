import app from './app_export.js'
import axios from 'axios';

const feeds = () => {
    return {
        method: 'GET',
        url: 'https://api.lunarcrush.com/v2?data=feeds&key=y7ze70q6n18xv9g0jlpjlo',
        headers: {
            'Key': 'y7ze70q6n18xv9g0jlpjlo',
        }
    }
};



app.get('/feeds', function (req, res) {

    axios.request(feeds('feeds')).then(function (response) {
        let resp = response.data;
        res.json(resp)
    }).catch(function (error) {
        console.error(error);
    })
})

export default app