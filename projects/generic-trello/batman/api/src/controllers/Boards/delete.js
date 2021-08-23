import { Mongoose } from "../../index.js";
import Board from "../../models/board-schema.js";

export const BoardControllerDelete = {
  async DeleteBoard(req, res) {
    const boardId = req.params.id
    try {
      const boardDelete = await Mongoose.model('board', Board, 'board').deleteOne({ _id: boardId })
      if (!boardDelete) {
        return res
          .status(404)
          .send({ message: `Board não encontrado na base de dados` })
      }
      return res
        .status(200)
        .send({ menssagem: "Board deletado!" })
    } catch (error) {
      return res
        .status(400)
        .send({ menssagem: `Erro ao tentar deletar o Board ${error}` })
    }
  }
}