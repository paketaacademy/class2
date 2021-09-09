import { Mongoose } from "../../../index.js"
import VillagerSchema from "../../../models/army/villager.js"

const VillagerDel ={
  async VillagerDelete(req, res){
    const { villagerId } = req.body
    
    const VillagerModel = await Mongoose.model('villager', VillagerSchema, 'villager')

    try{
      const foundVillager = await VillagerModel.findOne({ _id: villagerId })
      if(!foundVillager){
        return res
        .status(404)
        .send({
          message: 'Villager not found in Database'
        })
      }
      const deleteVillager = await VillagerModel.deleteOne(foundVillager)
      return res
      .status(200)
      .send({
        message: 'Villager deleted'
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
export default VillagerDel