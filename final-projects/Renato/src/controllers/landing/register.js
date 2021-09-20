import landingSchema from "../../models/landing.js"
import { Mongoose } from "../../index.js"

const landingRegisterController = {
  async creatLanding(req, res) {
    const { namePlatoon, nameVehicle, landingPlace, arrivalTime} = req.body
    const Landing = Mongoose.model('landing', landingSchema)
    try {
      const findLanding = await Landing.findOne({ namePlatoon })
      if (findLanding) {
        return res
          .status(400)
          .send({
            message: 'Existing platoon.'
          })
      }
      const landings = new Landing({ namePlatoon, nameVehicle, landingPlace, arrivalTime})
      await landings.save()
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

export default landingRegisterController