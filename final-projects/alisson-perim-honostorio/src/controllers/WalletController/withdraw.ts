import { Request, Response } from "express"
import { walletModel } from "../../infra/schemas/walletSchema"

export const Withdraw = {
  async withdraw(req: Request, res: Response) {
    const userId = req.user.id
    const { amount } = req.body
    try {
      const findWallet = await walletModel.findOne({ userId })

      if (!findWallet) {
        return res
          .status(422)
          .send({ message: `This user hasn't a wallet` })
      }

      if(typeof amount !== 'number'){
        return res
          .status(422)
          .send({message: `Please insert a number to do your withdraw`})
      }

      if(amount % 1 !== 0){
        return res
          .status(422)
          .send({message: `The amount to do a withdraw need to be a integer number`})
      }

      if (findWallet.balance < amount) {
        return res
          .status(409)
          .send('Error - Your withdraw is higgher than your balance')
      }
      
      const withdrawBalance = findWallet.balance - amount

      findWallet.balance = withdrawBalance
      await findWallet.save()

      return res
        .status(200)
        .send({ message: `Successful withdraw, your balance has updated.` })

    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}