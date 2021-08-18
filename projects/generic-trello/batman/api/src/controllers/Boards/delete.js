import { Mongoose } from "../../index.js"

export const BoardControllerDelete = {
  async DeleteBoard(req, res) {
    const boardId = req.board._id
    try {
      const boardDelete = await Mongoose.Model.findByIdAndDelete({ _id: boardId })
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