import { Mongoose } from "../../../index.js"
import VillagerSchema from "../../../models/army/villager.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const Villager ={
  async CreateVillager(req, res){
    const { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    const typeSoldier = 'villager'
    const owner = req.user._id

    const VillagerModel = await Mongoose.model('villager', VillagerSchema, 'villager')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const villager = await VillagerModel.create({ typeSoldier, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament, owner })
      
      return res
      .status(201)
      .send(villager)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Something went wrong with your Villager"
      })
    }
  }
}
export default Villager