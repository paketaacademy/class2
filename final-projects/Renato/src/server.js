import app from './index.js'
import cors from 'cors'

app.use(cors())

const { PORT } = process.env

app.listen(PORT, () => {
  console.log('Server is on')
})