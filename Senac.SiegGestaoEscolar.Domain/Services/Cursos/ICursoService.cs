using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Cursos;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;

namespace Senac.SiegGestaoEscolar.Domain.Services.Cursos;

public interface ICursoService
{
    Task<IEnumerable<ObterTodosCursosResponse>> ObterTodosCursos();

    Task<ObterCursoDetalhadoResponse> ObterCursoDetalhado(long id);

    Task<AdicionarCursoResponse> AdicionarCurso(AdicionarCursoRequest adicionarCursoRequest);

    Task AtualizarCurso(long id, AtualizarCursoRequest atualizarCursoRequest);

    Task DeletarCurso(long id);

    Task<int> ObterTotalCursos();
}
