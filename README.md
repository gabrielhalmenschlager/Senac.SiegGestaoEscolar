# Sieg Gestão Escolar

<img src="Senac.SiegGestaoEscolar.Images/logo.png" alt="Logo do Projeto" width="200"/>

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

## 🖼 Imagens do Sistema

**🔹 Nav Bar e Footer**  
<img src="Senac.SiegGestaoEscolar.Images/sidebar.png" alt="Nav Bar" width="150"/>  
<img src="Senac.SiegGestaoEscolar.Images/footer.png" alt="Footer" width="600"/>  

**🔹 Login e Painel de Controle**  
- **Login**  
<img src="Senac.SiegGestaoEscolar.Images/login.png" alt="Login" width="600"/>  
- **Painel de Controle**  
<img src="Senac.SiegGestaoEscolar.Images/home.png" alt="Painel de Controle" width="600"/>  

**🔹 Módulo Alunos**  
- **Listagem de Alunos**  
<img src="Senac.SiegGestaoEscolar.Images/lista-aluno.png" alt="Alunos Listagem" width="600"/>  
- **Detalhes do Aluno**  
<img src="Senac.SiegGestaoEscolar.Images/detalhe-aluno.png" alt="Alunos Detalhes" width="600"/>  
- **Cadastro de Aluno**  
<img src="Senac.SiegGestaoEscolar.Images/cadastro-aluno.png" alt="Alunos Cadastro" width="600"/>  
- **Editar Aluno**  
<img src="Senac.SiegGestaoEscolar.Images/editar-aluno.png" alt="Alunos Editar" width="600"/>  
- **Vincular / Desvincular Aluno**  
<img src="Senac.SiegGestaoEscolar.Images/vincular-aluno.png" alt="Alunos Vincular" width="600"/>  
<img src="Senac.SiegGestaoEscolar.Images/desvincular-aluno.png" alt="Alunos Desvincular" width="600"/>  

**🔹 Módulo Professores**  
- **Listagem de Professores**  
<img src="Senac.SiegGestaoEscolar.Images/lista-professores.png" alt="Professores Listagem" width="600"/>  
- **Detalhes do Professor**  
<img src="Senac.SiegGestaoEscolar.Images/detalhe-professor.png" alt="Professores Detalhes" width="600"/>  
- **Cadastro de Professor**  
<img src="Senac.SiegGestaoEscolar.Images/cadastro-professor.png" alt="Professores Cadastro" width="600"/>  
- **Editar Professor**  
<img src="Senac.SiegGestaoEscolar.Images/editar-professor.png" alt="Professores Editar" width="600"/>  

**🔹 Módulo Cursos**  
- **Listagem de Cursos**  
<img src="Senac.SiegGestaoEscolar.Images/lista-curso.png" alt="Cursos Listagem" width="600"/>  
- **Detalhes do Curso**  
<img src="Senac.SiegGestaoEscolar.Images/detalhe-curso.png" alt="Cursos Detalhes" width="600"/>  
- **Cadastro de Curso**  
<img src="Senac.SiegGestaoEscolar.Images/cadastro-curso.png" alt="Cursos Cadastro" width="600"/>  
- **Editar Curso**  
<img src="Senac.SiegGestaoEscolar.Images/editar-curso.png" alt="Cursos Editar" width="600"/>  

---

## 👥 Participantes
- Gabriel Halmenschlager Spall  
-	Pedro Henrique Konradt
- Everton Luiz Henrich Schneiders 
