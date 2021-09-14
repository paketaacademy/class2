import { Mongoose } from "../../index.js"
import platoonSchema from "../../models/platoon.js"

const platoonGetController = {
  async getPlatoon(req, res) {
    const platoonId = req.params.id
    const Platoons = await Mongoose.model('platoons', platoonSchema)
    try {
      const foundPlatoon = await Platoons.findById(platoonId)
      if (!foundPlatoon) {
        return res
          .status(404)
          .send({
            message: 'There is no such platoon.'
          })
      }
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
  },
  async getAllPlatoon(req, res) {
    const AllPlatoon = await Mongoose.model('platoons', platoonSchema)

    try {
      const foundPlatoons = await AllPlatoon.find()
      if (!foundPlatoons) {
        return res
          .status(404)
          .send({
            message: 'There is no such vehicle.'
          })
      }
      return res
        .status(200)
        .send(foundPlatoons)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: `An error has ocorrued ${error}`
        })
    }
  }
}

export default platoonGetController