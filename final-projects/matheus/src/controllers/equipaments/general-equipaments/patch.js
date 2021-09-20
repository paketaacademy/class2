import { Mongoose } from "../../../index.js"
import EquipamentsSchema from "../../../models/equipaments/equipments-schema.js"

const ModifyEquipaments ={
  async ModEquipaments(req, res){
    const { equipamentsId, equipaments, description } = req.body

    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')

    try{
      const foundEquip = await EquipModel.findOne({ _id: equipamentsId })
      if(!foundEquip){
        return res
        .status(404)
        .send({
          message: 'Sorry equipament not found'
        })
      }
      const equipModify = await EquipModel.updateOne(foundEquip, { equipaments, description } )

      return res
      .status(201)
      .send(equipModify)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong with your equipament'
      })
    }
  }
}
export default ModifyEquipaments