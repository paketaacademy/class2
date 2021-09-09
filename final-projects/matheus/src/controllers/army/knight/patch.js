import { Mongoose } from "../../../index.js"
import KnightSchema from "../../../models/army/knight.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const ModifyKnight = {
  async ModKnight(req, res){
    const { idKnight, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    
    const KnightModel = await Mongoose.model('knight', KnightSchema, 'knight')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const foundKnight = await KnightModel.findOne({ _id: idKnight })
      if(!foundKnight){
        return res
        .status(404)
        .send({
          message:"Knight not found"
        })
      }

      const updateKnight = await KnightModel.updateOne(foundKnight, { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament })
      return res
      .status(200)
      .send(updateKnight)
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong'
      })
    }
  }
}
export default ModifyKnight