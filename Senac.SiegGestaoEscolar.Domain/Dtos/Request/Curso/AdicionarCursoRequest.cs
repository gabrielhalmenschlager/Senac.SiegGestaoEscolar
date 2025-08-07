namespace Senac.SiegGestaoEscolar.Domain.Dtos.Request.Curso;

public class AdicionarCursoRequest
{
    public string Nome { get; set; }

    public string Descricao { get; set; }

    public DateTime DataCriacao { get; set; }

    public CategoriaCurso CategoriaCurso { get; set; }

    public decimal Valor { get; set; }

    public int CargaHoraria { get; set; }

    public bool Ativo { get; set; }
}
