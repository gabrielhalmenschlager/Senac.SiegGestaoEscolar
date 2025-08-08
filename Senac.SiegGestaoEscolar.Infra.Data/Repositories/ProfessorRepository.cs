using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Infra.Data.Repositories;

public class ProfessorRepository : IProfessorRepository
{
    public Task<long> AdicionarProfessor(Professor professor)
    {
        throw new NotImplementedException();
    }

    public Task AtualizarProfessor(long id, Professor professor)
    {
        throw new NotImplementedException();
    }

    public Task DeletarProfessor(long id)
    {
        throw new NotImplementedException();
    }

    public Task<Professor> ObterProfessoroDetalhado(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<Professor>> ObterTodosProfessores()
    {
        throw new NotImplementedException();
    }
}
