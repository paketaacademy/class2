import app from "./configs/index.js"
import { employeesSchema } from './configs/validation.js'
import { validateEmployees } from "./configs/validateEmployee.js"

app.post('/import', validateEmployees(employeesSchema), async (req, res) => {
  
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

    return res.send(dataJsonProcessed)
  } catch (err) {
    res.status(400).send({ message: `Error: ${err}` })
  }  
})

export default app