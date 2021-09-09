import { Schema, model } from "mongoose"

export interface ILoan {
  walletId: string,
  value: number,
  installments: number,
  installmentsToPay: number,
  valueOfInstallment: number
}

const Loan: Schema = new Schema<ILoan>({
  walletId: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  installments: {
    type: Number,
    required: true
  },
  installmentsToPay: {
    type: Number,
    required: true
  },
  valueOfInstallment: {
    type: Number,
    required: true
  }
})

export const loanModel = model<ILoan>("Loan", Loan, "Loan")