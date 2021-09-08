import XLSX from 'xlsx'
import app from "./configs/index.js"

app.post('/import', async (req, res) => {

  const { file } = req.files

  const excel = XLSX.readFile(file.name);
  const sheetNameList = excel.SheetNames
  const dataJson = XLSX.utils.sheet_to_json(excel.Sheets[sheetNameList[0]]);

  return res.send(dataJson)

})

export default app