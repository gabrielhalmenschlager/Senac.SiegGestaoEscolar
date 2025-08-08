using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professor;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professor;
using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Domain.Services.Professor;

public class ProfessorService : IProfessorService
{
    private readonly IProfessorRepository _professorRepository;

    public ProfessorService(IProfessorRepository professorRepository)
    {
        _professorRepository = professorRepository;
    }

    public Task<AdicionarProfessorResponse> AdicionarProfessor(AdicionarProfessorRequest adicionarProfessorRequest)
    {
        throw new NotImplementedException();
    }

    public Task AtualizarProfessor(long id, AtualizarProfessorRequest atualizarProfessorRequest)
    {
        throw new NotImplementedException();
    }

    public Task DeletarProfessor(long id)
    {
        throw new NotImplementedException();
    }

    public Task<ObterProfessorDetalhadoResponse> ObterProfessorDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<ObterTodosProfessoresResponse>> ObterTodosProfessores()
    {
        throw new NotImplementedException();
    }
}
