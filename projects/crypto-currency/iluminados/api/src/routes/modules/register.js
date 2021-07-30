import express from 'express'
import cors from 'cors'
import { Mongoose, userSchema } from './configs/dataBase.js'
const app = express()

app.use(cors())
app.use(express.json())

app.post('/register', async (req, res) => {
 
    const email = req.body.email;
    const password = req.body.password;
    const Users = Mongoose.model('users', userSchema, 'users');
    const user = new Users({ email, password });
   
    try {
      const savedUser = await user.save();
      res.send(savedUser);
      res.status(200).send('ok')
    } catch (error) {
      res.send(error);
      res.status(400).send('Bad Request')
    }
  });

export default app