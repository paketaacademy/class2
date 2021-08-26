import swaggerAutogen from 'swagger-autogen'

const  doc  =  { 
  informações : { 
    título : 'Minha API' , 
    descrição : 'Descrição' , 
  } , 
  host : 'localhost: 3000' , 
  esquemas : [ 'http' ] , 
} ; 

const  outputFile  =  './src/swagger-output.json' 
const  endpointsFiles  =  ['./src/routes/index.js'] 

swaggerAutogen()( outputFile ,  endpointsFiles ,  doc ) ;
