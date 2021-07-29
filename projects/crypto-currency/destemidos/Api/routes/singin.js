import app from "./configs_export/app_export.js";
import { Mongoose, UserSchema } from './configs_export/db.js'

app.post('/singin', async (req, res) => {
 
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