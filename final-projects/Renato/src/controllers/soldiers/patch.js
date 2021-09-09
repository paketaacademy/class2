import { Mongoose } from "../../index.js"
import soldierSchema from "../../models/soldiers.js"

const soldierPatchController = {
  async patchSoldier(req, res) {

    const { age, militarRank } = req.body
    const soldierId = req.params.id

    try {
      const foundSoldiers = await Mongoose.model('soldiers', soldierSchema).findById(soldierId)

      if (!foundSoldiers) {
        return res
          .status(400)
          .send({
            message: `An error has occurred ${error}.`
          })
      }
      await foundSoldiers.updateOne({
        user: soldierId,
        $set: {
          age,
          militarRank
        }
      })
      return res
        .status(200)
        .send(foundSoldiers)

    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  }
}

export default soldierPatchController