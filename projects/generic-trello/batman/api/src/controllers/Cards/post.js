import { Mongoose } from "../../index.js"
import cardSchema from "../../models/card-schema.js"
import listSchema from "../../models/list-schema.js"

const cardController = {

  async createCard(req, res) {
    const { title, description, assign, listId } = req.body
    const List = Mongoose.model('list', listSchema, 'list')

    try {
      const foundList = await List.findOne({ _id: listId })

      if (!foundList){
        return res
          .status(404)
          .send({
            message: 'Não foi possível criar o cartão, lista não encontrada.'
          })
        }
      const card = await Mongoose.model('cards', cardSchema, 'cards').create({ title, description, assign, listId })
      return res
        .status(201)
        .send(card)

    } catch (error) {
      return res
        .status(400)
        .send({
          message: 'Falha ao tentar criar o cartão.'
        })
    }
  }
}
export default cardController
