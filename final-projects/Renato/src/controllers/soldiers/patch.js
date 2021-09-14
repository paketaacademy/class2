import { Mongoose } from "../../index.js"
import soldierSchema from "../../models/soldiers.js"
import equipmentSchema from "../../models/equipments.js"

const soldierPatchController = {
  async patchSoldier(req, res) {

    const { age, militarRank } = req.body
    const soldierId = req.params.id
    const equipmentId = req.body
    console.log(equipmentId)

    try {
      const foundSoldiers = await Mongoose.model('soldiers', soldierSchema).findById(soldierId)

      if (!foundSoldiers) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      const foundEquipment = await Mongoose.model('equipments', equipmentSchema).findById(equipmentId)

      if (!foundEquipment) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      await foundSoldiers.updateOne({
        user: soldierId,
        $set: {
          age,
          militarRank,
          equipment: equipmentId
        }
      })
      return res
        .status(200)
        .send(foundSoldiers)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default soldierPatchController