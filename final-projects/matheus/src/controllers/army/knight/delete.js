import { Mongoose } from "../../../index.js"
import KnightSchema from "../../../models/army/knight.js"

const KnightDel ={
  async KinghtDelete(req, res){
    const { knightId } = req.body
    
    const KnightModel = await Mongoose.model('knight', KnightSchema, 'knight')

    try{
      const foundKnight = await KnightModel.findOne({ _id: knightId })
      if(!foundKnight){
        return res
        .status(404)
        .send({
          message: 'Knight not found in Database'
        })
      }
      const deleteKnight = await KnightModel.deleteOne(foundKnight)
      return res
      .status(200)
      .send({
        message: 'Knight deleted'
      })
    }catch(error){
      return res
      .status(400)
      .send({
        message: 'Something went wrong'
      })
    }
  }
}
export default KnightDel