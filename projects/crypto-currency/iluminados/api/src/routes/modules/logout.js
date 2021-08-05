import express from 'express'

const app = express()

app.use(express.json())

app.delete('/logout', (req, res) =>{
    res.clearCookie('jwt')
    res.redirect('/login'); 

  })

export default app