import { Mongoose } from "../../index.js"
import userSchema from "../../models/user-schema.js"

export const UsersControllerGet = {
  async GetUsers(req, res) {
    try {
      const query = await Mongoose.model('users', userSchema, 'users').find()
      if (!query) {
        return res
          .status(404)
          .send({ message: "Nenhum usuário encontrado" })
      }

      return res
        .status(200)
        .send(query)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `Erro inesperado - ${error}` })
    }
  }
}