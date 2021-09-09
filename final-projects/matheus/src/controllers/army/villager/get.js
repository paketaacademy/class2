import { Mongoose } from "../../../index.js"
import VillagerSchema from "../../../models/army/villager.js"


const GetVillager = {
  async GetOneVillager(req, res){
    const { idVillager } = req.body
    const VillagerModel = await Mongoose.model('villager', VillagerSchema, 'villager' )

    try{
      const foundVillager = await VillagerModel.findOne({ _id: idVillager })
      if(!foundVillager){
        return res
        .status(404)
        .send({
          message: 'Sorry, Villager not found'
        })
      }
      return res
      .status(200)
      .send(foundVillager)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  },

  async GetAllVillager(req, res){
    const typeSoldier = 'villager'
    const VillagerModel = await Mongoose.model('villager', VillagerSchema, 'villager' )

    try{
      const foundVillager = await VillagerModel.find({ typeSoldier: typeSoldier })
      if(!foundVillager){
        return res
        .status(404)
        .send({
          message: 'Sorry, thers no Sword Master in our database'
        })
      }
      return res
      .status(200)
      .send(foundVillager)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  }
}
export default GetVillager