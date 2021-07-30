import axios from 'axios'
import express from 'express'
import { configuration } from './configs/lunarCrushApi.js'
const app = express()

app.get('/market', function(req, res) {
  
    axios.request(configuration('market')).then(function (response) {
        let resp = response.data
        res.json(resp)
        res.status(200).send('ok')
        }).catch(function (error) {
            res.status(400).send('Bad Request')
            console.error(error)
        })
    })

export default app