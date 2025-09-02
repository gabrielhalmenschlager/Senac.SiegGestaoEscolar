-- Criar banco de dados
CREATE DATABASE sieg_gestao_escolar;
GO

USE sieg_gestao_escolar;
GO

-- ==========================
-- Tabela ENUM: Formacao
-- ==========================
CREATE TABLE Formacao (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100) NOT NULL UNIQUE
);

-- Inserindo valores possíveis para 'Formacao'
INSERT INTO Formacao (Nome) VALUES
('Graduacao'),
('PosGraduacao'),
('Mestrado'),
('Doutorado');

-- ==========================
-- Tabela: Professor
-- ==========================
CREATE TABLE Professor (
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100) NOT NULL,
    Sobrenome NVARCHAR(100) NOT NULL,
    DataDeNascimento DATE NOT NULL,
    Email NVARCHAR(150) NOT NULL UNIQUE,
    Telefone NVARCHAR(20),
    FormacaoId INT NOT NULL,
    DataContratacao DATE NOT NULL,
    Ativo BIT NOT NULL DEFAULT 1,

    CONSTRAINT FK_Professor_Formacao FOREIGN KEY (FormacaoId)
        REFERENCES Formacao(Id)
);

-- ==========================
-- Tabela ENUM: CategoriaCurso
-- ==========================
CREATE TABLE CategoriaCurso (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(50) NOT NULL UNIQUE
);

-- Inserindo valores possíveis para 'CategoriaCurso'
INSERT INTO CategoriaCurso (Nome) VALUES
('Basico'),
('Medio'),
('Avancado');

-- ==========================
-- Tabela: Curso
-- ==========================
CREATE TABLE Curso (
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(150) NOT NULL,
    Descricao NVARCHAR(MAX) NOT NULL,
    DataCriacao DATE NOT NULL,
    CategoriaCursoId INT NOT NULL,
    Valor DECIMAL(10,2) NOT NULL,
    CargaHoraria INT NOT NULL,
    ProfessorId BIGINT NULL,
    Ativo BIT NOT NULL DEFAULT 1,

    CONSTRAINT FK_Curso_CategoriaCurso FOREIGN KEY (CategoriaCursoId)
        REFERENCES CategoriaCurso(Id),

    CONSTRAINT FK_Curso_Professor FOREIGN KEY (ProfessorId)
        REFERENCES Professor(Id)
);

-- ==========================
-- Tabela: Aluno
-- ==========================
CREATE TABLE Aluno (
    Id BIGINT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(150) NOT NULL,
    Sobrenome NVARCHAR(150) NOT NULL,
    DataDeNascimento DATE NOT NULL,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    Telefone NVARCHAR(20) NOT NULL,
    DataMatricula DATE NOT NULL,
    Ativo BIT NOT NULL DEFAULT 1
);

-- ==========================
-- Tabela de Associação: CursoAluno (N:N)
-- ==========================
CREATE TABLE CursoAluno (
    CursoId BIGINT NOT NULL,
    AlunoId BIGINT NOT NULL,

    PRIMARY KEY (CursoId, AlunoId),

    CONSTRAINT FK_CursoAluno_Curso FOREIGN KEY (CursoId)
        REFERENCES Curso(Id) ON DELETE CASCADE,

    CONSTRAINT FK_CursoAluno_Aluno FOREIGN KEY (AlunoId)
        REFERENCES Aluno(Id) ON DELETE CASCADE
);

ALTER TABLE CursoAluno
ADD DataVinculo DATETIME NOT NULL DEFAULT GETDATE();

-- ==========================
-- Tabela de Associação: CursoProfessor (N:N)
-- ==========================
CREATE TABLE CursoProfessor (
    CursoId BIGINT NOT NULL,
    ProfessorId BIGINT NOT NULL,
    DataVinculo DATETIME NOT NULL DEFAULT GETDATE(),

    PRIMARY KEY (CursoId, ProfessorId),

    CONSTRAINT FK_CursoProfessor_Curso FOREIGN KEY (CursoId)
        REFERENCES Curso(Id) ON DELETE CASCADE,

    CONSTRAINT FK_CursoProfessor_Professor FOREIGN KEY (ProfessorId)
        REFERENCES Professor(Id) ON DELETE CASCADE
);

INSERT INTO Professor (Nome, Sobrenome, DataDeNascimento, Email, Telefone, FormacaoId, DataContratacao)
VALUES
('Carlos', 'Souza', '1980-05-12', 'carlos.souza@sieg.com', '51999990001', 1, '2020-02-10'),
('Ana', 'Lima', '1985-09-23', 'ana.lima@sieg.com', '51999990002', 2, '2019-03-15'),
('João', 'Pereira', '1978-01-30', 'joao.pereira@sieg.com', '51999990003', 3, '2018-05-22'),
('Mariana', 'Oliveira', '1990-07-14', 'mariana.oliveira@sieg.com', '51999990004', 4, '2021-08-01'),
('Lucas', 'Fernandes', '1983-11-20', 'lucas.fernandes@sieg.com', '51999990005', 1, '2017-09-12'),
('Patricia', 'Gomes', '1986-12-05', 'patricia.gomes@sieg.com', '51999990006', 2, '2018-10-01'),
('Ricardo', 'Barbosa', '1975-02-14', 'ricardo.barbosa@sieg.com', '51999990007', 3, '2016-11-18'),
('Fernanda', 'Alves', '1988-03-09', 'fernanda.alves@sieg.com', '51999990008', 4, '2022-01-10'),
('Thiago', 'Ramos', '1981-08-16', 'thiago.ramos@sieg.com', '51999990009', 1, '2019-02-05'),
('Juliana', 'Costa', '1992-06-22', 'juliana.costa@sieg.com', '51999990010', 2, '2020-04-14'),
('Paulo', 'Silva', '1984-10-03', 'paulo.silva@sieg.com', '51999990011', 3, '2021-06-21'),
('Camila', 'Santos', '1989-11-11', 'camila.santos@sieg.com', '51999990012', 4, '2018-12-12'),
('Rodrigo', 'Martins', '1979-04-25', 'rodrigo.martins@sieg.com', '51999990013', 1, '2017-07-19'),
('Larissa', 'Rocha', '1991-05-17', 'larissa.rocha@sieg.com', '51999990014', 2, '2019-05-05'),
('Felipe', 'Carvalho', '1982-09-08', 'felipe.carvalho@sieg.com', '51999990015', 3, '2020-03-03'),
('Bianca', 'Moura', '1987-01-29', 'bianca.moura@sieg.com', '51999990016', 4, '2022-07-22'),
('Gustavo', 'Teixeira', '1980-12-30', 'gustavo.teixeira@sieg.com', '51999990017', 1, '2018-01-11'),
('Vanessa', 'Dias', '1985-02-27', 'vanessa.dias@sieg.com', '51999990018', 2, '2017-09-25'),
('Bruno', 'Medeiros', '1990-10-15', 'bruno.medeiros@sieg.com', '51999990019', 3, '2019-11-30'),
('Aline', 'Freitas', '1983-03-04', 'aline.freitas@sieg.com', '51999990020', 4, '2021-02-08');

INSERT INTO Curso (Nome, Descricao, DataCriacao, CategoriaCursoId, Valor, CargaHoraria, ProfessorId)
VALUES
('Introdução à Programação', 'Curso básico para iniciantes em programação.', '2023-01-10', 1, 500.00, 40, 10011),
('Banco de Dados SQL', 'Curso intermediário de SQL e modelagem de dados.', '2023-01-15', 2, 700.00, 60, 10012),
('Desenvolvimento Web', 'Curso avançado de front-end e back-end.', '2023-02-01', 3, 1200.00, 80, 10013),
('Python para Análise de Dados', 'Aprenda análise de dados com Python.', '2023-02-05', 2, 800.00, 50, 10014),
('Java Avançado', 'Curso de programação avançada em Java.', '2023-02-12', 3, 1500.00, 100, 10015),
('C# Básico', 'Introdução ao C# e .NET.', '2023-03-01', 1, 600.00, 40, 10016),
('Machine Learning', 'Curso de inteligência artificial e aprendizado de máquina.', '2023-03-10', 3, 2000.00, 120, 10017),
('HTML e CSS', 'Curso básico de criação de páginas web.', '2023-03-15', 1, 400.00, 30, 10018),
('ReactJS', 'Curso intermediário de React.', '2023-04-01', 2, 1000.00, 60, 10019),
('DevOps', 'Automação de processos e integração contínua.', '2023-04-05', 3, 1800.00, 90, 10020),
('Cibersegurança', 'Práticas de segurança da informação.', '2023-04-12', 3, 1700.00, 100, 10021),
('Excel Avançado', 'Automação e análise de dados no Excel.', '2023-04-20', 2, 700.00, 50, 10022),
('Gestão de Projetos', 'Metodologias ágeis e tradicionais.', '2023-05-01', 2, 1200.00, 60, 10023),
('Power BI', 'Visualização e análise de dados.', '2023-05-10', 2, 900.00, 40, 10024),
('Engenharia de Software', 'Processos e práticas de desenvolvimento.', '2023-05-15', 3, 2000.00, 120, 10025),
('Redes de Computadores', 'Fundamentos de redes e protocolos.', '2023-06-01', 1, 500.00, 50, 10026),
('Docker e Kubernetes', 'Orquestração e containers.', '2023-06-10', 3, 1900.00, 80, 10027),
('Análise de Sistemas', 'Modelagem e análise de requisitos.', '2023-06-20', 2, 1000.00, 60, 10028),
('PHP e Laravel', 'Desenvolvimento web com PHP.', '2023-07-01', 2, 800.00, 70, 10029),
('Cloud Computing', 'Serviços e arquitetura em nuvem.', '2023-07-10', 3, 2200.00, 100, 10030);

INSERT INTO Aluno (Nome, Sobrenome, DataDeNascimento, Email, Telefone, DataMatricula)
VALUES
('João', 'Silva', '2000-01-10', 'joao.silva1@aluno.com', '51988880001', '2024-01-10'),
('Maria', 'Souza', '2001-02-20', 'maria.souza1@aluno.com', '51988880002', '2024-01-11'),
('Pedro', 'Oliveira', '1999-03-15', 'pedro.oliveira1@aluno.com', '51988880003', '2024-01-12'),
('Ana', 'Lima', '2002-04-18', 'ana.lima1@aluno.com', '51988880004', '2024-01-13'),
('Lucas', 'Pereira', '2000-05-22', 'lucas.pereira1@aluno.com', '51988880005', '2024-01-14'),
('Carla', 'Santos', '2001-06-30', 'carla.santos1@aluno.com', '51988880006', '2024-01-15'),
('Bruno', 'Costa', '1998-07-25', 'bruno.costa1@aluno.com', '51988880007', '2024-01-16'),
('Fernanda', 'Ramos', '1999-08-12', 'fernanda.ramos1@aluno.com', '51988880008', '2024-01-17'),
('Thiago', 'Martins', '2002-09-05', 'thiago.martins1@aluno.com', '51988880009', '2024-01-18'),
('Juliana', 'Gomes', '2001-10-10', 'juliana.gomes1@aluno.com', '51988880010', '2024-01-19'),
('Ricardo', 'Fernandes', '1999-11-11', 'ricardo.fernandes1@aluno.com', '51988880011', '2024-01-20'),
('Patricia', 'Carvalho', '2000-12-22', 'patricia.carvalho1@aluno.com', '51988880012', '2024-01-21'),
('Rodrigo', 'Alves', '2001-01-02', 'rodrigo.alves1@aluno.com', '51988880013', '2024-01-22'),
('Camila', 'Barbosa', '2002-02-14', 'camila.barbosa1@aluno.com', '51988880014', '2024-01-23'),
('Gustavo', 'Moura', '1998-03-03', 'gustavo.moura1@aluno.com', '51988880015', '2024-01-24'),
('Vanessa', 'Teixeira', '1999-04-04', 'vanessa.teixeira1@aluno.com', '51988880016', '2024-01-25'),
('Felipe', 'Dias', '2000-05-05', 'felipe.dias1@aluno.com', '51988880017', '2024-01-26'),
('Aline', 'Freitas', '2001-06-06', 'aline.freitas1@aluno.com', '51988880018', '2024-01-27'),
('Bruna', 'Medeiros', '2002-07-07', 'bruna.medeiros1@aluno.com', '51988880019', '2024-01-28'),
('Eduardo', 'Rocha', '1998-08-08', 'eduardo.rocha1@aluno.com', '51988880020', '2024-01-29');

INSERT INTO CursoAluno (CursoId, AlunoId, DataVinculo)
VALUES
(10019, 10010, '2024-02-10'),
(10021, 10010, '2024-02-10'),

(10020, 10011, '2024-02-11'),
(10023, 10011, '2024-02-11'),

(10021, 10012, '2024-02-12'),
(10026, 10012, '2024-02-12'),

(10022, 10013, '2024-02-13'),

(10023, 10014, '2024-02-14'),
(10027, 10014, '2024-02-14'),

(10024, 10015, '2024-02-15'),

(10025, 10016, '2024-02-16'),
(10028, 10016, '2024-02-16'),

(10026, 10017, '2024-02-17'),

(10027, 10018, '2024-02-18'),

(10028, 10019, '2024-02-19'),
(10030, 10019, '2024-02-19'),

(10029, 10020, '2024-02-20'),

(10030, 10021, '2024-02-21'),

(10031, 10022, '2024-02-22'),

(10032, 10023, '2024-02-23'),

(10033, 10024, '2024-02-24'),

(10034, 10025, '2024-02-25'),

(10035, 10026, '2024-02-26'),

(10036, 10027, '2024-02-27'),

(10037, 10028, '2024-02-28'),

(10038, 10029, '2024-02-29');
