import { Mongoose } from "../../../index.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"

const DeleteArmor ={
  async DelArmor(req, res){
    const { idArmor } = req.body

    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')

    try{
      const foundArmor = await ArmorModel.findOne({ _id: idArmor })
      if(!foundArmor){
        return res
        .status(404)
        .send({
          message: 'Sorry Armor not found'
        })
      }
      
      const delArmor = await ArmorModel.deleteOne(foundArmor)

      return res
      .status(200)
      .send({
        message:'Armor deletede'
      })
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your armor'
      })
    }
  }
}
export default DeleteArmor