import axios from 'axios';
import express from 'express'
import { configuration } from './config.js';
const app = express()

app.get('/coinoftheday', function(req, res) {
  
    axios.request(configuration('coinoftheday')).then(function (response) {
        let resp = response.data;
        res.json(resp)
        }).catch(function (error) {
            console.error(error);
        })
    })

export default app