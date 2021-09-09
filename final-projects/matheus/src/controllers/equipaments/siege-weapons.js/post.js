import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const SiegeWeapon = {
  async CreateSiegeWeapon(req, res){
    const { siegeWeapon, siegeWeaponCharacteristics } = req.body

    const owner = req.user._id
    
    const SWeaponModel = await Mongoose.model('siege-weapon', SiegeWeaponsSchema, 'siege-weapon')

    try{
      const newSWeapon = await SWeaponModel.create({ siegeWeapon, siegeWeaponCharacteristics, owner })
      
      return res
      .status(201)
      .send(newSWeapon)

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
export default SiegeWeapon