Esta API tem a função de registrar equipamentos e pessoal militar, além de simular um serviço de desembarque de tropas. As ações presentes nesta API são:
  - Registro de usuário para administrar o sistema
  - Registro de soldados
  - Registro de equipamentos militares
  - Registro de veículos militares
  - Registro de pelotão
  - Registro e controle de desembarque de tropas 
  - Registro das batalhas

- Para utilizar a API é necessário efetuar os seguintes passos:

  - 1 - Fazer o clone do repositório para o seu computador;
  - 2 - Ao efetuar o clone você deve abrir a pasta do projeto direto no VScode;
  - 3 - Quando estiver com o projeto aberto você deve apertar `Ctrl + '`, irá aparecer um terminal, algo como o cmd do windows, você deve digitar `npm i` e apertar `Enter`, isso fara com que todas as dependências necessárias sejam instaladas;
  - 4 - Você deve criar um arquivo na raiz do projeto com o nome .env e copiar todos os dados do arquivo .env.example para o arquivo .env;
  - 5 - Ao finalizar a etapa 6, você deve inserir as variáveis de ambiente que melhor se adequam a seu projeto. Exemplo {

    MONGO_URI = (URI de seu banco de dados, no projeto utilizo o Mongodb)
    SECRET = (palavra chave que você escolher)
    PORT = (porta da url de acesso de seu projeto)
  }
  - 6 - Ao finalizar a instalação de todas as dependências você deve digitar neste mesmo terminal `npm start`, o VScode irá fazer o start da API, se tudo correr bem, e não faltar nenhuma dependência irá aparecer no terminal *Server is on*, caso haja algum erro, repita o passo 5;
  - 7 - Agora é só você abrir o seu navegador padrão e digitar http://localhost/3000/doc você será redicionado(a) para a página da documentação desta API, lá estão presentes todas as rotas da API e todos os dados necessários para utilizar cada rota.