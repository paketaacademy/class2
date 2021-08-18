import app from "./configs/app.js"
import { Mongoose, BoardsSchema } from './configs/mongo.js'

app.post('/board', async (req, res) => {

  const boardData = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  
  try {

    const board = new Boards({ title: boardData.title, description: boardData.description, idUser: boardData.idUser, members: boardData.members })
    await board.save()

      res.status(201).send('Cadastro realizado com sucesso!')
  } catch (err) {
    res.send(err)
  }
})

export default app