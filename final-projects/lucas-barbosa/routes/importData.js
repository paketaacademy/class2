import app from './configs/index.js'
import tokenValidation from './configs/validateToken.js'
import saveEmployees from './services/saveEmployees.js'
import { Mongoose, employeesSchema } from './configs/mongo.js'
import { employeeSchema } from './configs/validation.js'
import { validateEmployees } from './configs/validateEmployee.js'

app.post('/import', tokenValidation, validateEmployees(employeeSchema), async (req, res) => {
  
  const { dataJsonProcessed, dataJsonInvalidsProcessed } = req.files
  
  try {

    const numberEmployeesSaved = dataJsonProcessed.length

    if(numberEmployeesSaved === 0){
      return res.status(400).send({ "No employees were saved, check the errors below for correction:": dataJsonInvalidsProcessed })
    }

    const Employees = Mongoose.model('employees', employeesSchema, 'employees')

    saveEmployees(dataJsonProcessed, Employees)

    return res.status(201).send({ "Amount of Employees saved": numberEmployeesSaved, "Invalid employees to save": dataJsonInvalidsProcessed })
  } catch (err) {
    res.status(400).send({ message: `Error: ${err}` })
  }  
})

export default app