namespace Senac.SiegGestaoEscolar.Domain.Dtos.Response.Alunos;

public class ObterTodosAlunosResponse
{
    public long Id { get; set; }

    public string Nome { get; set; }

    public string Sobrenome { get; set; }

    public string Email { get; set; }

    public string Telefone { get; set; }

    public bool Ativo { get; set; }
}