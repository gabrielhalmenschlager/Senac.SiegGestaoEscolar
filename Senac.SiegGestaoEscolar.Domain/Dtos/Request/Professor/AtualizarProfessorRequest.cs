using System.ComponentModel.DataAnnotations;

namespace Senac.SiegGestaoEscolar.Domain.Dtos.Request.Professor;

public class AtualizarProfessorRequest
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string Telefone { get; set; }

    [Required]
    public Formacao Formacao { get; set; }

    [Required]
    public bool Ativo { get; set; }
}
