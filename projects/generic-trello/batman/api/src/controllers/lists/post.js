import listSchema from "../../models/list-schema.js"
import Board from "../../models/board-schema.js"
import { Mongoose } from "../../index.js"

const listsColumn = {

  async CreateList(req, res) {
    const { title, idBoard } = req.body
    const Boards = Mongoose.model('board', Board, 'board')
    
    try {
      const foundBoard = await Boards.findOne({ _id: idBoard })
      if(!foundBoard){
        return res
        .status(404)
        .send({
          message:'Não foi possivel criar a lista, board não encontrado'
        })
      }
      
      const List = await Mongoose.model('list', listSchema, 'list').create({ title, idBoard })

      return res
        .status(201)
        .send(List)
    
    }catch (error) {
      return res
      .status(400)
      .send({
        message: 'Falha ao tentar criar a lista'
      })
    }
  }
}

export default listsColumn