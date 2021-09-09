import { Mongoose } from "../../../index.js"
import SMSchema from "../../../models/army/swordMaster.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"


const ModifySM = {
  async ModSM(req, res){
    const { idSM, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapons, armors, equipament } = req.body
    
    const SMModel = await Mongoose.model('sword-master', SMSchema, 'sword-master')
    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const weapon = await WeaponModel.find({ weapon: { $in:weapons } })
      const armor = await ArmorModel.find({ typeArmor: { $in: armors } })
      const foundSM = await SMModel.findOne({ _id: idSM })
      if(!foundSM){
        return res
        .status(404)
        .send({
          message:"Sword Master not found"
        })
      }

      const updateSM = await SMModel.updateOne(foundSM, { ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, quantity, mount, weapon, armor, equipament })
      return res
      .status(200)
      .send(updateSM)
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong'
      })
    }
  }
}
export default ModifySM