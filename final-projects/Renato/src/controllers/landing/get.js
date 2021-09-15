import { Mongoose } from "../../index.js"
import landingSchema from "../../models/landing.js"

const landingGetController = {
  async getLanding(req, res) {
    const landingId = req.params.id
    const Landings = await Mongoose.model('landing', landingSchema)
    try {
      const foundLanding = await Landings.findById(landingId)
      if (!foundLanding) {
        return res
          .status(404)
          .send({
            message: 'There is no such landing.'
          })
      }
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
  },
  async getAllLandings(req, res) {
    const AllLandings = await Mongoose.model('landing', landingSchema)

    try {
      const foundLandings = await AllLandings.find()
      if (!foundLandings) {
        return res
          .status(404)
          .send({
            message: 'There is no such landings.'
          })
      }
      return res
        .status(200)
        .send(foundLandings)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}`
        })
    }
  }
}

export default landingGetController