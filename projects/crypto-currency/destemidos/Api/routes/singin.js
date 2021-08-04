import app from "./configs/app.js"
import { Mongoose, UserSchema } from './configs/db.js'

app.post('/singin', async (req, res) => {
 
  const email = req.body.email
  const password = req.body.password
  
  const Users = Mongoose.model('users', UserSchema, 'users')
  
  try {
    const foundUser = await Users.findOne({ email: email, password: password }).exec()
    
      if(foundUser) {
        res.status(200).send('Login realizado com sucesso')
        
      } else {
          res.status(401).send('Login invalido')
      }

  } catch (err) {
    res.send(err)
  }
})

export default app