import vehicleSchema from "../../models/vehicles.js"
import { Mongoose } from "../../index.js"

const vehicleDeleteController = {
  async deleteVehicle(req, res) {
    const vehicleId = req.params.id
    try {
      const foundVehicle = await Mongoose.model('vehicle', vehicleSchema).findById(vehicleId)
      if (!foundVehicle) {
        return res
          .status(404)
          .send({
            message: 'Vehicle not found in database.'
          })
      }
      const deleteVehicle = await foundVehicle.deleteOne({ _id: vehicleId })
      return res
        .status(200)
        .send({
          message: `Vehicle deleted from database ${deleteVehicle}.`
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

export default vehicleDeleteController