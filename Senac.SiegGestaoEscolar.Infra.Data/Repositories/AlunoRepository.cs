using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Infra.Data.Repositories;

public class AlunoRepository : IAlunoRepository
{
    public Task<long> AdicionarAluno(Aluno aluno)
    {
        throw new NotImplementedException();
    }

    public Task AtualizarAluno(long id, Aluno aluno)
    {
        throw new NotImplementedException();
    }

    public Task DeletarAluno(long id)
    {
        throw new NotImplementedException();
    }

    public Task<Aluno> ObterAlunoDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Aluno>> ObterTodosAlunos()
    {
        throw new NotImplementedException();
    }
}
