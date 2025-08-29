using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Alunos;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Alunos;

namespace Senac.SiegGestaoEscolar.Domain.Services.Alunos;

public interface IAlunoService
{
    Task<IEnumerable<ObterTodosAlunosResponse>> ObterTodosAlunos();

    Task<ObterAlunoDetalhadoResponse> ObterAlunoDetalhado(long id);

    Task<AdicionarAlunoResponse> AdicionarAluno(AdicionarAlunoRequest adicionarAlunoRequest);

    Task AtualizarAluno(long id, AtualizarAlunoRequest atualizarAlunoRequest);

    Task DeletarAluno(long id);

    Task<int> ObterTotalAlunos();

    Task VincularAlunoCurso(VincularAlunoRequest vincularAlunoRequest);

    Task DesvincularAlunoCurso(long idAluno, long idCurso);
}
