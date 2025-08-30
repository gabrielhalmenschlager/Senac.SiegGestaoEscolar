namespace Senac.SiegGestaoEscolar.Domain.Repositories;

public interface IAlunoRepository
{
    Task<IEnumerable<Aluno>> ObterTodosAlunos();

    Task<Aluno> ObterAlunoDetalhado(long id);

    Task<long> AdicionarAluno(Aluno aluno);

    Task AtualizarAluno(Aluno aluno);

    Task DeletarAluno(long id);

    Task<int> ObterTotalAlunos();

    Task VincularAlunoCurso(long idAluno, long idCurso);

    Task DesvincularAlunoCurso(long idAluno, long idCurso);

    Task<IEnumerable<Curso>> ObterCursosPorAluno(long id);
}
