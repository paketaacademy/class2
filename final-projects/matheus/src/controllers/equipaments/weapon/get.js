import { Mongoose } from "../../../index.js"
import WeaponSchema from "../../../models/equipaments/weapon-schema.js"

const GetWeapon = {
  async GetOneWeapon(req, res){
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
      
      return res
      .status(201)
      .send(foundWeapon)

    }catch(error){
      console.log(error)
      return res
      .status(400)
      .send({
        message:'Somenthing went wrong with your weapon'
      })
    }
  },
  async GetAllWeapon(req, res){
    const owner = req.user._id
    
    const WeaponModel = await Mongoose.model('weapon', WeaponSchema, 'weapon')

    try{
      const foundWeapons = await WeaponModel.find({ owner: owner })
      if(!foundWeapons){
        return res
        .status(404)
        .send({
          message:"Sorry, thers no weapons in our database"
        })
      }
      
      return res
      .status(201)
      .send(foundWeapons)

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
export default GetWeapon