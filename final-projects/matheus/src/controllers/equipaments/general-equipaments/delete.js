import { Mongoose } from "../../../index.js"
import EquipamentsSchema from "../../../models/equipaments/equipments-schema.js"

const DeleteEquipaments ={
  async DelEquipaments(req, res){
    const { equipamentsId } = req.body

    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')

    try{
      const foundEquipaments = await EquipModel.findOne({ _id: equipamentsId })
      if(!foundEquipaments){
        return res
        .status(404)
        .send({
          message: 'Sorry, Equipament not found'
        })
      }
      
      const delEquipaments = await EquipModel.deleteOne(foundEquipaments)

      return res
      .status(200)
      .send({
        message:'Equipaments deletede'
      })
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your Equipaments'
      })
    }
  }
}
export default DeleteEquipaments