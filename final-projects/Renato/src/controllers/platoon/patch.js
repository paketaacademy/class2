import platoonSchema from "../../models/platoon.js"
import { Mongoose } from "../../index.js"

const platoonPatchController = {
  async patchPlatoon(req, res) {

    const { platoonCommander, soldiers } = req.body
    const platoonId = req.params.id

    try {
      const foundPlatoon = await Mongoose.model('platoons', platoonSchema).findById(platoonId)

      if (!foundPlatoon) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      await foundPlatoon.updateOne({
        user: platoonId,
        $set: {
          platoonCommander,
          soldiers
        }
      })
      return res
        .status(200)
        .send(foundPlatoon)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default platoonPatchController