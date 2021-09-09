import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const ModifySiegeWeapon = {
  async ModSiegeWeapon(req, res){
    const { idSiegeWeapon, siegeWeapon, siegeWeaponCharacteristics } = req.body

    const owner = req.user._id
    
    const SWeaponModel = await Mongoose.model('siege-weapon', SiegeWeaponsSchema, 'siege-weapon')

    try{
      const foundSWeapon = await SWeaponModel.findOne({ _id: idSiegeWeapon })
      if(!foundSWeapon){
        return res
        .status(404)
        .send({
          message:"Sorry, weapon not found"
        })
      }

      const sWeaponmodify = await SWeaponModel.updateOne(foundSWeapon, { siegeWeapon, siegeWeaponCharacteristics, owner })
      
      return res
      .status(201)
      .send(sWeaponmodify)

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
export default ModifySiegeWeapon