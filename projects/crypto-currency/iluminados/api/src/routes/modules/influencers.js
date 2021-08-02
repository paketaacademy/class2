import axios from 'axios'
import express from 'express'
import { configuration } from './configs/lunar-crush-api.js'
const app = express()

app.get('/influencers', function (req, res) {
    axios.request(configuration('influencers')).then(function (response){
        let resp = response.data
        res.json(resp)
        res.status(200).send('Requisição realizada com sucesso')
        }).catch(function (error) {
            res.status(400).send('Bad Request')
            console.error(error)
        })
    })

export default app