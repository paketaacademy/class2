import { Mongoose } from '../../index.js'
import listSchema from '../../models/list-schema.js'
import cardSchema from '../../models/card-schema.js'

const ListsCards = {
    
    async getListsCard(req, res){

        const { idLists } = req.body
        const Lists = await Mongoose.model('list', listSchema, 'list')
        const Cards = await Mongoose.model('cards', cardSchema, 'cards')
        
        try{
            const foundList = await Lists.find({ _id: { $in: idLists } })
            console.log(foundList)
            if(!foundList){
                return res
                .status(404)
                .send({
                    message:'Listas não encontrada'
                })
            }
            const foundCards = await Cards.find({ listId: { $in: idLists }})
            console.log(foundCards)
            if(foundCards.length === 0){
                return res
                .status(404)
                .send({
                    message:"card não encontrado"
                })
            } 
            return res
            .status(200)
            .send(foundCards)
            
        }catch(error){

        }
    }
}
export default ListsCards