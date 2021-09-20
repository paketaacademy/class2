import { validateCNPJ, validateCPF } from "validations-br"
import * as yup from 'yup'

  export const userSchema = yup.object().shape({
    name: yup.string().trim().min(2, 'Name must have more than 2 characters').required('Inform your name'),
    email: yup.string().trim().min(5, 'Email must have more than 5 characters').email('Enter a valid email address').required('Enter your email'),
    password: yup.string().min(5, 'Password must be more than 5 characters').required('Inform your password'),
  })
  
  export const employeeSchema = yup.object().shape({
    Name: yup.string().trim().min(2, 'Name must have more than 2 characters').required('Enter the name field'),
    NetSalary: yup.number().min(100, 'The minimum net salary is $100.00').required('Enter the net salary field'),
    GrossSalary: yup.number().min(100, 'The minimum gross salary is $100.00').required('Enter the Gross Salary Field'),
    CPF: yup.string().trim().required('Enter the CPF field').test("is-cpf", "CPF is not valid", (value) => validateCPF(value)),
    CNPJ: yup.string().trim().required('Enter the CNPJ field').test("is-cnpj", "CNPJ is not valid", (value) => validateCNPJ(value)),
    Nationality: yup.string().trim().required('Enter the nationality field'),
    Naturalness: yup.string().trim().required('Inform the field of naturalness'),
    Age: yup.number().min(16, 'Minimum age to be hired is 16').required('Inform the field of age'),
    HiredAt: yup.date(new Date).max(new Date(), 'It is not possible to enter a future date').required('Enter the contract date field'),
    JobRole: yup.string().trim().required('Inform the field of job role'),
    Email: yup.string().trim().min(5, 'Email must have more than 5 characters').email('Enter a valid email address').required('Inform the field of email')
  })