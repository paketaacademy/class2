import XLSX from 'xlsx'
import app from "./configs/index.js"

app.post('/import', async (req, res) => {

  const { file } = req.files

  const excel = XLSX.readFile(file.name);
  const sheetNameList = excel.SheetNames
  const dataJson = XLSX.utils.sheet_to_json(excel.Sheets[sheetNameList[0]]);

  const dataJsonProcessed = []
  for(let i = 0; i < dataJson.length; i++){
    const data = dataJson[i]

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
})

export default app