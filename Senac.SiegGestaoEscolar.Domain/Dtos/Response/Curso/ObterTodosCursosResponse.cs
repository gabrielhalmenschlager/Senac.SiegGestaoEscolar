namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Curso;

public class ObterTodosCursosResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public CategoriaCurso Categoria { get; set; }

    public decimal Valor { get; set; }

    public bool Ativo { get; set; }
}
