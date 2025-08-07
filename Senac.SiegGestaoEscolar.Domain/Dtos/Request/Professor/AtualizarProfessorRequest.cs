namespace Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professor;

public class AtualizarProfessorRequest
{
    public string Email { get; set; }

    public string Telefone { get; set; }
    
    public Formacao Formacao { get; set; }

    public bool Ativo { get; set; }
}
