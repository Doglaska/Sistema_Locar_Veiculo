# Sistema de Locação de veiculos

## Objetivo
Desenvolver um sistema web de locação de veículos com API REST em Node.js e Express, persistência relacional com Prisma ORM e MySQL, autenticação baseada em JWT e interface React.

## Funcionalidades
### Usuários
- Cadastro de Usuários
- Login com email e senha
- Autenticação utilizando JWT
- Armazenamento hash com bcrypt
- Proteção de rotas que exigem autenticação

### Veículos
- Cadastro de veículos
- Listagem dos veículos
- Consulta e filtro de disponibilidade
- Validação de placa única e valor de diária

### Locações
- Registro de locações de veículos
- Validação das datas da locação
- Cálculo automático do valor total
- Consulta do histórico de locações do usuário
- Finalização da locação e atualização da disponibilidade do veículo
- Restrição de acesso as páginas 

## Tecnologias
- Backend: Node.js e Express
- Front: React e JavaScript ou TypeScript =========================================
- ORM: Prisma
- Banco de Dados: MySQL
- Validação do Banco: .env
- Autenticaçõa: JWT
- Criptografia de senhas: bcrypt
  
## Requisitos de execução
- Node.js
- npm
- MySQL ou XAMPP

## Testes
- ThunderClient (extensão)

## Instalação
- Instalar as dependências

  Back
  ``cd back``
    
    Para iniciar o projeto
-    ``npm init -y``
-    ``npm install express``
-    ``npm i cors``
-    ``npm i dotenv``
-    ``npm i bcrypt`` 
-    ``npm i jsonwebtoken``
-    ``npm i @prisma/client`` 
-    ``npm install -D prisma``
-    ``npm i -D nodemon``

    Comando para instar todas as dependências do backend
-    ``npm install``

  Front
  ``npm create vite@latest front``
  - continue y
  - react
  - TypeScript
- ESLint
- Visualizar a página - crt + (click na url) ou no browser: localhost:5173

- ``npm i``
- ``npm install axios react-hook-form``


    Comando para instar todas as dependências do frontend
-    ``npm install``

## Configuração do banco
- Criar um arquilo .env com a URL de conexão e as variáveis;
- Seguir o modelo .env.example
- Após configurar o Banco, executar os migrations do Prisma
- ``npx prisma migrate deploy``

## Passos para iniciar backend e frontend. 

Back
- ``npm run dev``
- Tem que configurar no package.json
- ou http://localhost:5000

Front
- ``npm run dev``
- Entrar na URL para visualizar no browser
- ou http://localhost:5173
