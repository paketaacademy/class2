import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const SiegeWeapon = {
  async CreateSiegeWeapon(req, res){
    const { siegeWeapon, siegeWeaponCharacteristics } = req.body

    const owner = req.user._id
    
    const SWeaponModel = await Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')

    try{
      const newSWeapon = await SWeaponModel.create({ siegeWeapon, siegeWeaponCharacteristics, owner })
      
      return res
      .status(201)
      .send(newSWeapon)

    }catch(error){
      return res
      .status(400)
      .send({
        message:'Sorry, somenthing went wrong with your Siege Weapons'
      })
    }
  }
}
export default SiegeWeapon