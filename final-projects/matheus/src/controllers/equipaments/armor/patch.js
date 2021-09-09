import { Mongoose } from "../../../index.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"

const ModifyArmor ={
  async ModArmor(req, res){
    const { idArmor, armor, armorCharacteristics } = req.body

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
      const armormodify = await ArmorModel.updateOne(foundArmor, { armor, armorCharacteristics } )

      return res
      .status(201)
      .send(armormodify)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your armor'
      })
    }
  }
}
export default ModifyArmor