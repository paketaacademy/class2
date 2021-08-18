import { Mongoose } from "../../index.js"

export const BoardControllerGet = {
  async GetBoard(req, res) {
    const userId = req.Board.user

    const boards = Mongoose.Model()
    try {
      await boards.find({}).exec(boards.find({ user: userId }))
      return res
        .status(200)
        .send(boards)
    } catch (error) {
      return res
        .status(400)
        .send({ menssagem: `Erro ao tentar encontrar os boards - ${error}` })
    }
  }
}