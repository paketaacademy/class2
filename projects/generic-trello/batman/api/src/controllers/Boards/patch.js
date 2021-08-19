import { Mongoose } from "../../index.js";

export const BoardControllerUpdate = {
  async UpdateBoard(req, res) {
    const { title, description, users } = req.body

    try {
      const boardId = req.board._id
      const boardUpdate = Mongoose.Model.updateOne({ _id: boardId }, { title: title, description: description, users: users })
      return res
        .status(200)
        .send(boardUpdate)
    } catch (error) {
      return res
        .status(400)
        .send({ menssagem: `Erro ao tentar atualizar usuário ${error}` })
    }
  }
}