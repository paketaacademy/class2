import { Mongoose } from "../../../index.js"
import ArcherSchema from "../../../models/army/archer.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const ModifyArcher = {
  async ModArcher(req, res){
    const { idArcher, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    
    const ArcherModel = await Mongoose.model('archer', ArcherSchema, 'archer')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const foundArcher = await ArcherModel.findOne({ _id: idArcher })
      if(!foundArcher){
        return res
        .status(404)
        .send({
          message:"Archer not found"
        })
      }

      const updateArcher = await ArcherModel.updateOne(foundArcher, { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament })
      return res
      .status(200)
      .send(updateArcher)
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong'
      })
    }
  }
}
export default ModifyArcher