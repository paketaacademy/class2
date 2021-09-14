import { Mongoose } from "../../index.js"
import SoldierSchema from "../../models/army/soldier.js"
import SumArmy from "../../services/quantity-army.js"
import FranceArmy from "../../services/france-army.js"
import BattleSchema from "../../models/battle/battle-register.js"
import SiegeWeaponsSchema from "../../models/equipaments/siege-weapons.js"


const SetWar = {
  async War(req, res) {
    const owner = req.user._id
    const { quantFranceArcher, quantFranceVillager, quantFranceKnight, quantFranceSwordMaster, quantSiegeWeaponFrance, battlePalce, quantEnglandArcher, quantEnglandVillager, quantEnglandKnight, quantEnglandSwordMaster, quantSiegeWeaponEngland } = req.body
    const SoldierModel = Mongoose.model('soldier', SoldierSchema, 'soldier')
    const SiegeWeaponModel = Mongoose.model('siegeWeapon', SiegeWeaponsSchema, 'siegeWeapon')
    const BattleModel = Mongoose.model('battleRegister', BattleSchema, 'battleRegister')

    try {
      const findSiegeWeapon = await SiegeWeaponModel.find({})
      const findArcher = await SoldierModel.find({ typeSoldier: { $in: 'archer' } })
      const findKnight = await SoldierModel.find({ typeSoldier: { $in: 'knight' } })
      const findVillager = await SoldierModel.find({ typeSoldier: { $in: 'villager' } })
      const findSM = await SoldierModel.find({ typeSoldier: { $in: 'sword master' } })
      
      if (quantSiegeWeaponEngland > findSiegeWeapon.length) {
        return res
          .status(400)
          .send({
            message: "Sorry you don't have that mutch Siege Weapons"
          })
      }

      if (quantEnglandArcher > findArcher.length) {
        return res
          .status(400)
          .send({
            message: "Sorry, you don't have that mutch Archers"
          })
      }
      if (quantEnglandVillager > findVillager.length) {
        return res
          .status(400)
          .send({
            message: "Sorry, you don't have that mutch Villager"
          })
      }
      if (quantEnglandKnight > findKnight.length) {
        return res
          .status(400)
          .send({
            message: "Sorry, you don't have that mutch Knight"
          })
      }
      if (quantEnglandSwordMaster > findSM.length) {
        return res
          .status(400)
          .send({
            message: "Sorry, you don't have that mutch Sword Master"
          })
      }

      const totalEnglandArmy = SumArmy(parseInt(quantEnglandSwordMaster), parseInt(quantEnglandArcher), parseInt(quantEnglandVillager), parseInt(quantEnglandKnight))

      const totalFranceArmy = SumArmy(parseInt(quantFranceArcher), parseInt(quantFranceVillager), parseInt(quantFranceKnight), parseInt(quantFranceSwordMaster))

      const battle = await BattleModel.create({ quantEnglandSwordMaster, quantEnglandArcher, quantEnglandVillager, quantEnglandKnight, totalEnglandArmy, quantSiegeWeaponEngland, quantFranceArcher, quantFranceVillager, quantFranceKnight, quantFranceSwordMaster, quantSiegeWeaponFrance, totalFranceArmy, battlePalce, owner })


      return res
        .status(200)
        .send(battle)

    } catch (error) {
      console.log(error)
      return res
        .status(400)
        .send({
          message: 'Something went wrong'
        })
    }
  }
}

export default SetWar