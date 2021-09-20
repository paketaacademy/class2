import * as yup from "yup"

export const payInstallmentYupValidation = yup.object().shape({
  paymentValue: yup.number().min(0.00).required("The total value of the installments you want to pay is necessary"),
  installmentsToPay: yup.number().min(0).required("The amount of installments you want to pay is necessary")
})