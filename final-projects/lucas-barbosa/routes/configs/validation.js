import * as yup from 'yup'

  export const userSchema = yup.object().shape({
    name: yup.string().trim().min(2, 'Name must have more than 2 characters').required('Inform your name'),
    email: yup.string().trim().min(5, 'Email must have more than 5 characters').email('Enter a valid email address').required('Enter your email'),
    password: yup.string().min(5, 'Password must be more than 5 characters').required('Inform your password'),
  })
  
  export const employeesSchema = yup.object().shape({
    Name: yup.string().trim().min(2, 'Name must have more than 2 characters').required('Enter the name field'),
    NetSalary: yup.string().trim().required('Enter the net salary field'),
    GrossSalary: yup.string().trim().required('Enter the Gross Salary Field'),
    CPF: yup.string().trim().required('Enter the CPF field'),
    CNPJ: yup.string().trim().required('Enter the CNPJ field'),
    Nationality: yup.string().trim().required('Enter the nationality field'),
    Naturalness: yup.string().trim().required('Inform the field of naturalness'),
    Age: yup.string().trim().required('Inform the field of age'),
    HiredAt: yup.string().trim().required('Inform the field of hire at'),
    JobRole: yup.string().trim().required('Inform the field of job role'),
    Email: yup.string().trim().min(5, 'Email must have more than 5 characters').email('Enter a valid email address').required('Inform the field of email')
  })