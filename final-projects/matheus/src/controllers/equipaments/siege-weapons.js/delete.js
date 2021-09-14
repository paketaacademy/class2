import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const DeleteSiegeWeapon = {
  async DelSiegeWeapon(req, res){
    const { siegeWeaponId } = req.body
    
    const SWeaponsModel = await Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')

    try{
      const foundSWeapons = await SWeaponsModel.findOne({ _id: siegeWeaponId })
      if(!foundSWeapons){
        return res
        .status(404)
        .send({
          message:"Sorry, Siege weapon not found"
        })
      }

      const sWeapondelete = await SWeaponsModel.deleteOne(foundSWeapons)
      
      return res
      .status(200)
      .send({
        message:'Siege Weapon deleted'
      })

    }catch(error){
      return res
      .status(400)
      .send({
        message:'Sorrw, somenthing went wrong with your Siege Weapon'
      })
    }
  }
}
export default DeleteSiegeWeapon