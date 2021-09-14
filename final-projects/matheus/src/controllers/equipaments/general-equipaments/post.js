import { Mongoose } from "../../../index.js"
import EquipamentsSchema from "../../../models/equipaments/equipments-schema.js"

const Equipaments ={
  async CreateEquipaments(req, res){
    const { equipaments, description } = req.body

    const owner = req.user._id

    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')

    try{
      const newEquipaments = await EquipModel.create({ equipaments, description, owner })

      return res
      .status(201)
      .send(newEquipaments)
    
    }catch(error){
      console.log(error)
      return res
      .status(400)
      .send({
        message: 'Sorry, something went wrong with your equipament'
      })
    }
  }
}
export default Equipaments