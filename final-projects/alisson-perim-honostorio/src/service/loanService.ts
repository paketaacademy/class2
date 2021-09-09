import { loanModel } from "../infra/schemas/loanSchema"
import { walletModel } from "../infra/schemas/walletSchema"

export const loanAggregate = async () => {
  const loans = await loanModel.find(
    {
      $lookup:
      {
        from: "Wallet",
        localField: "walletId",
        foreignField: "id",
        as: "loans"
      },
      $match: { "loans": { $ne: [] } }
    }
  )
  //const loans = await loanModel.find()
  console.log(loans)
  return loans
}

export default loanAggregate