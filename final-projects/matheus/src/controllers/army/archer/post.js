import { Mongoose } from "../../../index.js"
import ArcherSchema from "../../../models/army/archer.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const Archer ={
  async CreateArcher(req, res){
    const { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    const typeSoldier = 'archer'
    const owner = req.user._id

    const ArcherModel = await Mongoose.model('archer', ArcherSchema, 'archer')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const archer = await ArcherModel.create({ typeSoldier, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament, owner })
      
      return res
      .status(201)
      .send(archer)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Something went wrong with your Archer"
      })
    }
  }
}
export default Archer