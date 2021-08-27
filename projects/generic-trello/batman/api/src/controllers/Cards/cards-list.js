import { Mongoose } from '../../index.js'
import listSchema from '../../models/list-schema.js'
import cardSchema from '../../models/card-schema.js'

export const cardList = {

  async getCardList(req, res) {
    const listId = req.params.id
    const Card = await Mongoose.model('cards', cardSchema, 'cards')
    const List = await Mongoose.model('list', listSchema, 'list')

    try {
      const foundList = await List.findOne({ _id: listId })
      if (foundList) {
        const foundCard = await Card.find({ listId: listId })
        if (foundCard.length == 0) {
          return res
            .status(404)
            .send({
              message: "Essa lista não possui cards"
            })
        }
        return res
          .status(200)
          .send(foundCard)
      }
      return res
        .status(404)
        .send({
          message: "Lista não encontrado"
        })

    } catch (error) {
      return res
        .status(400)
        .send(error)
    }
  }
}
export default cardList