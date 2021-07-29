import { Mongoose, UserSchema } from './db.js'
import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

app.post('/teste', async (req, res) => {
 
  const email = req.body.email;
  const password = req.body.password;
  const carteira = req.body.carteira;
  // const db = require("../db");
  const Users = Mongoose.model('users', UserSchema, 'users');
  const user = new Users({ email, password, carteira });
 
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.send(err);
  }
});

export default app