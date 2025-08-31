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

    [HttpGet]
    public async Task<IActionResult> ObterTodosCursos()
    {
        try
        {
            await _cursoService.ObterTodosCursos();
            return Ok(new { Mensagem = "Cursos obtidos com sucesso." });
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });

        }
    }

    [HttpGet("/{id}/curso")]
    public async Task<IActionResult> ObterCursoDetalhado([FromRoute] long id)
    {
        try
        {
            await _cursoService.ObterCursoDetalhado(id);
            return Ok(new { Mensagem = "Curso obtido com sucesso." });
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
            await _cursoService.ObterTotalCursos();
            return Ok(new { Mensagem = "Total de cursos obtidos com sucesso." });
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
                return NotFound(new { Mensagem = "Nenhum aluno encontrado para este curso." });
            return Ok(new { Mensagem = "Aluno obtido por curso com sucesso." });
        }
        catch (Exception ex)
        {
            return NotFound(new ErroResponse { Mensagem = ex.Message });
        }
    }

    [HttpPost("/adicionar/curso")]
    public async Task<IActionResult> AdicionarCurso([FromBody] AdicionarCursoRequest adicionarCursoRequest)
    {
        try
        {
            await _cursoService.AdicionarCurso(adicionarCursoRequest);
            return Ok(new { Mensagem = "Curso adicionado com sucesso." });
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
            return Ok(new { Mensagem = "Curso atualizado com sucesso." });
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
            return Ok(new { Mensagem = "Curso deletado com sucesso." });
        }
        catch (Exception ex)
        {
            return BadRequest(new ErroResponse { Mensagem = ex.Message });
        }
    }
}
