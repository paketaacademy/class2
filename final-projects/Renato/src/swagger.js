import swaggerAutogen from 'swagger-autogen'

const  doc  =  { 
  informações : { 
    título : 'Final Project Paketa Academy' , 
    descrição : 'Web Service for registration of troops, landing equipment', 
  } , 
  host : 'localhost: 3000' , 
  esquemas : [ 'http' ] , 
} ; 

const  outputFile  =  './src/swagger-output.json' 
const  endpointsFiles  =  ['./src/routes/index.js'] 

swaggerAutogen()( outputFile, endpointsFiles, doc ) 