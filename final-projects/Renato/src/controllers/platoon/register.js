import platoonSchema from "../../models/platoon.js"
import soldierSchema from "../../models/soldiers.js"
import { Mongoose } from "../../index.js"

const platoonRegisterController = {
  async creatEquipment(req, res) {
    const { namePlatoon, platoonCommander, soldiers } = req.body
    const soldierId = req.body

    const Soldiers = Mongoose.model ('soldiers', soldierSchema)
    const Platoons = Mongoose.model('platoons', platoonSchema)

    try {
      const findPlatoon= await Platoons.findOne({namePlatoon})
      const findSoldier = await Soldiers.findOne(soldierId)
      if (findPlatoon) {
        return res
          .status(409)
          .send({
            message: 'Existing platoon.'
          })
      }
      if(findSoldier) {
        return res
        .status(409)
        .send({
          message: 'Soldier registered in another platoon'
        })
      } 

      const platoon = new Platoons({ namePlatoon, platoonCommander, soldiers })
      await platoon.save()
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

export default platoonRegisterController