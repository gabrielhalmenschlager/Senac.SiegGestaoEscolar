using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senac.SiegGestaoEscolar.Domain.Dtos.Erro;
using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professores;
using Senac.SiegGestaoEscolar.Domain.Services.Professores;

namespace Senac.SiegGestaoEscolar.Api.Http.Controllers;

[ApiController]
[Route("professor")]
[Authorize]
public class ProfessorController : Controller
{
    private readonly IProfessorService _professorService;

    public ProfessorController(IProfessorService professorService)
    {
        _professorService = professorService;
    }

    [HttpGet]
    public async Task<IActionResult> ObterTodosProfessores()
    {
        var professoresResponse = await _professorService.ObterTodosProfessores();
     
        return Ok(professoresResponse);
    }

    [HttpGet("/{id}/professor")]
    public async Task<IActionResult> ObterProfessorDetalhado([FromRoute] long id)
    {
        try
        {
            var professorResponse = await _professorService.ObterProfessorDetalhado(id);
            
            return Ok(professorResponse);
        }
        catch (Exception ex)
        {
            var erroResponse = new ErroResponse
            {
                Mensagem = ex.Message,
            };
            return NotFound(erroResponse);
        }
    }

    [HttpPost("/adicionar/professor")]
    public async Task<IActionResult> AdicionarProfessor([FromBody] AdicionarProfessorRequest adicionarProfessorRequest)
    {
        try
        {
            var adicionarProfessorResponse = await _professorService.AdicionarProfessor(adicionarProfessorRequest);

            return Ok(adicionarProfessorResponse);
        }
        catch (Exception ex)
        {
            var erroResponse = new ErroResponse
            {
                Mensagem = ex.Message,
            };
            return NotFound(erroResponse);
        }
    }

    [HttpPut("/{id}/atualizar/")]
    public async Task<IActionResult> AtualizarProfessor([FromRoute] long id, [FromBody] AtualizarProfessorRequest atualizarProfessorRequest)
    {
        try
        {
            await _professorService.AtualizarProfessor(id, atualizarProfessorRequest);

            return Ok();
        }
        catch (Exception ex)
        {
            var erroResponse = new ErroResponse
            {
                Mensagem = ex.Message,
            };
            return NotFound(erroResponse);
        }
    }

    [HttpDelete("/{id}/deletar/")]
    public async Task<IActionResult> DeletarProfessor([FromRoute] long id)
    {
        try
        {
            await _professorService.DeletarProfessor(id);
     
            return Ok();
        }
        catch (Exception ex)
        {
            var erroResponse = new ErroResponse
            {
                Mensagem = ex.Message,
            };
            return NotFound(erroResponse);
        }
    }

    [HttpGet("total")]
    public async Task<IActionResult> ObterTotalProfessores()
    {
        try
        {
            var total = await _professorService.ObterTotalProfessores();
            return Ok(new { total });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new ErroResponse
            {
                Mensagem = ex.Message
            });
        }
    }
}
