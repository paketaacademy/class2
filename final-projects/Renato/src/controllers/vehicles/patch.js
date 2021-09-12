import vehicleSchema from "../../models/vehicles.js"
import { Mongoose } from "../../index.js"

const vehiclePatchController = {
  async patchEquipment(req, res) {
    const { description,weight, lenght, width, height, crew, armor, armament } = req.body
    const vehicleId = req.params.id

    try {
      const foundVehicle = await Mongoose.model('vehicle', vehicleSchema).findById(vehicleId)

      if (!foundVehicle) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      await foundVehicle.updateOne({
        user: vehicleId,
        $set: {
          description, 
          weight, 
          lenght, 
          width, 
          height, 
          crew, 
          armor, 
          armament
        }
      })
      return res
        .status(200)
        .send(foundVehicle)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default vehiclePatchController