import { Mongoose } from "../../index.js"
import ArcherSchema from "../../models/army/archer.js"
import VillagerSchema from "../../models/army/villager.js"
import KnightSchema from "../../models/army/knight.js"
import SMSchema from "../../models/army/swordMaster.js"
import db from 'mongodb'


const GetArmy = {
  async Army(req, res){
    const owner = req.user._id
    const ArcherModel = await Mongoose.model('archer', ArcherSchema, 'archer' )
    const KnightModel = await Mongoose.model('knight', KnightSchema, 'knight' )
    const VillagerModel = await Mongoose.model('villager', VillagerSchema, 'villager' )
    const SMModel = await Mongoose.model('sword-master', SMSchema, 'sword-master' )

    try{
      const foundArchers = await ArcherModel.find({ owner: owner })
      const foundKnight = await KnightModel.find({ owner: owner })
      const foundVillager = await VillagerModel.find({ owner: owner })
      const foundSM = await SMModel.find({ owner: owner })
      
      

      const number = ArcherModel.aggregate([{ $group:{ owner:{ owner: owner },count:{$sum:1} } }])
      console.log(number)
      return res
      .status(200)
      .send({
        "oi":number,
        "Your villagers": foundVillager,
        "Your Sword Masters": foundSM,
        "Your Knights": foundKnight,
        "Your Archers": foundArchers
      })

    }catch(error){
      console.log(error)
      return res
      .status(400)
      .send({
        message: 'Something went wrong'
      })
    }
  }
}
export default GetArmy