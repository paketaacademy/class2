import { Request, Response } from "express"
import { walletModel } from "../../infra/schemas/walletSchema"
import { ILoan, loanModel } from "../../infra/schemas/loanSchema"

export const HireLoan = {
  async hireLoan(req: Request, res: Response) {
    const userId = req.user.id
    const { value, installments, grossSalaray, netSalary } = req.body
    switch (installments) {
      case 6:
        break
      case 12:
        break
      case 24:
        break
      case 36:
        break
      case 48:
        break
      default:
        return res
          .status(422)
          .send({ message: `The number of installment is invalid` })
    }
    try {
      const findWallet = await walletModel.findOne({ userId })
      if (!findWallet) {
        return res
          .status(422)
          .send({ message: "This user can't hire a loan" })
      }

      if( typeof grossSalaray !== 'number' || typeof netSalary !== 'number'){
        return res
          .status(422)
          .send({message: "Please insert a valid value to the salary"})
      }

      if (findWallet.hasLoan === true) {
        return res
          .status(422)
          .send({ message: `This user already has a loan in his wallet, can't hire another one` })
      }

      const maxLoan = grossSalaray * 0.3

      if (maxLoan < value) {
        return res
          .status(422)
          .send({ message: `Your max value to hire, at this moment, is ${maxLoan.toFixed(2)}` })
      }

      const valueOfInstallment = (value / installments).toFixed(2)

      const newLoan: ILoan = await new loanModel({ walletId: findWallet._id, value, installments, installmentsToPay: installments, valueOfInstallment, isActive: true }).save()

      findWallet.hasLoan = true
      findWallet.balance += value
      await findWallet.save()

      return res
        .status(200)
        .send({ message: `Loan hired with success` })

    } catch (error) {
      return res
        .status(400)
        .send({ message: `An error has occurred - ${error}` })
    }
  }
}