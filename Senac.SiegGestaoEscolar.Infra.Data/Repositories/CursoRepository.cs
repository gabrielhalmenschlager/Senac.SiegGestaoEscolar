using Dapper;
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
                , c.Id AS categoriaCurso
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
        return await _connectionFactory.CreateConnection()
             .QueryFirstOrDefaultAsync<Curso>(
            @"  
            SELECT
                  c.id
                , c.professorId
                , c.nome
                , c.descricao
                , c.dataCriacao
                , cc.Id AS categoriaCurso
                , c.valor
                , c.cargaHoraria
                , c.ativo
            FROM 
                curso c
            INNER JOIN 
                CategoriaCurso cc ON cc.Id = c.CategoriaCursoId
            WHERE
                c.Id = @Id
            ",
            new { Id = id }
            );
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
                  descricao = @Descricao
                , categoriaCurso = @CategoriaCurso
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
            DELETE FROM aluno
            WHERE id = @Id
            ",
            new { Id = id }
            );
    }
}
