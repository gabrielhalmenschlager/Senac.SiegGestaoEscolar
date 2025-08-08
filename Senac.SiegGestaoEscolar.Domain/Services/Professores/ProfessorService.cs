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

    public async Task<AdicionarProfessorResponse> AdicionarProfessor(AdicionarProfessorRequest adicionarProfessorRequest)
    {
        bool formacaoValida = Enum.TryParse(adicionarProfessorRequest.Formacao, ignoreCase: true, out Formacao formacao);
        ValidarSeFormacaoExiste(formacaoValida, adicionarProfessorRequest.Formacao);
        
        var professor = new Professor
        {
            Nome = adicionarProfessorRequest.Nome,
            Sobrenome = adicionarProfessorRequest.Sobrenome,
            DataDeNascimento = adicionarProfessorRequest.DataDeNascimento,
            Email = adicionarProfessorRequest.Email,
            Telefone = adicionarProfessorRequest.Telefone,
            Formacao = formacao,
            DataContratacao = adicionarProfessorRequest.DataContratacao,
            Ativo = true
        };

        long idProfessorResponse = await _professorRepository.AdicionarProfessor(professor);

        var professorResponse = new AdicionarProfessorResponse
        {
            Id = idProfessorResponse,
        };

        return professorResponse;
    }

    public async Task AtualizarProfessor(long id, AtualizarProfessorRequest atualizarProfessorRequest)
    {
        bool formacaoValida = Enum.TryParse(atualizarProfessorRequest.Formacao, ignoreCase: true, out Formacao formacao);
        ValidarSeFormacaoExiste(formacaoValida, atualizarProfessorRequest.Formacao);

        var professor = await _professorRepository.ObterProfessorDetalhado(id);
        ValidarSeProfessorExiste(professor, id);

        professor.Email = atualizarProfessorRequest.Email;
        professor.Telefone = atualizarProfessorRequest.Telefone;
        professor.Formacao = formacao;
        professor.Ativo = atualizarProfessorRequest.Ativo;

        await _professorRepository.AtualizarProfessor(id, professor);
    }

    public async Task DeletarProfessor(long id)
    {
        var professor = await _professorRepository.ObterProfessorDetalhado(id);
        ValidarSeProfessorExiste(professor, id);

        await _professorRepository.DeletarProfessor(id);
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
