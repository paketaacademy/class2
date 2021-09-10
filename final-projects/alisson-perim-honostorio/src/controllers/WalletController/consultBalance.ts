import { Request, Response } from "express"
import { walletModel } from "../../infra/schemas/walletSchema"

export const ConsultBalance = {
  async consult(req: Request, res: Response) {
    const userId = req.user.id
    try {
      const findWallet = await walletModel.findOne({ userId })
      if (!findWallet) {
        return res
          .status(400)
          .send({ message: `This user hasn't a wallet` })
      }

      return res
        .status(200)
        .send({ balance: `${findWallet.balance.toFixed(2)}` })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}