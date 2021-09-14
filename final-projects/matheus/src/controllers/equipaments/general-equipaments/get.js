import { Mongoose } from "../../../index.js"
import EquipamentsSchema from "../../../models/equipaments/equipments-schema.js"

const GetEquipaments ={
  async GetOneEquipaments(req, res){
    const { equipamentsId } = req.body

    const EquipModel = await Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')

    try{
      const foundEquip = await EquipModel.findOne({ _id: equipamentsId })
      if(!foundEquip){
        return res
        .status(404)
        .send({
          message: 'Sorry Armor not found'
        })
      }

      return res
      .status(200)
      .send(foundEquip)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong with your armor'
      })
    }
  },
  async GetByOwnerEquipaments(req, res){
    const owner = req.user._id

    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')

    try{
      const foundEquip = await EquipModel.find({ owner: owner })
      if(!foundEquip || foundEquip.length == 0){
        return res
        .status(404)
        .send({
          message: "Sorry, Equipament not found, our you don't create any equipaments yeat"
        })
      }

      return res
      .status(200)
      .send(foundEquip)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong with your equipament'
      })
    }
  },
  async GetAllEquipaments(req, res){

    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')

    try{
      const foundEquip = await EquipModel.find({})
      if(!foundEquip || foundEquip.length == 0){
        return res
        .status(404)
        .send({
          message: "Sorry, Equipament not found, our you don't create any equipaments yeat"
        })
      }

      return res
      .status(200)
      .send(foundEquip)
    
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong with your equipament'
      })
    }
  }
}
export default GetEquipaments