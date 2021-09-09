import app from './index.js'
import cors from 'cors'

const DOOR = 3030

app.use(cors())

app.listen(DOOR, ()=> console.log('server on'))