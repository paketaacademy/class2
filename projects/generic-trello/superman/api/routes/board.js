import app from "./configs/app.js"
import { Mongoose, BoardsSchema } from './configs/mongo.js'

app.post('/board', async (req, res) => {

  const  { title, description, idUser, members } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  
  try {

    const board = new Boards({ title, description, idUser, members })
    await board.save()

      res.status(201).send('Cadastro realizado com sucesso!')
  } catch (err) {
    res.send(err)
  }
})

app.delete("/boards",async (req, res) => {
  const { idBoard } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  Boards.deleteOne({_id: idBoard }, (err) => {

    if(err) return res.status(400).json({
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