import landingSchema from "../../models/landing.js"
import { Mongoose } from "../../index.js"

const landingDeleteController = {
  async deleteLanding(req, res) {
    const landingId = req.params.id
    try {
      const foundLanding = await Mongoose.model('landing', landingSchema).findById(landingId)
      if (!foundLanding) {
        return res
          .status(404)
          .send({
            message: 'Landing not found in database.'
          })
      }
      const deleteLanding = await foundLanding.deleteOne({ _id: laindgId })
      return res
        .status(200)
        .send({
          message: `Landing deleted from database ${deleteLanding}.`
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

export default landingDeleteController