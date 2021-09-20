import soldierSchema from "../../models/soldiers.js"
import { Mongoose } from "../../index.js"

const soldierRegisterController = {
  async creatSoldier(req, res) {
    const { name, age, cpf, bloodType, militarRank, equipment } = req.body
    const Soldiers = Mongoose.model('soldiers', soldierSchema)

    try {
      const findSoldier = await Soldiers.findOne({ cpf })
      if(findSoldier) {
        return res
          .status(409)
          .send({
            message: 'Existing soldier.'
          })
      }
      const soldier = new Soldiers({ name, age, cpf, bloodType, militarRank, equipment })
      await soldier.save()
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

export default soldierRegisterController