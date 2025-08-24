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
            WHERE 
                p.Id = @Id
            ",
            new { Id = id }
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
            OUTPUT INSERTED.id
            VALUES
                (  
                  @Nome 
                , @Sobrenome
                , @DataDeNascimento
                , @Email
                , @Telefone
                , @Formacao
                , @DataContratacao                
                , @Ativo
                )
            ",
            professor
            );
    }

    public async Task AtualizarProfessor(long id, Professor professor)
    {
        await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync(
            @"
            UPDATE 
                professor
            SET 
                  email = @Email
                , telefone = @Telefone
                , formacaoId = @Formacao
                , ativo = @Ativo
            WHERE
                id = @Id
            ",
            professor
            );
    }

    public async Task DeletarProfessor(long id)
    {
        await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync(
            @"
            DELETE FROM professor
            WHERE id = @Id
            ",
            new { Id = id }
            );
    }

    public async Task<int> ObterTotalProfessores()
    {
        using var connection = _connectionFactory.CreateConnection();
        var total = await connection.ExecuteScalarAsync<int>(
            @"SELECT COUNT(*) FROM professor"
        );
        return total;
    }
}
