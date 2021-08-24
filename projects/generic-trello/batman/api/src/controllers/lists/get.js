import listSchema from "../../models/list-schema.js"
import Board from "../../models/board-schema.js"
import { Mongoose } from "../../index.js"

const getLists = {

    async AllLists(req, res){
        
        const idBoard = req.params.id

        const Boards = Mongoose.model('board', Board, 'board')
        const Lists = Mongoose.model('list', listSchema, 'list')

        try{
            const foundBoard = await Boards.findOne({ _id: idBoard })
            if(foundBoard){
                const foundLists = await Lists.find({ idBoard: idBoard })
                if(foundLists.length == 0){
                    return res
                    .status(400)
                    .send({
                        message: "Esse Board não possui lista"
                    })
                }
                return res
                .status(200)
                .send(foundLists)
            }

        }catch(error){
            return res
            .status(400)
            .send(error)
        }
    }
}

export default getLists