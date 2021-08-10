import app from "./configs/app.js"
import { Mongoose, WalletSchema } from './configs/db.js'
app.post('/balance', async (req, res) => {
 
  const { idUser, balance} = req.body

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

    const wallet = new Wallets({ idUser, balance })
    await wallet.save()
    res.status(201).send('Carteira criada e Saldo inserido com sucesso!')

  } catch (err) {
    res.send(err)
  }
})

export default app