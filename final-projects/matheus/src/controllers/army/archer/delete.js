import { Mongoose } from "../../../index.js"
import ArcherSchema from "../../../models/army/archer.js"

const ArcherDel ={
  async ArcherDelete(req, res){
    const { archerId } = req.body
    
    const ArcherModel = await Mongoose.model('archer', ArcherSchema, 'archer')

    try{
      const foundArcher = await ArcherModel.findOne({ _id: archerId })
      if(!foundArcher){
        return res
        .status(404)
        .send({
          message: 'Archer not found in Database'
        })
      }
      const deleteArcher = await ArcherModel.deleteOne(foundArcher)
      return res
      .status(200)
      .send({
        message: 'Archer deleted'
      })
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong'
      })
    }
  }
}
export default ArcherDel