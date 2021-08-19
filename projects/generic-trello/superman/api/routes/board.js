import app from "./configs/app.js"
import { Mongoose, UsersSchema, BoardsSchema } from './configs/mongo.js'

app.get('/board', async (req, res) => {

  const { idUser } = req.body

  const Users = Mongoose.model('users', UsersSchema, 'users')
  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  try {

    const foundUser = await Users.findOne({ _id: idUser })

    if (foundUser) {
      
      const foundBoard = await Boards.find({ members: idUser })      
      
      if (foundBoard.length == 0) {      
        return res.status(404).send('Você ainda não possui nenhum quadro!')
      }

      res.status(200).send(foundBoard) 
    }


  } catch (err) {

    return res.status(404).send('Usuário não encontrado')

  }
})

export default app