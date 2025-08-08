namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;

public class ObterTodosCursosResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string CategoriaCurso { get; set; }

    public decimal Valor { get; set; }

    public bool Ativo { get; set; }
}
