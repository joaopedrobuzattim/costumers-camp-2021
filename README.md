<h1 align="center">
  <strong style="color: #5965E0; font-size: 50px;"> Costumers Panel Api </strong>
  <br />
  <a href="https://www.linkedin.com/in/joão-pedro-buzatti-mendes-b032301ba">
    <img alt="Linkedin" src="https://img.shields.io/badge/-João%20Pedro%20Buzatti%20Mendes-29B6D1?label=Linkedin&logo=linkedin&style=flat-square">
  </a>
 <a href="https://github.com/joaopedrobuzattim/costumers-camp-2021/blob/main/LICENSE.txt">
    <img alt="GitHub license" src="https://img.shields.io/github/license/joaopedrobuzattim/costumers-camp-2021?logo=mint&style=flat-square">
  </a>
</h1>
<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-Autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-Licença">Licença</a>
</p>

## :page_facing_up: Descrição
API para gerenciar um painel de clientes. Feita para aplicar os conceitos de SQL no Postgres, passados na aula de banco de dados do Camp Ioasys 2021.    

## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [Postgres](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)


## :clipboard: Funcionalidades
- [x] Listagem de clientes.
- [x] Cadastro de clientes.
- [x] Atualização de clientes.
- [x] Remoção de clientes.

## :closed_book: Instalação

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/install/)

```bash
#Instale a imagem do postgres (https://hub.docker.com/_/postgres) no Docker
$ docker pull postgres

# Clone este repositório.
$ git clone https://github.com/joaopedrobuzattim/costumers-camp-2021

# Vá para a pasta costumers-camp-2021
$ cd costumers-camp-2021

# Instale as dependências
$ npm install 

# Abra outra aba do terminal no mesmo diretório  e rode o compose
$ docker-compose up -d

# Liste os containers ativos e copie o ID do container criado
$ docker ps

#Execute o container pelo terminal
$ sudo docker exec -it CONTAINER_ID_PASTED_HERE /bin/bash

# Entre no psql pelo localhost como usuario postgres
psql -h localhost -U postgres

# Crie a database costumerspanel
create database costumerspanel;

# Faça a conexão com a database criada
\c costumerspanel;

# Instale o uui e crie a tabela
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table costumers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE,
    address VARCHAR(100) NOT NULL,
    cpf BIGINT UNIQUE NOT NULL,
    createdAt DATE NOT NULL DEFAULT CURRENT_DATE
); 

# Volte para a aba do terminal anterior e rode a aplicação
$ nodemon

# O postgres vai estar rodando na porta 3000
# O app vai está rodando na porta 8000 <http://localhost:8000/api/v1/costumers>
```
## :man: Autor

<a href="https://github.com/joaopedrobuzattim/">
 <img src="https://avatars.githubusercontent.com/u/71409819?s=400&u=c5b2434830684d057b9c2925362222afd9241f7c&v=4" width="70px;" alt="My photo"/>
 <br />
 <sub><b> João Pedro Buzatti Mendes </b></sub>
</a>

Entre em contato!

<a href="https://www.linkedin.com/in/joão-pedro-buzatti-mendes-b032301ba">
    <img alt="Linkedin" src="https://img.shields.io/badge/-João%20Pedro%20Buzatti%20Mendes-29B6D1?label=Linkedin&logo=linkedin&style=flat-square">
  </a>


## :memo: Licença
This project is [MIT](./LICENSE.txt) licensed.
