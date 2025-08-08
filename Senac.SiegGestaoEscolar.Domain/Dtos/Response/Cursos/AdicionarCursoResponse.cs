namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;

public class AdicionarCursoResponse
{
    public long Id { get; set; }

    public long? ProfessorId { get; set; }

    public string Nome { get; set; }
}
