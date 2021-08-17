import { Router } from "express";

const routes = Router()
routes.get('/', (req, res)=>{
    res.send('funcionou')
})

export default routes