import * as yup from "yup"

export const payInstallmentYupValidation = yup.object().shape({
  installmentValue: yup.number().min(0.00).required("The value os the installment you want to pay is necessary")
})