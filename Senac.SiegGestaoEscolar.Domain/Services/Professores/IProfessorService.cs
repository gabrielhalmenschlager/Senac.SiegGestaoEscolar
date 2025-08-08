using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professores;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professores;

namespace Senac.SiegGestaoEscolar.Domain.Services.Professores;

public interface IProfessorService
{
    Task<IEnumerable<ObterTodosProfessoresResponse>> ObterTodosProfessores();
    
    Task<ObterProfessorDetalhadoResponse> ObterProfessorDetalhado(long id);

    Task<AdicionarProfessorResponse> AdicionarProfessor(AdicionarProfessorRequest adicionarProfessorRequest);

    Task AtualizarProfessor(long id, AtualizarProfessorRequest atualizarProfessorRequest);

    Task DeletarProfessor(long id);
}
