import { Mongoose } from "../../../index.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const Weapon = {
  async CreateWeapon(req, res){
    const { weapon, weaponCharacteristics } = req.body

    const owner = req.user._id
    
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const newWeapon = await WeaponModel.create({ weapon, weaponCharacteristics, owner })
      
      return res
      .status(201)
      .send(newWeapon)

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
export default Weapon