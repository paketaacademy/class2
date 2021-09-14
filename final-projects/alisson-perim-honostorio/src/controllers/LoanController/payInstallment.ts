import { Request, Response } from "express"
import { loanModel } from "../../infra/schemas/loanSchema"
import { walletModel } from "../../infra/schemas/walletSchema"

export const PayInstallment = {
  async payInstallment(req: Request, res: Response) {
    const userId = req.user.id
    const { paymentValue, installmentsToPay } = req.body
    try {
      const wallet = await walletModel.findOne({ userId })
      if (!wallet) {
        return res
          .status(422)
          .send({ message: `This user hasn't a wallet` })
      }

      const loan = await loanModel.findOne({ walletId: wallet._id })
      if (!loan) {
        return res
          .status(422)
          .send({ message: `This user hasn't a loan` })
      }

      if(typeof paymentValue !== 'number' || typeof installmentsToPay !== 'number'){
        return res
          .status(422)
          .send({message: `Please insert a number to pay a installment`})
      }

      const totalToPay = installmentsToPay * loan.valueOfInstallment

      if (paymentValue !== totalToPay) {
        return res
          .status(400)
          .send({ message: `Incorrect value` })
      }

      loan.installmentsToPay -= installmentsToPay
      if (loan.installmentsToPay === 0) {
        wallet.hasLoan = false
        loan.isActive = false
        await wallet.save()
      }
      await loan.save()
      return res
        .status(200)
        .send({ message: `Installment(s) payed with success` })
    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}