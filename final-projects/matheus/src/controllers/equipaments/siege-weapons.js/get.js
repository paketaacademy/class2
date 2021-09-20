import { Mongoose } from "../../../index.js"
import SiegeWeaponsSchema from "../../../models/equipaments/siege-weapons.js"

const GetSiegeWeapon = {
  async GetOneSiegeWeapon(req, res){
    const siegeWeaponId = req.params.id
    
    const SWeaponModel = Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')

    try{
      const foundSWeapon = await SWeaponModel.findOne({ _id: siegeWeaponId })
      if(!foundSWeapon){
        return res
        .status(404)
        .send({
          message:"Sorry, Siege Weapons not found"
        })
      }
      
      return res
      .status(200)
      .send(foundSWeapon)

    }catch(error){
      return res
      .status(400)
      .send({
        message:'Sorry, somenthing went wrong with your Siege Weapons'
      })
    }
  },
  async GetByOwnerSiegeWeapon(req, res){
    const owner = req.user._id
    
    const SWeaponModel = Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')

    try{
      const foundSWeapons = await SWeaponModel.find({ owner: owner })
      if(!foundSWeapons){
        return res
        .status(404)
        .send({
          message:"Sorry, thers no Siege Weapons in our database"
        })
      }
      
      return res
      .status(200)
      .send(foundSWeapons)

    }catch(error){
      return res
      .status(400)
      .send({
        message:'Sorry, somenthing went wrong with your Siege Weapons'
      })
    }
  },
  async GetAllSiegeWeapon(req, res){
    
    const SWeaponModel = Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')

    try{
      const foundSWeapons = await SWeaponModel.find({})
      if(!foundSWeapons){
        return res
        .status(404)
        .send({
          message:"Sorry, thers no Siege Weapons in our database"
        })
      }
      
      return res
      .status(200)
      .send(foundSWeapons)

    }catch(error){
      return res
      .status(400)
      .send({
        message:'Sorry, somenthing went wrong with your Siege Weapons'
      })
    }
}}
export default GetSiegeWeapon