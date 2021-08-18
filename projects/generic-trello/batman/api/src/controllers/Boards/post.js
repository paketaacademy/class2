import Board from "../../models/board-schema.js"
import { Mongoose } from "../../index.js"

export const BoardControllerPost = {
  async CreateBoard(req, res) {
    const { title, description, users } = req.body

    try {
      const boardCreate = await (await Mongoose.model('board', Board, 'board').create({ title, description, users }))
      return res
        .status(200)
        .send(boardCreate)

    } catch (error) {
      return res
        .status(400)
        .send({ menssagem: "Falha ao tentar criar Board" })
    }
  }
}