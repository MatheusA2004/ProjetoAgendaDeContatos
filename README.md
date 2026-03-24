# Título do Projeto
API RESTful para [finalidade do projeto].

# Descrição
API desenvolvida para criação, remoção, atualização e listagem com e sem filtro de contatos em uma agenda

# Tecnologias Utilizadas
- Node.js
- Express
- Banco de Dados (MySQL)

# Estrutura de Pastas
src/
  controllers/
  database/
  repositories/
  app.js
  index.js
package-lock.json
package.json
README.md

# Pré-requisitos
- Node.js instalado
- npm ou yarn
- Banco de dados configurado

# Instalação
1. Clone o repositório:
   git clone https://github.com/MatheusA2004/ProjetoAgendaDeContatos

2. Entre na pasta:
   cd ProjetoAgendaDeContatos-branch20260317

3. Instale dependências:
   npm install

4. Configure o arquivo .env baseado no .env.example

# Execução do Projeto
Modo desenvolvimento:
  npm run dev

# Endpoints da API
GET /contatos        - Lista registros
POST /contatos       - Cria registro
GET /contatos/:id    - Retorna registro específico
GET /contatos/inicial/:letra - - Retorna registro específico
PUT /contatos/:id    - Atualiza registro
DELETE /contatos/:id - Remove registro

# Variáveis de Ambiente
PORT=3306
DATABASE_URL=dbagendacontatos


# Descrição do Extra Senac Web 2
Foi adicionado um método de listar os contatos com um filtro através da primeira letra do nome


# Autor
Matheus de Almeida do Nascimento Lopes
Barbara Aparecida do Carmo Ferreira

# Licença
Senac RJ.