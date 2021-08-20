import app from "./configs/app.js"
import { Mongoose, BoardsSchema, ListsSchema } from './configs/mongo.js'

app.post('/list', async (req, res) => {

  const { title, idBoard } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  const Lists = Mongoose.model('lists', ListsSchema, 'lists')

  try {

    await Boards.findOne({ _id: idBoard })

    const list = new Lists({ title, idBoard })
    await list.save()

    return res.status(201).send('Lista inserida com sucesso!')

  } catch (err) {
    return res.status(404).send('Quadro não encontrado!')
  }
})

app.get('/list', async (req, res) => {

  const { idBoard } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  const Lists = Mongoose.model('lists', ListsSchema, 'lists')

  try {

    const foundBoard = await Boards.find({ _id: idBoard })

    if (foundBoard) {

      const foundList = await Lists.find({ idBoard: idBoard })

      if (foundList.length == 0) {
        return res.status(404).send('O quadro não possui nenhuma lista!')
      }

      res.status(200).send(foundList)

    }

  } catch (err) {

    return res.status(404).send('Usuário não encontrado')

  }
})

export default app