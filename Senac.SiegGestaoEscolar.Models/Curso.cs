namespace Senac.SiegGestaoEscolar;

public class Curso
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Descricao { get; set; }

    public DateTime DataCriacao { get; set; }

    public Categoria Categoria { get; set; }

    public decimal Valor { get; set; }

    public int CargaHoraria { get; set; }

    public long? ProfessorId { get; set; }

    public bool Ativo { get; set; }

    public Professor? Professor { get; set; }

    public ICollection<Aluno>? Alunos { get; set; }
}
