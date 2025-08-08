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