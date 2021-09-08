import soldiers from "../models/soldiers-schema.js"
import bcrypt from 'bcrypt'
import { Mongoose } from "../index.js"

const registerSoldiers = {

  async creatSoldier (req, res) {

    const { firstName, lastName, bloodType, patent, cpf } = req.body

    const salt = await bcrypt.genSalt(10)
    const cryptograf = await bcrypt.hash(req.body.password, salt)
    const password = cryptograf

    const Soldiers = Mongoose.model('soldiers', soldiers, 'soldiers')

    try{
      const findSoldier = await Soldiers.findOne ({ cpf: cpf })
      if(findSoldier) {
        return res
        .status(409)
        .send({
          message: 'Usuário já cadastrado'
        })
      }
      const soldier = new Soldiers({ firstName, lastName, bloodType, patent, cpf, password: password })
      await soldier.save()
      res
      .status(201)
      .send({
        message: 'Cadastro realizado com sucesso'
      })
    } catch (error) {
      return res
      .status(400)
      .send({
        message: `Ocorreu um erro ${error}.`
      })
    }
  }
}

export default registerSoldiers
