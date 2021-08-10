import cors from 'cors'
import app from './routes/index.js'

app.use(cors())

app.listen(3030, () => {
  console.log('Server is running, run! run!')
})