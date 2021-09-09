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
          .status(400)
          .send({ message: `This user hasn't a wallet` })
      }

      if (findWallet.balance < amount) {
        return res
          .status(400)
          .send('Your balance is lass than your withdraw')
      }

      const withdrawBalance = findWallet.balance - amount

      await findWallet.updateOne({ balance: withdrawBalance })

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