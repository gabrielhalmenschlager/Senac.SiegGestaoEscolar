namespace Senac.SiegGestaoEscolar.Domain.Repositories;

internal interface IProfessorRepository
{
    Task<IEnumerable<Professor>> ObterTodosProfessores();

    Task<Professor> ObterProfessoroDetalhado(long id);

    Task<long> AdicionarProfessor(Professor professor);

    Task AtualizarProfessor(long id, Professor professor);

    Task DeletarProfessor(long id);
}
