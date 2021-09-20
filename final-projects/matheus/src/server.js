import app from './index.js'
import cors from 'cors'

const DOOR = process.env.DOOR

app.use(cors())

app.listen(DOOR, ()=> console.log('server on'))