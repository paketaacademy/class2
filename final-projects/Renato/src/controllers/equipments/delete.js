import equipmentSchema from "../../models/equipments.js"
import { Mongoose } from "../../index.js"

const equipmentDeleteController = {
  async deleteEquipment(req, res) {
    const equipmentId = req.params.id
    try {
      const foundEquipment = await Mongoose.model('equipments', equipmentSchema).findById(equipmentId)
      if (!foundEquipment) {
        return res
          .status(404)
          .send({
            message: 'Equipment not found in database.'
          })
      }
      const deleteEquipment = await foundEquipment.deleteOne({ _id: equipmentId })
      return res
        .status(200)
        .send({
          message: `Equipment deleted from database ${deleteEquipment}.`
        })
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default equipmentDeleteController