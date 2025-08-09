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
                , c.Id AS categoriaCurso
                , c.valor
                , c.cargaHoraria
                , c.ativo
            FROM 
                curso c
            INNER JOIN 
                CategoriaCurso cc ON cc.id = c.CategoriaCursoId
            "
            );
    }

    public async Task<long> AdicionarCurso(Curso curso)
    {
        throw new NotImplementedException();
    }

    public async Task AtualizarCurso(long id, Curso curso)
    {
        throw new NotImplementedException();
    }

    public async Task DeletarCurso(long id)
    {
        throw new NotImplementedException();
    }
}
