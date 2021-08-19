import app from "./configs/app.js"
import { Mongoose, BoardsSchema, ListsSchema  } from './configs/mongo.js'

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

export default app