import vehicleSchema from "../../models/vehicles.js"
import { Mongoose } from "../../index.js"

const vehicleRegisterController = {
  async creatVehicle(req, res) {
    const { name, description, weight, lenght, width, height, crew, armor, armament} = req.body

    const Vehicles = Mongoose.model('vehicle', vehicleSchema)
    try {
      const findVehicle = await Vehicles.findOne({ name })
      if (findVehicle) {
        return res
          .status(409)
          .send({
            message: 'Existing vehicle.'
          })
      }
      const vehicle = new Vehicles({ name, description, weight, lenght, width, height, crew, armor, armament})
      await vehicle.save()
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

export default vehicleRegisterController