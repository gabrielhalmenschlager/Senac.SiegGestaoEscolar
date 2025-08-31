using Dapper;
using Microsoft.Data.SqlClient;
using Senac.SiegGestaoEscolar.Domain.Repositories;
using Senac.SiegGestaoEscolar.Infra.Data.DataBaseConfiguration;

namespace Senac.SiegGestaoEscolar.Infra.Data.Repositories;

public class CursoRepository : ICursoRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public CursoRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<IEnumerable<Curso>> ObterTodosCursos()
    {
        return await _connectionFactory.CreateConnection()
             .QueryAsync<Curso>(
            @"
            SELECT
                  c.id
                , c.nome
                , cc.Id AS categoriaCurso
                , c.valor                
                , c.ativo
            FROM 
                curso c
            INNER JOIN 
                CategoriaCurso cc ON cc.id = c.CategoriaCursoId
            "
        );
    }

    public async Task<Curso> ObterCursoDetalhado(long id)
    {
        using var connection = _connectionFactory.CreateConnection();

        var cursos = await connection.QueryAsync<Curso, Professor, Curso>(
            @"
            SELECT
                  c.id
                , c.nome
                , c.descricao
                , c.dataCriacao
                , cc.Nome AS CategoriaCurso
                , c.valor
                , c.cargaHoraria
                , c.ativo
                , p.id AS ProfessorId
                , p.nome AS Nome
                , p.sobrenome AS Sobrenome
                , p.ativo AS Ativo
            FROM 
                curso c
            INNER JOIN 
                CategoriaCurso cc ON cc.id = c.CategoriaCursoId
            INNER JOIN 
                Professor p ON p.id = c.professorId
            WHERE 
                c.Id = @Id
            ",
            (curso, professor) =>
            {
                curso.Professor = professor;
                return curso;
            },
            new 
            { 
                Id = id
            },
            splitOn: "ProfessorId"
        );

        var curso = cursos.FirstOrDefault();

        if (curso != null)
        {
            var alunos = await connection.QueryAsync<Aluno>(
                @"
            SELECT a.id, a.nome, a.sobrenome
            FROM Aluno a
            INNER JOIN CursoAluno ca ON ca.AlunoId = a.Id
            WHERE ca.CursoId = @CursoId
            ",
                new 
                { 
                    CursoId = id 
                }
            );

            curso.Alunos = alunos.ToList();
        }
        return curso;
    }


    public async Task<long> AdicionarCurso(Curso curso)
    {
        return await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync<long>(
            @"
        INSERT INTO curso 
            (   
              nome    
            , descricao
            , dataCriacao
            , CategoriaCursoId
            , valor
            , cargaHoraria
            , professorId
            , ativo
            )
        OUTPUT INSERTED.id
        VALUES
            (  
              @Nome 
            , @Descricao
            , @DataCriacao
            , @CategoriaCursoId
            , @Valor
            , @CargaHoraria
            , @ProfessorId                
            , @Ativo
            )
        ",
            new
            {
                Nome = curso.Nome,
                Descricao = curso.Descricao,
                DataCriacao = curso.DataCriacao,
                CategoriaCursoId = (int)curso.CategoriaCurso,
                Valor = curso.Valor,
                CargaHoraria = curso.CargaHoraria,
                ProfessorId = curso.Professor.Id,
                Ativo = curso.Ativo
            }
        );
    }


    public async Task AtualizarCurso(long id, Curso curso)
    {
        using var connection = _connectionFactory.CreateConnection();

        await connection.ExecuteAsync(
            @"
        UPDATE 
            curso
        SET 
              nome = @Nome  
            , descricao = @Descricao
            , categoriaCursoId = @CategoriaCurso
            , valor = @Valor
            , cargaHoraria = @CargaHoraria
            , professorId = @ProfessorId
            , ativo = @Ativo
        WHERE
            id = @Id
        ",
            new
            {
                Id = id,
                Nome = curso.Nome,
                Descricao = curso.Descricao,
                CategoriaCurso = (int)curso.CategoriaCurso,
                Valor = curso.Valor,
                CargaHoraria = curso.CargaHoraria,
                ProfessorId = curso.Professor?.Id ?? 0,
                Ativo = curso.Ativo
            }
        );
    }


    public async Task DeletarCurso(long id)
    {
        await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync(
            @"
            DELETE FROM curso
            WHERE id = @Id
            ",
            new 
            { 
                Id = id 
            }
        );
    }

    public async Task<int> ObterTotalCursos()
    {
        return await _connectionFactory.CreateConnection()
            .ExecuteScalarAsync<int>(
            @"
            SELECT COUNT(*) FROM curso
            "
        );
    }

    public async Task<IEnumerable<Aluno>> ObterAlunosPorCurso(long cursoId)
    {
        return await _connectionFactory.CreateConnection()
            .QueryAsync<Aluno>(
            @"
            SELECT 
                 a.id
               , a.nome
               , a.sobrenome
            FROM 
                aluno a
            INNER JOIN 
                CursoAluno ca ON ca.AlunoId = a.id
            WHERE 
                ca.CursoId = @CursoId
            ", 
            new
            {
                CursoId = cursoId 
            }
        );
    }
}