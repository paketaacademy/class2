import { Mongoose } from "../../../index.js"
import SMSchema from "../../../models/army/swordMaster.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const SwordMaster ={
  async CreateSwordMaster(req, res){
    const { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    const typeSoldier = 'sword master'
    const owner = req.user._id

    const SwordMasterModel = await Mongoose.model('sword-master', SMSchema, 'sword-master')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const swordMaster = await SwordMasterModel.create({ typeSoldier, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament, owner })
      
      return res
      .status(201)
      .send(swordMaster)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Something went wrong with your Sword Master"
      })
    }
  }
}
export default SwordMaster