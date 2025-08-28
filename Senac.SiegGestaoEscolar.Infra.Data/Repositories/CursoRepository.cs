using Dapper;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;
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
            , c.professorId
            , c.nome
            , c.descricao
            , c.dataCriacao
            , cc.Nome AS CategoriaCurso
            , c.valor
            , c.cargaHoraria
            , c.ativo
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
            new { Id = id },
            splitOn: "Id"
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
                new { CursoId = id }
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
                , @CategoriaCurso
                , @Valor
                , @CargaHoraria
                , @ProfessorId                
                , @Ativo
                )
            ",
            curso
            );
    }

    public async Task AtualizarCurso(long id, Curso curso)
    {
        await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync(
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
            curso
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
            new { Id = id }
            );
    }

    public async Task<int> ObterTotalCursos()
    {
        using var connection = _connectionFactory.CreateConnection();
        var total = await connection.ExecuteScalarAsync<int>(
            @"SELECT COUNT(*) FROM curso"
        );
        return total;
    }
}