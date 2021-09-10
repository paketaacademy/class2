import app from "./configs/index.js"
import saveEmployees from "./services/saveEmployees.js"
import { Mongoose, employeesSchema } from './configs/mongo.js'
import { employeeSchema } from './configs/validation.js'
import { validateEmployees } from "./configs/validateEmployee.js"

app.post('/import', validateEmployees(employeeSchema), async (req, res) => {
  
  const { dataJsonValid, dataJsonInvalid } = req.files
  
  try {    

    const dataJsonProcessed = []
    for(let i = 0; i < dataJsonValid.length; i++){
      const data = dataJsonValid[i]

      const date = data.HiredAt[2] == '/' ? data.HiredAt.split('/').reverse().join('-') : data.HiredAt.split('/').join('-')
      const netSalary = data.NetSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      const grossSalary = data.GrossSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      
      dataJsonProcessed.push({
        ...data,
        HiredAt: date,
        NetSalary: netSalary,
        GrossSalary: grossSalary
      })
    }

    const numberEmployeesSaved = dataJsonProcessed.length

    if(numberEmployeesSaved === 0){
      return res.status(400).send({ "No employees were saved, check the errors below for correction:": dataJsonInvalid })
    }

    const Employees = Mongoose.model('employees', employeesSchema, 'employees')

    saveEmployees(dataJsonProcessed, Employees)

    return res.status(200).send({ "Amount of Employees saved": numberEmployeesSaved, "Invalid employees to save": dataJsonInvalid })
  } catch (err) {
    res.status(400).send({ message: `Error: ${err}` })
  }  
})

export default app