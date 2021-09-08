import app from "./configs/index.js"

app.get('/home', async (req, res) => {
    
  res.status(200).send('Hello World!')
  
})

export default app