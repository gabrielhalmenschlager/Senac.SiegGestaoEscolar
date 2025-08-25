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
        var cursosResponse = await _cursoService.ObterTodosCursos();

        return Ok(cursosResponse);
    }

    [HttpGet("/{id}/curso")]
    public async Task<IActionResult> ObterCursoDetalhado([FromRoute] long id)
    {
        try
        {
            var cursoResponse = await _cursoService.ObterCursoDetalhado(id);
            
            return Ok(cursoResponse);
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

    [HttpPost("/adicionar/curso")]
    public async Task<IActionResult> AdicionarCurso([FromBody] AdicionarCursoRequest adicionarCursoRequest)
    {
        try
        {
            var adicionarCursoResponse = await _cursoService.AdicionarCurso(adicionarCursoRequest);
            
            return Ok(adicionarCursoResponse);
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

    [HttpPut("{id}/atualizar/")]
    public async Task<IActionResult> AtualizarCurso([FromRoute] long id, [FromBody] AtualizarCursoRequest atualizarCursoRequest)
    {
        try
        {
            await _cursoService.AtualizarCurso(id, atualizarCursoRequest);
            
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

    [HttpDelete("curso/{id}/deletar")]
    public async Task<IActionResult> DeletarCurso([FromRoute] long id)
    {
        try
        {
            await _cursoService.DeletarCurso(id);
            
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

    [HttpGet("total")]
    public async Task<IActionResult> ObterTotalCursos()
    {
        try
        {
            var total = await _cursoService.ObterTotalCursos();
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

