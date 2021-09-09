import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const GetSiegeWeapon = {
  async GetOneSiegeWeapon(req, res){
    const { idSiegeWeapon } = req.body
    
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
      
      return res
      .status(201)
      .send(foundSWeapon)

    }catch(error){
      console.log(error)
      return res
      .status(400)
      .send({
        message:'Somenthing went wrong with your weapon'
      })
    }
  },
  async GetAllSiegeWeapon(req, res){
    const owner = req.user._id
    
    const SWeaponModel = await Mongoose.model('siege-weapon', SiegeWeaponsSchema, 'siege-weapon')

    try{
      const foundSWeapons = await SWeaponModel.find({ owner: owner })
      if(!foundSWeapons){
        return res
        .status(404)
        .send({
          message:"Sorry, thers no weapons in our database"
        })
      }
      
      return res
      .status(201)
      .send(foundSWeapons)

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
export default GetSiegeWeapon