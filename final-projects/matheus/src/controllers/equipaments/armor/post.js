import { Mongoose } from "../../../index.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"

const Armor ={
  async CreateArmor(req, res){
    const { armor, armorCharacteristics } = req.body

    const owner = req.user._id

    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')

    try{
      const newArmor = await ArmorModel.create({ armor, armorCharacteristics, owner })

      return res
      .status(201)
      .send(newArmor)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your armor'
      })
    }
  }
}
export default Armor