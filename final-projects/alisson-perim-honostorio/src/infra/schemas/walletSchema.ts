import { Mongoose } from "../dataBase"

export const Wallet = new Mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    min: 0
  }
})

export const walletModel = Mongoose.model("Wallet", Wallet, "Wallet")