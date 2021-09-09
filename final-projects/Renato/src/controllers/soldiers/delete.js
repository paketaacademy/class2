import { Mongoose } from "../../index.js"
import soldierSchema from "../../models/soldiers.js"

const soldierDeleteController = {
  async deleteSoldier(req, res) {
    const soldierId = req.params.id

    try {
      const deleteSoldier = await Mongoose.model('soldiers', soldierSchema).deleteOne({ _id: soldierId })
      if (deleteSoldier) {
        return res
          .status(404)
          .send({
            message: 'Soldier not found in database.'
          })
      }
      return res
        .status(200)
        .send({
          message: 'Soldier deleted from database.'
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

export default soldierDeleteController