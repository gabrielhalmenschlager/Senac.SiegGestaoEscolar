namespace Senac.SiegGestaoEscolar.Domain.Repositories;

public interface IAlunoRepository
{
    Task<IEnumerable<Aluno>> ObterTodosAlunos();

    Task<Aluno> ObterAlunoDetalhado(long id);

    Task<long> AdicionarAluno(Aluno aluno);

    Task AtualizarAluno(long id, Aluno aluno);

    Task DeletarAluno(long id);
}
