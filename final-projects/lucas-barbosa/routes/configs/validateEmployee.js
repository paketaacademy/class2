import XLSX from 'xlsx'
import { americanFormatValids, americanFormatInvalid } from "../services/americanFormat.js"
export const validateEmployees = (schema) => {
  
  try{

    return async (req, res, next) => {
    
      const excel = XLSX.readFile(req.files.file.name)
      const sheetNameList = excel.SheetNames
      const dataJson = XLSX.utils.sheet_to_json(excel.Sheets[sheetNameList[0]])

      const dataJsonValid = []
      const dataJsonInvalid = []
      let i = 2
      for(let row of dataJson){
        
        const validateBody = await schema.validate(row, { abortEarly: false }).catch((err) => {
          dataJsonInvalid.push({ error: err.errors, line: i, data: err.value })
        })
        
        if(validateBody) { 
          dataJsonValid.push(validateBody) 
        }

        i++
      }
      
      const dataJsonProcessed = americanFormatValids(dataJsonValid)
      const dataJsonInvalidsProcessed = americanFormatInvalid(dataJsonInvalid)
      
      req.files = { dataJsonProcessed, dataJsonInvalidsProcessed }
      next()
    }
  } catch (err) {
    return res.status(400).send(`Error: ${err}`)
  }
}