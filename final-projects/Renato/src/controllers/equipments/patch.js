import equipmentSchema from "../../models/equipments.js"
import { Mongoose } from "../../index.js"

const equipmentPatchController = {
  async patchEquipment(req, res) {
    const { description } = req.body
    const equipmentId = req.params.id

    try {
      const foundEquipment = await Mongoose.model('equipments', equipmentSchema).findById(equipmentId)

      if (!foundEquipment) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      await foundEquipment.updateOne({
        user: equipmentId,
        $set: {
          description
        }
      })
      return res
        .status(200)
        .send(foundEquipment)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default equipmentPatchController