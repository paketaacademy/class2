import * as yup from "yup"

export const withdrawYupValidation = yup.object().shape({
  amount: yup.number().min(1.00, "Your withdraw can't be lass than $ 1.00").required("It's necessary an amount to do the withdraw")
})