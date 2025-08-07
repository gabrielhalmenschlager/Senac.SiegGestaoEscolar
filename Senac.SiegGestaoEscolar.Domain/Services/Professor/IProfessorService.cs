using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professor;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professor;

namespace Senac.SiegGestaoEscolar.Domain.Services.Professor;

public interface IProfessorService
{
    Task<IEnumerable<ObterTodosProfessoresResponse>> ObterTodosProfessores();
    
    Task<ObterProfessorDetalhadoResponse> ObterProfessorDetalhado(long id);

    Task<AdicionarProfessorResponse> AdicionarProfessor(AdicionarProfessorRequest adicionarProfessorRequest);

    Task AtualizarProfessor(long id, AtualizarProfessorRequest atualizarProfessorRequest);

    Task DeletarProfessor(long id);
}
