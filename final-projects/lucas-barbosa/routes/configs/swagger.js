import swaggerAutogen from 'swagger-autogen'

const  doc  =  { 
  informações : { 
    título : 'Final project', 
    descrição : 'Program that receives data through an Excel spreadsheet, reads and processes the information and the correct lines are recorded in the database, returning the errors and where are the lines that have some invalid field.',
  } , 
  host : 'localhost: 3000', 
  esquemas : [ 'http' ],
}

const outputFile = './routes/configs/swagger-output.json'
const endpointsFiles = ['./app.js']

swaggerAutogen()( outputFile, endpointsFiles, doc)