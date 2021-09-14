import { Mongoose } from "../../index.js"
import SoldierSchema from "../../models/army/soldier.js"

const DeleteSoldier ={
  async DelSoldier(req, res){
    const { soldierId } = req.body
    
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')

    try{
      const foundSoldier = await SoldierModel.findOne({ _id: soldierId })
      if(!foundSoldier){
        return res
        .status(404)
        .send({
          message: 'Soldier not found in Database'
        })
      }
      const deleteSoldier = await SoldierModel.deleteOne(foundSoldier)
      return res
      .status(200)
      .send({
        message: 'Soldier deleted'
      })
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Sorry something went wrong'
      })
    }
  }
}
export default DeleteSoldier