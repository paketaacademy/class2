import XLSX from 'xlsx'
export const validateAll = (schema) => {
  
  try{

    return async (req, res, next) => {
    
      const excel = XLSX.readFile(req.files.file.name);
      const sheetNameList = excel.SheetNames
      const dataJson = XLSX.utils.sheet_to_json(excel.Sheets[sheetNameList[0]]);
    
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
      
      req.files = { dataJsonValid, dataJsonInvalid }
      next()
    }
  } catch (err) {
    return res.status(400).send(`Error: ${err}`)
  }
}