import { Mongoose } from "../../index.js"
import SoldierSchema from "../../models/army/soldier.js"
import EquipamentsSchema from "../../models/equipaments/equipments-schema.js"

const ModifySoldier = {
  async ModSoldier(req, res) {
    const { soldierId, typeSoldiers, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, mount, idEquipaments } = req.body

    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')
    const EquipModel = Mongoose.model('equipaments', EquipamentsSchema, 'equipaments')
    const typeSoldier= typeSoldiers.toLowerCase()

    try {
      const foundSoldier = await SoldierModel.findOne({ _id: soldierId })
      if (!foundSoldier) {
        return res
          .status(404)
          .send({
            message: "Soldier not found"
          })
      }
      if(typeSoldier != 'sword master' & typeSoldier != 'archer' & typeSoldier != 'knight' & typeSoldier != 'villager'){
        return res
        .status(400)
        .send({
          message: "Enter with a valid type of soldier"
        })
      }
      const equipaments = await EquipModel.find({ _id: { $in: idEquipaments } })
      const updateSoldier = await SoldierModel.updateOne(foundSoldier, { typeSoldier, ability, strength, dexterity, constitution, intelligence, wisdom, lifePoints, mount, equipaments })
      return res
        .status(200)
        .send(updateSoldier)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: 'Sorry, something went wrong'
        })
    }
  }
}
export default ModifySoldier