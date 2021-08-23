import app from "./configs/app.js"
import { Mongoose,UsersSchema} from './configs/mongo.js'

app.get('/profile', async (req, res) => {
  
  const { idUser } = req.body
  const Users = Mongoose.model('users', UsersSchema, 'users')

  try{

    const foundUser = await Users.findOne({ id: idUser})

    if(foundUser){
      return res.status(200).send(foundUser.name)

    }

    return res.status(404).send('Usuário não encontrado')

  } catch (err) {
    return res.send(err)
  }  
})

export default app