import app from './index.js'
import cors from 'cors'

app.use(cors())

const { DOOR } = process.env

app.listen(DOOR, () => {
  console.log('Server is on')
})