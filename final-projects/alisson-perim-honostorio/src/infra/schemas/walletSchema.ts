import { Schema, model } from "mongoose"

export interface IWallet {
  userId: string,
  hasLoan?: boolean,
  balance: number
}

export const Wallet: Schema = new Schema<IWallet>({
  userId: {
    type: String,
    required: true
  },
  hasLoan: {
    type: Boolean
  },
  balance: {
    type: Number,
    required: true,
    min: 0
  }
})



export const walletModel = model<IWallet>("Wallet", Wallet, "Wallet")