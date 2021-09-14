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
          .status(422)
          .send({ message: `This user hasn't a wallet` })
      }

      const loan = await loanModel.findOne({ walletId: wallet._id, isActive: { $eq: true } })
      if (!loan) {
        return res
          .status(422)
          .send({ message: `This user hasn't a active loan` })
      }

      const loanObj = {
        date_hired_loan: loan.createdAt,
        date_updated_loan: loan.updatedAt,
        value_of_loan: loan.value.toFixed(2),
        installments_hired: loan.installments,
        installments_to_pay: loan.installmentsToPay,
        value_of_installment: loan.valueOfInstallment
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