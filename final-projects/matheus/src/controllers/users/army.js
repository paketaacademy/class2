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
      const numerOfKnights = await KnightModel.count()
      const numberOfArchers = await ArcherModel.count()
      const numberOfSM = await SMModel.count()
      const numberOfVilagers = await VillagerModel.count()
      const TotalArmy = numberOfSM + numberOfArchers + numberOfVilagers + numerOfKnights 

      return res
      .status(200)
      .send({
        "Quantity of Archers": numberOfArchers,
        "Quantity of Knights": numerOfKnights,
        "Quantity of Sword Masters": numberOfSM,
        "Quantity of Villagers": numberOfVilagers,
        "The quantity of soldiers in your Army is": TotalArmy
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
export default GetArmy