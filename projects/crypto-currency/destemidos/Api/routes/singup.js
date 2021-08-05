import app from "./configs/app.js"
import { Mongoose, UserSchema } from './configs/db.js'
import bcrypt from 'bcrypt'

app.post('/register', async (req, res) => {
 
  const email = req.body.email
  const salt = await bcrypt.genSalt(10)
  const cryptograf = await bcrypt.hash(req.body.password, salt)
  const password = cryptograf
  
  const Users = Mongoose.model('users', UserSchema, 'users')
  const user = new Users({ email, password })
  
  try {
    await user.save()
    res.status(201).send('Cadastrado realizado com sucesso!')
  } catch (err) {
    res.send(err)
  }
})

export default app