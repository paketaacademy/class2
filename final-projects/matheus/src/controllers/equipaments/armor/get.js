import { Mongoose } from "../../../index.js"
import ArmorSchema from "../../../models/equipaments/armor-schema.js"

const GetArmor ={
  async GetOneArmor(req, res){
    const { idArmor } = req.body

    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')

    try{
      const foundArmor = await ArmorModel.findOne({ _id: idArmor })
      if(!foundArmor){
        return res
        .status(404)
        .send({
          message: 'Sorry Armor not found'
        })
      }

      return res
      .status(200)
      .send(foundArmor)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your armor'
      })
    }
  },
  async GetAllArmor(req, res){
    const owner = req.user._id

    const ArmorModel = await Mongoose.model('armor', ArmorSchema, 'armor')

    try{
      const foundArmors = await ArmorModel.find({ owner: owner })
      if(!foundArmors){
        return res
        .status(404)
        .send({
          message: 'Sorry Armor not found'
        })
      }

      return res
      .status(200)
      .send(foundArmors)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your armor'
      })
    }
  }
}
export default GetArmor