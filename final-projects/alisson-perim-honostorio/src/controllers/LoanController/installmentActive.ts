import { Request, Response } from "express"
import { loanModel } from "../../infra/schemas/loanSchema"
import { walletModel } from "../../infra/schemas/walletSchema"

export const InstallmentActive = {
  async InstallmentActive(req: Request, res: Response) {
    const userId = req.user.id
    try {
      const wallet = await walletModel.findOne({ userId })
      if (!wallet) {
        return res
          .status(400)
          .send({ message: `This user hasn't a wallet` })
      }

      const loan = await loanModel.findOne({ walletId: wallet._id, isActive: { $eq: true } })
      if (!loan) {
        return res
          .status(400)
          .send({ message: `This user hasn't a active loan` })
      }

      const loanObj = {
        "Date of contract loan": new Date().toLocaleString(),
        "Value of loan": loan.value.toFixed(2),
        "Installments contracted": loan.installments,
        "Installments to pay": loan.installmentsToPay,
        "Value of installment": loan.valueOfInstallment
      }
      return res
        .status(200)
        .send(loanObj)
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}