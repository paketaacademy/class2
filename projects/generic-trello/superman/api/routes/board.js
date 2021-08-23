import app from "./configs/app.js"
import { Mongoose, UsersSchema, BoardsSchema } from './configs/mongo.js'

app.post('/board', async (req, res) => {

  const  { title, description, user, members } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  
  try {

    const board = new Boards({ title, description, user, members })
    await board.save()

      res.status(201).send('Cadastro realizado com sucesso!')
  } catch (err) {
    res.send(err)
  }
})

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

app.delete("/boards", async (req, res) => {
  const { idBoard } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  Boards.deleteOne({ _id: idBoard }, (err) => {

    if (err) return res.status(400).json({
      error: true,
      message: "Erro quadro não encontrado"
    })

    return res.json({
      error: false,
      message: "Quadro apagado com sucesso!"
    })
  })
})

export default app