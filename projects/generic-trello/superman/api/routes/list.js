import app from "./configs/app.js"
import { Mongoose,ListsSchema, BoardsSchema} from './configs/mongo.js'

app.delete("/list",async (req, res) => {
  const { idList, idBoard } = req.body

  const Lists = Mongoose.model('lists', ListsSchema, 'lists')
  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  const foundBoard = await Boards.findOne({ id: idBoard })
  console.log("inicio")

  if(foundBoard){

  console.log("entrou")

    Lists.deleteOne({ id: idList }, (err) => {

        if(err) return res.status(400).json({
            error: true,
            message: "Erro lista não encontrada"
        })

        return res.json({
            error: false,
            message: "Lista apagada com sucesso!"
        })
    })
  }
  console.log("final")

  return res.status(404).send('Quadro não encontrado')
})

export default app