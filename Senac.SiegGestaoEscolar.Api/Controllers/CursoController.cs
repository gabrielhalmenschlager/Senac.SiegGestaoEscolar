using Microsoft.AspNetCore.Mvc;
using Senac.SiegGestaoEscolar.Domain.Dtos.Erro;
using Senac.SiegGestaoEscolar.Domain.Services.Aluno;
using Senac.SiegGestaoEscolar.Domain.Services.Curso;


namespace Senac.SiegGestaoEscolar.Api.Http.Controllers;

[ApiController]
[Route("curso")]
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
}
