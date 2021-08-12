import app from "./configs/app.js"
import { Mongoose, WalletSchema } from './configs/db.js'
import tokenValidation from "./configs/token-validation.js"

app.post('/balance', tokenValidation, async (req, res) => {
 
  const idUser = req.user._id
  const { balance} = req.body

  if(balance > 0){

    const Wallets = Mongoose.model('wallets', WalletSchema, 'wallets')
    
    try {
      const foundWallet = await Wallets.findOne({ idUser: idUser }).exec()
      
      if(foundWallet){

        const filter = { idUser: idUser }
        const update = { balance: foundWallet.balance ? new Number(balance) + foundWallet.balance : new Number(balance)};

        await Wallets.updateOne(filter, update, {
          returnOriginal: false
        })

        return res.status(201).send('Saldo inserido com sucesso!')
      }    

      const wallet = new Wallets({ idUser, balance })
      await wallet.save()
      return res.status(201).send('Carteira criada e Saldo inserido com sucesso!')

    } catch (err) {
      res.send(err)
    }
  }
  res.status(404).send('O valor do saldo deve ser maior que 0!')
})

export default app