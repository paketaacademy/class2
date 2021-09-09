import equipmentSchema from "../../models/equipments.js"
import { Mongoose } from "../../index.js"

const equipmentsRegisterController = {
  async creatEquipment(req, res) {
    const { kit, name, description } = req.body

    const Equipments = Mongoose.model('equipments', equipmentSchema)
    try {
      const findEquipment = await Equipments.findOne({ kit })
      if (findEquipment) {
        return res
          .status(409)
          .send({
            message: 'Existing equipment.'
          })
      }
      const equipment = new Equipments({ kit, name, description })
      await equipment.save()
      res
        .status(201)
        .send({
          message: 'Registration performed successfully.'
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

export default equipmentsRegisterController