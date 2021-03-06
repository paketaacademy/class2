import { Mongoose } from "../../index.js"
import soldierSchema from "../../models/soldiers.js"

const soldierGetController = {
  async getSoldier(req, res) {
    const soldierId = req.params.id
    const Soldiers = await Mongoose.model('soldiers', soldierSchema)
    try {
      const foundSoldier = await Soldiers.findById(soldierId)
      if (!foundSoldier) {
        return res
          .status(404)
          .send({
            message: 'There is no such soldier.'
          })
      }
      return res
        .status(200)
        .send(foundSoldier)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}.`
        })
    }
  },
  async getAllSoldiers(req, res) {
    const AllSoldiers = await Mongoose.model('soldiers', soldierSchema)
    try {
      const foundSoldiers = await AllSoldiers.find()
      if (!foundSoldiers) {
        return res
          .status(404)
          .send({
            message: 'There is no such soldier.'
          })
      }
      return res
        .status(200)
        .send(foundSoldiers)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has occurred ${error}`
        })
    }
  }
}

export default soldierGetController
