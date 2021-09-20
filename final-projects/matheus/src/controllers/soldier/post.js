import { Mongoose } from "../../index.js"
import EquipamentsSchema from "../../models/equipaments/equipments-schema.js"
import SoldierSchema from "../../models/army/soldier.js"

const Soldier ={
  async CreateSoldier(req, res){
    const { typeSoldiers, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, mount, idEquipaments } = req.body
    const owner = req.user._id
    const typeSoldier= typeSoldiers.toLowerCase()

    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')

    try{
      const equipaments = await EquipModel.find({ _id: { $in:idEquipaments } })
      if(typeSoldier != 'sword master' & typeSoldier != 'archer' & typeSoldier != 'knight' & typeSoldier != 'villager'){
        return res
        .status(400)
        .send({
          message: "Enter with a valid type of soldier"
        })
      }
      const soldier = await SoldierModel.create({ typeSoldier, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, mount, equipaments, owner })
        return res
        .status(201)
        .send(soldier)
      
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something went wrong with your Soldier"
      })
    }
  }
}
export default Soldier