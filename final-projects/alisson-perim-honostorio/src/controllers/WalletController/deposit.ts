import { Request, Response } from "express"
import { walletModel } from "../../infra/schemas/walletSchema"

export const Deposit = {
  async deposit(req: Request, res: Response) {
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
          .send({message: `Please insert a number to do your deposit`})
      }

      if(amount % 1 !== 0){
        return res
          .status(422)
          .send({message: `The amount to do a deposit need to be a integer number`})
      }

      if (amount < 0.01) {
        return res
          .status(409)
          .send({ message: `The amount to deposit can't be 0.00` })
      }
     
      const newBalance = findWallet.balance + amount
      findWallet.balance = newBalance
      await findWallet.save()
      return res
        .status(200)
        .send({ message: "Successful deposit, your balance has updated." })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occured - ${error}` })
    }
  }
}