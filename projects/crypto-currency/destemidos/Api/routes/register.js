import app from "./app_export.js";

app.get('/register', (req,res)=>{
    res.send('fazer o resgistro dos usuarios sem cadastro')
})

export default app