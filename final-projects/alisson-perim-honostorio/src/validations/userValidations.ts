import * as yup from "yup"

export const userYupValidations = yup.object().shape({
  firstName: yup.string().min(3, "The user name must have 3 letters as minimum").required("The user name is required"),
  lastName: yup.string().min(3, "The user last name must have 3 letters as minimum").required("The user last name is required"),
  email: yup.string().matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/).required("The user email is required"),
  password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "The password must contain small letter, caps letter, number, special character and minimum of 8 characters").required("The password is required")
})