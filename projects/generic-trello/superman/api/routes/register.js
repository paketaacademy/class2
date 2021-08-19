import app from "./configs/app.js"
import { Mongoose, UsersSchema } from './configs/mongo.js'
import bcrypt from 'bcrypt'
import { userSchema } from './configs/validation.js'
import { validateUser } from "./configs/userValidation.js"


app.post('/register', validateUser(userSchema), async (req, res) => {

  const userData = req.body
  const salt = await bcrypt.genSalt(10)
  userData.password = await bcrypt.hash(req.body.password, salt)

  const Users = Mongoose.model('users', UsersSchema, 'users')
  
  try {
    
    const foundUser = await Users.findOne({ email: userData.email })
    
    if(foundUser) {
      return res.status(409).send({ message: 'E-mail já cadastrado!' })
    }
      const user = new Users({ name: userData.name, email: userData.email, password: userData.password })
      await user.save()

      res.status(201).send({ message: 'Cadastro realizado com sucesso!' })
  } catch (err) {
    res.send(err)
  }
})

export default app