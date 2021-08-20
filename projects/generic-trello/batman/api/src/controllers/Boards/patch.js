import { Mongoose } from "../../index.js";
import Board from "../../models/board-schema.js";

export const BoardControllerUpdate = {
  async UpdateBoard(req, res) {
    const boardID = req.params.id
    const update = req.body
    try {
      const findBoard = await Mongoose.model('board', Board, 'board').findById(boardID)
      if (!findBoard) {
        return res
          .status(400)
          .send({ message: `Board não encontrado!` })
      }
      const boardUpdate = await findBoard.updateOne(update)
      return res
        .status(200)
        .send(boardUpdate)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro ao tentar atualizar board ${error}` })
    }
  }
}