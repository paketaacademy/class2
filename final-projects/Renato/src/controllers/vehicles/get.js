import { Mongoose } from "../../index.js"
import vehicleSchema from "../../models/vehicles.js"

const vehicleGetController = {
  async getVehicle(req, res) {
    const vehicleId = req.params.id
    const vehicles = await Mongoose.model('vehicles', vehicleSchema)

    try {
      const foundVehicles = await vehicles.findById(vehicleId)
      if (!foundVehicles) {
        return res
          .status(404)
          .send({
            message: 'There is no such vehicle.'
          })
      }
      return res
        .status(200)
        .send(foundVehicles)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}`
        })
    }
  },
  async getAllVehicle(req, res) {
    const vehicles = await Mongoose.model('vehicles', vehicleSchema)

    try {
      const foundVehicles = await vehicles.find()
      if (!foundVehicles) {
        return res
          .status(404)
          .send({
            message: 'There is no such vehicle.'
          })
      }
      return res
        .status(200)
        .send(foundVehicles)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}`
        })
    }
  }
}

export default vehicleGetController

