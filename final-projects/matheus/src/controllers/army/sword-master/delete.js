
import { Mongoose } from "../../../index.js"
import SMSchema from "../../../models/army/swordMaster.js"

const SMDel ={
  async SMDelete(req, res){
    const { SMId } = req.body
    
    const SMModel = await Mongoose.model('sword-master', SMSchema, 'sword-master')

    try{
      const foundSM = await SMModel.findOne({ _id: SMId })
      if(!foundSM){
        return res
        .status(404)
        .send({
          message: 'Sword Master not found in Database'
        })
      }
      const deleteSM = await SMModel.deleteOne(foundSM)
      return res
      .status(200)
      .send({
        message: 'Sword Master deleted'
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
export default SMDel