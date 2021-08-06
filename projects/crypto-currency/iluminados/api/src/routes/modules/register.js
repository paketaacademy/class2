import express from 'express'
import cors from 'cors'
import { Mongoose, userSchema } from './configs/data-base.js'
const app = express()

app.use(cors())
app.use(express.json())

app.post('/register', async (req, res) => {

  const { email, password } = req.body
  const Users = Mongoose.model('users', userSchema, 'users')
  const user = new Users({ email, password })

  try {
    await user.save()
    res.status(200).send('Cadastrado com sucesso')
  } catch (error) {
    res.status(400).send('Bad Request')
  }
})

export default app