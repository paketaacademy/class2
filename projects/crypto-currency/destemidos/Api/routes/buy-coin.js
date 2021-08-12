import app from "./configs/app.js"
import { Mongoose, WalletSchema } from './configs/db.js'
import tokenValidation from './configs/token-validation.js'

app.post('/buycoin', tokenValidation, async (req, res) => {
 
  const { idCoin, nameCoin, buyPrice, priceCoin} = req.body
  const idUser = req.user._id

  if(buyPrice > 0 && priceCoin > 0){

    const Wallets = Mongoose.model('wallets', WalletSchema, 'wallets')

    try {

      const buyQuant = buyPrice / priceCoin

      const foundWallet = await Wallets.findOne({ idUser: idUser }).exec()
      
      if(foundWallet){
        foundWallet.balance -= buyPrice
        if(foundWallet.balance < 0){
          return res.status(409).send('Saldo insuficiente para realizar a compra!')
        }
        const hasCoin = await Wallets.findOne({ idUser: idUser,"cryptocurrencies.id": idCoin }).exec()
        
        if(hasCoin){

          const filterCoin = { idUser: idUser }
          foundWallet.cryptocurrencies.map(crypto => {
            if(crypto.id == idCoin){
              crypto.quant += buyQuant
            }
            return crypto})

          await Wallets.updateOne(filterCoin, foundWallet, {
            returnOriginal: false
          })

          return res.status(201).send('Moeda comprada com sucesso! Sua quantidade da mesma foi atualizada!')
        }

        const filterWallet = { idUser: idUser }

        foundWallet.cryptocurrencies.push({id: idCoin, name: nameCoin, quant: buyQuant})

        await Wallets.updateOne(filterWallet, foundWallet, {
          returnOriginal: false
        })

        return res.status(201).send('Moeda comprada e inserida em sua carteira com sucesso!')
      }    

      return res.status(404).send('Carteira não encontrada!')

    } catch (err) {
      res.send(err)
    }
  }
  res.status(404).send('Os valores precisam ser maiores que 0!')
})

export default app