using Microsoft.AspNetCore.Mvc;
using Senac.SiegGestaoEscolar.Domain.Dtos.Erro;
using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Aluno;
using Senac.SiegGestaoEscolar.Domain.Services.Aluno;

namespace Senac.SiegGestaoEscolar.Api.Http.Controllers;

[ApiController]
[Route("aluno")]
public class AlunoController : Controller
{
    private readonly IAlunoService _alunoService;

    public AlunoController(IAlunoService alunoService)
    {
        _alunoService = alunoService;
    }

    [HttpGet]
    public async Task<IActionResult> ObterTodosAlunos()
    {
        var alunosResponse = await _alunoService.ObterTodosAlunos();
     
        return Ok(alunosResponse);
    }

    [HttpGet("/{id}/aluno")]
    public async Task<IActionResult> ObterAlunoDetalhado(long id)
    {
        try
        {
            var alunoResponse = await _alunoService.ObterAlunoDetalhado(id);

            return Ok(alunoResponse);
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

    [HttpPut("/adicionar/aluno")]
    public async Task<IActionResult> AdicionarAluno([FromBody] AdicionarAlunoRequest adicionarAlunoRequest)
    {
        try
        {
            var adicionarAlunoResponse = await _alunoService.AdicionarAluno(adicionarAlunoRequest);
            return Ok(adicionarAlunoResponse);
        }
        catch (Exception ex)
        {
            var erroResponse = new ErroResponse
            {
                Mensagem = ex.Message,
            };
            return BadRequest(erroResponse);
        }
    }

    [HttpPut("/aluno/{id}/atualizar")]
    public async Task<IActionResult> AtualizarAluno(long id, [FromBody] AtualizarAlunoRequest atualizarAlunoRequest)
    {
        try
        {
            await _alunoService.AtualizarAluno(id, atualizarAlunoRequest);
            return Ok();
        }
        catch (Exception ex)
        {
            var erroResponse = new ErroResponse
            {
                Mensagem = ex.Message,
            };
            return BadRequest(erroResponse);
        }
    }

    [HttpDelete("/aluno/{id}/deletar")]
    public async Task<IActionResult> DeletarAluno([FromRoute] long id)
    {
        try
        {
            await _alunoService.DeletarAluno(id);
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
}
