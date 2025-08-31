namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Cursos;

public class ObterCursoDetalhadoResponse
{
    public long Id { get; set; }

    public ProfessorResponse Professor { get; set; }

    public string Nome { get; set; }

    public string Descricao { get; set; }

    public DateTime DataCriacao { get; set; }

    public string CategoriaCurso { get; set; }

    public decimal Valor { get; set; }

    public int CargaHoraria { get; set; }

    public bool Ativo { get; set; }

    public IEnumerable<AlunoResponse>? Alunos { get; set; }
}

public class AlunoResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Sobrenome { get; set; }

}

public class ProfessorResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Sobrenome { get; set; }
}