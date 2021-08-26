import app from "./configs/app.js"
import { Mongoose, BoardsSchema, ListsSchema } from './configs/mongo.js'
import validationToken from './configs/validationToken.js'

app.delete("/list", validationToken, async (req, res) => {
  const { idList, idBoard } = req.body

  const Lists = Mongoose.model('lists', ListsSchema, 'lists')

  const foundLists = await Lists.findOne({ _id: idList })

  if (foundLists && foundLists.idBoard == idBoard) {
    Lists.deleteOne({ _id: idList }).exec()

    return res.status(200).json({
      error: false,
      message: "Lista apagada com sucesso!"
    })
  }
  return res.status(404).send('Lista ou Quadro não encontrados')
})

app.post('/list', validationToken, async (req, res) => {

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

app.get('/list', validationToken, async (req, res) => {

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

    return res.status(404).send('Quadro não encontrado')
  }
})

app.patch('/list', validationToken, async (req, res) => {
  const { idList, title } = req.body

  if(title.length < 5){
    return res.status(400).send('Título deve possuir no mínimo 5 caracteres!')
  }

  const Lists = Mongoose.model('lists', ListsSchema, 'lists')

  try {

    const foundList = await Lists.findOne({ _id: idList })

    if(foundList){
      await foundList.updateOne({ title })
      return res.status(200).send('Título atualizado com sucesso!')
    }

    return res.status(404).send('Lista não encontrada!')

  } catch(err) {
    return res.status(400).send(err)
  }
})

export default app