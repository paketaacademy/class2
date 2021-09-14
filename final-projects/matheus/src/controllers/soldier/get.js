import { Mongoose } from "../../index.js"
import SoldierSchema from "../../models/army/soldier.js"

const GetSoldier = {
  async GetOneSoldier(req, res) {
    const { soldierId } = req.body
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')

    try {
      const foundSoldier = await SoldierModel.findOne({ _id: soldierId })
      if (!foundSoldier) {
        return res
          .status(404)
          .send({
            message: 'Sorry, Soldier not found'
          })
      }
      return res
        .status(200)
        .send(foundSoldier)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: "Sorry, something went wrong"
        })
    }
  },

  async GetByOwnerSoldiers(req, res) {
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')
    const owner = req.user._id

    try {
      const foundSoldiers = await SoldierModel.find({ owner: owner })
      if (!foundSoldiers) {
        return res
          .status(404)
          .send({
            message: "Sorry, thers no soldier in our database, our you don't create one yeat"
          })
      }
      return res
        .status(200)
        .send(foundSoldiers)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: "Sorry, something went wrong"
        })
    }
  },
  async GetAllSoldiers(req, res) {
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')

    try {
      const foundSoldiers = await SoldierModel.find({})
      if (!foundSoldiers) {
        return res
          .status(404)
          .send({
            message: 'Sorry, thers no soldier in our database'
          })
      }
      return res
        .status(200)
        .send(foundSoldiers)
    } catch (error) {
      return res
        .status(400)
        .send({
          message: "Sorry, something went wrong"
        })
    }
  },
  async GetCategorySoldiers(req, res) {
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')

    try {
      const foundSoldiers = await SoldierModel.find({})
      if (!foundSoldiers) {
        return res
          .status(404)
          .send({
            message: 'Sorry, thers no soldier in our database'
          })
      }
      const findArcher = await SoldierModel.find({ typeSoldier: { $in: 'archer' } })
      const findKnight = await SoldierModel.find({ typeSoldier: { $in: 'knight' } })
      const findVillager = await SoldierModel.find({ typeSoldier: { $in: 'villager' } })
      const findSM = await SoldierModel.find({ typeSoldier: { $in: 'sword master' } })
      return res
        .status(200)
        .send({
          "Archer": findArcher,
          "knight": findKnight,
          "Villager": findVillager,
          "Sword Master": findSM
        })
    } catch (error) {
      return res
        .status(400)
        .send({
          message: "Sorry, something went wrong"
        })
    }
  }
}

export default GetSoldier