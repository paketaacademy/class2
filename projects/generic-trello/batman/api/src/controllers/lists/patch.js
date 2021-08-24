import { Mongoose } from '../../index.js'
import listSchema from '../../models/list-schema.js'

const changeLists = {

  async UpdateList(req, res) {
    const { listId } = req.body
    const title = req.body.title

    try {
      const List = await Mongoose.model('list', listSchema, 'list')
      const foundList = await List.findOne({ _id: listId })

      if (!foundList) {
        return res
          .status(404)
          .send({
            message: `Não foi possivel fazer a alteração, lista não encontrada`
          })
      }
      const updateList = await List.updateOne(foundList, { title } )
      return res
        .status(200)
        .send({
          message: `Lista alterada com sucesso`
        })

    } catch (error) {
      return res
        .status(400)
        .send({
          message: 'Erro ao tentar alterar a lista'
        })
    }
  }
}

export default changeLists