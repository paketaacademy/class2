import swaggerAutogen from 'swagger-autogen'

const  doc  =  { 
  informações : { 
    título : 'Super Trello', 
    descrição : 'Descrição', 
  } , 
  host : 'localhost: 3001', 
  esquemas : [ 'http' ],
}

const outputFile = './routes/configs/swagger-output.json' 
const endpointsFiles = ['./index.js'] 

swaggerAutogen()( outputFile, endpointsFiles, doc)