# Sieg Gestão Escolar

<img src="Senac.SiegGestaoEscolar.Images/logo.png" alt="Logo do Projeto" width="200"/>

---

## 📌 Sobre o Projeto
O **Sieg Gestão Escolar** é um sistema completo de gestão escolar, desenvolvido como parte do **Projeto Integrador do curso Técnico em Informática**.  
Permite gerenciar **professores, alunos e cursos**, oferecendo cadastro, edição, exclusão, vinculação e filtros avançados.  

O sistema possui **backend em C# / .NET usando Dapper** e **frontend em React**, seguindo boas práticas, validações e autenticação de rotas.

---

## 🎯 Objetivos
- Gerenciar informações escolares de forma simples e organizada.  
- Implementar **CRUD completo** para professores, alunos e cursos.  
- Garantir que apenas entidades **ativas** possam ser vinculadas.  
- Disponibilizar **filtros avançados de pesquisa** (case-insensitive).  
- Criar interface **intuitiva e responsiva**.

---

## 🛠 Tecnologias e Ferramentas

**Backend:**  
<img src="Senac.SiegGestaoEscolar.Images/csharp.png" alt="C#" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/dotnet.png" alt=".NET" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/sqlserver.png" alt="SQL Server" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/dapper.png" alt="Dapper" width="40"/> 

**Frontend:**  
<img src="Senac.SiegGestaoEscolar.Images/react.png" alt="React" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/axios.png" alt="Axios" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/reactrouter.png" alt="React Router" width="40"/> 

**Ferramentas de Projeto:**  
<img src="Senac.SiegGestaoEscolar.Images/github.png" alt="GitHub" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/trello.png" alt="Trello" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/dbdiagram.png" alt="dbdiagram.io" width="40"/> 
<img src="Senac.SiegGestaoEscolar.Images/figma.png" alt="Figma" width="40"/> 

---

## 🗂 Estrutura do Sistema

### Modelos
**Professor:** ID, Nome, Sobrenome, Data de Nascimento, Email, Telefone, Formação, Data de Contratação, Ativo  
**Aluno:** ID, Nome, Sobrenome, Data de Nascimento, Email, Telefone, Data de Matrícula, Ativo  
**Curso:** ID, Nome, Descrição, Data de Criação, Categoria, Valor, Carga Horária, ProfessorID, Ativo  

### Funcionalidades
- 🔐 Login com autenticação e proteção de rotas  
- 📝 CRUD completo de **Professores, Alunos e Cursos**  
- 🔗 Vinculação de professores e alunos a cursos ativos  
- 🔍 Filtros avançados de pesquisa (case-insensitive)  
- ✅ Validações de campos obrigatórios e e-mails  

---

## 🖼 Capturas de Tela

### 🔹 Nav Bar
| Nav Bar |
|:-------:|
| <img src="Senac.SiegGestaoEscolar.Images/sidebar.png" alt="Nav Bar" width="300"/> |

### 🔹 Footer
| Footer |
|:------:|
| <img src="Senac.SiegGestaoEscolar.Images/footer.png" alt="Footer" width="400"/> |

### 🔹 Login e Painel de Controle
| Login | Painel de Controle |
|:-----:|:----------------:|
| <img src="Senac.SiegGestaoEscolar.Images/login.png" alt="Login" width="300"/> | <img src="Senac.SiegGestaoEscolar.Images/home.png" alt="Painel de controle" width="300"/> |

### 🔹 Módulo Alunos
| Listagem | Detalhes | Cadastro |
|:--------:|:--------:|:-------:|
| <img src="Senac.SiegGestaoEscolar.Images/lista-aluno.png" alt="Listagem" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/detalhe-aluno.png" alt="Detalhes" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/cadastro-aluno.png" alt="Cadastro" width="200"/> |

| Editar | Vincular | Desvincular |
|:------:|:--------:|:-----------:|
| <img src="Senac.SiegGestaoEscolar.Images/editar-aluno.png" alt="Editar" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/vincular-aluno.png" alt="Vincular" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/desvincular-aluno.png" alt="Desvincular" width="200"/> |

### 🔹 Módulo Professores
| Listagem | Detalhes | Cadastro | Editar |
|:--------:|:--------:|:-------:|:-----:|
| <img src="Senac.SiegGestaoEscolar.Images/lista-professores.png" alt="Listagem" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/detalhe-professor.png" alt="Detalhes" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/cadastro-professor.png" alt="Cadastro" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/editar-professor.png" alt="Editar" width="200"/> |

### 🔹 Módulo Cursos
| Listagem | Detalhes | Cadastro | Editar |
|:--------:|:--------:|:-------:|:-----:|
| <img src="Senac.SiegGestaoEscolar.Images/lista-curso.png" alt="Listagem" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/detalhe-curso.png" alt="Detalhes" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/cadastro-curso.png" alt="Cadastro" width="200"/> | <img src="Senac.SiegGestaoEscolar.Images/editar-curso.png" alt="Editar" width="200"/> |

---

## 👥 Equipe
- Gabriel Halmenschlager Spall  
- Pedro Henrique Konradt  
- Everton Luiz Henrich Schneiders  
