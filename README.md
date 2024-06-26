# Lista de Tarefas

Este projeto é uma aplicação de Lista de Tarefas construída utilizando Angular no frontend, Node.js no backend, e Prisma para ORM e interação com o banco de dados MySQL.

## Tecnologias Utilizadas

- **Frontend**: Angular
- **Backend**: Node.js
- **ORM**: Prisma
- **Banco de Dados**: MySQL

## Funcionalidades

- Adicionar, editar, e excluir tarefas
- Marcar tarefas como completas
- Listar todas as tarefas

## Estrutura do Projeto

### Frontend

O frontend foi desenvolvido utilizando Angular. A aplicação possui dois componentes principais:
- **TaskFormComponent**: Componente para adicionar novas tarefas
- **TaskListComponent**: Componente para listar e gerenciar as tarefas existentes

### Backend

O backend foi desenvolvido utilizando Node.js e Express. O Prisma foi utilizado como ORM para facilitar a interação com o banco de dados MySQL.

#### Endpoints da API

- `GET /api/tasks`: Retorna todas as tarefas
- `POST /api/tasks`: Adiciona uma nova tarefa
- `PUT /api/tasks/:id`: Atualiza uma tarefa existente
- `DELETE /api/tasks/:id`: Deleta uma tarefa

### Configuração e Execução

#### Backend

1. Instale as dependências:
    ```bash
    cd backend
    npm install
    ```

2. Configure o banco de dados no arquivo `.env`:
    ```env
    DATABASE_URL="mysql://user:password@localhost:3306/database"
    ```

3. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

#### Frontend

1. Instale as dependências:
    ```bash
    cd frontend
    cd todo-list
    npm install
    ```

2. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
