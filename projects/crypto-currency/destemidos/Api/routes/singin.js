import app from "./configs/app.js"

app.get('/login', (req,res)=>{
    res.send('Fazer o login')
})

export default app