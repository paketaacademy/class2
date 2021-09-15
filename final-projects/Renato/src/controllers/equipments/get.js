import equipmentSchema from "../../models/equipments.js"
import { Mongoose } from "../../index.js"

const equipmentGetController = {
  async getEquipment(req, res) {
    const equipmentId = req.params.id
    const equipments = await Mongoose.model('equipments', equipmentSchema)

    try {
      const foundEquipment = await equipments.findById(equipmentId)
      if (!foundEquipment) {
        return res
          .status(404)
          .send({
            message: 'There is no such equipment.'
          })
      }
      return res
        .status(200)
        .send(foundEquipment)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}`
        })
    }
  },
  async getAllEquipments(req, res) {
    const AllEquipments = await Mongoose.model('equipments', equipmentSchema)
    try {
      const foundEquipments = await AllEquipments.find()
      if (!foundEquipments) {
        return res
          .status(404)
          .send({
            message: 'There is no such equipments.'
          })
      }
      return res
        .status(200)
        .send(foundEquipments)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}`
        })
    }
  }
}

export default equipmentGetController