using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Infra.Data.Repositories;

public class CursoRepository : ICursoRepository
{
    public Task<long> AdicionarCurso(Curso curso)
    {
        throw new NotImplementedException();
    }

    public Task AtualizarCurso(long id, Curso curso)
    {
        throw new NotImplementedException();
    }

    public Task DeletarCurso(long id)
    {
        throw new NotImplementedException();
    }

    public Task<Curso> ObterCursoDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Curso>> ObterTodosCursos()
    {
        throw new NotImplementedException();
    }
}
