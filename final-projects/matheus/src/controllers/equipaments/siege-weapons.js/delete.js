import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const DeleteSiegeWeapon = {
  async DelSiegeWeapon(req, res){
    const { idSWeapon } = req.body
    
    const SWeaponsModel = await Mongoose.model('siege-weapon', SiegeWeaponsSchema, 'siege-weapon')

    try{
      const foundSWeapons = await SWeaponsModel.findOne({ _id: idSWeapon })
      if(!foundSWeapons){
        return res
        .status(404)
        .send({
          message:"Sorry, siege weapon not found"
        })
      }

      const sWeapondelete = await SWeaponsModel.deleteOne(foundSWeapons)
      
      return res
      .status(201)
      .send({
        message:'Siege Weapon deleted'
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
export default DeleteSiegeWeapon