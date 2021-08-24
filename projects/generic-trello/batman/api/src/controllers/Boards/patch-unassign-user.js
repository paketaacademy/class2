import { Mongoose } from "../../index.js"
import Board from "../../models/board-schema.js"
import userSchema from "../../models/user-schema.js"

export const BoardControllerUnassign = {
  async UnassignUser(req, res) {
    const boardID = req.params.id
    const userToRemove = req.body.user

    try {
      const queryBoard = await Mongoose.model('board', Board, 'board').findById(boardID)
      const queryUser = await Mongoose.model('users', userSchema, 'users').findOne({ email: userToRemove })
      console.log("Query User: ", queryUser)
      if (!queryBoard) {
        return res
          .status(404)
          .send({ message: "Board não encontrado!" })
      }
      if (!queryUser) {
        return res
          .status(404)
          .send({ message: "Usuário não encontrado!" })
      }

      console.log("Query user Email: ", queryUser.email)

      const newUsers = queryBoard.users.filter(q => {
        return q !== userToRemove
      })

      await queryBoard.updateOne({ users: newUsers })

      return res
        .status(200)
        .send({ message: "Usuário deletado com sucesso!" })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro - ${error}` })
    }
  }
}