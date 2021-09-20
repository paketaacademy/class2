export const americanFormatValids = (json) => {
  
  const dataJson = []
  for(let i = 0; i < json.length; i++){
    const data = json[i]

    dataJson.push({
      ...data,      
      NetSalary: parseFloat(data.NetSalary).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      GrossSalary: parseFloat(data.GrossSalary).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    })
  }
  return dataJson
}

export const americanFormatInvalid = (json) => {
  
  const dataJson = []
  for(let i = 0; i < json.length; i++){
    const data = json[i].data
    
    dataJson.push({
      error: json[i].error,
      line: json[i].line,
      data: {
        ...data,        
        NetSalary: parseFloat(data.NetSalary).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        GrossSalary: parseFloat(data.GrossSalary).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      }      
    })
  }
  return dataJson
}