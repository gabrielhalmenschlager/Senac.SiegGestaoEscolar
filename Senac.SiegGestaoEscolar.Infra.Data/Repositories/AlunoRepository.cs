using Dapper;
using Senac.SiegGestaoEscolar.Domain.Repositories;
using Senac.SiegGestaoEscolar.Infra.Data.DataBaseConfiguration;

namespace Senac.SiegGestaoEscolar.Infra.Data.Repositories;

public class AlunoRepository : IAlunoRepository
{
    private readonly IDbConnectionFactory _connectionFactory;

    public AlunoRepository(IDbConnectionFactory connectionFactory)
    {
        _connectionFactory = connectionFactory;
    }

    public async Task<IEnumerable<Aluno>> ObterTodosAlunos()
    {
        return await _connectionFactory.CreateConnection()
             .QueryAsync<Aluno>(
            @"
            SELECT
                  id
                , nome
                , sobrenome
                , email
                , telefone
                , ativo
            FROM
                aluno
            "
            );
    }

    public async Task<Aluno> ObterAlunoDetalhado(long id)
    {
        return await _connectionFactory.CreateConnection()
             .QueryFirstOrDefaultAsync<Aluno>(
            @"
            SELECT
                  id
                , nome
                , sobrenome
                , dataDeNascimento
                , email
                , telefone
                , dataMatricula
                , ativo
            FROM
                aluno
            WHERE id = @Id
            ",
            new { Id = id }
            );
    }

    public async Task<long> AdicionarAluno(Aluno aluno)
    {
        return await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync<long>(
            @"
            INSERT INTO aluno 
                (
                  nome
                , sobrenome
                , dataDeNascimento
                , email
                , telefone
                , dataMatricula
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
                , @DataMatricula               
                , @Ativo
                )
            ",
            aluno
            );
    }

    public async Task AtualizarAluno(Aluno aluno)
    {
        await _connectionFactory.CreateConnection()
            .QueryFirstOrDefaultAsync(
            @"
            UPDATE 
                aluno       
            SET
                  email = @Email
                , telefone = @Telefone
                , ativo = @Ativo
            WHERE 
                id = @Id
            ",
            aluno
            );
    }

    public async Task DeletarAluno(long id)
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

    public async Task<int> ObterTotalAlunos()
    {
        using var connection = _connectionFactory.CreateConnection();
        var total = await connection.ExecuteScalarAsync<int>(
            @"SELECT COUNT(*) FROM aluno"
        );
        return total;
    }

    public async Task VincularAlunoCurso(long idAluno, long idCurso)
    {
        const string sql = @"
        INSERT INTO CursoAluno (CursoId, AlunoId, DataVinculo)
        VALUES (@IdCurso, @IdAluno, GETDATE());
    ";

        using var connection = _connectionFactory.CreateConnection();
        await connection.ExecuteAsync(sql, new { IdAluno = idAluno, IdCurso = idCurso });
    }
}
