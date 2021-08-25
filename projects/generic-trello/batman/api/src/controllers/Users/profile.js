import { Mongoose } from '../../index.js'
import userSchema from '../../models/user-schema.js'

export const Profile ={
    
    async ProfileUser(req, res){
        const idUser = req.user._id
        const User = Mongoose.model('users', userSchema,'users')

        try{
            const foundUser = await User.findOne({ _id: idUser })
            if(!foundUser){
                return res
                .status(404)
                .send({
                    message: "Usuario não encontrado"
                })
            }

            return res
            .status(200)
            .send(foundUser)

        }catch(error){
            return res
            .status(400)
            .send({
                message: "Falha ao encontrar o usuario"
            })
        }
    }
}