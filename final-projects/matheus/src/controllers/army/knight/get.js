import { Mongoose } from "../../../index.js"
import KnightSchema from "../../../models/army/knight.js"


const GetKnight = {
  async GetOneKnight(req, res){
    const { idKnight } = req.body
    const KnightModel = await Mongoose.model('knight', KnightSchema, 'knight' )

    try{
      const foundKnight = await KnightModel.findOne({ _id: idKnight })
      if(!foundKnight){
        return res
        .status(404)
        .send({
          message: 'Sorry, Knight not found'
        })
      }
      return res
      .status(200)
      .send(foundKnight)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  },

  async GetAllKnight(req, res){
    const typeSoldier = 'knight'
    const KnightModel = await Mongoose.model('knight', KnightSchema, 'knight' )

    try{
      const foundKnight = await KnightModel.find({ typeSoldier: typeSoldier })
      if(!foundKnight){
        return res
        .status(404)
        .send({
          message: 'Sorry, thers no Knight in our database'
        })
      }
      return res
      .status(200)
      .send(foundKnight)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  }
}
export default GetKnight