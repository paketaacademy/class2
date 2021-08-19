import { Mongoose } from "../../index.js"
import Board from "../../models/board-schema.js"

export const BoardControllerGet = {
  async GetBoard(req, res) {
    const userId = req.user._id

    try {
      const findBoard = await Mongoose.model('board', Board, 'board').find({ owner: userId })
      if (!findBoard) {
        return res
          .status(400)
          .send({ message: `Usuário não está registrado em nenhum board registrado!` })
      }

      return res
        .status(200)
        .send(findBoard)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro ao tentar encontrar os boards - ${error}` })
    }
  }
}