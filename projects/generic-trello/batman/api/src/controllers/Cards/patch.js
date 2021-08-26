import { Mongoose } from '../../index.js'
import cardSchema from "../../models/card-schema.js"

export const cardControllerUpdate = {

  async updateCard(req, res) {
    const { cardId } = req.body
    const update = req.body

    try {
      const findCard = await Mongoose.model('cards', cardSchema, 'cards').findById({ _id: cardId })
      if (!findCard) {
        return res
          .status(400)
          .send({ message: `Card não encontrado!` })
      }
      const cardUpdate = await findCard.updateOne(update)
      return res
        .status(200)
        .send(cardUpdate)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro ao tentar atualizar o card ${error}` })
    }
  }
}

