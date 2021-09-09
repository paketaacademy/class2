import { Mongoose } from "../../../index.js"
import KnightSchema from "../../../models/army/knight.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const Knight ={
  async CreateKnight(req, res){
    const { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    const typeSoldier = 'knight'
    const owner = req.user._id

    const KnightModel = await Mongoose.model('knight', KnightSchema, 'knight')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const knight = await KnightModel.create({ typeSoldier, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament, owner })
      
      return res
      .status(201)
      .send(knight)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Something went wrong with your Knight"
      })
    }
  }
}
export default Knight