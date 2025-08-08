using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Curso;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Curso;
using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Domain.Services.Curso;

public class CursoService : ICursoService
{
    private readonly ICursoRepository _cursoRepository;

    public CursoService(ICursoRepository cursoRepository)
    {
        _cursoRepository = cursoRepository;
    }

    public Task<AdicionarCursoResponse> AdicionarCurso(AdicionarCursoRequest adicionarCursoRequest)
    {
        throw new NotImplementedException();
    }

    public Task AtualizarCurso(long id, AtualizarCursoRequest atualizarCursoRequest)
    {
        throw new NotImplementedException();
    }

    public Task DeletarCurso(long id)
    {
        throw new NotImplementedException();
    }

    public Task<ObterCursoDetalhadoResponse> ObterCursoDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<ObterTodosCursosResponse>> ObterTodosCursos()
    {
        throw new NotImplementedException();
    }
}
