# Pokemon API

## Requerimentos

yarn, npm, insomnia, docker

## Instalação

- Clonar o projeto
`git clone https://github.com/zmdoug/pokeApi.git`
- Acessar a pasta pokeApi e digitar o comando `yarn` 
para instalar as dependências.
- Instalar docker
- Criar um container mongodb
`docker run --name mongoPoke -p 27017:27017 -d -t mongo`
- Configurar ip/porta/nome do seu docker no arquivo: ./database/index.js
```javascript
  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://192.168.99.100:27017/pokeapi',
      { useNewUrlParser: true, useFindAndModify: true }
    )
  }
```


## Rodando a API

- Digite o comando `yarn dev` para iniciar a aplicação.

## Documentação

- Acesse o endereço abaixo para acessar a documentação:
`http://localhost:3000/apidoc/

## Utilização

- Importe a configuração Insomnia_routes.json no aplicativo
Insomnia.
- Utilize as rotas disponíveis.
