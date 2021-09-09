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
      if (amount < 0.01) {
        return res
          .status(400)
          .send({ message: `The amount to deposit can't be 0.00` })
      }
      const newBalance = findWallet.balance + amount
      await findWallet.updateOne({ balance: newBalance })
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