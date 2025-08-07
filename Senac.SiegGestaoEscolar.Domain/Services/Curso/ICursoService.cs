using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Curso;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Curso;

namespace Senac.SiegGestaoEscolar.Domain.Services.Curso;

public interface ICursoService
{
    Task<IEnumerable<ObterTodosCursosResponse>> ObterTodosCursos();

    Task<ObterCursoDetalhadoResponse> ObterCursoDetalhado(long id);

    Task<AdicionarCursoResponse> AdicionarCurso(AdicionarCursoRequest adicionarCursoRequest);

    Task AtualizarCurso(long id, AtualizarCursoRequest atualizarCursoRequest);

    Task DeletarCurso(long id);
}
