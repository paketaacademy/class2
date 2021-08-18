import listSchema from "../../models/list-schema.js"
import Board from "../../models/board-schema.js"
import { Mongoose } from "../../index.js"

const listsColumn = {

  async createList(req, res) {
    const boardId = req.board._id
    console.log(boardId)

    const { title, users } = (req.body)
    const Boards = Mongoose.model('board', Board, 'board')
    
    try {
      const foundBoard = await Boards.findOne({ _id: boardId })
      if(!foundBoard){
        return res.send('Não foi possivel criar a lista, board não encontrado')
      }
      
      const List = await Mongoose.model('list', listSchema, 'list').create({ title, users })

      return res
        .status(200)
        .send(List)
    
    }catch (error) {
      return res
      .status(400)
      .send({
        messagem: 'Falha ao tentar criar a lista'
      })
    }
  }
}

export default listsColumn