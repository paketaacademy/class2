import { Mongoose } from "../../index.js"
import BattleSchema from "../../models/battle/battle-register.js"

const BattleRegister = {
  async Register(req, res) {
    const owner = req.user._id

    const BattleModel = Mongoose.model('battleRegister', BattleSchema, 'battleRegister')

    try {
      const foundBattle = await BattleModel.find({ owner: owner })
      if (!foundBattle) {
        return res
          .status(404)
          .send({
            message: "Sorry, you don't have any battles yeat"
          })
      }

      return res
        .status(200)
        .send(foundBattle)

    } catch (error) {
      return res
        .status(400)
        .send({
          message: "Sorry, something went wrong"
        })
    }
  }
}
export default BattleRegister