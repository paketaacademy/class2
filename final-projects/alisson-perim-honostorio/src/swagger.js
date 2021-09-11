import swaggerAutogen from 'swagger-autogen'

const doc = {
  informações: {
    título: 'Minha API',
    descrição: 'Descrição',
  },
  host: 'localhost:3030',
  esquemas: ['http'],
};

const outputFile = './src/swagger-output.json'
const endpointsFiles = ['./src/routes/index.ts']

swaggerAutogen()(outputFile, endpointsFiles, doc);