import app from "./configs/app.js"
import { Mongoose, ListsSchema, CardsSchema } from './configs/mongo.js'

app.post('/card', async (req, res) => {

  const { title, description, members, idList } = req.body

  const Lists = Mongoose.model('lists', ListsSchema, 'lists')
  const Cards = Mongoose.model('cards', CardsSchema, 'cards')

  try {

    await Lists.findOne({ _id: idList })

    if(title === ''){
      return res.status(404).send('Título é obrigatório!')  
    }

      const card = new Cards({ title, description, members, idList })
      await card.save()

      return res.status(201).send('Card inserido com sucesso!')

  } catch (err) {
    return res.status(404).send('Lista não encontrada!')
  }
})

app.delete("/card", async (req, res) => {
  const { idList, idCard } = req.body

  const Cards = Mongoose.model('cards', CardsSchema, 'cards')

  const foundCards = await Cards.findOne({ _id: idCard })

  if (foundCards && foundCards.idList == idList) {
    Cards.deleteOne({ _id: idCard }).exec()

    return res.status(200).json({
      error: false,
      message: "Card apagado com sucesso!"
    })
  }
  return res.status(404).send('Card não encontrado')
})

app.get('/card', async (req, res) => {

  const { idList } = req.body

  const Lists = Mongoose.model('lists', ListsSchema, 'lists')
  const Cards = Mongoose.model('cards', CardsSchema, 'cards')

  try {

    const foundList = await Lists.find({ _id: idList })

    if (foundList) {

      const foundCard = await Cards.find({ idList: idList })

      if (foundCard.length == 0) {
        return res.status(404).send('A lista não possui nenhuma cartão!')
      }

      res.status(200).send(foundCard)

    }

  } catch (err) {
    return res.status(404).send('Lista não encontrada!')
  }
})

app.patch('/card', async (req, res) => {
  const { idCard, title, description, members } = req.body
  
  const Cards = Mongoose.model('cards', CardsSchema, 'cards')

  try {

    const foundCard = await Cards.findOne({ _id: idCard })

    if(!foundCard) {
      return res.status(404).send('Card não encontrado!')
    }
    
    foundCard.title = title ? title : foundCard.title
    foundCard.description = description ? description : foundCard.description
    if(members.length){
      foundCard.members.push(...members)
    }

    await foundCard.update( foundCard )
    return res.status(200).send('Card atualizado com sucesso!')

  } catch(err) {
    return res.status(400).send(err)
  }
})

export default app