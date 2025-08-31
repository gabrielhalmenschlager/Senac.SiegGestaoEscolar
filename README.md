# Sieg Gestão Escolar

![Logo do Projeto](sieg-gestao-escolar-frontend/sieg-gestao-escolar-frontend/src/assets/docs/logo.png)  

## 📌 Descrição do Projeto
O **Sieg Gestão Escolar** é um sistema de gestão escolar desenvolvido no contexto do **Projeto Integrador do curso Técnico em Informática**, com o objetivo de controlar professores, alunos e cursos, permitindo operações de cadastro, edição, exclusão, vinculação e listagem com filtros avançados.  

O sistema foi desenvolvido com **backend em C# / .NET** usando **Dapper** e **frontend em React**, utilizando boas práticas de programação, validações de dados e autenticação para proteger as rotas.  

---

## 🎯 Objetivos
- Facilitar o gerenciamento de informações escolares.  
- Implementar **CRUD completo** para professores, alunos e cursos.  
- Aplicar regras de negócio, como vinculação apenas de entidades ativas.  
- Disponibilizar filtros de pesquisa case-insensitive.  
- Criar uma interface intuitiva e responsiva para o usuário.  

---

## 🛠 Tecnologias Utilizadas

**Backend:**  
- C# / .NET  
- SQL Server  
- Dapper  

**Frontend:**  
- React  
- React Router  
- Axios  

**Ferramentas de Projeto:**  
- GitHub  
- Trello  
- dbdiagram.io  
- Figma / Wireframe.cc  

---

## 🗂 Estrutura do Sistema

### Modelos
**Professor**
- ID, Nome, Sobrenome, Data de Nascimento, Email, Telefone, Formação, Data de Contratação, Ativo  

**Aluno**
- ID, Nome, Sobrenome, Data de Nascimento, Email, Telefone, Data de Matrícula, Ativo  

**Curso**
- ID, Nome, Descrição, Data de Criação, Categoria, Valor, Carga Horária, ProfessorID, Ativo  

### Funcionalidades
- Login com autenticação e proteção de rotas  
- CRUD completo de Professores, Alunos e Cursos  
- Vinculação de professores e alunos a cursos ativos  
- Filtros de pesquisa avançados (case-insensitive)  
- Validações de campos obrigatórios e e-mails válidos  

---

## 📊 Diagrama do Banco de Dados (DER)
![Diagrama do Banco](link-da-imagem-do-diagrama)

---

## 🖼 Wireframes das Telas
**Tela de Login**  
![Login](link-da-imagem-login)  

**Dashboard**  
![Dashboard](link-da-imagem-dashboard)  

**Cadastro de Professores**  
![Cadastro Professor](link-da-imagem-cadastro-professor)  

**Cadastro de Alunos**  
![Cadastro Aluno](link-da-imagem-cadastro-aluno)  

**Cadastro de Cursos**  
![Cadastro Curso](link-da-imagem-cadastro-curso)  

**Listagens com filtros**  
![Listagem](link-da-imagem-listagem)  

**Detalhes e Vinculações**  
![Detalhes](link-da-imagem-detalhes)  

---

## 🏗 Estrutura de Pastas
> Aqui você pode adicionar fotos ou capturas do backend e frontend do projeto.  

---

## 👥 Participantes
- Gabriel Halmenschlager  
- Pedro Henrique  
- Everton  
