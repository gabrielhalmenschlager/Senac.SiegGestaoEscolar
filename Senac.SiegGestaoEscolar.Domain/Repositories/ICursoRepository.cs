namespace Senac.SiegGestaoEscolar.Domain.Repositories;

public interface ICursoRepository
{
    Task<IEnumerable<Curso>> ObterTodosCursos();

    Task<Curso> ObterCursoDetalhado(long id);

    Task<long> AdicionarCurso(Curso curso);

    Task AtualizarCurso(long id, Curso curso);

    Task DeletarCurso(long id);

    Task<int> ObterTotalCursos();
}
