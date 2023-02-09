<p align="center">
  <img src="https://user-images.githubusercontent.com/60453269/217870233-f17471e4-38c9-4c19-b4a8-34e0b4546807.png" alt="Logo" width="300" height="150" />
</p>

<h1 align="center"> Gerenciador de Produto </h1>

<p align="center">
  <b> CRUD Simples de uma Api </b></br>
  <sub> A api teve como finalidade a criação de um crud para um teste técnico backend, a api de modo geral é bem simples e tem como objetivo gerenciar produtos cadastrados
  <sub>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhoras</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀A api tem como finalidade gerenciar produtos em um banco de dados, tem 4 rotas principais, GET, POST, PUT, DELETE ou seja um crud. De modo geral 
  o projeto é bem simples, no GET é possível ver todos os produtos cadastrados, no POST tem como finalidade o cadastro de produto, além disso, 
  pode-se mudar alguns dados através do PUT, como nome do produto, preço entre outros. Já o DELETE como o próprio nome diz ele deleta os dados de
  todo o produto através do seu id.***

<br/>

<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/> 
  
### 🎯 PEGAR TODOS OS PRODUTOS CADASTRADO NO BANCO DE DADOS.
  
### ```GET``` 
```URL
 http://localhost:3003/products
```
  
```JSON
  {
    "id": "e5a9a1af-c23e-4e10-98fd-ae914f7f6424",
    "name": "macbook",
    "category": "laptop",
    "status": "ACTIVE",
    "quantity": 10,
    "created_at": 0,
    "updated_at": 0,
    "deleted_at": 0
  }
```
  
<br /> 
  
### 🎯  CRIAR UM PRODUTO ATRAVEZ DO NOME, CATEGORIA E QUANTIDADE.
  
### ```POST```  
  
```URL
  http://localhost:3003/products/cadastro
```
  
```JSON
{
  "name": "macbook",
  "category": "laptop",
  "quantity": 10
}
```

<br /> 
  
### 🎯  MUDA O VALOR OU O NOME DE ALGUM PRODUTO ATRÁVES DA URL 
  
### ```PUT```  
  
```URL
  http://localhost:3003/products/:idProduto/category/video-game
```
  
```JSON
{
  "message": "Um produto da tabela = category, foi mudado  para o valor = video-game com sucesso"
}
```

<br/> 
  
### 🎯  DELETA O O PRODUTO ATRÁVES DA URL 
  
### ```DELETE```  
  
```URL
 http://localhost:3003/products/:idProduto
```
  
```JSON
{
  "message": "O produto com id = bc3ad746-67be-4216-831d-eb8087306592 foi deletado."
}
```

<br /> 

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...
  

## `📖 Dependencies` 

```JSON
  "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "knex": "^2.4.0",
        "mysql": "^2.18.1",
        "uuid": "^9.0.0"
      }

```

<br /> 

## `📖 devDependencies` 


```JSON
      "devDependencies": {
        "@types/cors": "^2.8.13",
        "@types/express": "^4.17.15",
        "@types/knex": "^0.16.1",
        "@types/node": "^18.11.18",
        "@types/uuid": "^9.0.0",
        "ts-node-dev": "^2.0.0",
        "typescript": "^4.9.4"
      }

```


<a id="Ideias"></a>
## 💡 Possíveis Melhoras

<a id="Creditos"></a>
## 🏆 Créditos

<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|




</div> 
