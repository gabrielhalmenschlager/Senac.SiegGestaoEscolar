namespace Senac.SiegGestaoEscolar.Domain.Repositories;

public interface IProfessorRepository
{
    Task<IEnumerable<Professor>> ObterTodosProfessores();

    Task<Professor> ObterProfessorDetalhado(long id);

    Task<long> AdicionarProfessor(Professor professor);

    Task AtualizarProfessor(long id, Professor professor);

    Task DeletarProfessor(long id);

    Task<int> ObterTotalProfessores();
}