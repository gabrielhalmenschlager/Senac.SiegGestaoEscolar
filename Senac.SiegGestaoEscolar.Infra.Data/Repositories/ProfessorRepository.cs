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
        return await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync<Professor>(
            @"
            SELECT
                  p.id
                , p.nome
                , p.sobrenome                        
                , p.dataDeNascimento
                , p.email                
                , p.telefone                
                , f.Id AS Formacao
                , p.dataContratacao
                , p.ativo
            FROM
                professor p
            INNER JOIN
                Formacao f ON f.id = p.FormacaoId
            "
            );
    }

    public async Task<long> AdicionarProfessor(Professor professor)
    {
        return await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync<long>(
            @"
            INSERT INTO professor 
                (   
                  nome    
                , sobrenome
                , dataDeNascimento
                , email
                , telefone
                , formacaoId
                , dataContratacao
                , ativo
                )
            ",
            professor
            );
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
