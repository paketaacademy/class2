import app from "./configs/app.js"
import { Mongoose, WalletSchema } from './configs/db.js'
import tokenValidation from "./configs/token-validation.js"

app.post('/balance', tokenValidation, async (req, res) => {
 
  const { balance } = req.body
  const idUser = req.user._id

  if(balance > 0){

    const Wallets = Mongoose.model('wallets', WalletSchema, 'wallets')
    
    try {
      const foundWallet = await Wallets.findOne({ idUser: idUser }).exec()
      
      if(foundWallet){

        const filter = { idUser: idUser }
        const update = { balance: foundWallet.balance ? balance + foundWallet.balance : balance};

        await Wallets.updateOne(filter, update, {
          returnOriginal: false
        })

        return res.status(201).send('Saldo inserido com sucesso!')
      }

      return res.status(404).send('Carteira não encontrada!')

    } catch (err) {
      res.send(err)
    }
  }
  res.status(404).send('O valor do saldo deve ser maior que 0!')
})

export default app