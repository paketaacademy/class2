import * as yup from "yup"

export const depositYupValidation = yup.object().shape({
  amount: yup.number().min(0.01, "Your deposit can't be 0.00").required("It's necessary insert an amount to deposity")
})