namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;

public class ObterCursoDetalhadoResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Descricao { get; set; }

    public DateTime DataCriacao { get; set; }

    public CategoriaCurso CategoriaCurso { get; set; }

    public decimal Valor { get; set; }

    public int CargaHoraria { get; set; }

    public long? ProfessorId { get; set; }

    public bool Ativo { get; set; }
}
