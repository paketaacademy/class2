import app from "./configs/app.js"
import { Mongoose, UserSchema, WalletSchema } from './configs/db.js'
import tokenValidation from './configs/token-validation.js'

app.get('/profile', tokenValidation, async (req, res) => {
  
  const idUser = req.user._id

  const Users = Mongoose.model('users', UserSchema, 'users')
  const Wallets = Mongoose.model('wallets', WalletSchema, 'wallets')

  try{

    const foundUser = await Users.findOne({ _id: idUser }).exec()

    if(foundUser){
      const emailUser = foundUser.email

      const foundWallet = await Wallets.findOne({ idUser: idUser }).exec()
      if(foundWallet){
        const balanceUser = foundWallet.balance
        const cryptoUser = foundWallet.cryptocurrencies
        
        res.status(200).send({ emailUser, balanceUser, cryptoUser })
      }
    }

  } catch (err) {
    res.send(err)
  }  

})

export default app