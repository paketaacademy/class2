import Board from "../../models/board-schema.js"
import { Mongoose } from "../../index.js"

export const BoardController = {
  async createBoard(req, res) {
    const { name, description, users } = req.body

    try {
      const boardCreate = await Mongoose.model('board', Board, 'board').create({ name, description, users })
      return res
        .status(200)
        .send(boardCreate)

    } catch (error) {
      return res
        .status(400)
        .json({ menssagem: "Falha ao tentar criar Board" })
    }
  }
}