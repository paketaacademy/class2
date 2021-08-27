import app from "./configs/app.js"
import { Mongoose, UsersSchema, BoardsSchema } from './configs/mongo.js'
import validationToken from './configs/validationToken.js'

app.post('/board', validationToken, async (req, res) => {

  const { title } = req.body
  const user = req.user._id
  const members = []
  members.push(user)
  
    const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

    try {
      if(title.length < 5){
        return res.status(400).send({ message: 'O nome do quadro deve possuir no mínimo 5 caracteres!'})
      }else if(title.length > 30){
        return res.status(400).send({ message: 'O nome do quadro não pode ter mais que 30 caracteres!'})
      }
      const board = new Boards({ title, user, members })
      await board.save()
      
      res.status(201).send({message: 'Cadastro realizado com sucesso!', id: board._id })
    } catch (err) {
        console.error(err)
    } 
})

app.get('/board', validationToken, async (req, res) => {

  const user = req.user._id

  const Users = Mongoose.model('users', UsersSchema, 'users')
  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  try {

    const foundUser = await Users.findOne({ _id: user })

    if (foundUser) {

      const foundBoard = await Boards.find({ members: user })

      if (foundBoard.length == 0) {
        return res.status(404).send('Você ainda não possui nenhum quadro!')
      }

      res.status(200).send(foundBoard)
    }

  } catch (err) {

    return res.status(404).send('Usuário não encontrado')

  }
})

app.delete('/board', validationToken, async (req, res) => {
  const { idBoard } = req.body
  const idUser = req.user._id
  
  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  const foundBoards = await Boards.findOne({ _id: idBoard })

  if (foundBoards) {
    if (foundBoards.user == idUser) {
      Boards.deleteOne({ _id: idBoard }).exec()

      return res.status(200).json({
        error: false,
        message: "Quadro apagado com sucesso!"
      })
    }
    return res.status(404).send('Somente o dono do quadro pode deletar')
  }
  return res.status(404).send('Quadro Não encontrado!')
})

app.patch('/board/title', validationToken, async (req, res) => {
  const { idBoard, title } = req.body
 
  if(title.length < 5){
    return res.status(400).send({ message: 'O nome do quadro deve possuir no mínimo 5 caracteres!'})
  }else if(title.length > 30){
    return res.status(400).send({ message: 'O nome do quadro não pode ter mais que 30 caracteres!'})
  }

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  try {

    const foundBoard = await Boards.findOne({ _id: idBoard })

    if (foundBoard) {
      await foundBoard.updateOne({ title })
      return res.status(200).send('Título atualizado com sucesso!')
    }

    return res.status(404).send('Quadro não encontrado!')

  } catch (err) {
    return res.status(400).send({ message: `Erro: ${err}`})
  }
})

app.patch('/board/members', validationToken, async (req, res) => {
  
  const { idBoard, members } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  const Users = Mongoose.model('users', UsersSchema, 'users')

  try {

    const foundBoard = await Boards.findOne({ _id: idBoard })

    if (foundBoard) {

      const foundMembers = await Users.find({ _id: { $in: members } })

      if (foundMembers.length != 0) {

        const newMembers = foundMembers.map((member) => {
          return member._id.toString()
        }).filter((member) => {
          return !foundBoard.members.includes(member)
        })

        if (newMembers.length == 0) {
          return res.status(404).send('Membro já faz parte desde quadro!')
        }

        foundBoard.members.push(...newMembers)

        await foundBoard.updateOne({ members: foundBoard.members })
        return res.status(200).send('Novos membros inseridos com sucesso!')
      }

      return res.status(404).send('Membro não encontrado!')
    }

    return res.status(404).send('Quadro não encontrado!')

  } catch (err) {
    return res.status(400).send(err)
  }
})

app.patch('/board/removemember', validationToken, async (req, res) => {
  
  const { idBoard, members } = req.body

  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')

  try {

    const foundBoard = await Boards.findOne({ _id: idBoard })

    if (foundBoard) {

      const newMembers = foundBoard.members.filter((member) => {
        return !members.includes(member)
      })

      await foundBoard.updateOne({ members: newMembers })
      return res.status(200).send('Membro removido com sucesso!')
    }

    return res.status(404).send('Quadro não encontrado!')

  } catch (err) {
    return res.status(400).send({ message: `Erro: ${err}`})
  }
})

app.get('/board/:idBoard/members', validationToken, async (req, res) => {

  const { idBoard } = req.params
  
  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  const Users = Mongoose.model('users', UsersSchema, 'users')

  try{
    
    const foundBoard = await Boards.findOne({ _id: idBoard })
    
    if(foundBoard){      
      const foundUsers = await Users.find({ _id: { $in: foundBoard.members } })

      const boardMembers = foundUsers.map((member) => {
        return { name: member.name, id: member._id }
      })   
      
      return res.status(200).send(boardMembers)
    }
    return res.status(404).send('Quadro não encontrado!')

  } catch (err) {
    return res.send(err)
  }  
})

app.get('/board/:idBoard/notmembers/', validationToken, async (req, res) => {

  const { idBoard } = req.params
  
  const Boards = Mongoose.model('boards', BoardsSchema, 'boards')
  const Users = Mongoose.model('users', UsersSchema, 'users')

  try{

    const foundBoard = await Boards.findOne({ _id: idBoard })

    if(foundBoard){      

      const foundUsers = await Users.find({ _id: { $nin: foundBoard.members } })

      const boardNotMembers = foundUsers.map((member) => {
        return { name: member.name, id: member._id }
      })      
      
      return res.status(200).send(boardNotMembers)
    }
    return res.status(404).send('Quadro não encontrado!')

  } catch (err) {
    return res.send(err)
  }  
})

export default app