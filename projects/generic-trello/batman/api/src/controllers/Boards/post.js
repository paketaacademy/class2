import Board from "../../models/board-schema.js"
import { Mongoose } from "../../index.js"
import { BoardSchema } from "../../validation/board-validation.js"
import { validateBoard } from "../../middlewares/board-validate.js"

export const BoardControllerPost = {
  async CreateBoard(req, res) {
    const { title, description } = req.body
    const owner = req.user._id
    try {
      const boardCreate = await Mongoose.model('board', Board, 'board')
        .create({ title, description, owner })
      return res
        .status(201)
        .send(boardCreate)

    } catch (error) {
      return res
        .status(400)
        .send({ message: `Falha ao tentar criar Board - ${error}` })
    }
  }
}