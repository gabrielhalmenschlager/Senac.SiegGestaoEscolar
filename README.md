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
- Login 
<img src="Senac.SiegGestaoEscolar.Images/login.png" alt="Login" width="600"/>  
- Painel de controle 
<img src="Senac.SiegGestaoEscolar.Images/home.png" alt="Painel de controle" width="600"/>  

**🔹 Módulo Alunos**  
- **Listagem de alunos**  
<img src="Senac.SiegGestaoEscolar.Images/lista-aluno.png" alt="Listagem de alunos" width="600"/>  
- **Detalhes de aluno**  
<img src="Senac.SiegGestaoEscolar.Images/detalhe-aluno.png" alt="Detalhes de aluno" width="600"/>  
- **Cadastro de aluno**  
<img src="Senac.SiegGestaoEscolar.Images/cadastro-aluno.png" alt="Cadastro de aluno" width="600"/>  
- **Editar aluno**  
<img src="Senac.SiegGestaoEscolar.Images/editar-aluno.png" alt="Editar aluno" width="600"/>  
- **Vincular / desvincular aluno**  
<img src="Senac.SiegGestaoEscolar.Images/vincular-aluno.png" alt="Vincular aluno" width="600"/>  
<img src="Senac.SiegGestaoEscolar.Images/desvincular-aluno.png" alt="Desvincular aluno" width="600"/>  

**🔹 Módulo Professores**  
- **Listagem de professores**  
<img src="Senac.SiegGestaoEscolar.Images/lista-professores.png" alt="Listagem de professores" width="600"/>  
- **Detalhes de professor**  
<img src="Senac.SiegGestaoEscolar.Images/detalhe-professor.png" alt="Detalhes de professor" width="600"/>  
- **Cadastro de professor**  
<img src="Senac.SiegGestaoEscolar.Images/cadastro-professor.png" alt="Cadastro de professor" width="600"/>  
- **Editar professor**  
<img src="Senac.SiegGestaoEscolar.Images/editar-professor.png" alt="Editar professor" width="600"/>  

**🔹 Módulo Cursos**  
- **Listagem de cursos**  
<img src="Senac.SiegGestaoEscolar.Images/lista-curso.png" alt="Listagem de cursos" width="600"/>  
- **Detalhes de curso**  
<img src="Senac.SiegGestaoEscolar.Images/detalhe-curso.png" alt="Detalhes de curso" width="600"/>  
- **Cadastro de curso**  
<img src="Senac.SiegGestaoEscolar.Images/cadastro-curso.png" alt="Cadastro de curso" width="600"/>  
- **Editar curso**  
<img src="Senac.SiegGestaoEscolar.Images/editar-curso.png" alt="Editar curso" width="600"/>  


---

## 👥 Participantes
- Gabriel Halmenschlager Spall  
-	Pedro Henrique Konradt
- Everton Luiz Henrich Schneiders 
