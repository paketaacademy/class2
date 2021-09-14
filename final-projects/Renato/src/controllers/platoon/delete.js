import platoonSchema from "../../models/platoon.js"
import { Mongoose } from "../../index.js"

const platoonDeleteController = {
  async deletePlatoon(req, res) {
    const platoonId = req.params.id
    try {
      const foundPlatoon = await Mongoose.model('platoons', platoonSchema).findById(platoonId)
      if (!foundPlatoon) {
        return res
          .status(404)
          .send({
            message: 'Platoon not found in database.'
          })
      }
      const deletePlatoon = await foundPlatoon.deleteOne({ _id: platoonId })
      return res
        .status(200)
        .send({
          message: `Platoon deleted from database ${deletePlatoon}.`
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

export default platoonDeleteController