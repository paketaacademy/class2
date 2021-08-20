import { Mongoose } from "../../index.js"
import Board from "../../models/board-schema.js"
import userSchema from "../../models/user-schema.js"

export const BoardAssignControllerPatch = {
  async BoardAssign(req, res) {
    const userEmail = req.params.email
    const boardID = req.params.id

    try {
      const findBoard = await Mongoose.model('board', Board, 'board').findOne({ _id: boardID })
      console.log(findBoard)
      if (!findBoard) {
        return res
          .status(404)
          .send({ message: `Board não encontrado` })
      }
      const findUser = await Mongoose.model('users', userSchema, 'users').findOne({ email: userEmail })
      console.log(findUser)
      if (!findUser) {
        return res
          .status(404)
          .send({ message: `Usuário não encontrado` })
      }
      const assignUser = await findBoard.updateOne({ users: userEmail })
      return res
        .status(200)
        .send({ message: `Usuário assinado com sucesso!` })
    } catch (err) {
      return res
        .status(400)
        .send(`Erro ao tentar assinar o usuário ao board - ${err}`)
    }
  }
}