import { Mongoose } from '../../index.js'

const deleteListColunm ={

    async DeleteList(req, res) {
        const listId = req.list._id

        try{
            const List = await Mongoose.model('list', listSchema, 'list')
            const foundList = await List.findOne(listId)
            if(!foundList){
                return res
                .status(400)
                .send({
                    message: 'Não existe essa lista'
                })
            }
            const deleteList = await List.deleteOne({ _id: listId })
            return res
            .status(200)
            .send({
                message: `Lista deletada com sucesso ${deleteList}`
            })
        }catch(error) {
            return res
            .status(400)
            .send({
                message:'Erro ao tentar deletar lista'
            })
        }
    }
}

export default deleteListColunm