import { Mongoose } from '../../index.js'
import cardSchema from "../../models/card-schema.js"

export const cardControllerGet = {

  async getCard(req, res) {
    const cardId = req.params.id

    try {
      const cards = await Mongoose.model('cards', cardSchema, 'cards').findById(cardId)
      if (!cards) {
        return res
          .status(404)
          .send({ message: `Card não encontrado!` })
      }
      return res
        .status(200)
        .send(cards)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro ${error}` })
    }
  }
}