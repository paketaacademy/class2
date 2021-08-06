import app from "./configs/app.js"
import { Mongoose, WalletSchema } from './configs/db.js'
app.post('/buycoin', async (req, res) => {
 
  const { id, nameCoin, buyPrice, priceCoin} = req.body

  const Wallets = Mongoose.model('wallets', WalletSchema, 'wallets')
  
  try {

    const buyQuant = buyPrice / priceCoin

    const foundWallet = await Wallets.findOne({ id: id }).exec()
    
    if(foundWallet){
      foundWallet.balance -= buyPrice
      if(foundWallet.balance < 0){
        return res.status(409).send('Saldo insuficiente para realizar a compra!')
      }
      const hasCoin = await Wallets.findOne({ id: id,"cryptocurrencies.name": nameCoin }).exec()
      
      if(hasCoin){

        const filterCoin = { id: id }
        foundWallet.cryptocurrencies.map(crypto => {
          if(crypto.name == nameCoin){
            crypto.quant += buyQuant
          }
          return crypto})

        await Wallets.updateOne(filterCoin, foundWallet, {
          returnOriginal: false
        })

        return res.status(201).send('Moeda comprada com sucesso! Sua quantidade da mesma foi atualizada!')
      }

      const filterWallet = { id: id }

      foundWallet.cryptocurrencies.push({name: nameCoin, quant: buyQuant})

      await Wallets.updateOne(filterWallet, foundWallet, {
        returnOriginal: false
      })

      return res.status(201).send('Moeda comprada e inserida em sua carteira com sucesso!')
    }    

    res.status(404).send('Carteira não encontrada!')

  } catch (err) {
    res.send(err)
  }
})

export default app