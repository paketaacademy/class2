import app from './configs/app.js'
import { Mongoose, WalletSchema } from './configs/db.js'
import tokenValidation from './configs/token-validation.js'

app.post('/salecoin', tokenValidation, async (req, res) => {

  const { priceCoin, quantSaleCoin, idCoin } = req.body
  const idUser = req.user._id
  
  if(quantSaleCoin >= 0){

    const Wallets = Mongoose.model('wallets', WalletSchema, 'wallets')
    const foundWallet = await Wallets.findOne({ idUser: idUser }).exec()

    if(foundWallet) {
      const hasCoin = foundWallet.cryptocurrencies.find(crypto => {
        return crypto.id == idCoin
      })

      if(hasCoin) {

        if(hasCoin.quant < quantSaleCoin){
          return res.status(404).send('Quantidade insuficiente de moeda para venda!')
        }

        const newCryptocurrencies = foundWallet.cryptocurrencies.map(crypto => {
          if(crypto.id == idCoin){
            crypto.quant -= quantSaleCoin
          }
          return crypto
        })

        foundWallet.cryptocurrencies = newCryptocurrencies.filter(crypto => { 
          return crypto.quant > 0
        })            

        const newBalance = foundWallet.balance + quantSaleCoin * priceCoin

        const filterCoin = { idUser: idUser }
        foundWallet.balance = newBalance      

        await Wallets.updateOne(filterCoin, foundWallet, {
          returnOriginal: false
        })

        return res.status(201).send('Moeda Vendida com sucesso! Quantia e Saldo atualizados!')
      }   
      return res.status(404).send('Moeda não encontrada!')
    }
    return res.status(404).send('Carteira não encontrada!')
  }
  res.status(404).send('Digite uma quantidade para venda maior que 0!')
})

export default app