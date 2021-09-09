import { Mongoose } from "../../../index.js"
import SMSchema from "../../../models/army/swordMaster.js"


const GetSM = {
  async GetOneSM(req, res){
    const { idSM } = req.body
    const SMModel = await Mongoose.model('sword-master', SMSchema, 'sword-master' )

    try{
      const foundSM = await SMModel.findOne({ _id: idSM })
      if(!foundSM){
        return res
        .status(404)
        .send({
          message: 'Sorry, Sword Master not found'
        })
      }
      return res
      .status(200)
      .send(foundSM)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  },

  async GetAllSM(req, res){
    const typeSoldier = 'sword master'
    const SMModel = await Mongoose.model('sword-master', SMSchema, 'sword-master' )

    try{
      const foundSM = await SMModel.find({ typeSoldier: typeSoldier })
      if(!foundSM){
        return res
        .status(404)
        .send({
          message: 'Sorry, thers no Sword Master in our database'
        })
      }
      return res
      .status(200)
      .send(foundSM)
    }catch(error){
      return res
      .status(400)
      .send({
        message: "Sorry, something wet wrong"
      })
    }
  }
}
export default GetSM