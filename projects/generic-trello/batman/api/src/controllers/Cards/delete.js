import { Mongoose } from '../../index.js'
import cardSchema from "../../models/card-schema.js"

export const cardControllerDelete = {

  async deleteCard (req, res) {
    const cardId  = req.params.id

    try {
      const card = await Mongoose.model('cards', cardSchema, 'cards')
      const foundCard = await card.findById({ _id: cardId })
      if (!foundCard) {
        return res
          .status(400)
          .send({
            message: 'Não existe este card.'
          })
      }
      const deleteCard = await card.deleteOne({ _id: cardId })
      return res
        .status(200)
        .send({
          message: `Card deletado com sucesso ${deleteCard}.`
        })
    } catch (error) {
      return res
        .status(400)
        .send({
          message: 'Erro ao tentar deletar card.'
        })
    }
  }
}

