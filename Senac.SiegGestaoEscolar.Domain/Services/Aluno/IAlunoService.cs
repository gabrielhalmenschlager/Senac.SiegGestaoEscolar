using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Aluno;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Aluno;

namespace Senac.SiegGestaoEscolar.Domain.Services.Aluno;

public interface IAlunoService
{
    Task<IEnumerable<ObterTodosAlunosResponse>> ObterTodosAlunos();

    Task<ObterAlunoDetalhadoResponse> ObterAlunoDetalhado(long id);

    Task<AdicionarAlunoResponse> AdicionarAluno(AdicionarAlunoRequest adicionarAlunoRequest);

    Task AtualizarAluno(long id, AtualizarAlunoRequest atualizarAlunoRequest);

    Task DeletarAluno(long id);
}
