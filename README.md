# Relatório de Implementação do Sistema de Cadastro de Produtos

## Loja de Artesanato

### 1. Introdução
Este relatório documenta os passos seguidos na implementação do sistema de cadastro de produtos para a "Loja de Artesanato". O sistema foi desenvolvido utilizando **Node.js**, **Express**, **MySQL** e **EJS**.

---

### 2. Configuração do Banco de Dados

#### 2.1 Criação do Banco
- Criado o banco de dados no **MySQL** com o nome `cadastros`;
- Configurada a conexão com o banco no arquivo `database.js`, utilizando a biblioteca **Sequelize**;
- Executado um teste de conexão para validar a comunicação entre o servidor e o banco de dados.

#### 2.2 Modelagem da Tabela
- Criada a tabela `cadastros` no **MySQL** por meio do modelo definido no arquivo `Cadastros.js`.
- A tabela contém os seguintes campos:
  - **nome**: `STRING` (obrigatório)
  - **imagem**: `STRING` (obrigatório)
  - **descricao**: `TEXT` (obrigatório)
  - **preco**: `STRING` (obrigatório)

---

### 3. Desenvolvimento do Backend

#### 3.1 Configuração do Servidor
- Configurado o servidor **Express** no arquivo `index.js`;
- Instaladas e configuradas as seguintes bibliotecas:
  - `express` (gerenciamento do servidor)
  - `body-parser` (tratamento de requisições POST)
  - `path` (manipulação de caminhos de arquivos)
  - `sequelize` e `mysql2` (integração com o banco de dados)

#### 3.2 Configuração do Upload de Imagens
- Instalado e implementado o **Multer** para permitir o upload de imagens para a pasta `public/uploads`.

#### 3.3 Implementação das Rotas
Criadas as seguintes rotas para o funcionamento do sistema:

| Método | Rota              | Descrição                                     |
|--------|-------------------|-----------------------------------------------|
| `GET`  | `/`               | Exibe todos os produtos cadastrados           |
| `GET`  | `/cadastrar`      | Exibe o formulário de cadastro                |
| `POST` | `/salvarcadastro` | Salva um novo produto no banco de dados       |
| `GET`  | `/cadastro/:id`   | Exibe detalhes de um cadastro específico      |

---

### 4. Desenvolvimento do Frontend

#### 4.1 Templates EJS
- Instalação do **EJS** pelo terminal;
- Criados os arquivos `index.ejs` e `cadastrar.ejs` dentro da pasta `views`:
  - **`index.ejs`** exibe todos os produtos cadastrados em formato de cards dinâmicos.
  - **`cadastrar.ejs`** contém o formulário para cadastrar novos produtos.

#### 4.2 Estilização CSS e Script JS
- Criado o arquivo `style.css` dentro da pasta `public`;
- Definidas classes CSS para botões, formulários e layout dos produtos;
- Criado `script.js` dentro da pasta `public`;
- Implementada funcionalidade de carrossel de produtos para melhor exibição dos itens.

---

### 5. Testes e Validação
- Rodado o servidor com `node index.js` e verificado o funcionamento das rotas;
- Testado o upload de imagens e a persistência dos dados no banco;
- Corrigidos pequenos erros de conexão de banco e responsividade causados por gramática.

---

### 6. Conclusão
O sistema foi desenvolvido com sucesso, permitindo o cadastro e exibição de produtos de forma eficiente e intuitiva.
