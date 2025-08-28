namespace Senac.SiegGestaoEscolar;

public class Curso
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Descricao { get; set; }

    public DateTime DataCriacao { get; set; }

    public CategoriaCurso CategoriaCurso { get; set; }

    public decimal Valor { get; set; }

    public int CargaHoraria { get; set; }

    public bool Ativo { get; set; }

    public Professor? Professor { get; set; }

    public IEnumerable<Aluno>? Alunos { get; set; }
}
