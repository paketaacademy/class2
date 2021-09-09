import { Mongoose } from "../../../index.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const ModifyWeapon = {
  async ModWeapon(req, res){
    const { idWeapon, weapon, weaponCharacteristics } = req.body

    const owner = req.user._id
    
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const foundWeapon = await WeaponModel.findOne({ _id: idWeapon })
      if(!foundWeapon){
        return res
        .status(404)
        .send({
          message:"Sorry, weapon not found"
        })
      }

      const weaponmodify = await WeaponModel.updateOne(foundWeapon, { weapon, weaponCharacteristics, owner })
      
      return res
      .status(201)
      .send(weaponmodify)

    }catch(error){
      console.log(error)
      return res
      .status(400)
      .send({
        message:'Somenthing went wrong with your weapon'
      })
    }
  }
}
export default ModifyWeapon