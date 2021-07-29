import app from "./configs_export/app_export.js";

app.get('/register', (req,res)=>{
    res.send('fazer o resgistro dos usuarios sem cadastro')
})

export default app