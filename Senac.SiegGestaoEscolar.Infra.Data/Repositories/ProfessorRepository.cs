using Dapper;
using Senac.SiegGestaoEscolar.Domain.Repositories;
using Senac.SiegGestaoEscolar.Infra.Data.DataBaseConfiguration;

namespace Senac.SiegGestaoEscolar.Infra.Data.Repositories;

public class ProfessorRepository : IProfessorRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public ProfessorRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<IEnumerable<Professor>> ObterTodosProfessores()
    {
        return await _connectionFactory.CreateConnection()
            .QueryAsync<Professor>(
            @"
            SELECT
                  id
                , nome
                , sobrenome                
                , email                
                , telefone
                , ativo
            FROM
                professor
            "
            );
    }

    public async Task<Professor> ObterProfessorDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public async Task<long> AdicionarProfessor(Professor professor)
    {
        throw new NotImplementedException();
    }

    public async Task AtualizarProfessor(long id, Professor professor)
    {
        throw new NotImplementedException();
    }

    public async Task DeletarProfessor(long id)
    {
        throw new NotImplementedException();
    }




}
