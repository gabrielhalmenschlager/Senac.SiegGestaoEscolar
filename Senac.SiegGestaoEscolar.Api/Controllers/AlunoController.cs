using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senac.SiegGestaoEscolar.Domain.Dtos.Erro;
using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Alunos;
using Senac.SiegGestaoEscolar.Domain.Services.Alunos;

namespace Senac.SiegGestaoEscolar.Api.Http.Controllers;

[ApiController]
[Route("aluno")]
[Authorize]
public class AlunoController : Controller
{
    private readonly IAlunoService _alunoService;

    public AlunoController(IAlunoService alunoService)
    {
        _alunoService = alunoService;
    }

    [HttpGet("listar")]
    public async Task<IActionResult> ObterTodosAlunos()
    {
        try
        {
            var alunos = await _alunoService.ObterTodosAlunos();
            return Ok(alunos);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpGet("{id}/detalhar")]
    public async Task<IActionResult> ObterAlunoDetalhado(long id)
    {
        try
        {
            var aluno = await _alunoService.ObterAlunoDetalhado(id);
            return Ok(aluno);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpGet("total")]
    public async Task<IActionResult> ObterTotalAlunos()
    {
        try
        {
            var total = await _alunoService.ObterTotalAlunos();
            return Ok(total);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpPost("adicionar")]
    public async Task<IActionResult> AdicionarAluno([FromBody] AdicionarAlunoRequest adicionarAlunoRequest)
    {
        try
        {
            var aluno = await _alunoService.AdicionarAluno(adicionarAlunoRequest);
            return Ok(aluno);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpPut("{id}/atualizar")]
    public async Task<IActionResult> AtualizarAluno(long id, [FromBody] AtualizarAlunoRequest atualizarAlunoRequest)
    {
        try
        {
            await _alunoService.AtualizarAluno(id, atualizarAlunoRequest);
            return Ok(atualizarAlunoRequest);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpDelete("{id}/deletar")]
    public async Task<IActionResult> DeletarAluno(long id)
    {
        try
        {
            await _alunoService.DeletarAluno(id);
            return Ok(id);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpPost("vincular")]
    public async Task<IActionResult> VincularAlunoCurso([FromBody] VincularAlunoRequest request)
    {
        try
        {
            await _alunoService.VincularAlunoCurso(request);
            return Ok(request);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpDelete("desvincular")]
    public async Task<IActionResult> DesvincularAlunoCurso([FromBody] VincularAlunoRequest request)
    {
        try
        {
            await _alunoService.DesvincularAlunoCurso(request.IdAluno, request.IdCurso);
            return Ok(request);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }
}