import app from "./configs/app.js"
import { Mongoose, ListsSchema } from './configs/mongo.js'

app.delete("/list", async (req, res) => {
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

export default app