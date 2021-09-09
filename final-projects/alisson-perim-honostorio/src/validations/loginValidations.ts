import * as yup from "yup"

export const loginYupValidation = yup.object().shape({
  email: yup.string().matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/).required("The user email is required"),
  password: yup.string().required("The password is required")
})