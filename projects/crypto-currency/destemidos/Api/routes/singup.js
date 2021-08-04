import app from "./configs/app.js"
import { Mongoose, UserSchema } from './configs/db.js'

app.post('/register', async (req, res) => {
 
  const email = req.body.email
  const password = req.body.password
  
  const Users = Mongoose.model('users', UserSchema, 'users')
  
  try {
    const foundUser = await Users.findOne({ email: email }).exec()
    if(foundUser) {
      res.status(409).send('E-mail já cadastrado!')
    } else {
        const user = new Users({ email, password })
        await user.save()
        res.status(201).send('Cadastrado realizado com sucesso!')
    }
  } catch (err) {
    res.send(err)
  }
})

export default app