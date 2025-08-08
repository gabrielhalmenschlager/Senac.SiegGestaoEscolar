using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Alunos;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Alunos;
using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Domain.Services.Alunos;

public class AlunoService : IAlunoService
{
    private readonly IAlunoRepository _alunoRepository;

    public AlunoService(IAlunoRepository alunoRepository)
    {
        _alunoRepository = alunoRepository;
    }

    public Task<AdicionarAlunoResponse> AdicionarAluno(AdicionarAlunoRequest adicionarAlunoRequest)
    {
        throw new NotImplementedException();
    }

    public Task AtualizarAluno(long id, AtualizarAlunoRequest atualizarAlunoRequest)
    {
        throw new NotImplementedException();
    }

    public Task DeletarAluno(long id)
    {
        throw new NotImplementedException();
    }

    public Task<ObterAlunoDetalhadoResponse> ObterAlunoDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<ObterTodosAlunosResponse>> ObterTodosAlunos()
    {
        throw new NotImplementedException();
    }
}
