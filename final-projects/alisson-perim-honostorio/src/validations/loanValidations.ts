import * as yup from "yup"

export const loanYupValidation = yup.object().shape({
  value: yup.number().min(100.00, "The minimum value to loan is $ 100.00").required("A value to loan is necessary"),
  installments: yup.number().min(6, "The loan can be divided in 6 times or more")
    .max(48, "The loan can be divided in 48 times or less")
    .required("It's necessary the number of times you want to divide the loan")
})