import { Mongoose } from "../../../index.js"
import VillagerSchema from "../../../models/army/villager.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"


const ModifyVillager = {
  async ModVillager(req, res){
    const { idVillager, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    
    const VillagerModel = await Mongoose.model('villager', VillagerSchema, 'villager')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const foundVillager = await VillagerModel.findOne({ _id: idVillager })
      if(!foundVillager){
        return res
        .status(404)
        .send({
          message:"Villager not found"
        })
      }

      const updateVillager = await VillagerModel.updateOne(foundVillager, { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament })
      return res
      .status(200)
      .send(updateVillager)
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong'
      })
    }
  }
}
export default ModifyVillager