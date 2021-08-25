import { Mongoose } from '../../index.js'
import Board from '../../models/board-schema.js'

const UsersFromBoard = {

  async GetUsersFromBoard(req, res) {
    const boardId = req.params.id
    const Boards = await Mongoose.model('board', Board, 'board')

    try {
      const foundBoard = await Boards.findOne({ _id: boardId })
      if (!foundBoard) {
        return res
          .status(404)
          .send({
            massage: "Board não encontrado"
          })
      }
      return res
        .status(200)
        .send(foundBoard.users)

    } catch (error) {
      return res
        .status(400)
        .send(error)
    }
  }
}
export default UsersFromBoard