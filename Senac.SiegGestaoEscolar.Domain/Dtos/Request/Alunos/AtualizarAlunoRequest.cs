namespace Senac.SiegGestaoEscolar.Domain.Dtos.Request.Alunos;

public class AtualizarAlunoRequest
{
    public string Email { get; set; }

    public string Telefone { get; set; }

    public bool Ativo { get; set; }
}
