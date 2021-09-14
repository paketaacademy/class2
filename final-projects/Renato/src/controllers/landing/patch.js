import landingSchema from "../../models/landing.js"
import { Mongoose } from "../../index.js"

const landingPatchController = {
  async patchLanding(req, res) {

    const { namePlatoon, nameVehicle, landingPlace, arrivalTime } = req.body
    const landingId = req.params.id

    try {
      const foundLanding = await Mongoose.model('landing', landingSchema).findById(landingId)

      if (!foundLanding) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      await foundLanding.updateOne({
        user: landingId,
        $set: {
          namePlatoon, 
          nameVehicle, 
          landingPlace, 
          arrivalTime
        }
      })
      return res
        .status(200)
        .send(foundLanding)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default landingPatchController