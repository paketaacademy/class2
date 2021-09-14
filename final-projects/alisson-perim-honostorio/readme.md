# BANK-API

* Uma API feita para simular algumas ações de uma instituição financeira, as ações presentes nessa API são:
  * Depósito
  * Saque
  * Empréstimo
  * Visualizar parcelas em aberto
  * Visualizar empréstimo ativo
  * Pagar parcela
  * Registrar usuário
  * Efetuar login
* Para utilizar a API é necessário efetuar os seguintes passos:

  1- Fazer o download de alguma IDE (Ambiente de Desenvolvimento Integrado), a minha recomendação e escolha pessoal é pelo [VScode](https://code.visualstudio.com/)
  2- Caso não tenha o pacote Node instalado noseu computador é só acessar [Node](https://nodejs.org/en/) e fazer o download em sua versão LTS
  3- Fazer o clone do repositório para o seu computador, caso não saiba como, é só seguir [estes](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) passos
  4- Ao efetuar o clone você deve abrir a pasta do projeto direto no VScode
  5- Quando estiver com o projeto aberto você deve apertar `Ctrl + '`, irá aparecer um terminal, algo como o cmd do windows, você deve digitar `npm i` e apertar `Enter`, isso fara com que todas as dependências necessárias sejam instaladas
  6- Você deve criar um arquivo na raiz do projeto com o nome .env e copiar todos os dados do arquivo .env.sample para o arquivo .env
  7- Ao finalizar a instalação de todas as dependências você deve digitar nesse mesmo terminal `npm start`, o VScode irá fazer o start da API, se tudo correr bem, e não faltar nenhuma dependência irá aparecer no terminal *Server is running*, caso haja algum erro, repita o passo 5
  8- Agora é só você abrir o seu navegador padrão e digitar http://localhost/3030/doc você será redicionado(a) para a página do swagger, lá estão presentes todas as rotas da API e todos os dados necessários para utilizar cada rota
