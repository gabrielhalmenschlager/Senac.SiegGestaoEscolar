namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Professores;

public class AdicionarProfessorResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Sobrenome { get; set; }

    public DateTime DataDeNascimento { get; set; }

    public string Email { get; set; }

    public string Telefone { get; set; }

    public string Formacao { get; set; }

    public DateTime DataContratacao { get; set; }

    public bool Ativo { get; set; }
}
