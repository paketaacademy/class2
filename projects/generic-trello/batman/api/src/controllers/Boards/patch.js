import { Mongoose } from "../../index.js";
import Board from "../../models/board-schema.js";
import userSchema from "../../models/user-schema.js";

export const BoardControllerUpdate = {
  async UpdateBoard(req, res) {
    const boardID = req.params.id
    const { title, description, users } = req.body
    console.log(users)
    try {
      const findBoard = await Mongoose.model('board', Board, 'board').findById(boardID)
      const User = await Mongoose.model('users', userSchema, 'users')
      if (!findBoard) {
        return res
          .status(400)
          .send({ message: `Board não encontrado!` })
      }
      if (users.length) {
        const foundUser = await User.find({ email: { $in: users } })
        if (foundUser.length === 0) {
          return res
            .status(404)
            .send({ message: `Usuários não existem no banco de dados` })
        }

        const newUser = foundUser.map(user => {
          return user.email
        }).filter((user) => {
          return !findBoard.users.includes(user)
        })

        if (newUser.length == 0) {
          return res
            .status(404)
            .send({ message: `Usuário já cadastrado no board.` })
        }
        findBoard.users.push(...newUser)
      }

      findBoard.title = title ? title : findBoard.title
      findBoard.description = description ? description : findBoard.description
      await findBoard.update(findBoard)

      return res
        .status(200)
        .send(findBoard)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro ao tentar atualizar board ${error}` })
    }
  }
}