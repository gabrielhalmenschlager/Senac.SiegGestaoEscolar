using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professores;
using Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professores;
using Senac.SiegGestaoEscolar.Domain.Repositories;

namespace Senac.SiegGestaoEscolar.Domain.Services.Professores;

public class ProfessorService : IProfessorService
{
    private readonly IProfessorRepository _professorRepository;

    public ProfessorService(IProfessorRepository professorRepository)
    {
        _professorRepository = professorRepository;
    }

    public async Task<IEnumerable<ObterTodosProfessoresResponse>> ObterTodosProfessores()
    {
        var professores = await _professorRepository.ObterTodosProfessores();

        return professores.Select(p => new ObterTodosProfessoresResponse
        {
            Id = p.Id,
            Nome = p.Nome,
            Sobrenome = p.Sobrenome,
            Email = p.Email,
            Telefone = p.Telefone,
            Ativo = p.Ativo
        });
    }

    public async Task<ObterProfessorDetalhadoResponse> ObterProfessorDetalhado(long id)
    {
        var professor = await _professorRepository.ObterProfessorDetalhado(id);
        ValidarSeProfessorExiste(professor, id);

        return new ObterProfessorDetalhadoResponse
        {
            Id = professor.Id,
            Nome = professor.Nome,
            Sobrenome = professor.Sobrenome,
            DataDeNascimento = professor.DataDeNascimento,
            Email = professor.Email,
            Telefone = professor.Telefone,
            Formacao = professor.Formacao.ToString(),
            DataContratacao = professor.DataContratacao,
            Ativo = professor.Ativo
        };
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

    private void ValidarSeProfessorExiste(Professor professor, long id)
    {
        if (professor == null)
        {
            throw new Exception($"Professor com ID {id} não encontrado.");
        }
    }

    private void ValidarSeFormacaoExiste(bool formacaoExiste, string formacao)
    {
        if (!formacaoExiste)
        {
            throw new Exception($"Formação '{formacao}' não existe.");
        }
    }
}
