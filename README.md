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
![C#](https://upload.wikimedia.org/wikipedia/commons/7/7c/C_Sharp_wordmark.svg)  
![.NET](https://upload.wikimedia.org/wikipedia/commons/1/1b/Microsoft_.NET_logo.svg)  
![SQL Server](https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_SQL_Server_Logo.png)  
![Dapper](https://upload.wikimedia.org/wikipedia/commons/4/4f/Dapper_Logo.png)  

**Frontend:**  
![React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)  
![Axios](https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_Axios.svg)  
![React Router](https://reactrouter.com/img/logo.svg)  

**Ferramentas de Projeto:**  
![GitHub](https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg)  
![Trello](https://upload.wikimedia.org/wikipedia/commons/6/6d/Trello_logo.svg)  
![dbdiagram.io](https://dbdiagram.io/favicon.ico)  
![Figma](https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg)  

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
