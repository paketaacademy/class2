import app from "./configs/app.js"
import { Mongoose,BoardsSchema} from './configs/mongo.js'

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