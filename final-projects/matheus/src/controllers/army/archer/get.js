import { Mongoose } from "../../../index.js"
import ArcherSchema from "../../../models/army/archer.js"


const GetArcher = {
  async GetOneArcher(req, res){
    const { idArcher } = req.body
    const ArcherModel = await Mongoose.model('archer', ArcherSchema, 'archer' )

    try{
      const foundArcher = await ArcherModel.findOne({ _id: idArcher })
      if(!foundArcher){
        return res
        .status(404)
        .send({
          message: 'Sorry, Archer not found'
        })
      }
      return res
      .status(200)
      .send(foundArcher)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  },

  async GetAllArchers(req, res){
    const typeSoldier = 'archer'
    const ArcherModel = await Mongoose.model('archer', ArcherSchema, 'archer' )

    try{
      const foundArchers = await ArcherModel.find({ typeSoldier: typeSoldier })
      if(!foundArchers){
        return res
        .status(404)
        .send({
          message: 'Sorry, thers no archer in our database'
        })
      }
      return res
      .status(200)
      .send(foundArchers)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  }
}
export default GetArcher