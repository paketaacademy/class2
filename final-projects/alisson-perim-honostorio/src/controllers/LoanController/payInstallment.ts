import { Request, Response } from "express"
import { loanModel } from "../../infra/schemas/loanSchema"
import { walletModel } from "../../infra/schemas/walletSchema"

export const PayInstallment = {
  async payInstallment(req: Request, res: Response) {
    const userId = req.user.id
    const { installmentValue } = req.body
    try {
      const wallet = await walletModel.findOne({ userId })
      if (!wallet) {
        return res
          .status(400)
          .send({ message: `This user hasn't a wallet` })
      }

      const loan = await loanModel.findOne({ walletId: wallet._id })
      if (!loan) {
        return res
          .status(400)
          .send({ message: `This user hasn't a loan` })
      }

      if (loan.valueOfInstallment !== installmentValue) {
        return res
          .status(400)
          .send({ message: `Incorrect value` })
      }

      loan.installmentsToPay--
      loan.save()
      return res
        .status(200)
        .send({ message: `Installment payed with success` })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}