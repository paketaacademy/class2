import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const ModifySiegeWeapon = {
  async ModSiegeWeapon(req, res){
    const { siegeWeaponId, siegeWeapon, siegeWeaponCharacteristics } = req.body

    const owner = req.user._id
    
    const SWeaponModel = await Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')

    try{
      const foundSWeapon = await SWeaponModel.findOne({ _id: siegeWeaponId })
      if(!foundSWeapon){
        return res
        .status(404)
        .send({
          message:"Sorry, Siege Weapons not found"
        })
      }

      const sWeaponmodify = await SWeaponModel.updateOne(foundSWeapon, { siegeWeapon, siegeWeaponCharacteristics, owner })
      
      return res
      .status(201)
      .send(sWeaponmodify)

    }catch(error){
      return res
      .status(400)
      .send({
        message:'Sorry, somenthing went wrong with your Siege Weapons'
      })
    }
  }
}
export default ModifySiegeWeapon