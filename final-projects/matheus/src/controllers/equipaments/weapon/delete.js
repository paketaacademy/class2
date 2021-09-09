import { Mongoose } from "../../../index.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const DeleteWeapon = {
  async DelWeapon(req, res){
    const { idWeapon } = req.body
    
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

      const weapondelete = await WeaponModel.deleteOne(foundWeapon)
      
      return res
      .status(201)
      .send({
        message:'Weapon deleted'
      })

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
export default DeleteWeapon