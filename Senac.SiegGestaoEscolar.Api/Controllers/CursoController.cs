using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senac.SiegGestaoEscolar.Domain.Dtos.Erro;
using Senac.SiegGestaoEscolar.Domain.Dtos.Request.Cursos;
using Senac.SiegGestaoEscolar.Domain.Services.Cursos;

namespace Senac.SiegGestaoEscolar.Api.Http.Controllers;

[ApiController]
[Route("curso")]
[Authorize]
public class CursoController : Controller
{
    private readonly ICursoService _cursoService;

    public CursoController(ICursoService cursoService)
    {
        _cursoService = cursoService;
    }

    [HttpGet("listar")]
    public async Task<IActionResult> ObterTodosCursos()
    {
        try
        {
            var cursos = await _cursoService.ObterTodosCursos();
            return Ok(cursos);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpGet("{id}/detalhar")]
    public async Task<IActionResult> ObterCursoDetalhado([FromRoute] long id)
    {
        try
        {
            var curso = await _cursoService.ObterCursoDetalhado(id);
            return Ok(curso);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpGet("total")]
    public async Task<IActionResult> ObterTotalCursos()
    {
        try
        {
            var total = await _cursoService.ObterTotalCursos();
            return Ok(total);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpGet("{cursoId}/alunos")]
    public async Task<IActionResult> ObterAlunosPorCurso(long cursoId)
    {
        try
        {
            var alunos = await _cursoService.ObterAlunosPorCurso(cursoId);

            if (!alunos.Any())
                return NotFound(new { mensagem = "Nenhum aluno encontrado para este curso." });

            return Ok(alunos);
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpPost("adicionar")]
    public async Task<IActionResult> AdicionarCurso([FromBody] AdicionarCursoRequest adicionarCursoRequest)
    {
        try
        {
            var curso = await _cursoService.AdicionarCurso(adicionarCursoRequest);
            return Ok(curso);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpPut("{id}/atualizar/")]
    public async Task<IActionResult> AtualizarCurso([FromRoute] long id, [FromBody] AtualizarCursoRequest atualizarCursoRequest)
    {
        try
        {
            await _cursoService.AtualizarCurso(id, atualizarCursoRequest);
            return Ok(atualizarCursoRequest);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpDelete("{id}/deletar")]
    public async Task<IActionResult> DeletarCurso([FromRoute] long id)
    {
        try
        {
            await _cursoService.DeletarCurso(id);
            return Ok(id);
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }
}
