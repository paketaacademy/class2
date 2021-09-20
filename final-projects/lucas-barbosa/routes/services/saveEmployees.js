const saveEmployees = async(data, schema) =>{
  for(let row of data){

    const employee = new schema({ 
      name: row.Name,
      netSalary: row.NetSalary,  
      grossSalary: row.GrossSalary,
      CPF: row.CPF,
      CNPJ: row.CNPJ,
      nationality: row.Nationality,
      naturalness: row.Naturalness,
      age: row.Age,
      hiredAt: row.HiredAt,
      jobRole: row.JobRole,
      email: row.Email
    })
    
    await employee.save()
  }
}

export default saveEmployees