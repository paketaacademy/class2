import cors from 'cors'
import app from './routes/index.js'

app.use(cors())

app.listen(3000, () =>{
    console.log('Server is on')
})