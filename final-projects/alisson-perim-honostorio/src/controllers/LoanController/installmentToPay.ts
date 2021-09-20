import { Request, Response } from "express"
import { loanModel } from "../../infra/schemas/loanSchema"
import { walletModel } from "../../infra/schemas/walletSchema"

export const InstallmentsToPay = {
  async installmentsToPay(req: Request, res: Response) {
    const userId = req.user.id
    try {
      const findWallet = await walletModel.findOne({ userId })
      if (!findWallet) {
        return res
          .status(422)
          .send({ message: "This user hasn't a wallet" })
      }

      const findLoan = await loanModel.findOne({ walletId: findWallet._id })
      if (!findLoan) {
        return res
          .status(422)
          .send({ message: "This user hasn't a loan" })
      }

      return res
        .status(200)
        .send({ "Installments to pay": findLoan.installmentsToPay })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}